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


// Test to see if it works (above).

document.getElementById("all").addEventListener("click", urlOne);          //This is the DOM to create the link to the pages I created in the buttons.
document.getElementById("breakfast").addEventListener("click", urlTwo);    // I use the id from the HTML button elements so that once I click it, I have
document.getElementById("lunch").addEventListener("click", urlThree);
document.getElementById("shakes").addEventListener("click", urlFour);
document.getElementById("dinner").addEventListener("click", urlFive);

// function line
function urlOne() {
       window.location.assign("index.html");
       window.location.replace("index.html");
       return false;
    }

    function urlTwo() {
      window.location.assign("breakfast.html");
      window.location.replace("breakfast.html");
       return false;
   }

   function urlThree() {
    window.location.assign("lunch.html");
    window.location.replace("lunch.html");
       return false;
   }

   function urlFour() {
    window.location.assign("shakes.html");
    window.location.replace("shakes.html");
    return false;
   }

   function urlFive() {
    window.location.assign("dinner.html");
    window.location.replace("dinner.html");
    return false;
   }

   