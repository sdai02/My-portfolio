

window.addEventListener('scroll', function(){
    var $scroll = document.querySelector('nav');
    if(document.documentElement.scrollTop > 0){
        $scroll.classList.add('body__nav--scroll');
    } else{
        $scroll.classList.remove('body__nav--scroll');
    }

})
    