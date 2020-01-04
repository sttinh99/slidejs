document.addEventListener('DOMContentLoaded',function(){
    var nut = document.querySelectorAll('.thslide ul li')
    var slide = document.querySelectorAll('.phanslide ul li');
    console.log(slide);
    
    for (let index = 0; index < nut.length; index++) {
        nut[index].addEventListener('click',function(){
            for (let index = 0; index < nut.length; index++) {
                nut[index].classList.remove('macdinh');
                slide[index].classList.remove('active');
            }
            nut[index].classList.add('macdinh');
            slide[index].classList.add('active');
        })
    }
},false);
