import { login } from './api.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const role = await login(email, password);

  if (role === 'INVALID') {
    document.getElementById('msg').innerText = 'Invalid credentials';
    return;
  }


  localStorage.setItem('user', JSON.stringify({
    email,
    role,
    department: role === 'HOD' ? 'ALL' : 'CS' 
  }));

  if (role === 'STUDENT') location.href = 'student/complaint.html';
  else if (role === 'HOD') location.href = 'hod/complaints.html';
});
