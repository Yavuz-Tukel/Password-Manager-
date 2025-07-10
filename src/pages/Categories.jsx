import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import PasswordCard from '../components/PasswordCard';
import TagSelector from '../components/TagSelector';

const GROUPS = ['Work','Personal','Finance','Social','Other'];

export default function Categories() {
  const [passwords, ] = useLocalStorage('passwords', []);
  const [group, setGroup] = useState(GROUPS[0]);

  const filtered = passwords.filter(p => p.tags?.includes(group));

  return (
    <div>
      <h2>Categories</h2>
      <TagSelector tags={[group]} allTags={GROUPS} toggleTag={setGroup} />
      {filtered.map(item=>(
        <PasswordCard
          key={item.id}
          item={item}
          onEdit={()=>{}}
          onDelete={()=>{}}
        />
      ))}
    </div>
  );
}
