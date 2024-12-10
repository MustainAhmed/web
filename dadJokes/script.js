var nxtBtn=document.getElementById("nextJoke");
var Joke=document.getElementById('joke');

nxtBtn.addEventListener('click',getJoke);

 getJoke()

 async function getJoke(){
    var config={
        headers:{
            Accept:'application/json',
        },

    }
    var res=await fetch('https://icanhazdadjoke.com',config)

    var data=await res.json()
    Joke.innerHTML=data.joke

}