`use strict`

const buttonClick =  document.getElementById('btn');
const msg = document.getElementById('message');

buttonClick.addEventListener('click',()=>{
    document.querySelector('.spinner-box').classList.add('hide');
    msg.innerText = "successfully downloaded";
});