'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Loading from '@/components/Campaigns/components/Loading';
import Error from '@/components/Campaigns/components/Error';
// import CampaignCard from '@/components/CampaignCard/Card';
import { searchCampaignsAPI } from '@/axios';
// import CardLayout from '@/components/CampaignCard/CardLayout';
import AllCampaigns from '@/components/Campaigns/components/AllCampaigns';

const SearchResults = () => {
  const router = useRouter();
  const { query } = router;
  const [status, setStatus] = useState('loading');
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        if(!query || !query.slug) return;
        const res = await searchCampaignsAPI(query.slug); 
        if (res.status === 200) {
          setCampaigns(res.data.campaigns);
          setStatus('success');
        }
      } catch (error) {
        setStatus('error');
        console.error(error);
      }
    };

    
    fetchSearchResults();
    
  }, [query]);

  return (
    <div className='flex h-screen'>
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Search Results for " {query}"</h1>
      {status === 'loading' && <Loading />}
      {status === 'error' && <Error />}
      {status === 'success' && campaigns.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {campaigns.map(campaign => (
            // <Card key={campaign.id} campaign={campaign} />
            <AllCampaigns data={campaigns} />
          ))}
        </div>
      )}
      {status === 'success' && campaigns.length === 0 && (
        <p>No campaigns found for "{slug}".</p>
      )}
    </div>
    </div>
  );
};

export default SearchResults;
