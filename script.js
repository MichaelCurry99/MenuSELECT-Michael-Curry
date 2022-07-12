// let button = document.getElementById('hey');

// button.addEventListener('click', function(){
//     a.href = "new.html"; 

// })
// Test to see if it works


// function pressOne() {
//     var a = document.createElement('a');
//     var linkText = document.getElementById('all')
//     a.appendChild(linkText);
//   //   a.title = "my title text";
//     a.href = "MenuSelector.html";
//     document.body.appendChild(a);
//   }
//   pressOne()

//   function pressTwo() {
//       var a = document.createElement('a');
//     var linkText = document.getElementById('breakfast')
//     a.appendChild(linkText);
//   //   a.title = "my title text";
//     a.href = "breakfast.html";
//     document.body.appendChild(a);

//   }
//   pressTwo()


// Test to see if it works

document.getElementById("all").addEventListener("click", gotoUrl);
document.getElementById("breakfast").addEventListener("click", urlTwo);
document.getElementById("lunch").addEventListener("click", urlThree);

// function line
function gotoUrl() {
       window.location.assign("main.html");
    }

    function urlTwo() {
      window.location.assign("breakfast.html");
   }

   function urlThree() {
    window.location.assign("lunch.html");
 }