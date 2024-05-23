//.1
document.addEventListener('DOMContentLoaded', function() {
  const userListDiv = document.getElementById('user-list');
  const users = [
      {
          id: 7,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          image: "imgs-of-people/download22.jpg"
      },
      {
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          image: "imgs-of-people/download55.jpg"
      },
      {
          id: 9,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          image: "imgs-of-people/download33.jpg"
      },
      {
          id: 10,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          image: "imgs-of-people/download77.jpg"
      },
      {
          id: 11,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          image: "imgs-of-people/download44.jpg"
      },
      {
          id: 12,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          image: "imgs-of-people/download66.jpg"
      }
  ];

  users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      
      const userImage = document.createElement('img');
      userImage.src = user.image;
      userCard.appendChild(userImage);

      const userInfo = document.createElement('p');
      userInfo.textContent = `${user.first_name} ${user.last_name}`;
      userCard.appendChild(userInfo);

      const buttonsContainer = document.createElement('div');
      buttonsContainer.classList.add('buttons-container');

      const infoButton = document.createElement('button');
      infoButton.classList.add('info-button');
      infoButton.textContent = 'Info';
      infoButton.onclick = () => alert(`Email: ${user.email}`);
      buttonsContainer.appendChild(infoButton);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = 'Delete';
      deleteButton.onclick = () => {
          userListDiv.removeChild(userCard);
      };
      buttonsContainer.appendChild(deleteButton);

      userCard.appendChild(buttonsContainer);
      userListDiv.appendChild(userCard);
  });
});