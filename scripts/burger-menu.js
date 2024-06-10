let burgerButton = document.querySelector(".burger__btn")
let burgerMenu = document.querySelector(".burger__menu")
let burgerElements = document.querySelectorAll(".burger__element")

let burgerOpenClose = () => {
    let opened = (burgerButton.classList.contains("opened")) ? true : false;
    if(opened){
        burgerButton.classList.remove("opened");
        burgerMenu.classList.remove('burger__opened')
        burgerElements.forEach((elem) => {
            elem.classList.remove("burger__element__opened")
            elem.style.diplay = "none"
        })
    }
    else{
        burgerButton.classList.add("opened");
        burgerMenu.classList.add('burger__opened')
        setTimeout(() => {
            burgerElements.forEach((elem) => {
                elem.classList.add("burger__element__opened")
            })
        }, 200);
    }
}