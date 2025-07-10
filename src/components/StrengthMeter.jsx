import React from 'react';

export default function StrengthMeter({ strength }) {
  const colors = ['#e74c3c','#e67e22','#f1c40f','#2ecc71'];
  return (
    <div style={{ background:'#eee', height:'6px', borderRadius:'3px', overflow:'hidden', margin:'8px 0' }}>
      <div style={{
        width: `${(strength/4)*100}%`,
        background: colors[strength-1],
        height:'100%'
      }} />
    </div>
  );
}
