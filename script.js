let currentLevel = 1;
if (currentLevel === 1) {
    level1();
}

function level1() {

    var container = document.querySelector('.container');
    var htmlCode = `
        <div class="square green" id="square1">a băga</div>
        <div class="square" id="square2"></div>
        <div class="square yellow" id="square3">a da</div>
        <div class="square mov" id="square4">a o lua</div>
        <div class="square target2" id="square5">năvală</div>
        <div class="square" id="square6"></div>
        <div class="square" id="square7"></div>
        <div class="square" id="square8"></div>
        <div class="square" id="square9"></div>
        <div class="square target1" id="square10">de seamă</div>
        <div class="square" id="square11"></div>
        <div class="square" id="square12"></div>
        <div class="square" id="square13"></div>
        <div class="square" id="square14"></div>
        <div class="square" id="square15"></div>
        <div class="square target3" id="square16">la fugă</div>
        <h3 class="levelStatus">Level 1</h3>
        <div class="buttons">
            <button class="reset" onClick="level1()">Resetează</button>
            <button class="nextLevel" onClick="level2()">Nivelul Următor</button>
        </div>
        <h4 class='indiciu'>Pentru a trece la nivelul urmator, trebuie sa conectati
        toate cuvintele, incepand de la patratul colorat.
        Si de asemenea, toate patratele trebuiesc sa fie colorate.<h3>
    `;

    container.innerHTML = htmlCode;
    container.setAttribute('style', `
        display: grid;
        grid-template-columns: repeat(4, 15vh);
        grid-template-rows: repeat(4, 15vh);
        width: 100vh;
        height: 100vh;
        background-color: antiquewhite;
        margin: auto;
        padding-top: 3vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 5px gray solid;
        border-radius: 50px;
    `);

    let squares = container.querySelectorAll('.square');

    let squareArray = Array.from(squares);

    squareArray[0].addEventListener('mousedown', () => {
        squareArray[0].classList.add('connected');
        container.addEventListener('mouseover', addGreenClass);
        document.addEventListener('mouseup', stopAddingGreenClass);
        document.querySelector('.target1').addEventListener('mouseenter', stopAddingGreenClass);
        target1 = true;
    });

    function addGreenClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[0] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('green');
            targetElement.classList.add('connected');
        }
    }

    squareArray[2].addEventListener('mousedown', () => {
        squareArray[2].classList.add('connected');
        container.addEventListener('mouseover', addYellowClass);
        document.addEventListener('mouseup', stopAddingYellowClass);
        document.querySelector('.target2').addEventListener('mouseenter', stopAddingYellowClass);
        target2 = true;
    });
    function addYellowClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[2] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('yellow');
            targetElement.classList.add('connected');
        }
    }

    squareArray[3].addEventListener('mousedown', () => {
        squareArray[3].classList.add('connected');
        container.addEventListener('mouseover', addMovClass);
        document.addEventListener('mouseup', stopAddingMovClass);
        document.querySelector('.target3').addEventListener('mouseenter', stopAddingMovClass);
        target3 = true;

    });
    function addMovClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[3] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('mov');
            targetElement.classList.add('connected');
        }
    }


    function stopAddingGreenClass() {
        container.removeEventListener('mouseover', addGreenClass);
        document.removeEventListener('mouseup', stopAddingGreenClass);
        checkSquaresLvl1()

    }

    function stopAddingYellowClass() {
        container.removeEventListener('mouseover', addYellowClass);
        document.removeEventListener('mouseup', stopAddingYellowClass);
        checkSquaresLvl1()

    }

    function stopAddingMovClass() {
        container.removeEventListener('mouseover', addMovClass);
        document.removeEventListener('mouseup', stopAddingMovClass);
        checkSquaresLvl1()
    }

    function checkSquaresLvl1() {
        const squares = document.getElementsByClassName('square');
        const connectedSquares = Array.from(squares).every(square => square.classList.contains('connected'));

        if (connectedSquares) {
            level2();
        }
    }


};
function level2() {
    console.log('lvl2')

    var container = document.querySelector('.container');
    var htmlCode = `
        <div class="square green" id="square1"> a sta</div>
        <div class="square" id="square2"></div>
        <div class="square" id="square3"></div>
        <div class="square" id="square4"></div>
        <div class="square" id="square5"></div>
        <div class="square yellow" id="square6">a face</div>
        <div class="square" id="square7"></div>
        <div class="square" id="square8"></div>
        <div class="square" id="square9"></div>
        <div class="square" id="square10"></div>
        <div class="square" id="square11"></div>
        <div class="square" id="square12"></div>
        <div class="square target2" id="square13">rost</div>
        <div class="square" id="square14"></div>
        <div class="square" id="square15"></div>
        <div class="square" id="square16"></div>
        <div class="square mov" id="square17">a lua</div>
        <div class="square" id="square18"></div>
        <div class="square" id="square19"></div>
        <div class="square" id="square20"></div>
        <div class="square" id="square21"></div>
        <div class="square" id="square22"></div>
        <div class="square" id="square23"></div>
        <div class="square target3" id="square24">peste picior</div>
        <div class="square target1" id="square25">de veghe</div>
        <h3 class="levelStatus">Level 2</h3>
        <div class="buttons">
            <button class="prevLevel" onClick="level1()">Nivelul Anterior</button>
            <button class="reset" onClick="level2()">Reseteaza</button>
            <button class="nextLevel" onClick="level3()">Nivelul Urmator</button>
        </div>
    `;

    // nu se opreste de schimbat fundalul atunci cand ajung
    // pe elementul tinta

    container.innerHTML = htmlCode;
    container.setAttribute('style', `
        display: grid;
        grid-template-columns: repeat(5, 13vh);
        grid-template-rows: repeat(5, 13vh);
        width: 100vh;
        height: 100vh;
        background-color: antiquewhite;
        margin: auto;
        padding-top: 3vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 5px gray solid;
        border-radius: 50px;
    `);

    let squares = container.querySelectorAll('.square');

    let squareArray = Array.from(squares);

    let isMouseDown = true;
    let target1 = false
    let target2 = false
    let target3 = false

    squareArray[0].addEventListener('mousedown', () => {
        squareArray[0].classList.add('connected');
        container.addEventListener('mouseover', addGreenClass);
        document.addEventListener('mouseup', stopAddingGreenClass);
        document.querySelector('.target1').addEventListener('mouseenter', stopAddingGreenClass);
        target1 = true;
    });

    function addGreenClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[0] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('green');
            targetElement.classList.add('connected');
        }
    }

    squareArray[5].addEventListener('mousedown', () => {
        squareArray[5].classList.add('connected');
        container.addEventListener('mouseover', addYellowClass);
        document.addEventListener('mouseup', stopAddingYellowClass);
        document.querySelector('.target2').addEventListener('mouseenter', stopAddingYellowClass);
        target2 = true;
    });
    function addYellowClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[2] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('yellow');
            targetElement.classList.add('connected');
        }
    }

    squareArray[16].addEventListener('mousedown', () => {
        squareArray[16].classList.add('connected');
        container.addEventListener('mouseover', addMovClass);
        document.addEventListener('mouseup', stopAddingMovClass);
        document.querySelector('.target3').addEventListener('mouseenter', stopAddingMovClass);
        target3 = true;

    });
    function addMovClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[3] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('mov');
            targetElement.classList.add('connected');
        }
    }


    function stopAddingGreenClass() {
        container.removeEventListener('mouseover', addGreenClass);
        document.removeEventListener('mouseup', stopAddingGreenClass);
        checkSquaresLvl2()
    }

    function stopAddingYellowClass() {
        container.removeEventListener('mouseover', addYellowClass);
        document.removeEventListener('mouseup', stopAddingYellowClass);
        checkSquaresLvl2()
    }

    function stopAddingMovClass() {
        container.removeEventListener('mouseover', addMovClass);
        document.removeEventListener('mouseup', stopAddingMovClass);
        checkSquaresLvl2()
    }

    function checkSquaresLvl2() {
        const squares = document.getElementsByClassName('square');
        const connectedSquares = Array.from(squares).every(square => square.classList.contains('connected'));

        if (connectedSquares) {
            level3();
        }
    }
};
function level3() {
    console.log('lvl3')

    var container = document.querySelector('.container');
    var htmlCode = `
    <div class="square red" id="square1">a face</div>
    <div class="square" id="square2"></div>
    <div class="square" id="square3"></div>
    <div class="square" id="square4"></div>
    <div class="square" id="square5"></div>
    <div class="square yellow" id="square6">a da</div>
    <div class="square" id="square7"></div>
    <div class="square" id="square8"></div>
    <div class="square" id="square9"></div>
    <div class="square target1" id="square10">demascări</div>
    <div class="square" id="square11"></div>
    <div class="square" id="square12"></div>
    <div class="square green" id="square13">a lua</div>
    <div class="square" id="square14"></div>
    <div class="square target2" id="square15">ortul popii</div>
    <div class="square" id="square16"></div>
    <div class="square mov" id="square17">a trage</div>
    <div class="square" id="square18"></div>
    <div class="square" id="square19"></div>
    <div class="square" id="square20"></div>
    <div class="square" id="square21"></div>
    <div class="square" id="square22"></div>
    <div class="square target3" id="square23">la bani mărunți</div>
    <div class="square target4" id="square24">pe sfoară</div>
    <div class="square" id="square25"></div>
    <h3 class="levelStatus">Level 3</h3>

    <div class="buttons">
            <button class="prevLevel" onClick="level2()">Nivelul Anterior</button>
            <button class="reset" onClick="level3()">Reseteaza</button>
            <button class="nextLevel" onClick="level4()">Nivelul Urmator</button>
    </div>

    `;

    container.innerHTML = htmlCode;
    container.setAttribute('style', `
        display: grid;
        grid-template-columns: repeat(5, 13vh);
        grid-template-rows: repeat(5, 13vh);
        width: 100vh;
        height: 100vh;
        background-color: antiquewhite;
        margin: auto;
        padding-top: 3vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 5px gray solid;
        border-radius: 50px;

    `);

    let squares = container.querySelectorAll('.square');

    let squareArray = Array.from(squares);
    let target1 = false
    let target2 = false
    let target3 = false
    let target4 = false

    squareArray[0].addEventListener('mousedown', () => {
        squareArray[0].classList.add('connected');
        container.addEventListener('mouseover', addRedClass);
        document.addEventListener('mouseup', stopAddingRedClass);
        document.querySelector('.target1').addEventListener('mouseenter', stopAddingRedClass);
        target1 = true;
    });

    function addRedClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[0] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('red');
            targetElement.classList.add('connected');
        }
    }

    squareArray[5].addEventListener('mousedown', () => {
        squareArray[5].classList.add('connected');
        container.addEventListener('mouseover', addYellowClass);
        document.addEventListener('mouseup', stopAddingYellowClass);
        document.querySelector('.target2').addEventListener('mouseenter', stopAddingYellowClass);
        target2 = true;
    });
    function addYellowClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[2] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('yellow');
            targetElement.classList.add('connected');
        }
    }

    squareArray[12].addEventListener('mousedown', () => {
        squareArray[12].classList.add('connected');
        container.addEventListener('mouseover', addGreenClass);
        document.addEventListener('mouseup', stopAddingGreenClass);
        document.querySelector('.target3').addEventListener('mouseenter', stopAddingGreenClass);
        target3 = true;

    });
    function addGreenClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[3] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('green');
            targetElement.classList.add('connected');
        }
    }

    squareArray[16].addEventListener('mousedown', () => {
        squareArray[16].classList.add('connected');
        container.addEventListener('mouseover', addMovClass);
        document.addEventListener('mouseup', stopAddingMovClass);
        document.querySelector('.target3').addEventListener('mouseenter', stopAddingMovClass);
        target4 = true;

    });
    function addMovClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[3] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('mov');
            targetElement.classList.add('connected');
        }
    }


    function stopAddingMovClass() {
        container.removeEventListener('mouseover', addMovClass);
        document.removeEventListener('mouseup', stopAddingMovClass);
        checkSquaresLvl3();
    }

    function stopAddingYellowClass() {
        container.removeEventListener('mouseover', addYellowClass);
        document.removeEventListener('mouseup', stopAddingYellowClass);
        checkSquaresLvl3();
    }

    function stopAddingGreenClass() {
        container.removeEventListener('mouseover', addGreenClass);
        document.removeEventListener('mouseup', stopAddingGreenClass);
        checkSquaresLvl3();
    };

    function stopAddingRedClass() {
        container.removeEventListener('mouseover', addRedClass);
        document.removeEventListener('mouseup', stopAddingRedClass);

        checkSquaresLvl3();
    }
    function checkSquaresLvl3() {
        const squares = document.getElementsByClassName('square');
        const connectedSquares = Array.from(squares).every(square => square.classList.contains('connected'));

        if (connectedSquares) {
            level4();
        }
    }
};
function level4() {
    console.log('lvl4')

    var container = document.querySelector('.container');
    var htmlCode = `
    <div class="square" id="square1"></div>
    <div class="square" id="square2"></div>
    <div class="square" id="square3"></div>
    <div class="square red" id="square4">a da</div>
    <div class="square" id="square5"></div>
    <div class="square" id="square6"></div>
    <div class="square" id="square7"></div>
    <div class="square yellow" id="square8">a-și lua</div>
    <div class="square" id="square9"></div>
    <div class="square" id="square10"></div>
    <div class="square" id="square11"></div>
    <div class="square" id="square12"></div>
    <div class="square" id="square13"></div>
    <div class="square green" id="square14">a se lua</div>
    <div class="square" id="square15"></div>
    <div class="square" id="square16"></div>
    <div class="square" id="square17"></div>
    <div class="square" id="square18"></div>
    <div class="square" id="square19"></div>
    <div class="square" id="square20"></div>
    <div class="square mov" id="square21">a face</div>
    <div class="square target3" id="square22">la harța</div>
    <div class="square" id="square23"></div>
    <div class="square" id="square24"></div>
    <div class="square target4" id="square25">pe prostul</div>
    <div class="square target1" id="square26">mură in gură</div>
    <div class="square" id="square27"></div>
    <div class="square" id="square28"></div>
    <div class="square" id="square29"></div>
    <div class="square" id="square30"></div>
    <div class="square" id="square31"></div>
    <div class="square" id="square32"></div>
    <div class="square" id="square33"></div>
    <div class="square" id="square34"></div>
    <div class="square" id="square35"></div>
    <div class="square target2" id="square36">inima in dinți</div>
    <h3 class="levelStatus">Level 4</h3>
    <div class="buttons">
            <button class="prevLevel" onClick="level3()">Nivelul Anterior</button>
            <button class="reset" onClick="level4()">Reseteaza</button>
            <button class="nextLevel" onClick="level5()">Nivelul Urmator</button>
    </div>
    `;

    container.innerHTML = htmlCode;
    container.setAttribute('style', `
        display: grid;
        grid-template-columns: repeat(6, 12vh);
        grid-template-rows: repeat(6, 12vh);
        width: 100vh;
        height: 100vh;
        background-color: antiquewhite;
        margin: auto;
        padding-top: 3vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 5px gray solid;
        border-radius: 50px;

    `);

    let squares = container.querySelectorAll('.square');

    let squareArray = Array.from(squares);
    let target1 = false
    let target2 = false
    let target3 = false
    let target4 = false
    let target5 = false

    squareArray[3].addEventListener('mousedown', () => {
        squareArray[3].classList.add('connected');
        container.addEventListener('mouseover', addRedClass);
        document.addEventListener('mouseup', stopAddingRedClass);
        document.querySelector('.target1').addEventListener('mouseenter', stopAddingRedClass);
        target1 = true;
    });

    function addRedClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[3] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('red');
            targetElement.classList.add('connected');
        }
    }

    squareArray[7].addEventListener('mousedown', () => {
        squareArray[7].classList.add('connected');
        container.addEventListener('mouseover', addYellowClass);
        document.addEventListener('mouseup', stopAddingYellowClass);
        document.querySelector('.target2').addEventListener('mouseenter', stopAddingYellowClass);
        target2 = true;
    });
    function addYellowClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[7] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('yellow');
            targetElement.classList.add('connected');
        }
    }

    squareArray[13].addEventListener('mousedown', () => {
        squareArray[13].classList.add('connected');
        container.addEventListener('mouseover', addGreenClass);
        document.addEventListener('mouseup', stopAddingGreenClass);
        document.querySelector('.target3').addEventListener('mouseenter', stopAddingGreenClass);
        target3 = true;

    });
    function addGreenClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[13] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('green');
            targetElement.classList.add('connected');
        }
    }

    squareArray[20].addEventListener('mousedown', () => {
        squareArray[20].classList.add('connected');
        container.addEventListener('mouseover', addMovClass);
        document.addEventListener('mouseup', stopAddingMovClass);
        document.querySelector('.target3').addEventListener('mouseenter', stopAddingMovClass);
        target4 = true;

    });
    function addMovClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[20] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('mov');
            targetElement.classList.add('connected');
        }
    }


    function stopAddingMovClass() {
        container.removeEventListener('mouseover', addMovClass);
        document.removeEventListener('mouseup', stopAddingMovClass);
        checkSquaresLvl4();
    }

    function stopAddingYellowClass() {
        container.removeEventListener('mouseover', addYellowClass);
        document.removeEventListener('mouseup', stopAddingYellowClass);
        checkSquaresLvl4();
    }

    function stopAddingGreenClass() {
        container.removeEventListener('mouseover', addGreenClass);
        document.removeEventListener('mouseup', stopAddingGreenClass);
        checkSquaresLvl4();
    };

    function stopAddingRedClass() {
        container.removeEventListener('mouseover', addRedClass);
        document.removeEventListener('mouseup', stopAddingRedClass);

        checkSquaresLvl4();
    }
    function checkSquaresLvl4() {
        const squares = document.getElementsByClassName('square');
        const connectedSquares = Array.from(squares).every(square => square.classList.contains('connected'));

        if (connectedSquares) {
            level5()
        }
    }
};
function level5() {
    console.log('lvl5')
    //red,yellow,black,mov,blue
    var container = document.querySelector('.container');
    var htmlCode = `
    <div class="square" id="square1"></div>
    <div class="square" id="square2"></div>
    <div class="square" id="square3"></div>
    <div class="square red" id="square4">a se</div>
    <div class="square" id="square5"></div>
    <div class="square mov" id="square6">a face</div>
    <div class="square" id="square7"></div>
    <div class="square" id="square8"></div>
    <div class="square" id="square9"></div>
    <div class="square" id="square10"></div>
    <div class="square" id="square11"></div>
    <div class="square blue" id="square12">a pune</div>
    <div class="square target1" id="square13">ingrijora</div>
    <div class="square" id="square14"></div>
    <div class="square yellow" id="square15">a se da</div>
    <div class="square" id="square16"></div>
    <div class="square" id="square17"></div>
    <div class="square" id="square18"></div>
    <div class="square target2" id="square19">de ceasul morții</div>
    <div class="square" id="square20"></div>
    <div class="square" id="square21"></div>
    <div class="square" id="square22"></div>
    <div class="square" id="square23"></div>
    <div class="square" id="square24"></div>
    <div class="square" id="square25"></div>
    <div class="square green" id="square26">a sta</div>
    <div class="square" id="square27"></div>
    <div class="square" id="square28"></div>
    <div class="square target4" id="square29"> cale intoarsă</div>
    <div class="square" id="square30"></div>
    <div class="square" id="square31"></div>
    <div class="square" id="square32"></div>
    <div class="square" id="square33"></div>
    <div class="square target3" id="square34">pe gânduri</div>
    <div class="square target5" id="square35">pofta-n cui</div>
    <div class="square" id="square36"></div>
    <h3 class="levelStatus">Level 5</h3>
    <div class="buttons">
            <button class="reset" onClick="level5()">Resetează</button>
            <button class="prevLevel" onClick="level4()">Nivelul Anterior</button>
    </div>
    `;

    container.innerHTML = htmlCode;
    container.setAttribute('style', `
        display: grid;
        grid-template-columns: repeat(6, 12vh);
        grid-template-rows: repeat(6, 12vh);
        width: 100vh;
        height: 100vh;
        background-color: antiquewhite;
        margin: auto;
        padding-top: 3vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        border: 5px gray solid;
        border-radius: 50px;

    `);

    let squares = container.querySelectorAll('.square');

    let squareArray = Array.from(squares);
    let target1 = false
    let target2 = false
    let target3 = false
    let target4 = false
    let target5 = false

    squareArray[3].addEventListener('mousedown', () => {
        squareArray[3].classList.add('connected');
        container.addEventListener('mouseover', addRedClass);
        document.addEventListener('mouseup', stopAddingRedClass);
        document.querySelector('.target1').addEventListener('mouseenter', stopAddingRedClass);
        target1 = true;
    });

    function addRedClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[3] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('red');
            targetElement.classList.add('connected');
        }
    }




    squareArray[14].addEventListener('mousedown', () => {
        squareArray[14].classList.add('connected');
        container.addEventListener('mouseover', addYellowClass);
        document.addEventListener('mouseup', stopAddingYellowClass);
        document.querySelector('.target2').addEventListener('mouseenter', stopAddingYellowClass);
        target2 = true;
    });
    function addYellowClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[14] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('yellow');
            targetElement.classList.add('connected');
        }
    }




    squareArray[25].addEventListener('mousedown', () => {
        squareArray[25].classList.add('connected');
        container.addEventListener('mouseover', addGreenClass);
        document.addEventListener('mouseup', stopAddingGreenClass);
        document.querySelector('.target3').addEventListener('mouseenter', stopAddingGreenClass);
        target3 = true;

    });
    function addGreenClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[25] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('green');
            targetElement.classList.add('connected');
        }
    }



    squareArray[5].addEventListener('mousedown', () => {
        squareArray[5].classList.add('connected');
        container.addEventListener('mouseover', addMovClass);
        document.addEventListener('mouseup', stopAddingMovClass);
        document.querySelector('.target4').addEventListener('mouseenter', stopAddingMovClass);
        target4 = true;

    });
    function addMovClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[5] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('mov');
            targetElement.classList.add('connected');
        }
    }





    squareArray[11].addEventListener('mousedown', () => {
        squareArray[11].classList.add('connected');
        container.addEventListener('mouseover', addBlueClass);
        document.addEventListener('mouseup', stopAddingBlueClass);
        document.querySelector('.target5').addEventListener('mouseenter', stopAddingBlueClass);
        target5 = true;

    });
    function addBlueClass(event) {
        const targetElement = event.target;
        if (targetElement !== squareArray[11] && targetElement !== container && !targetElement.classList.contains('connected')) {
            targetElement.classList.add('blue');
            targetElement.classList.add('connected');
        }
    }




    function stopAddingMovClass() {
        container.removeEventListener('mouseover', addMovClass);
        document.removeEventListener('mouseup', stopAddingMovClass);
        checkSquaresLvl5();
    }

    function stopAddingYellowClass() {
        container.removeEventListener('mouseover', addYellowClass);
        document.removeEventListener('mouseup', stopAddingYellowClass);
        checkSquaresLvl5();
    }

    function stopAddingGreenClass() {
        container.removeEventListener('mouseover', addGreenClass);
        document.removeEventListener('mouseup', stopAddingGreenClass);
        checkSquaresLvl5();
    };

    function stopAddingBlueClass() {
        container.removeEventListener('mouseover', addBlueClass);
        document.removeEventListener('mouseup', stopAddingBlueClass);
        checkSquaresLvl5();
    };

    function stopAddingRedClass() {
        container.removeEventListener('mouseover', addRedClass);
        document.removeEventListener('mouseup', stopAddingRedClass);

        checkSquaresLvl5();
    }
    function checkSquaresLvl5() {
        const squares = document.getElementsByClassName('square');
        const connectedSquares = Array.from(squares).every(square => square.classList.contains('connected'));

        if (connectedSquares) {
            //gameOver()
        }
    }

};

