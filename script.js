function menuOpenClose() {

    console.log("Hello");

    let mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenu.classList.contains("mobileMenuHidden")) {
        mobileMenu.classList.add("mobileMenuShow");
        mobileMenu.classList.remove("mobileMenuHidden");

        mobileMenu.classList.add("animateOpen");
    }
    else {
        mobileMenu.classList.add("mobileMenuHidden");
        mobileMenu.classList.remove("mobileMenuShow");
        
        mobileMenu.classList.remove("animateOpen");
    }
}

let menuButton = document.getElementsByClassName("buttonOpenClose");

console.log(menuButton);

for (let i = 0; i < menuButton.length; i++) {
    menuButton[i].onclick = menuOpenClose;
}