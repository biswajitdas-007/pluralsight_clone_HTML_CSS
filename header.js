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
var count = 0;
function up(arr) {
  let div = document.getElementById(arr).innerText;
  if (div == "expand_more") {
    document.getElementById(arr).innerText = "expand_less";
  }
  if (div == "expand_less") {
    document.getElementById(arr).innerText = "expand_more";
  }
}
