const bg = document.getElementById('header1');

window.addEventListener('scroll',function(){
    bg.style.backgroundSize = 160- +window.pageYOffset/10+'%';
})
