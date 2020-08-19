var add = document.querySelector('#add-user')
var double = document.querySelector('#double')
var mill = document.querySelector('#show-millionaires')
var sort = document.querySelector('#sort')
var total = document.querySelector('#calculate-wealth')
var main = document.querySelector('#main')

function addN(){
   fetch("https://dummyapi.io/data/api/user?limit=80/page?limit=40", {
            "method": "GET",
            "headers": {
                "app-id": "C4JTRZkNem9Rub2iOe3C",
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            
        }).then(i =>  {return i.json()
            
        .then(data => {
            data.data.map(i => {
            i.price = Math.floor(Math.random() * 100000);
               
            })
            var arr = [];
            var arr2 = [];
            data.data.forEach(item => {
                arr.push(item['firstName'])
                arr2.push(item['price'])

            });
            var tag = document.createElement("h1");
            var tag2 = document.createElement("span");
             var tag3 = document.createElement("span");
         var tag30 = tag3.setAttribute('class','money')
            


            var p1 = document.createTextNode(arr[Math.floor(Math.random() * 50)]);
            var p2 = document.createTextNode(arr2[Math.floor(Math.random() * 50)]);
            tag2.appendChild(p1);
            tag3.appendChild(p2);
            tag.appendChild(tag2);
            tag.appendChild(tag3);

          main.appendChild(tag)
             
           
        })
            
        })
  
}

function millo(){

    var arrayTags = document.querySelectorAll('#main h1')
    var arrN = [];


    arrayTags.forEach(item => {
           arrN.push(item)  
    })
    
    var filterd = arrN.filter(item => item.lastChild.innerHTML > 60000)
    
     function loop(x){
         if(x == mill){
      for(let i = 0; i < arrayTags.length ;i++){
  
         main.removeChild(arrayTags[i]);
          
              }
         for (let u = 0; u < filterd.length; u++) {


             main.appendChild(filterd[u]);

         }

            }
            else if(x == sort){
      
    
       var sorto = arrN.sort(function(a,b) {
           return a.lastChild.innerHTML == b.lastChild.innerHTML ? 0 : (a.lastChild.innerHTML > b.lastChild.innerHTML ? 1 : -1);

       })
         for (let q = 0; q < sorto.length; q++) {


             console.log(sorto)
             main.appendChild(sorto[q])
         }
     
            }
            else if(x == double){
             var arrayMoney = document.querySelectorAll('.money');

             for (const item of arrayMoney) {
                 item.innerHTML = item.innerHTML * 2
             }

            }
            else{
          var last =  arrN.map(item => item.lastChild.innerHTML);
             var lastValue =   last.reduce((a,b) => {
                    return parseInt(a) + parseInt(b)      
                })
              alert(lastValue)
            }
        }
        
          loop(this)  
  
 
    
}   


add.addEventListener('click',addN);
double.addEventListener('click', millo)
mill.addEventListener('click', millo)
sort.addEventListener('click', millo)
total.addEventListener('click', millo)
