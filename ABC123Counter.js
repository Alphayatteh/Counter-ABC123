
function abc(mode) {
    
    let abc = "abcdefghijklmnopqrstuvwxyz"

    if(mode === "A" || mode === "Z")
        abc = abc.toUpperCase();

    abc = abc.split("");

    if(mode === "Z" || mode === "z")
        abc =abc.reverse();

    return abc;
}



function generateABC(modes) {
    let letters = modes.split("");
    let results = [];

    letters.forEach(e => {
        let alphaBets = abc(e);
        results.push(alphaBets);
    });

    return results.flat();
}
function n123(mode) {
    let numbers = Array.from({ length: 360 }, (_, i) => i + 1);
    
    if (mode === "321") {
        numbers.reverse();
    }
    
    return numbers;
  }
  
function highLight(pThis){
    let highLight = pThis.dataset.highlight;
    console.log({highLight, dataSet: pThis.dataset});
    let highLightSelected = document.getElementById("highLightSelected");
    highLightSelected.value = highLight; 

    citytech.screen.highLight(highLight);
}

function updatePage(mode){
   let divABC = document.getElementById("screen-display");
  

    let results = generateABC(mode);
    console.log({results});


    divABC.innerHTML = "";
   
    

    let style = "abc";
    if(results.length > 53){
        style = "abcS52";
    }
    else if(results.length < 30){
        style = "abcS26";
    }

    

    let divCount = document.getElementById("counter");
    divCount.innerHTML = results.length;

    results.forEach(e=> {
        let newElement = document.createElement('div');
        newElement.innerHTML = e;
        newElement.classList.add(style);
        divABC.appendChild(newElement);
    });

    let newElement = document.createElement('div');
        newElement.innerHTML = 1;
        newElement.classList.add(style);
        divABC.appendChild(newElement);
    
}

function countFromRadio(pThis){
    let mode = pThis.dataset.mode;
    updatePage(mode);
    console.log({test: new Date(), mode});

    let abcGenerator = document.getElementById("abcGenerator");
    abcGenerator.value = mode;

    let n123Generator = document.getElementById("n123Generator");
    n123Generator.value = mode;

    let highLight = document.getElementById("highLightSelected").value;

    citytech.screen.highLight(highLight);

}



