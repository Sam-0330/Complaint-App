const API_BASE = 'http://localhost:8081/api';

export async function whoami() {
  const user = localStorage.getItem('user');
  if (!user) return null;
  return JSON.parse(user);
}

export async function login(email, password) {
  const res = await fetch(`${API_BASE}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
    credentials: 'include'
  });
  return await res.text();
}
export async function logout() {
  localStorage.removeItem('user');
  return "OK";
}

export async function submitComplaint(obj) {
  const res = await fetch(`${API_BASE}/complaints/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify(obj)
  });
  if (!res.ok) throw new Error('Failed to submit complaint');
  return await res.json();
}

export async function getAllComplaints() {
  const res = await fetch(`${API_BASE}/complaints/all`, { credentials: 'include' });
  if (!res.ok) return [];
  return await res.json();
}


export async function updateComplaintStatus(id, status) {
  const res = await fetch(`${API_BASE}/complaints/updateStatus?id=${id}&status=${status}`, {
    method: 'POST',
    credentials: 'include'
  });
  return res.ok;
}











// export async function getDepartmentReport() {
//   const res = await fetch(`${API_BASE}/reports/by-department`, { credentials: 'include' });
//   return await res.json();
// }


// export async function getCategoryReport() {
//   const res = await fetch(`${API_BASE}/reports/by-category`, { credentials: 'include' });
//   return await res.json();
// }
