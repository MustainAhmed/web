var container=document.querySelector('.container');
var button =document.querySelector('.btn');
var input=document.querySelector('.in');

button.addEventListener('click',()=>{
    container.classList.toggle('active')
    input.focus();
})
