import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initial) {
  const [val, setVal] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(val));
  }, [key, val]);
  return [val, setVal];
}
