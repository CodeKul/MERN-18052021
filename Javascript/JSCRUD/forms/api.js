function getFormData() {
  let username = document.getElementById("name").value;
  let c = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let msg = document.getElementById("message").value;

  let newUser = {
    userName: username,
    email: email,
    city: c,
    message: msg,
  };
  console.log(newUser);
  return newUser;
}

//js to json ->JSON.stringify(obj) , json to js -> .json()
function sendUserData() {
  let result = getFormData();
  document.getElementById("name").value = "";
  document.getElementById("city").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";

  let p = fetch("http://localhost:3000/user", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(result),
  });
  p.then((response) => {
    console.log(response.json());
    getUserData();
  }).catch((errMsg) => {
    console.log(errMsg);
  });
}

function getUserData() {
  let promise = fetch("http://localhost:3000/user", {
    method: "GET",
    // headers: { "Content-type": "application/json" },
  });
  promise
    .then((res) => {
      console.log(res.status);
      let output = res.json();

      return output;
    })
    .then((userList) => {
      let displayUsers = "";

      userList.map((user, id) => {
        displayUsers =
          displayUsers +
          `<div class="card" style="width: 18rem;margin-bottom:10px;">
            <div class="card-body">
              <h5 class="card-title">${user.userName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${user.email}</h6>
              <p class="card-text">
                 <span>${user.city}</span>
                 <span>${user.message}</span>
             </p>
            </div>
          </div>`;
      });
      document.getElementById("users").innerHTML = displayUsers;
    })
    .catch((msg) => {
      console.log(msg);
    });
}
