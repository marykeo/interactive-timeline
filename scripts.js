/* carsousel function*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex +=n)
}

function showSlides(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i =0; i < x.length; i++) {
    x[i].style.display="none";
  }
  x[slideIndex-1].style.display="block";
}


/* AJAX used for 'More Information' Button */
/* Box 1 */
function loadBox1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("box1").innerHTML =
      this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)){
      console.log("Error: " + this.responseText)
    }
  };
  xhttp.open("GET", "missing_info.txt", true);
  xhttp.send();
}

/* Box 2 */
function loadBox2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("box2").innerHTML =
      this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)){
      console.log("Error: " + this.responseText)
    }
  };
  xhttp.open("GET", "box2.txt", true);
  xhttp.send();
}

/* Box 3 */
function loadBox3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("box3").innerHTML =
      this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)){
      console.log("Error: " + this.responseText)
    }
  };
  xhttp.open("GET", "box3.txt", true);
  xhttp.send();
}

/* Box 4 */
function loadBox4() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("box4").innerHTML =
      this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)){
      console.log("Error: " + this.responseText)
    }
  };
  xhttp.open("GET", "box4.txt", true);
  xhttp.send();
}

/* Box 5 */
function loadBox5() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("box5").innerHTML =
      this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)){
      console.log("Error: " + this.responseText)
    }
  };
  xhttp.open("GET", "box5.txt", true);
  xhttp.send();
}

/* Box 6 */
function loadBox6() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("box6").innerHTML =
      this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)){
      console.log("Error: " + this.responseText)
    }
  };
  xhttp.open("GET", "box6.txt", true);
  xhttp.send();
}

/* Box 7 */
function loadBox7() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("box7").innerHTML =
      this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)){
      console.log("Error: " + this.responseText)
    }
  };
  xhttp.open("GET", "box7.txt", true);
  xhttp.send();
}

/* Box 8 */
function loadBox8() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("box8").innerHTML =
      this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)){
      console.log("Error: " + this.responseText)
    }
  };
  xhttp.open("GET", "box8.txt", true);
  xhttp.send();
}

/* Box 9 */
function loadBox9() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("box9").innerHTML =
      this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)){
      console.log("Error: " + this.responseText)
    }
  };
  xhttp.open("GET", "box9.txt", true);
  xhttp.send();
}

/* Box 10 */
function loadBox10() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("box10").innerHTML =
      this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)){
      console.log("Error: " + this.responseText)
    }
  };
  xhttp.open("GET", "box10.txt", true);
  xhttp.send();
}

/* Box 11 */
function loadBox11() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("box11").innerHTML =
      this.responseText;
    } else if ((this.readyState == 4) && (this.status != 200)){
      console.log("Error: " + this.responseText)
    }
  };
  xhttp.open("GET", "box11.txt", true);
  xhttp.send();
}