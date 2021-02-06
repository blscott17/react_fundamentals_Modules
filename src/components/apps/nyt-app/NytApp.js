//imrs
import React, { useState } from 'react';
// We will pass our results information saved in the state, in this Parent Comp as a prop
// to NytResults Child Component.
import NytResults from './NytResults';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'IvHIjpSl3KLx5UzFopFrZLrEFzw1jLfU';
// const key = 'yourKeyHereabc123def456ghi789jkl0'; Replaced with My Key from NYT Developer Network

const NytApp = () => {
  const [search, setSearch] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const [results, setResults] = useState([]);

  const fetchResults = () => {
    let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
    url = startDate ? url + `&begin_date=${startDate}` : url;
    url = endDate ? url + `&end_date=${endDate}` : url;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setResults(data.response.docs))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchResults();
  };

  return (
    <div className='main'>
      <div className='mainDiv'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <span>Enter a single search term (required) : </span>
          <input
            type='text'
            name='search'
            onChange={(e) => setSearch(e.target.value)}
            required
          />
          <br />
          <span>Enter a start date: </span>
          <input
            type='date'
            name='startDate'
            pattern='[0-9]{8}'
            onChange={(e) => setStartDate(e.target.value)}
          />
          <br />
          <span>Enter an end date: </span>
          <input
            type='date'
            name='endDate'
            pattern='[0-9]{8}'
            onChange={(e) => setEndDate(e.target.value)}
          />
          <br />
          <button className='submit'>Submit search</button>
        </form>
        {/* Added if we have results we pass them as a prop to NytResults like below: */}
        {results.length > 0 ? <NytResults results={results} /> : null}
      </div>
    </div>
  );
};

export default NytApp;
