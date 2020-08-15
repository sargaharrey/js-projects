var opt = document.querySelector('#movie');

var seat = document.querySelectorAll('.seat');
var count = document.querySelector('.text #count');
var total = document.querySelector('.text #total');

var arr = [];
seat.forEach(item => {
   return  arr.push(item)
})

var z = arr.filter(item =>{
   return (!item.classList.contains('occupied'))
})


z.forEach(item => {
    
    item.addEventListener('click',function(){
        this.classList.toggle('selected');
        if(this.classList.contains('selected')){
        count.innerHTML = parseInt(count.innerHTML) + 1;
           
    
    }
        else{
            count.innerHTML = parseInt(count.innerHTML) - 1;
           
        }
        total.innerHTML = parseInt(opt.value) * document.querySelectorAll('.selected').length
      
    })



} )




