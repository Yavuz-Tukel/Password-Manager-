import { useState, useEffect } from "react";

function PasswordForm({ onSave, existing }) {
  const [title, setTitle] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (existing) {
      setTitle(existing.title);
      setUsername(existing.username);
      setPassword(existing.password);
    } else {
      setTitle("");
      setUsername("");
      setPassword("");
    }
  }, [existing]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !username || !password) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    const newRecord = {
      id: existing ? existing.id : Date.now(),
      title,
      username,
      password,
    };

    onSave(newRecord);
    setTitle("");
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="password-form">
      <input
        type="text"
        placeholder="Başlık (örneğin: Facebook)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="email"
        placeholder="Kullanıcı adı veya E-posta"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{existing ? "Güncelle" : "Ekle"}</button>
    </form>
  );
}

export default PasswordForm;
