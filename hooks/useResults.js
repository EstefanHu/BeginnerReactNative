import { useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('./search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'Seattle'
        }
      });
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something Went Wrong');
    }
  }

  useEffect(() => {
    searchApi('All');
  }, []);

  return [searchApi, results, errorMessage];
};