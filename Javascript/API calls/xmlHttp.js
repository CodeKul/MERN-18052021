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
  //1)create object of XMLHttpRequest
  //2)obj.open("method",'url')
  //3)obj.setRequest("Content",'json')
  //4)obj.send(body)
  //5)obj.onload,obj.onerror

  let comment = getFormData();

  let request = new XMLHttpRequest();
  request.open("POST", "https://jsonplaceholder.typicode.com/comments");
  request.setRequestHeader("Content-type", "application/json");
  request.send(JSON.stringify(comment));
  request.onload = () => {
    if (request.status === 201) {
      let result = request.response;
      let output = JSON.parse(result);
      console.log(output);
    } else {
      console.log(response.status);
    }
  };
  request.onerror = () => {
    console.log("Try Again later");
  };
}
function getComments() {
  let request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/comments");
  request.setRequestHeader("Content-type", "application/json");
  request.send();
  request.onload = () => {
    if (request.status == 200) {
      let output = JSON.parse(request.response);
      console.log(output);
    } else {
      console.log(request.status);
    }
  };

  request.onerror = () => {
    console.log("Error");
  };
}
