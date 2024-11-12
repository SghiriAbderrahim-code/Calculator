console.log("nice");
var but = document.querySelector(".buttons").querySelectorAll("div");
var butList = [...but];
var screen = document.querySelector(".screen");
var root = document.querySelector(":root");
var mood = "";
if(window.localStorage.getItem("mood")){
mood = window.localStorage.getItem("mood");
if(mood === "L"){
  root.style= "--c-back: rgb(240, 239, 239);--c-text: rgb(15, 15, 15);--c-hover: rgb(207, 206, 206);";
  mood = "D";
  window.localStorage.setItem("mood","L");
}else{
  root.style= " --c-back: rgb(19, 19, 19);--c-text: rgb(253, 252, 252);--c-hover: rgb(54, 54, 54);";
mood = "L";
window.localStorage.setItem("mood","D");
}
}else{
  
}
butList.forEach(
  (item) =>
    (item.onclick = function () {
      var val = item.innerText;
      switch (val) {
       case "C":
        screen.innerText="";
        break;
        case "D/L" :


if(mood === "L"){
  root.style= "--c-back: rgb(240, 239, 239);--c-text: rgb(15, 15, 15);--c-hover: rgb(207, 206, 206);";
  mood = "D";
  window.localStorage.setItem("mood","L");
}else{
  root.style= " --c-back: rgb(19, 19, 19);--c-text: rgb(253, 252, 252);--c-hover: rgb(54, 54, 54);";
mood = "L";
window.localStorage.setItem("mood","D");
}





        break;
        case "DEL":
          let sc = screen.innerText;
          let sc2 = [...sc];

          sc2.pop();

          let sc3 = sc2.join("");

          screen.innerText = sc3;

          break;
        case "=":
          screen.innerText = eval(screen.innerText);
          break;
        default:
          screen.innerText += val;
      }
    })
);