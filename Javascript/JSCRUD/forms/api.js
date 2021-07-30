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
             <button class="btn btn-primary" onclick="editUser(${user.id})">Edit</button>
             <button class="btn btn-danger" onclick="deleteUser(${user.id})">Delete</button>
            </div>
          </div>`;
      });
      document.getElementById("users").innerHTML = displayUsers;
    })
    .catch((msg) => {
      console.log(msg);
    });
}

function editUser(userId) {
  // console.log(userId);
  // let citiesList = ["Pune","Mumbai",""]

  let editForm = document.createElement("form");

  let editUserId = document.createElement("input");
  editUserId.id = "eid";

  let editUserName = document.createElement("input");
  editUserName.id = "ename";
  editUserName.placeholder = "UserName";

  let editUserCity = document.createElement("input");
  editUserCity.id = "ecity";
  editUserCity.placeholder = "City";
  // let option = document.createElement('option')

  let editUserEmail = document.createElement("input");
  editUserEmail.id = "eemail";
  editUserEmail.placeholder = "Email";

  let editUserMsg = document.createElement("textarea");
  editUserMsg.id = "emsg";
  editUserMsg.placeholder = "Message";

  let updateBtn = document.createElement("button");
  updateBtn.classList.add("btn");
  updateBtn.classList.add("btn-primary");
  updateBtn.innerText = "Update";
  updateBtn.type = "button";
  updateBtn.addEventListener("click", updateUser);

  if (document.getElementById("editSection").childElementCount != 0) {
    document.getElementById("editSection").firstChild.remove();
  }
  //append input to the editForm
  editForm.append(editUserName);
  editForm.append(editUserEmail);
  editForm.append(editUserCity);
  editForm.append(editUserMsg);
  editForm.append(editUserId);
  editForm.append(updateBtn);
  document.getElementById("editSection").append(editForm);

  fetch(`http://localhost:3000/user/${userId}`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((response) => {
      let editInfo = response.json();
      return editInfo;
    })
    .then((editInfo) => {
      editUserName.value = editInfo.userName;
      editUserEmail.value = editInfo.email;
      editUserCity.value = editInfo.city;
      editUserMsg.value = editInfo.message;
      editUserId.value = editInfo.id;
    });
}

function updateUser() {
  //PUT,PATCH
  let editedName = document.getElementById("ename").value;
  let editedEmail = document.getElementById("eemail").value;
  let editedCity = document.getElementById("ecity").value;
  let editedMessage = document.getElementById("emsg").value;
  let editedUserId = document.getElementById("eid").value;
  console.log(editedUserId);

  fetch(`http://localhost:3000/user/${editedUserId}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      userName: editedName,
      // email: editedEmail,
      // city: editedCity,
      // message: editedMessage,
    }),
  }).then((res) => {
    console.log(res.json());

    getUserData();
    document.getElementById("editSection").firstChild.remove();
  });
}

function deleteUser(idx) {
  fetch(`http://localhost:3000/user/${idx}`, {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  })
    .then((response) => {
      getUserData();
    })
    .catch((err) => {
      console.log(err);
    });
}
