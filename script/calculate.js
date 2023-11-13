// Triangle Area 
function calculateTriangleArea(){
    const base = getInputValue('input-base');
    const height = getInputValue('input-height');
    if(isNaN(base)|| isNaN(height)){
        alert('Please, Type a number');
        return;
    }
    const area = 0.5 * base * height ;
    setElementValue('triangle-area', area);
}
// Rectangle Area 
function calculateRectangleArea(){
    const width = getInputValue('input-width');
    const length = getInputValue('input-length')
    if(isNaN(width)|| isNaN(length)){
        alert('Please, Type a number');
        return;
    }
    const area = width * length ;
    setElementValue('Rectangle-area', area);
}
// Parallelogram Area 
function calculateParallelogramArea(){
    const baseInput = getInputValue('base-input');
    const heightInput = getInputValue('height-input');
    if(isNaN(baseInput)|| isNaN(heightInput)){
        alert('Please, Type a number');
        return;
    }
    const area = baseInput * heightInput;
    setElementValue('Parallelogram-area', area);
}
// Rhombus Area 
function calculateRhombusArea(){
    const firstD = getInputValue('input-d1');
    const secondD = getInputValue('input-d2');
    if(isNaN(firstD)|| isNaN(secondD)){
        alert('Please, Type a number');
        return;
    }
    const area = 0.5 * firstD * secondD;
    setElementValue('Rhombus-area', area);
    console.log(area);

}
// Pentagon Area 
function calculatePentagonArea(){
    const p = getInputValue('input-p');
    const h = getInputValue('input-h');
    if(isNaN(p)|| isNaN(h)){
        alert('Please, Type a number');
        return;
    }
    const area = 0.5 * p * h;
    setElementValue('Pentagon-area', area);
}
// Ellipse Area 
function calculateEllipseArea(){
    const firstRadius = getInputValue('first-radius');
    const secondRadius = getInputValue('second-radius');
    if(isNaN(firstRadius)|| isNaN(secondRadius)){
        alert('Please, Type a number');
        return;
    }
    const area = 3.14 * firstRadius * secondRadius;
    setElementValue('ellipse-area', area);
}



function getInputValue(field){
    const inputField = document.getElementById(field);
    const inputText = inputField.value ;
    const inputValue = parseFloat(inputText);
    return inputValue;
}

function setElementValue(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}