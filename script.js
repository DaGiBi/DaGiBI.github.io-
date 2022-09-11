window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');
    
    for( let i = 0; i < reveals.length; i++){
        if(reveals[i].getBoundingClientRect().top < window.innerHeight){
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}