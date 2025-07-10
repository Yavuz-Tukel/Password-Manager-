import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import PasswordCard from '../components/PasswordCard';
import PasswordModal from '../components/PasswordModal';
import SearchFilter from '../components/SearchFilter';

const ALL_TAGS = ['Work','Personal','Finance','Social','Other'];

export default function MyPasswords() {
  const [passwords, setPasswords] = useLocalStorage('passwords', []);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [query, setQuery] = useState('');

  // Filtrelenmiş liste
  const filtered = passwords.filter(p =>
    (p.title + p.username).toLowerCase().includes(query.toLowerCase())
  );

  // Yeni kaydetme veya güncelleme
  const saveRecord = rec => {
    setPasswords(list => {
      const exists = list.some(x => x.id === rec.id);
      return exists
        ? list.map(x => x.id === rec.id ? rec : x)
        : [...list, rec];
    });
  };

  // Favori toggle
  const handleFavorite = id => {
    setPasswords(list =>
      list.map(p =>
        p.id === id ? { ...p, favorite: !p.favorite } : p
      )
    );
  };

  // Silme
  const handleDelete = id => {
    setPasswords(list => list.filter(x => x.id !== id));
  };

  return (
    <div>
      <div className="flex mb-16">
        <SearchFilter query={query} setQuery={setQuery} />
        <button
          className="primary"
          onClick={() => { setEditing(null); setModalOpen(true); }}
        >
          + New
        </button>
      </div>

      {filtered.map(item => (
        <PasswordCard
          key={item.id}
          item={item}
          onEdit={i => { setEditing(i); setModalOpen(true); }}
          onDelete={handleDelete}
          onFavorite={handleFavorite}
        />
      ))}

      <PasswordModal
        visible={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={saveRecord}
        existing={editing}
        allTags={ALL_TAGS}
      />
    </div>
  );
}
