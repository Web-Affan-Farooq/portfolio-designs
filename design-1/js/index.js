let toogleButton = document.querySelector("#menu-icon");
console.log(toogleButton);

let flag = true;
toogleButton.addEventListener("click", function showNav(event) {
    if(flag) {
        document.querySelector("nav").style.height = "100vh";
        document.querySelector("nav").style.justifyContent = "center";
        document.querySelector("nav").style.alignItems = "center";
        toogleButton.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        flag = !flag;
        document.querySelector(".nav-list").style.display = "flex";
    }
    else {
        document.querySelector("nav").style.height = "60px";
        // document.querySelector("nav").style.justifyContent = "center";
        // document.querySelector("nav").style.alignItems = "center";
        toogleButton.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        document.querySelector(".nav-list").style.display = "none";
        flag = !flag;
    }
})