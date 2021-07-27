function getFormData() {
  let postId = document.getElementById("postId").value;
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let body = document.getElementById("body").value;

  let newComment = {
    postId: postId,
    name: name,
    email: email,
    body: body,
  };
  console.log(newComment);
  return newComment;
}

function sendComment() {
  let newComment = getFormData();
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(newComment),
  })
    .then((response) => {
      console.log(response);
      getComments();
    })
    .catch((err) => {
      console.log(err);
    });
}

function getComments() {
  fetch("http://localhost:3000/posts", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => {
      let output = res.json();
      console.log(output);
      //location.reload();
      return output;
    })
    .then((output) => {
      let outputTable = `<table class="table table-dark">
    <th>ID</th>
    <th>Name</th>
    <th>Email</th>
    <th>Body</th>
    <th></th>
    <th></th>`;
      output.map((item) => {
        outputTable += `<tr>
<td>${item.id}</td>
<td>${item.name}</td>
<td>${item.email}</td>
<td>${item.body}</td>
<td><button type="button" onclick={editData(${item.id})}>Edit</button></td>
<td><button type="button" onclick={deleteData(${item.id})}>Delete</button></td>
</tr>`;
      });
      document.getElementById("comments").innerHTML = outputTable;
    });
}

function editData(index) {
  console.log(index);
  let editForm = document.createElement("form");
  let editName = document.createElement("input");
  editName.id = "editname";
  editName.placeholder = "Name";
  let editId = document.createElement("input");
  editId.placeholder = "ID";
  editId.id = index;
  editId.setAttribute("disabled", true);
  editId.className = "idClass";
  let editEmail = document.createElement("input");
  editEmail.id = "editemail";
  editEmail.placeholder = "Email";
  let editBody = document.createElement("input");
  editBody.id = "editbody";
  editBody.placeholder = "Body";
  let updateBtn = document.createElement("button");
  updateBtn.innerHTML = "Update";
  updateBtn.type = "button";
  // updateBtn.onclick=
  updateBtn.addEventListener("click", updateRecord);
  // updateBtn.addEventListener('click',)
  //append to form
  if (document.getElementById("editSection").childElementCount != 0) {
    document.getElementById("editSection").firstChild.remove();
  }
  editForm.append(editName);
  editForm.append(editEmail);
  editForm.append(editBody);
  editForm.append(editId);
  editForm.append(updateBtn);

  //append to editSection div
  document.getElementById("editSection").append(editForm);
  console.log("Edit");

  fetch(`http://localhost:3000/posts/${index}`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((res) => {
      let output = res.json();
      console.log(output);
      return output;
    })
    .then((output) => {
      console.log("Inside second then");
      editName.value = output.name;
      editEmail.value = output.email;
      editBody.value = output.body;
      editId.value = output.id;
      console.log(output);
    });
}

function updateRecord() {
  //PUT,PATCH
  console.log("inside update");
  let updatedName = document.getElementById("editname").value;
  let updatedEmail = document.getElementById("editemail").value;
  let updatedBody = document.getElementById("editbody").value;
  let updateId = document.querySelector(".idClass").value;
  console.log(updateId);

  fetch(`http://localhost:3000/posts/${updateId}`, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      name: updatedName,
      email: updatedEmail,
      body: updatedBody,
    }),
  }).then((response) => {
    console.log(response);
    document.getElementById("editSection").firstChild.remove();
    getComments();
  });
}

function deleteData(idx) {
  let x = confirm("Are you sure?");
  if (x) {
    fetch(`http://localhost:3000/posts/${idx}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    }).then((response) => {
      console.log(response);
      getComments();
    });
  } else {
    console.log("Dont delete");
  }
}
