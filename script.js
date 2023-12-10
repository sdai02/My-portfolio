var $scroll = document.querySelector('nav');
var $project_one = document.getElementById('li__project-one');
var $linkedin = document.getElementById('link__linkedin'); 

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

$linkedin.addEventListener('click', function(event){
    event.preventDefault();
    window.open('https://www.linkedin.com/in/stéphane-dai-7083351b6/');
});