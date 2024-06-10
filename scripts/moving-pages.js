let otherPageLoader = document.querySelector('.loader__bg-other-page')
document.body.style.overflow = "hidden"

setTimeout(() => {
    otherPageLoader.classList.add('loader__hidden')
    document.body.style.overflow = "auto"
}, 1500);

let backToMainPage = (e) => {
    otherPageLoader.classList.add('change__screen__show');
    document.body.style.overflow = "hidden"
    setTimeout(() => {
        console.log(e.id);
        window.location.pathname = `./${e.id}`;
    }, 1500);
}
