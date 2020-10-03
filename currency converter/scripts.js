var currency1 = document.getElementById('currency-one');
var currency2 = document.getElementById('currency-two');
var rate = document.getElementById("rate");
var input = document.querySelectorAll('input');
var input1 = document.getElementById("amount-one");
var input2 = document.getElementById("amount-two");
var swap = document.getElementById('swap')


function addCur(){
   

  //  Call Api --------------------------------

    var file = new XMLHttpRequest();
    
    
    file.open(
      "GET",
      "http://data.fixer.io/api/latest?access_key=a4ee05d8f640b121813e43834dea0c6f&format=1",
      true
    );
    file.onreadystatechange = function(){
        if(this.readyState === 4 &&   this.status === 200){
         var data = JSON.parse(this.responseText)
           addData(data);
         
           addResult(data);
             swapy();
          
        }
    }   
   file.send()
   
  
}



function addData(data){

// Our Data
  var dataHandler = Object.keys(data.rates);
  var dataHandler2 = Object.values(data.rates);



for(var i = 0 ;i < dataHandler.length ; i++){

  // Create options elements ------------------------
  
  var options = document.createElement('option');
 var options2 = options.cloneNode('true');

    currency1.appendChild(options);
    
    currency2.appendChild(options2);

  // Set data to options elements ------------------------

   Array.from(currency1.children).forEach((item, o) => {
     item.setAttribute("value", dataHandler[o]);
     item.innerText = dataHandler[o];
     item.setAttribute('data-value', dataHandler2[o])
     
   });
currency1.children[0].setAttribute('selected','');

     Array.from(currency2.children).forEach((item, o) => {
       item.setAttribute("value", dataHandler[o]);
       item.innerText = dataHandler[o];
       item.setAttribute('data-value',dataHandler2[o])
     });
    currency2.children[0].setAttribute("selected", ""); 
}



  
}

function addResult(){


    input1.addEventListener('change', event => {
   
        // rate ----------------------

    rate.innerHTML = `${input1.value} ${currency2.options[currency2.selectedIndex].value} = ${input1.value * currency1.options[currency1.selectedIndex].dataset.value } ${currency1.options[currency1.selectedIndex].value}`

      // result -------------------
    input2.value = `${input1.value * currency2.options[currency2.selectedIndex].dataset.value}`
    
})
}

function swapy(){
  swap.addEventListener('click',i =>{
     
    [input1.value, input2.value] = [input2.value,input1.value]
  
})
}


addCur()