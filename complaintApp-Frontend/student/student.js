import { whoami, logout, submitComplaint, getAllComplaints } from '../js/api.js';

document.addEventListener("DOMContentLoaded", async () => {
  // Logout button
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      await logout();
      localStorage.removeItem('user'); // clear frontend session

      location.href = '/index.html'; // assuming index.html is in static root

    });
  }

  // Initialize user
//   const user = await whoami();
//   if (!user) return location.href = '../index.html'; // redirect if not logged in
//   const welcome = document.getElementById('welcome');
//   if (welcome) welcome.innerText = `Welcome, ${user.name} (${user.type})`;

  // Load complaints into table
  async function loadComplaints() {
    const complaints = await getAllComplaints();
    const tbody = document.querySelector('#complaintTable tbody');
    if (!tbody) return;
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
      `;
      tbody.appendChild(tr);
    });
  }

  await loadComplaints();


  // If the page has a complaint form, handle submission
  const complaintForm = document.getElementById('complaintForm');
if (complaintForm) {
  complaintForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;

    const newComplaint = {
      name: form.name.value.trim(),         // include name
      department: form.department.value.trim(), // include department
      category: form.category.value.trim(),
      description: form.description.value.trim()
    };

    try {
      await submitComplaint(newComplaint);
      form.reset();
      await loadComplaints(); // refresh table immediately
      const msg = document.getElementById('submitMsg');
      if (msg) msg.innerText = 'Complaint submitted successfully!';
    } catch (err) {
      const msg = document.getElementById('submitMsg');
      if (msg) msg.innerText = 'Failed to submit complaint';
      console.error(err);
    }
  });
}

});
