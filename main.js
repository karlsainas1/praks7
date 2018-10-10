//DOM Elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput');
let ounceOutput = document.getElementById('ounceOutput');
let output = document.getElementById('output')
//Listening to events
output.style.visibility= 'hidden';
kgInput.addEventListener('input', event =>{
     let kg = event.target.value;   
    
    if (kg == 0 ) {
         output.style.visibility= 'hidden';
    }else {
        output.style.visibility= 'visible';
        
    }
          
   
    gramOutput.innerHTML =`${kg*1000} g`;           //grams
    poundOutput.innerHTML =`${kg*2.2046} lb `;   //pounds  
    ounceOutput.innerHTML =`${kg*35.274} oz `;  //ounces

})
