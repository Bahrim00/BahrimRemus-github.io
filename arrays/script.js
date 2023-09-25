// Define an empty array
let myArray = [0, 1, 2, 3, 4];

function updateArrayElements() {
    const arrayElementsContainer = document.getElementById('arrayElements');
    // Clear existing elements
    arrayElementsContainer.innerHTML = '';

    // Add elements from the array
    myArray.forEach((element, index) => {
        const newElement = document.createElement('div');
        newElement.className = 'array_element';
        newElement.textContent = element;
        arrayElementsContainer.appendChild(newElement);
    });
}

function displayTextInArrayOperations(text) {
    const arrayOperationsText = document.getElementById('arrayOperationsText');
    arrayOperationsText.textContent = text;
}



function arrayPush() {
    myArray.push(50);
    updateArrayElements();
    displayTextInArrayOperations('S-a adaugat elementul "50" la sfarsitul array-ului.');
}

function arrayPop() {
    // Pop an element from the end of the array
    if (myArray.length > 0) {
        myArray.pop();
        updateArrayElements();
        displayTextInArrayOperations('S-a sters ultimul element din array.');
    } else {
        displayTextInArrayOperations('Array-ul este gol.');
    }
}

function arrayShift() {
    // Shift an element from the beginning of the array
    if (myArray.length > 0) {
        const shiftedElement = myArray.shift();
        updateArrayElements();
        displayTextInArrayOperations(`S-a sters si sa salvat primul element din array : ${shiftedElement}`);
    } else {
        displayTextInArrayOperations('Array-ul este gol.');
    }
}

function arrayUnshift() {
    // Unshift an element (10) to the beginning of the array
    myArray.unshift(10);
    updateArrayElements();
    displayTextInArrayOperations('S-a adaugat elementul "10" la inceputul array-ului.');
}

function arraySlice() {
    // Slice a portion of the array and display it
    const slicedArray = myArray.slice(1, 3); // Slice elements from index 1 to 2
    displayTextInArrayOperations(`S-a creeat un array nou de la elementul 1 pana la elementul 3, acesta fiind: newElement = [${slicedArray.join(', ')}];`);
}

function arraySplice() {
    // Splice the array and display the removed elements
    if (myArray.length > 2) {
        const removedElements = myArray.splice(1, 2); // Remove 2 elements starting from index 1
        updateArrayElements();
        displayTextInArrayOperations(`S-au sters 2 elemente incepand de la index 1: [${removedElements.join(', ')}]`);
    } else {
        displayTextInArrayOperations('Array-ul trebuie sa aiba cel putin 3 elemente..');
    }
}

function arrayConcat() {
    // Concatenate two arrays and display the result
    const arrayToConcat = [20, 30, 40];
    const concatenatedArray = myArray.concat(arrayToConcat);
    updateArrayElements();
    displayTextInArrayOperations(`Noul array-ul concatenat: [${concatenatedArray.join(', ')}]`
    );
}

// Initial rendering of array elements
updateArrayElements();
