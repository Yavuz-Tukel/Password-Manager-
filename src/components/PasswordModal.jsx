import React, { useState, useEffect } from 'react';
import { calcStrength } from '../utils/passwordUtils';
import StrengthMeter from './StrengthMeter';
import TagSelector from './TagSelector';

export default function PasswordModal({ visible, onClose, onSave, existing, allTags }) {
  const [title, setTitle] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (existing) {
      setTitle(existing.title);
      setUsername(existing.username);
      setPassword(existing.password);
      setTags(existing.tags || []);
    } else {
      setTitle('');
      setUsername('');
      setPassword('');
      setTags([]);
    }
  }, [existing]);

  if (!visible) return null;

  const strength = calcStrength(password);

  const toggleTag = tag =>
    setTags(t => t.includes(tag) ? t.filter(x => x !== tag) : [...t, tag]);

  const handleSave = () => {
    onSave({
      id: existing?.id || Date.now(),
      title,
      username,
      password,
      tags,
      strength,
      favorite: existing?.favorite || false,
      created: existing?.created || Date.now(),
      updated: Date.now(),
    });
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{existing ? 'Edit Password' : 'New Password'}</h2>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username / Email"
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />

        <StrengthMeter strength={strength} />

        <TagSelector tags={tags} allTags={allTags} toggleTag={toggleTag} />

        <div className="flex space-between mt-16">
          <button onClick={onClose}>Cancel</button>
          <button className="primary" onClick={handleSave}>
            {existing ? 'Update' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}
