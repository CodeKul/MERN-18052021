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
    })
    .catch((err) => {
      console.log(err);
    });
}

function getComments() {
  fetch("http://localhost:3000/posts", {
    method: "GET",
    headers: { "Content-type": "application/json" },
  }).then((res) => {
    console.log(res.json());
  });
}
