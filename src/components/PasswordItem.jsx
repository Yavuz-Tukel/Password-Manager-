function PasswordItem({ item, onEdit, onDelete }) {
  return (
    <div className="password-item">
      <p><strong>{item.title}</strong></p>
      <p>{item.username}</p>
      <p>{item.password}</p>
      <button className="edit" onClick={() => onEdit(item)}>Düzenle</button>
      <button className="delete" onClick={() => onDelete(item.id)}>Sil</button>
    </div>
  );
}

export default PasswordItem;
