"use strict";
let iterator = 0;
let IntroInterval;
let SimonsFaceInterval;
let KarolinasFaceInterval;
let svgPaths = [];

// // TODO: Delete after dev
// let idsForSimonsFace = [];
// let idsForKarolinasFace = [];

const simonFaceIDS = ["bin-111", "bin-112", "bin-113", "bin-114", "bin-115", "bin-116", "bin-117", "bin-118", "bin-190", "bin-191", "bin-192", "bin-193", "bin-194", "bin-195", "bin-196", "bin-197", "bin-198", "bin-269", "bin-270", "bin-271", "bin-272", "bin-273", "bin-274", "bin-275", "bin-276", "bin-277", "bin-278", "bin-279", "bin-280", "bin-345", "bin-346", "bin-347", "bin-348", "bin-349", "bin-350", "bin-351", "bin-352", "bin-353", "bin-354", "bin-355", "bin-356", "bin-357", "bin-358", "bin-359", "bin-360", "bin-361", "bin-421", "bin-422", "bin-423", "bin-1600", "bin-439", "bin-497", "bin-498", "bin-516", "bin-517", "bin-573", "bin-574", "bin-591", "bin-592", "bin-649", "bin-650", "bin-670", "bin-728","bin-731", "bin-1634", "bin-732", "bin-745", "bin-746", "bin-803", "bin-804", "bin-805", "bin-806", "bin-807", "bin-808", "bin-809", "bin-810", "bin-811", "bin-816", "bin-817", "bin-818", "bin-819", "bin-823", "bin-961", "bin-980", "bin-1038","bin-1057", "bin-1058", "bin-1114", "bin-1121", "bin-1122", "bin-1123", "bin-1124", "bin-1636", "bin-1125", "bin-1134", "bin-1135", "bin-1194", "bin-1195", "bin-1199","bin-1200", "bin-1209", "bin-1213", "bin-1638", "bin-1214", "bin-1271", "bin-1272", "bin-1273", "bin-1274", "bin-1275", "bin-1276", "bin-1277","bin-1288", "bin-1289", "bin-1290", "bin-1291", "bin-1292", "bin-1293", "bin-1350", "bin-1351", "bin-1352", "bin-1353", "bin-1354", "bin-1355", "bin-1356", "bin-1364", "bin-1365", "bin-1644", "bin-1366", "bin-1367", "bin-1368", "bin-1369", "bin-1430", "bin-1431", "bin-1432", "bin-1433", "bin-1434", "bin-1435", "bin-1436", "bin-1437", "bin-1438", "bin-1439", "bin-1440", "bin-1441", "bin-1442", "bin-1443", "bin-1444", "bin-1445", "bin-1446", "bin-1447", "bin-1511", "bin-1512", "bin-1513", "bin-1514", "bin-1515", "bin-1516", "bin-1517", "bin-1518", "bin-1519", "bin-1520", "bin-1521", "bin-1522", "bin-1523", "bin-1524", "bin-1649", "bin-1655", "bin-1656", "bin-1657", "bin-1658", "bin-1659", "bin-1660", "bin-1661", "bin-1662", "bin-1663", "bin-1664", "bin-1665"];
const karolinaFaceIDS = ["bin-196", "bin-197", "bin-198", "bin-199", "bin-200", "bin-201", "bin-202", "bin-205", "bin-206", "bin-270", "bin-271", "bin-272", "bin-273", "bin-274", "bin-275", "bin-276", "bin-277", "bin-281", "bin-284", "bin-347", "bin-348", "bin-349", "bin-350", "bin-351", "bin-352", "bin-353", "bin-361", "bin-364", "bin-423", "bin-424", "bin-425", "bin-426", "bin-427", "bin-428", "bin-429", "bin-1600", "bin-441", "bin-498", "bin-499", "bin-500", "bin-501", "bin-502", "bin-503", "bin-504", "bin-505", "bin-506", "bin-513", "bin-514", "bin-516", "bin-519", "bin-575", "bin-576", "bin-577", "bin-1609", "bin-578", "bin-579", "bin-580", "bin-581", "bin-582", "bin-583", "bin-587", "bin-588", "bin-591", "bin-594", "bin-650", "bin-651", "bin-652", "bin-653", "bin-654", "bin-655", "bin-656", "bin-657", "bin-672", "bin-728", "bin-729", "bin-730", "bin-731", "bin-1634", "bin-732", "bin-733", "bin-738", "bin-803", "bin-804", "bin-805", "bin-806", "bin-807", "bin-808", "bin-809", "bin-821", "bin-825", "bin-883", "bin-884", "bin-885", "bin-886", "bin-887", "bin-888", "bin-889", "bin-890", "bin-893", "bin-894","bin-895", "bin-896", "bin-901", "bin-906", "bin-962", "bin-963", "bin-964", "bin-965", "bin-966", "bin-967", "bin-968", "bin-969", "bin-976", "bin-977", "bin-983", "bin-1040", "bin-1629", "bin-1041", "bin-1042", "bin-1043", "bin-1630", "bin-1044", "bin-1045", "bin-1046", "bin-1047", "bin-1048", "bin-1049", "bin-1050", "bin-1051", "bin-1052", "bin-1053", "bin-1061", "bin-1116", "bin-1117", "bin-1118", "bin-1119", "bin-1120", "bin-1121", "bin-1122", "bin-1123", "bin-1636", "bin-1125", "bin-1126", "bin-1127", "bin-1128", "bin-1137", "bin-1197", "bin-1198", "bin-1199", "bin-1200", "bin-1201", "bin-1637", "bin-1202", "bin-1203", "bin-1205", "bin-1206", "bin-1207", "bin-1209", "bin-1215","bin-1274", "bin-1275", "bin-1276", "bin-1277", "bin-1278", "bin-1279", "bin-1280", "bin-1281", "bin-1282", "bin-1283", "bin-1284", "bin-1286", "bin-1293", "bin-1351", "bin-1352", "bin-1353", "bin-1354", "bin-1355", "bin-1356", "bin-1357", "bin-1358", "bin-1360", "bin-1365", "bin-1645", "bin-1428", "bin-1429", "bin-1430", "bin-1431", "bin-1432", "bin-1433", "bin-1434", "bin-1435", "bin-1436", "bin-1437", "bin-1443", "bin-1450", "bin-1507", "bin-1508", "bin-1509", "bin-1510", "bin-1511", "bin-1512", "bin-1513", "bin-1514", "bin-1515", "bin-1516", "bin-1521", "bin-1527", "bin-1650", "bin-1651", "bin-1652", "bin-1653", "bin-1654", "bin-1655", "bin-1656", "bin-1657", "bin-1663", "bin-1669", "bin-1730", "bin-1731", "bin-1732", "bin-1733", "bin-1734", "bin-1735", "bin-1736", "bin-1737", "bin-1738", "bin-1745", "bin-1751"];


