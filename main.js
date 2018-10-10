//DOM Elements
let kgInput = document.getElementById('kgInput');
let gramOutput = document.getElementById('gramOutput');
let poundOutput = document.getElementById('poundOutput');
let ounceOutput = document.getElementById('ounceOutput');
let output = document.getElementById('output')
let nightToggle = document.getElementById('night');
let body = document.querySelector('body');


//Listening to events
output.style.visibility= 'hidden';
kgInput.addEventListener('input', event =>{
     let kg = event.target.value;   

    output.style.visibility = (kg === '0') ? 'hidden' : 'visible' ;
   
    gramOutput.innerHTML  =`${kg*1000} g`;           //grams
    poundOutput.innerHTML =`${(kg*2.2046).toFixed(2)} lb `;   //pounds  
    ounceOutput.innerHTML =`${(kg*35.274).toFixed(2)} oz `;  //ounces

})
nightToggle.addEventListener('click', event => {
    body.classList.toggle('bg');
})