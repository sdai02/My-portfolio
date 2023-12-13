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

let windowOpen= (element, url) =>{
    element.onclick = (event)=>{
        event.preventDefault();
        window.open(url,'_blank');
    }
}
windowOpen($project_one,'https://lucent-sundae-056ed6.netlify.app/')
windowOpen($project_two,'https://github.com/Aboubakar2004/Projet_Site_Location/tree/st%C3%A9phane')
windowOpen($project_three,'https://6575c824ce77752fcddb564c--majestic-zuccutto-8ada61.netlify.app/')
windowOpen($linkedin,'https://www.linkedin.com/in/stéphane-dai-7083351b6/')






let carouselOff = (index)=>{
    index.classList.remove("carousel__li");
    index.classList.add("carousel__li--off");
}

let carouselOn = (index)=>{
    index.classList.remove('carousel__li--off');
    index.classList.add("carousel__li");

}

$index = 0;

 $button_right.addEventListener('click', function(){
    carouselOff($carousel[$index])
     $index += 1;

     if($index == $carousel.length){
         $index = 0
         carouselOn($carousel[$index])
     }else{
         carouselOn($carousel[$index])
     }
 });



$button_left.addEventListener('click', () => {
    carouselOff($carousel[$index])
    if($index == 0){
        $index = $carousel.length-1;
        carouselOn($carousel[$index])
    }else{
        $index -= 1;
        carouselOn($carousel[$index])
    }
});


let menuOn = (on) => {
    $menu.classList.remove('menu--off');
    $menu.classList.add('menu');
}

let menuOff = (off) => {
    $menu.classList.remove('menu');
    $menu.classList.add('menu--off');
}


$on = 0;
$button__menu.addEventListener('click',function(){
    if($on == 0){
        $on += 1;
        menuOn()
    }else{
        $on -= 1;
        menuOff()
    }
})