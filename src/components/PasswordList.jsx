import PasswordItem from "./PasswordItem";

function PasswordList({ passwords, onEdit, onDelete }) {
  return (
    <div>
      {passwords.length === 0 && <p>Henüz şifre eklemediniz.</p>}
      {passwords.map((item) => (
        <PasswordItem
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default PasswordList;
