var items = document.querySelectorAll(".item")
var over = document.querySelector(".over")
var overImg = document.querySelector('.over img') 
var prev = document.querySelector('.over .prev')
var next = document.querySelector('.over .next')
var close = document.querySelector(".over .exit")
var filterItems = document.querySelectorAll(".filter li")
var n =0;
function open() { 
for(let i=0;i<items.length;i++){
    items[i].addEventListener('click',function(e){
       overImg.src = e.target.dataset.img
       over.style.display = 'block'
       console.log(e.target.style.backgroundImage)
    })
}
 }
 open()

function prevSlide(){
   

    
   
  if(n === 0){
      n = 5;
    }
    else{
        overImg.src = items[n-1].dataset.img
        
    }
    n--;

}

function nextSlide(){
    
   if(n === 4){
      n = -1;
    }
    else{
        overImg.src = items[n+1].dataset.img

    }
            n++;


}

function exit(){
    close.addEventListener("click",function(){
        over.style.display = 'none'
    })
}

exit()


function filtering(){
    
    filterItems.forEach((value, index) => {
      value.addEventListener('click',function(e){
        for(let i = 0; i< items.length;i++){
              items[i].style.width = `300px`
              items[i].style.height = `198px`
            //   items[i].style.position = 'relative'
            //   items[i].style.left =`150px`
            //   items[i].style.top =`50px`
             items[i].style.transform = "scale(0)"
            //  items[i].style.display = 'none'
            //  items[i].style.display = "none"  
            if(items[i].classList.contains( e.target.dataset.filter) === true){
            //     items[i].style.width = `0px`
            //  items[i].style.height = `0px`
            //    items[i].style.position = 'relative'
            //   items[i].style.left =`0px`
            //   items[i].style.top =`0px`
             
            //  items[i].style.left =`150px`
              items[i].style.transform = "scale(1)"
            //  items[i].style.display = 'block'
           
                // items[i].style.display = "block" 
                // items[i].style.transform = "scale(1)" 

            }
        } 
      })
    })
}

filtering()