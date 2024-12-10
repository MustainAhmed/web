var steps = document.querySelectorAll('.step');
var progress = document.getElementById('progress');
var prev = document.getElementById('prev');
var next = document.getElementById('next');

var currentStep=1;



next.addEventListener('click',()=>{
    
    if(currentStep<steps.length){
        currentStep++;
    }
    update();
})

prev.addEventListener('click',()=>{
    if(currentStep>1){
        currentStep--;
    }
    update();
})

function update(){
    if(currentStep===1){
        prev.disabled=true;
    } else if(currentStep===steps.length){
        next.disabled=true;
    } else{
        next.disabled=false;
        prev.disabled=false;
    }


    steps.forEach((step,index)=>{
        if(index<currentStep){
            step.classList.add('active');
        }
        else{
            step.classList.remove('active');
        }
    })
    
    progress.style.width= ((currentStep-1)/(steps.length-1))*100 +'%';
}

