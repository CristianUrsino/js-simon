const outputRandom = document.getElementById('output-random');
const outputResult = document.getElementById('output-result');
const numeriGenerati = [];
const numeriInseriti = [];

while(numeriGenerati.length <5){
    let temp = randomInteger(1,100);
    if(!numeriGenerati.includes(temp)) numeriGenerati.push(temp);
}

for(let i = 0; i < numeriGenerati.length; i++) outputRandom.innerHTML += `${numeriGenerati[i]}, `;

setTimeout(elimina,3000);

function elimina(){
    outputRandom.classList.add('d-none');
    setTimeout(function(){
        for(let i = 0; i < numeriGenerati.length; i++) numeriInseriti[i] = parseInt(prompt(`inserire numero ${i + 1}: `));
        // for(let i = 0; i < numeriGenerati.length; i++) outputResult.innerHTML += `${numeriInseriti[i]}, `;
        confronta();
    },1000);
}

function confronta(){
    const numeriComuni = [];
    console.log(numeriGenerati);
    console.log(numeriInseriti);
    for(let i = 0; i < numeriInseriti.length; i++){
        if(numeriGenerati.includes(numeriInseriti[i])){
            numeriComuni.push(numeriInseriti[i]);
        };
    }
    outputResult.innerHTML += `<br> hai indovinato ${numeriComuni.length} numeri`;
    if(numeriComuni.length !== 0){
        outputResult.innerHTML += ': ';
        for(let i = 0; i < numeriComuni.length; i++){
            outputResult.innerHTML += `${numeriComuni[i]}`;
            if(i !== numeriComuni.length-1)  outputResult.innerHTML += ', ';
        }
    }
}