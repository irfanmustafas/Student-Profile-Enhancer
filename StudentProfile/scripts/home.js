var el = document.createElement('html');
el.innerHTML = localStorage.getItem('real_Home');
window.onload = function what() {
    document.body.innerHTML = $('body', el)[0].innerHTML;
    cleanmenu();
};