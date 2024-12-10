var tablinks=document.querySelectorAll('.tab-link')
var tabcontents=document.querySelectorAll('.tab-content')

tablinks.forEach(function(tablink){
    tablink.addEventListener('click',function(){
        removeActiveLink();
        tablink.classList.add('active-link')
    })
})

function removeActiveLink(){
    tablinks.forEach(function(tablink){
        tablink.classList.remove('active-link')
    })
    
    
}

function opentab(tabname){
    tabcontents.forEach(function(tabcontent){
        tabcontent.classList.remove('active-tab')
    })
    document.getElementById(tabname).classList.add('active-tab')
}
