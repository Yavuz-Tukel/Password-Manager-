import React, { useState } from 'react';
import StrengthMeter from './StrengthMeter';

export default function PasswordCard({ item, onEdit, onDelete, onFavorite }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card">
      <div className="flex space-between">
        <h3 style={{ display: 'flex', alignItems: 'center' }}>
          {item.title}
          <button
            onClick={() => onFavorite(item.id)}
            style={{
              marginLeft: 8,
              background: 'transparent',
              border: 'none',
              fontSize: '1.2rem',
              color: item.favorite ? 'var(--accent)' : '#ccc',
              cursor: 'pointer'
            }}
            title={item.favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {item.favorite ? '★' : '☆'}
          </button>
        </h3>
        <div>
          <button onClick={() => setVisible(v => !v)} className="accent">
            {visible ? 'Hide' : 'Show'}
          </button>
          <button onClick={() => onEdit(item)} className="primary">✏️</button>
          <button onClick={() => onDelete(item.id)} className="delete">🗑️</button>
        </div>
      </div>

      <div className="flex mb-8">
        <input
          type={visible ? 'text' : 'password'}
          value={item.password}
          readOnly
          style={{ flex: 1, marginRight: '8px', borderRadius: '4px', padding: '8px', border: '1px solid #ccc' }}
        />
        <button onClick={() => navigator.clipboard.writeText(item.password)} className="primary">
          📋
        </button>
      </div>

      <p className="mb-8" style={{ fontSize: '0.9rem', color: '#666' }}>
        {item.username}
      </p>

      <StrengthMeter strength={item.strength} />

      <div style={{ marginTop: '8px' }}>
        {item.tags?.map(t => (
          <span key={t} style={{
            display: 'inline-block',
            background: '#ddd',
            borderRadius: '4px',
            padding: '2px 6px',
            marginRight: '4px',
            fontSize: '0.8rem'
          }}>{t}</span>
        ))}
      </div>
    </div>
  );
}
