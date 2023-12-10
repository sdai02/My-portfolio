var $scroll = document.querySelector('nav');
var $project_one = document.getElementById('li__project-one');
var $project_two = document.getElementById('li__project-two');
var $project_three = document.getElementById('li__project-three');
var $linkedin = document.getElementById('link__linkedin'); 
let $carousel = document.querySelectorAll('.portfolio__carousel li');
let $button_left = document.querySelector('.carousel__button-left');
let $button_right = document.querySelector('.carousel__button-right');
let $button__menu = document.getElementById('button__menu');
let $menu = document.getElementById('menu');

window.addEventListener('scroll', function(){
    
    if(document.documentElement.scrollTop > 0){
        $scroll.classList.add('body__nav--scroll');
    } else{
        $scroll.classList.remove('body__nav--scroll');
    }

})
  
$project_one.addEventListener('click', function(event){
    event.preventDefault();
    window.open('https://lucent-sundae-056ed6.netlify.app/','_blank');
});

$project_two.addEventListener('click', function(event){
    event.preventDefault();
    window.open('https://github.com/Aboubakar2004/Projet_Site_Location/tree/st%C3%A9phane','_blank');
});

$project_three.addEventListener('click', function(event){
    event.preventDefault();
    window.open('https://6575c824ce77752fcddb564c--majestic-zuccutto-8ada61.netlify.app/','_blank');
});

$linkedin.addEventListener('click', function(event){
    event.preventDefault();
    window.open('https://www.linkedin.com/in/stéphane-dai-7083351b6/');
});



$index = 0;

$button_right.addEventListener('click', function(){ 
    $carousel[$index].classList.remove("carousel__li");
    $carousel[$index].classList.add("carousel__li--off");

    $index += 1; 

    if($index == $carousel.length){
        $index = 0
        $carousel[$index].classList.remove('carousel__li--off');
        $carousel[$index].classList.add("carousel__li");
    }else{
        $carousel[$index].classList.remove('carousel__li--off');
        $carousel[$index].classList.add("carousel__li");
    } 
});

$button_left.addEventListener('click', function(){ 
    $carousel[$index].classList.remove("carousel__li");
    $carousel[$index].classList.add("carousel__li--off");
    
    if($index == 0){
        $index = $carousel.length-1;
        $carousel[$index].classList.remove('carousel__li--off');
        $carousel[$index].classList.add("carousel__li");
    }else{
        $index -= 1;
        $carousel[$index].classList.remove('carousel__li--off');
        $carousel[$index].classList.add("carousel__li");
    }
    
});

$on = 0;
$button__menu.addEventListener('click',function(){
    if($on == 0){
        $on += 1;
        $menu.classList.remove('menu--off');
        $menu.classList.add('menu');
    }else{
        $on -= 1;
        $menu.classList.remove('menu');
        $menu.classList.add('menu--off');
    }
})