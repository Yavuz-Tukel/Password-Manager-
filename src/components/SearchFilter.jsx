import React from 'react';

export default function SearchFilter({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      style={{ flex:1, marginRight: '16px', padding:'8px', borderRadius:'4px', border:'1px solid #ccc' }}
    />
  );
}
