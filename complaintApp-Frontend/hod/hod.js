import { whoami, logout, getAllComplaints, updateComplaintStatus } from '../js/api.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      await logout();
      location.href = '/index.html'; 

    });
  }

  const user = await whoami();
  if (!user || user.role !== 'HOD') {
    alert('Session expired or unauthorized');
    location.href = '../index.html';
    return;
  }

  document.getElementById('welcome').innerText = `Welcome`;

  async function loadComplaints() {
    const complaints = await getAllComplaints();
    const tbody = document.querySelector('#complaintTable tbody');
    tbody.innerHTML = '';

    complaints.forEach(c => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${c.id}</td>
        <td>${c.name}</td>
        <td>${c.department}</td>
        <td>${c.category}</td>
        <td>${c.description}</td>
        <td>${c.status || 'PENDING'}</td>
        <td>
          ${c.status === 'PENDING' ? `<button data-id="${c.id}" class="markDone">Mark Done</button>` : ''}
        </td>
      `;
      tbody.appendChild(tr);
    });

    document.querySelectorAll('.markDone').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        const ok = await updateComplaintStatus(id, 'DONE');
        if (ok) loadComplaints();
      });
    });
  }

  await loadComplaints();
});
