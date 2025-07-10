import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import PasswordCard from '../components/PasswordCard';

export default function Favorites() {
  const [passwords, setPasswords] = useLocalStorage('passwords', []);
  const favs = passwords.filter(p => p.favorite);

  const handleFavorite = id => {
    setPasswords(list =>
      list.map(p =>
        p.id === id ? { ...p, favorite: !p.favorite } : p
      )
    );
  };

  const handleDelete = id => {
    setPasswords(list => list.filter(x => x.id !== id));
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favs.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favs.map(item => (
          <PasswordCard
            key={item.id}
            item={item}
            onEdit={() => {}}
            onDelete={handleDelete}
            onFavorite={handleFavorite}
          />
        ))
      )}
    </div>
  );
}
