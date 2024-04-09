'use client';

import { useState, useEffect, useCallback } from 'react';
import Loading from '@/components/Campaigns/components/Loading';
import Error from '@/components/Campaigns/components/Error';
import { searchCampaignsAPI } from '@/axios';
import AllCampaigns from '@/components/Campaigns/components/AllCampaigns';
import { toastError } from '@/lib/toast';

const SearchResults = (props) => {
  const query = props.params.slug
  const [status, setStatus] = useState('loading');
  const [campaigns, setCampaigns] = useState([]);

  const fetchSearchResults = useCallback(async () => {
    try {
      setStatus("loading")
      const res = await searchCampaignsAPI(query);
      if (res.status === 200) {
        setCampaigns(res.data.campaigns);
        setStatus('success');
      }
    } catch (error) {
      setStatus('error');
      toastError(error?.response?.data?.error || "Something went wrong whle fetching campaigns. Try again later!")
      console.log(error);
    }
  }, [query]);

  useEffect(() => {
    fetchSearchResults();
  }, [query]);

  return (
    <div className='h-screen'>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4 leading-snug">Search Results for <span className='italic'>"{query}"</span></h1>
        {status === 'loading' && <Loading />}
        {status === 'error' && <Error fetchData={fetchSearchResults} />}
        {status === 'success' && campaigns.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <AllCampaigns data={campaigns} />
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
