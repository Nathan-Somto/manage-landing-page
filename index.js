const dateSpan = document.getElementById('js--display--year');
const close = document.getElementById('js--toggle--close');
const menu = document.getElementById('js--toggle--menu');
const nav = document.querySelector('nav>ul');
close.style.display ='none';
const date = new Date();
dateSpan.innerHTML = date.getFullYear();
menu.addEventListener('click',()=>{
    nav.style.display= 'flex';
    close.style.display ='block';
    menu.style.display = 'none';
});
close.addEventListener('click',()=>{
    nav.style.display= 'none';
    close.style.display ='none';
    menu.style.display = 'block';
});
