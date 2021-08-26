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
  //fetch('url',{
  //method:'POST',
  //headers:{'Content-type':'application/json'},
  //body:obj
  //})
  let comment = getFormData();
  console.log(comment);
  fetch("https://jsonplaceholder.typicode.com/comments", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(comment),
  })
    .then((response) => {
      let result = response.json();
      console.log(result);
    })
    .catch((errMsg) => {
      console.log(errMsg);
    });
}

function getComments() {
  fetch(`https://jsonplaceholder.typicode.com/comments/`, {
    method: "GET",
    headers: { "Content-type": "application/json" },
  })
    .then((response) => {
      let commentList = response.json();
      console.log(commentList);
      return commentList;
    })
    .then((commentList) => {
      let outputTable = `<table class="table table-dark">
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Body</th>`;
      commentList.map((item) => {
        outputTable += `<tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.body}</td>
          </tr>`;
      });
      document.getElementById("comments").innerHTML = outputTable;
    });
}
