//DOM Elements
let kgInput = document.getElementById('kgInput');
//Listening to events

kgInput.addEventListener('input', event =>{
    console.log("midagi juhtus")
    let kg = event.target.value;
    console.log(kg)
})
