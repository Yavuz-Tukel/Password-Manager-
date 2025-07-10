import React, { useState } from 'react';
import { generatePassword } from '../utils/passwordUtils';

export default function PasswordGenerator({ onGenerate }) {
  const [opts, setOpts] = useState({ upper:true, lower:true, digits:true, symbols:false });

  return (
    <div className="card mb-16">
      <h3>Password Generator</h3>
      {['upper','lower','digits','symbols'].map(opt => (
        <label key={opt} style={{ marginRight:8 }}>
          <input 
            type="checkbox" 
            checked={opts[opt]} 
            onChange={() => setOpts(o => ({...o, [opt]: !o[opt]}))}
          /> {opt}
        </label>
      ))}
      <button className="primary" onClick={() => onGenerate(generatePassword(16, opts))}>
        Generate
      </button>
    </div>
  );
}
