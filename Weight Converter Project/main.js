const visibility = document.getElementById("output");
visibility.style.visibility = "hidden";
const input = document.getElementById("lbsInput");
input.addEventListener("input", function (e) {
  visibility.style.visibility = "visible";
  console.log("type", e.type);
  let lbs = e.target.value;
  let gramoutput = document.getElementById("grams-output");
  gramoutput.innerHTML = lbs / 0.0022046;
  let kgoutput = document.getElementById("kg-output");
  kgoutput.innerHTML = lbs / 2.2046;
  let ozoutput = document.getElementById("oz-output");
  ozoutput.innerHTML = lbs * 16;
});
