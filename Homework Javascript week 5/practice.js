var postButton = document.getElementById("post");
console.log(postButton);
var deleteButton = document.getElementById("sterge");
console.log(deleteButton);

postButton.addEventListener("click", function () {
  var commentBoxText = document.getElementById("comment-box").value;
  var li = document.createElement("li");
  var text = document.createTextNode(commentBoxText);
  li.appendChild(text);
  document.getElementById("unordered").appendChild(li);
});

deleteButton.addEventListener("click", function () {
  var unordered = document.getElementById("unordered");
  unordered.removeChild(unordered.lastChild);
});


