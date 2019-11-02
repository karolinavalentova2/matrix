"use strict";
let iterator = 0;
let IntroInterval;
let SimonsFaceInterval;
let svgPaths = [];

// TODO: Delete after dev
let idsForSimonsFace = [];

const simonFaceIDS = ["bin-269", "bin-270", "bin-271", "bin-272", "bin-273", "bin-274", "bin-275", "bin-276", "bin-277", "bin-278", "bin-279", "bin-657", "bin-654", "bin-654", "bin-654", "bin-654"]

async function doStart() {
    await loadSVG();
}

async function loadSVG() {
    try {
        const SVGS = {
            binaryCodeSVG: await (await fetch("./images/binary_code.svg")).text(),
        };
        document.getElementById('binaryCodeSvg').innerHTML = SVGS.binaryCodeSVG;

        generateIdOnSvg();

    } catch(error) {
        console.error('Cannot read svg file, reason: ' + error.message);
    }
}

function generateIdOnSvg() {
    const paths = document.getElementById('mainSVG').childNodes;
    paths.forEach((path) => {
        if(path.nodeName === 'path'){
            path['id'] = `bin-${iterator}`;

            svgPaths.push(path);

            //TODO: Remove after development
            path.onclick = () => {
                doResetPathClass(path, 'dark');

                idsForSimonsFace.push(path['id']);

                console.log(idsForSimonsFace);
            };


            iterator++;
        }
    });

    doStartIntroScene();
}

function doStartIntroScene() {
    IntroInterval = setInterval(() => {
        const path = document.getElementById(`bin-${getRandomInt(0, iterator)}`);

        if(!path) return;

        path.classList.remove(...path.classList);

        const random = getRandomInt(1, 3);

        switch (random) {
            case 1: {
                path.classList.add('default');

                break;
            }
            case 2: {
                path.classList.add('dark');

                break;
            }
            case 3: {
                path.classList.add('black');

                break;
            }
            default: {
                break;
            }
        }
    }, 5);

    setTimeout(() => {
        doStop('intro');
    }, 5000);
}

function doStop(scene) {
    switch (scene) {
        case 'intro': {
            clearInterval(IntroInterval);
            doClearScene();

            doStartSimonScene();
            break;
        }
        case 'stopSimonsFace': {
            clearInterval(SimonsFaceInterval);

            break;
        }
        default: {
            break;
        }
    }
}

function doStartSimonScene() {
    let pathNo = 0;

    SimonsFaceInterval = setInterval(() => {
        let pathID = simonFaceIDS[pathNo];

        pathNo++;

        const path = document.getElementById(pathID);
        doResetPathClass(path, 'dark');

        if(!simonFaceIDS[pathNo]) clearInterval(SimonsFaceInterval)
    },50);
}

function doResetPathClass(path, cssClass) {
    // TODO: REMOVE NEXT function and if AFTER DEV

    function doRemoveFromArray(id) {
        idsForSimonsFace.forEach((element, index) => {
            if(element == id) {
                idsForSimonsFace = [];
                idsForSimonsFace = idsForSimonsFace.splice(index);
            }
        })
    }

    if(path.classList.contains('dark')) {
        path.classList.remove('dark');
        path.classList.add('default');
        doRemoveFromArray(path['id']);
        return;
    }

    path.classList.remove(...path.classList);
    path.classList.add(cssClass);
}

function doClearScene() {
    svgPaths.forEach((path) => {
        // Using the spread operator to clone the classList values from path and add them as an argument to .remove (because .remove only removes the classes provided as argument)
        path.classList.remove(...path.classList);

        path.classList.add('default');
    })
}
// Taken from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.onload = doStart;