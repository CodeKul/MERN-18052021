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

// function sendComment() {
//   let newComment = getFormData();
//   //axios.post(url,body,{headers})
//   let output = axios.post(
//     "https://jsonplaceholder.typicode.com/comments",
//     newComment,
//     {
//       headers: { "Content-type": "application/json" },
//     }
//   );
//   console.log(output);

//   output.then((response) => {
//     console.log(response.data);
//   });
//}

async function sendComment() {
  let c = getFormData();
  let response = await axios.post(
    "https://jsonplaceholder.typicode.com/comments",
    c,
    { "Content-type": "application/json" }
  );
  console.log(response.data);
}

async function getComments() {
  let c = getFormData();
  let res = await axios.put(
    "https://jsonplaceholder.typicode.com/comments/2",
    c,
    {
      "Content-type": "application/json",
    }
  );
  console.log(res);
}
