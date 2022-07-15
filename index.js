let myChart = document.getElementById("myChart").getContext('2d');
let labels = [];
let arrayValues = [];
let backgroundColor = [];

//create 70 random numbers to put in arrayValues
for (i = 0; i < 70; i++){
    arrayValues[i] = Math.floor(Math.random() * 100) + 5;
}
console.log(arrayValues)
//push one label per arrayValue
for (i = 1; i < arrayValues.length + 1; i++) {
    labels.push(i);
}

//create background colors for each bar
for (i = 0; i < 70; i++){
    backgroundColor[i] = '#DCD7C9';
}

// function renderChart()
const ctx = document.getElementById('myChart');
const sortingChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Random #',
            data: arrayValues,
            backgroundColor: backgroundColor,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            duration: 0
        }
    }
});

function randomizeChart(){
    location.reload();
}

function changeBarColor(){

}

function updateChart(arrayValues){
        sortingChart.data.datasets.data = arrayValues;
        sortingChart.update();
}

function delay(){
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 50)
    })
}

let bubbleSortRunning = false;
//bubble sort algorithm 
async function bubbleSort(){
    
    if (bubbleSortRunning === false){
    bubbleSortRunning = true;
    bubbleText();
    for(var i = 0; i < arrayValues.length; i++) {
        
        for(var j = 0; j < (arrayValues.length - i - 1); j++){
            
                if (arrayValues[j] > arrayValues[j + 1]){
                  var temp = arrayValues[j];
                  arrayValues[j] = arrayValues[j + 1];
                  arrayValues[j + 1] = temp;
                  console.log(arrayValues);
                  updateChart(arrayValues);
                  await delay();
                 } 
                 
        }
        
    }
}
}


//Merge sort algorithm

function quickSort(arrayValues){
    if (arrayValues.length === 1){
        return arrayValues;
    }

    const pivot = arrayValues[arrayValues.length - 1];
    const leftArr = [];
    const rightArr = [];
    //setting values smaller than pivot to leftArr and all others to rightArr
    for (let i = 0; i < arrayValues.length - 1; i++){
        if (arrayValues[i] < pivot){
            leftArr.push(arrayValues[i]);
        }else {
            rightArr.push(arrayValues[i]);
        }
    }

    if (leftArr.length > 0 && rightArr.length > 0){
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
    } else if (leftArr.length > 0) {
        return [...quickSort(leftArr), pivot];
    } else {
        return [pivot, ...quickSort(rightArr)]
    }
}

var header = document.getElementById('header');
var text = document.getElementById('explanation');
var image = document.getElementById('bubbleSortPicture');
var bubbleSortingAlgo = document.getElementById('bubble_sort_algorithm');
var bubbleTimeComp = document.getElementById('bubbleTimeComplex');

function bubbleText(){
    if (header.style.display === 'none') {
        header.style.display = 'block';
    } else {
        header.style.display = 'none';
    }

    if (text.style.display === 'none') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }

    if (image.style.display === 'none') {
        image.style.display = 'block';
    } else {
        image.style.display = 'none';
    }

    if (bubbleSortingAlgo.style.display === 'none') {
        bubbleSortingAlgo.style.display = 'block';
    } else {
        bubbleSortingAlgo.style.display = 'none';
    }

    if (bubbleTimeComp.style.display === 'none') {
        bubbleTimeComp.style.display = 'block';
    } else {
        bubbleTimeComp.style.display = 'none';
    }
}