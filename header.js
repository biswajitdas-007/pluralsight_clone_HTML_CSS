function slideshow() {
  const arr = ["workflows", "teams", "processes", "skills", "processes"];
  let div = document.getElementById("slidshow");
  div.innerHTML = arr[0];
  let i = 0;
  setInterval(function () {
    if (i == arr.length) {
      i = 0;
    }

    div.innerHTML = arr[i];
    i++;
  }, 2000);
}
slideshow();

// function up(arr) {
//   let div = document.getElementById(arr).innerText;
//   if (div == "expand_more") {
//     document.getElementById(arr).innerText = "expand_less";
//   }
//   if (div == "expand_less") {
//     document.getElementById(arr).innerText = "expand_more";
//   }
// }

function up(arr, p1) {
  let div = document.getElementById(arr).innerText;
  if (div == "expand_more") {
    document.getElementById(arr).innerText = "expand_less";
  }
  // if (div == "expand_less") {
  //   document.getElementById(arr).innerText = "expand_more";
  // }

  document.getElementById("nav_down").style.display = "block";
  document.getElementById("body").style.position = "fixed";
}
function cut(id) {
  document.getElementById("nav_down").style.display = "none";
  document.getElementById("body").style.position = "relative";
  document.getElementById(id).innerText = "expand_more";
}
