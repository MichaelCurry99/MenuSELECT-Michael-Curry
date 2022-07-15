let all = document.getElementById("all");         // This is the DOM to create the link to the pages I created in the buttons.
let breakfast = document.getElementById("breakfast");       
let lunch = document.getElementById("lunch");
let shakes = document.getElementById("shakes");
let dinner = document.getElementById("dinner");

all.addEventListener('click', function (){             // functions to make the button display the next page when clicked.
    window.location.assign("index.html");          // inserts the link
      window.location.replace("index.html");      // prevents browser history when going back and forth.
    
});

breakfast.addEventListener('click', function (){ 
   window.location.assign("breakfast.html"); 
     window.location.replace("breakfast.html");
   
});

lunch.addEventListener('click', function (){ 
   window.location.assign("lunch.html"); 
     window.location.replace("lunch.html");
   
});

shakes.addEventListener('click', function (){ 
   window.location.assign("shakes.html"); 
     window.location.replace("shakes.html");
   
});

dinner.addEventListener('click', function (){ 
   window.location.assign("dinner.html"); 
     window.location.replace("dinner.html");
   
});