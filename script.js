document.getElementById("load-users").addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => displayUsers(data))
      .catch(error => console.error("Erro ao carregar os dados:", error));
  });
  
  function displayUsers(users) {
    const userList = document.getElementById("user-list");
    userList.innerHTML = ""; // limpa resultados anteriores
  
    users.forEach(user => {
      const userCard = document.createElement("div");
      userCard.classList.add("user-card");
  
      userCard.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Cidade:</strong> ${user.address.city}</p>
      `;
  
      userList.appendChild(userCard);
    });
  }
  