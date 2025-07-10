import React from 'react';

export default function TagSelector({ tags, allTags, toggleTag }) {
  return (
    <div style={{ margin: '8px 0' }}>
      {allTags.map(t => (
        <button
          key={t}
          onClick={() => toggleTag(t)}
          className={tags.includes(t) ? 'primary' : ''}
          style={{ marginRight: '8px' }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}
