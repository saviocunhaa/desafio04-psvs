

function menuShow(){
    var ul = document.querySelector('.nav-menu');
    if (ul.classList.contains('open')){
        ul.classList.remove('open');
        console.log('ok');
    }else{
        ul.classList.add('open');
    }
}