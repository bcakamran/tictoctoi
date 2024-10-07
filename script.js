let boxes = document.querySelectorAll('.box');
let restetgame = document.querySelector('.resetgame');
let msg =  document.querySelector('.msg');
let newgame =  document.querySelector('.newgame');
let winnerp = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [3,4,5],
    [1,4,7],
    [2,5,8],
    [6,7,8],
    [6,4,2],
];
const disablefun = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enablefun = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
let turno = true; 
boxes.forEach((box) =>{
    box.addEventListener('click', () =>{
        if(turno){
            box.innerHTML = "O";
            turno = false;
        }else{
            box.innerHTML = "X";
            turno = true;
        }
        box.disabled = true;
        checkwinner();
    });
    

});
const showwinner = (winer) =>{
    msg.innerText = `congradulation winner is : ${winer} `;
    
    newgame.classList.remove("hide");
    disablefun();
}
const checkwinner  = () =>{
    for(pattens of winnerp){
        let val1 = boxes[pattens[0]].innerText ;
        let val2 = boxes[pattens[1]].innerText;
        let val3 = boxes[pattens[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != "" ){
            if(val1 === val2 && val2 === val3){
                console.log("winner" , val1);
                showwinner(val1);
                
            }
            
        }
       
}
}
const restetgam = () =>{
    turno = true;
    enablefun();
    newgame.classList.add("hide");
    msg.innerText = `Winner ...`;
}
restetgame.addEventListener("click", restetgam);
newgame.addEventListener('click', restetgam);


