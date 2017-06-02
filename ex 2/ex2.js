  var myButton = document.getElementById("myButton");
  var myUl = document.getElementById("myUl");
  var myInput = document.getElementById("myInput");
  console.log(myButton);
  myButton.addEventListener('click',function(){
      var li = document.createElement("li");
      li.appendChild(document.createTextNode(myInput.value));
      myUl.appendChild(li);
    });