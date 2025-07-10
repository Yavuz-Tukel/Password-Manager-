// Rastgele parola üretimi
export function generatePassword(length = 16, { upper, lower, digits, symbols }) {
  const U = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const L = 'abcdefghijklmnopqrstuvwxyz';
  const D = '0123456789';
  const S = '!@#$%^&*()_+[]';
  let charset = '';
  if (upper) charset += U;
  if (lower) charset += L;
  if (digits) charset += D;
  if (symbols) charset += S;
  let pwd = '';
  for (let i = 0; i < length; i++)
    pwd += charset[Math.floor(Math.random() * charset.length)];
  return pwd;
}

// Basit güç ölçer: 1(zayıf)-4(çok güçlü)
export function calcStrength(pwd) {
  let score = 0;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  return score || 1;
}
