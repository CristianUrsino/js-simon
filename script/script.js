"use strict";
jsSimon();

function jsSimon(){

const numInputForm = document.getElementById('n-input');
const btnNumInput = document.querySelector('.btn-success');
const generation = document.getElementById('generation');
const outputRandom = document.getElementById('output-random');
const outputResult = document.getElementById('output-result');
let btnSend = '';
let numeriGenerati = [];
// let referenceToInputsValue=[];
let numeriInseriti = [];
let numInput = 0;

btnNumInput.addEventListener('click', function(){
    generation.innerHTML = '';
    numeriGenerati = [];
    outputRandom.innerHTML = '';
    outputRandom.classList.remove('d-none');
    numInput = numInputForm.value;
    if(numInput <= 0 || numInput > 21) {
        generation.innerHTML = `Inserire un numero compreso tra <strong>1 e 20!</strong>`;
        return;
    }
    while(numeriGenerati.length < numInput){
        let temp = randomInteger(1,100);
        if(!numeriGenerati.includes(temp)) numeriGenerati.push(temp);
    }
    console.log('numeri generati = ' + numeriGenerati);
    for(let i = 0; i < numeriGenerati.length; i++){
        outputRandom.innerHTML += `${numeriGenerati[i]}`;
        if(i !== numeriGenerati.length-1) outputRandom.innerHTML += ', ';
    }
    setTimeout(inizia,3000);
});




function inizia(){
    outputRandom.classList.add('d-none');
    for(let i=0;i<numInput;i++){
        const inputForm = newInputForm(i);
        generation.append(inputForm);
    }
    btnSend = document.createElement('button');
    btnSend.innerHTML = 'invia numeri';
    btnSend.className = 'btn btn-primary';
    generation.append(btnSend);

    btnSend.addEventListener('click', inviaInput);
}

function inviaInput(){
    numeriInseriti = [];
    outputResult.innerHTML = '';
    const allInputs = document.querySelectorAll('.input-generated');
    for(let i=0;i<allInputs.length;i++){
        const temp = parseInt(allInputs[i].value) ; //se l'utente non inserisce nulla ok, l'importante che non inserisca numeri fuori dal range
        console.log(temp);
        if((temp < 0 || temp > 100) && temp !== null){
            outputResult.innerHTML = 'ERRORE HAI INSERITO DEI VALORI NON VALIDI';
            return;
        }
        numeriInseriti.push(temp);
    }
    console.log('numeri inseriti: ' + numeriInseriti);
    confronta();
    btnSend.removeEventListener('click',inviaInput);
};

function newInputForm(index){
    const divInput = document.createElement('div');
    divInput.classList.add('mt-3');

    const labelInput = document.createElement('label');
    labelInput.setAttribute('for', `input${index}`);
    labelInput.innerHTML = `inserire il ${index+1}° numero: `;
    labelInput.className = 'me-3';

    const input = document.createElement('input');
    input.setAttribute('name', `input${index}`);
    input.setAttribute('type', 'number');
    input.setAttribute('min', '0');
    input.setAttribute('max', '100');
    input.className = 'input-generated';
    // referenceToInputsValue.push

    divInput.append(labelInput);
    divInput.append(input);
    return divInput;
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

}