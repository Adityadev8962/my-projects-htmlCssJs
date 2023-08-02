// let bars = document.querySelector("RespMenu");
// let drop = document.getElementById("drop");

document.getElementById("RespMenu").addEventListener("click", function () {
    var element = document.getElementById("menuDiv");
    element.classList.remove("hideDiv");
    element.classList.add("showDiv");
    let x = document.querySelector(".cross");
    x.classList.remove("hideBurger");
    let y = document.querySelector(".ham");
    y.classList.remove("ham");
    y.classList.add("hid");
})

document.getElementById("hideMenu").addEventListener("click", function () {
    var element = document.getElementById("menuDiv");
    element.classList.remove("showDiv");
    element.classList.add("hideDiv");
    let h = document.querySelector(".cross");
    h.classList.add("hideBurger");
    let c = document.querySelector("#RespMenu");
    c.classList.remove("hid");
    c.classList.add("ham");
})
// bars.addEventListener("click", function () {
//     var element = document.getElementById("RespMenu");
//     element.classList.remove("mystyle");
//     element.classList.add("mystyle");
// })