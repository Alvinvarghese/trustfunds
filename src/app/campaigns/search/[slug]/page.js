'use client';

import { useState, useEffect } from 'react';
import Loading from '@/components/Campaigns/components/Loading';
import Error from '@/components/Campaigns/components/Error';
// import CampaignCard from '@/components/CampaignCard/Card';
import { searchCampaignsAPI } from '@/axios';
// import CardLayout from '@/components/CampaignCard/CardLayout';
import AllCampaigns from '@/components/Campaigns/components/AllCampaigns';

const SearchResults = (props) => {
  const query = props.params.slug
  const [status, setStatus] = useState('loading');
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await searchCampaignsAPI(query);
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
    <div className='h-screen'>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Search Results for <span className='italic'>"{query}"</span></h1>
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
          <p>No campaigns found for "{query?.slug}".</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
