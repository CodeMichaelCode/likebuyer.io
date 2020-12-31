const hamBtn = document.querySelector(".fa-bars");
const mobile = document.querySelector('.mobile');
const menuCont = document.querySelector('.menu-container');

hamBtn.addEventListener('click', function(){
    mobile.classList.toggle('mobileSwitch');
    menuCont.classList.toggle('menuContG');
})

window.addEventListener('load', function(){
    window.dispatchEvent(new Event('resize'));
});

window.onresize = function(){
    mobile.classList.remove('mobileSwitch');
    menuCont.classList.remove('menuContG');
}
