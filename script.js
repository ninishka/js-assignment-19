document.addEventListener('DOMContentLoaded', function() {
    const users = [
        {
            id: 7,
            email: "michael.lawson@reqres.in",
            first_name: "Michael",
            last_name: "Lawson",
        },
        {
            id: 8,
            email: "lindsay.ferguson@reqres.in",
            first_name: "Lindsay",
            last_name: "Ferguson",
        },
        {
            id: 9,
            email: "tobias.funke@reqres.in",
            first_name: "Tobias",
            last_name: "Funke",
        },
        {
            id: 10,
            email: "byron.fields@reqres.in",
            first_name: "Byron",
            last_name: "Fields",
        },
        {
            id: 11,
            email: "george.edwards@reqres.in",
            first_name: "George",
            last_name: "Edwards",
        },
        {
            id: 12,
            email: "rachel.howell@reqres.in",
            first_name: "Rachel",
            last_name: "Howell",
        }
    ];
  
   
    function renderUsers(users) {
      const tbody = document.getElementById('userTableBody');
      tbody.innerHTML = ''; 
      users.forEach(user => {
        const row = document.createElement('tr');
        Object.values(user).forEach(value => {
          const cell = document.createElement('td');
          cell.textContent = value;
          row.appendChild(cell);
        });
        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
          const index = users.findIndex(u => u.id === user.id);
          if (index!== -1) {
            users.splice(index, 1);
            renderUsers(users);
          }
        });
        deleteCell.appendChild(deleteButton);
        row.appendChild(deleteCell);
        tbody.appendChild(row);
      });
    }
  
    // Render initial users
    renderUsers([...users]);
  
    // Handle form submission
    $('#addUserBtn').click(function() {
      const userId = $('#userId').val();
      const userEmail = $('#userEmail').val();
      const firstName = $('#firstName').val();
      const lastName = $('#lastName').val();
  
      if (!userId ||!userEmail ||!firstName ||!lastName) {
        alert('Please fill all fields.');
        return;
      }
  
      const newUser = {id: parseInt(userId), email: userEmail.trim(), first_name: firstName.trim(), last_name: lastName.trim()};
      users.push(newUser);
      renderUsers(users);
      $('#addUserModal').modal('hide');
    });
  });