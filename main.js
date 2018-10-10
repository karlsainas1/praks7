//DOM Elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput');
let ounceOutput = document.getElementById('ounceOutput');
//Listening to events

kgInput.addEventListener('input', event =>{
    
    let kg = event.target.value;          
    gramOutput.innerHTML =`${kg*1000} g`;           //grams
    poundOutput.innerHTML =`${kg*2.2046} lb `;   //pounds  
    ounceOutput.innerHTML =`${kg*35.274} oz `;  //ounces

})
