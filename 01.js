document.addEventListener('DOMContentLoaded',function(){
    var nut = document.querySelectorAll('.thslide ul li')
    var slide = document.querySelectorAll('.phanslide ul li');
    var nauD1 = document.querySelectorAll('.motslide .nauduoi1')
    var nauD2 = document.querySelectorAll('.motslide .nauduoi2')
    var nauT = document.querySelectorAll('.motslide .nautren')
    var tnd = document.querySelectorAll('.motslide .textnoidung')
    var vitribandau = 1;
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
    var x = setInterval(function(){
        var y = 5%vitribandau;
        for (let index = 0; index < nut.length; index++) {
            nut[index].classList.remove('macdinh');
            slide[index].classList.remove('active');
        }
        nut[y].classList.add('macdinh');
        slide[y].classList.add('active');
        vitribandau++;
        if(vitribandau==4)
        {
            vitribandau = 1;
        }
        },4000);
},false);
