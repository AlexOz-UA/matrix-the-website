let loader = document.querySelector('.loader__bg');

setTimeout(() => {
    loader.classList.add('loader__hidden');
}, 1500);

let movingPages = (e) =>{
    loader.classList.add('change__screen__show');
    setTimeout(() => {
       window.location.pathname = `./${e.id}`;
    }, 1500);
}