// Add your code here
function submitData(name, email) {
  const userData = {
    name: "Steve",
    email: "steve@steve.com",
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      const id = data.id;
      document.body.innerHTML += `<p>${id}</p>`;
    })
    .catch(function(error) {
      document.body.innerHTML += `<p>${error.message}</p>`;
    })
}