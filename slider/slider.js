var imgHandler = document.querySelectorAll('.bg');
var bullets = document.querySelectorAll('.bullets span');

// create imgs
function create(){
for(let i = 0;i < imgHandler.length;i++ ){
imgHandler[i].style  =`background-image:url(${imgHandler[i].dataset.img})`
  
}
}
create()


// create move
function move(){

    for(let i = 0;i < bullets.length;i++){
  
      bullets[i].addEventListener('click',function(){
      bullets.forEach(b => {b.classList.remove('active')})
      this.classList.add('active');
      
      imgHandler.forEach(k=> {k.style.transform = "translateX(" +  (`${parseInt(k.getAttribute('translate').match(/[0-9]/g).join(''))} ` - (i * 1366)) + 'px' + ")"})
   })
         
    }  
}

move()
