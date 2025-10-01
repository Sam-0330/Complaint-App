
import { whoami, logout, getAllComplaints } from '../js/api.js';

window.logout = async () => { await logout(); location.href = 'index.html'; };

async function loadComplaints() {
    const complaints = await getAllComplaints();
    const tbody = document.querySelector('#complaintTable tbody');
    tbody.innerHTML = '';
    complaints.forEach(c => {
        const tr = document.createElement('tr');
        tr.innerHTML = `<td>${c.id}</td>
                        <td>${c.name}</td>
                        <td>${c.department}</td>
                        <td>${c.category}</td>
                        <td>${c.description}</td>
                        <td>${c.status || 'PENDING'}</td>`;
        tbody.appendChild(tr);
    });
}

async function initStatus() {
    const user = await whoami();
    document.getElementById('welcome').innerText = `Welcome`;
    loadComplaints();
}

initStatus();