async function doStart() {
    await loadSVG();
    playBackground();
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

            // //TODO: Remove after development
            // path.onclick = () => {
            //     doResetPathClass(path, 'dark');
            //
            //     idsForKarolinasFace.push(path['id']);
            //     console.log(idsForKarolinasFace);
            // };


            iterator++;
        }
    });

    doStartIntroScene();
}

function doStartIntroScene() {
    addElementToHTML('assignmentNumberTemplate', 'assignmentNumberContainer');

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
            removeElementFromHTML('assignmentNumberContainer');

            addElementToHTML('logoTemplate', 'logoContainer');
            setTimeout(() => {
                doStop('stopLogo');
            }, 5000);
            break;
        }
        case 'stopLogo': {
            removeElementFromHTML('logoContainer');

            doStartSimonScene();
            break;
        }
        case 'stopSimonsFace': {
            doClearScene();

            doStartKarolinaScene();
            break;
        }
        case 'stopKarolinasFace': {
            doClearScene();

            addElementToHTML('groupImgTemplate', 'groupImg');
            setTimeout(() => {
                doStop('stopGroupImg');
            }, 5000);
            break;
        }
        case 'stopGroupImg': {
            removeElementFromHTML('groupImg');

            doStartVideoScene();
            break;
        }
        default: {
            break;
        }
    }
}

function addElementToHTML(templateId, element) {
    const entryTemplate = document.getElementById(templateId);
    const newTempEntry = entryTemplate.content.cloneNode(true);

    newTempEntry.firstElementChild;

    document.getElementById(element).appendChild(newTempEntry);
}

function removeElementFromHTML(element) {
    const node = document.getElementById(element);
    while (node.firstChild) {
        node.removeChild(node.firstChild);
    }
}

function doStartSimonScene() {
    let pathNo = 0;

    SimonsFaceInterval = setInterval(() => {
        let pathID = simonFaceIDS[pathNo];
        pathNo++;

        if(!simonFaceIDS[pathNo]) {
            clearInterval(SimonsFaceInterval);

            setTimeout(() => {
                doStop('stopSimonsFace');
            }, 1000);
        }

        const path = document.getElementById(pathID);
        doResetPathClass(path, 'dark');

    },30);
}

function doStartKarolinaScene() {
    let pathNo = 0;

    KarolinasFaceInterval = setInterval(() => {
        let pathID = karolinaFaceIDS[pathNo];
        pathNo++;

        if(!karolinaFaceIDS[pathNo]) {
            clearInterval(KarolinasFaceInterval);

            setTimeout(() => {
                doStop('stopKarolinasFace');
            }, 1000);
        }

        const path = document.getElementById(pathID);
        doResetPathClass(path, 'dark');

    },30);
}

function doResetPathClass(path, cssClass) {
    // TODO: REMOVE NEXT function and if AFTER DEV

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

function playBackground(){
//Using howler library to play the sound
//     const backgroundMusic = new Audio("./images/matrix.mp3");
//     const play = backgroundMusic.play();
//     play.currentTime = 25;

    // const audio = document.getElementById("audioPlay");
    // audio.currentTime = 25;
    // audio.parentElement.removeAttribute('muted')
    // audio.play();
}

async function doStartVideoScene() {
    try {
        const SVGS = {
            video: await (await fetch("./images/video_matrix.svg")).text(),
        };
        document.getElementById('binaryCodeSvg').innerHTML = SVGS.video;


    } catch(error) {
        console.error('Cannot read svg file, reason: ' + error.message);
    }
}


// Source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.body.onload = doStart;
