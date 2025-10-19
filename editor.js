const board = document.createElement("div");
board.id = "board";
const mainCanvas = document.createElement("canvas"); //main canvas
mainCanvas.id = "myCanvas";
const mainCtx = mainCanvas.getContext("2d");

let atlas = new Image();
atlas.src = "Images/atlas.png";
let letters = {
    "A": {x: 0, y: 0, width: 25, height: 25},
    "B": {x: 25, y: 0, width: 25, height: 25},
    "C": {x: 50, y: 0, width: 25, height: 25},
    "D": {x: 75, y: 0, width: 25, height: 25},
    "E": {x: 100, y: 0, width: 25, height: 25},
    "F": {x: 125, y: 0, width: 25, height: 25},
    "G": {x: 150, y: 0, width: 25, height: 25},
    "H": {x: 175, y: 0, width: 25, height: 25},
    "I": {x: 200, y: 0, width: 25, height: 25},
    "J": {x: 225, y: 0, width: 25, height: 25},
    "K": {x: 250, y: 0, width: 25, height: 25},
    "L": {x: 275, y: 0, width: 25, height: 25},
    "M": {x: 300, y: 0, width: 25, height: 25},
    "N": {x: 325, y: 0, width: 25, height: 25},
    "O": {x: 0, y: 25, width: 25, height: 25},
    "P": {x: 25, y: 25, width: 25, height: 25},
    "Q": {x: 50, y: 25, width: 25, height: 25},
    "R": {x: 75, y: 25, width: 25, height: 25},
    "S": {x: 100, y: 25, width: 25, height: 25},
    "T": {x: 125, y: 25, width: 25, height: 25},
    "U": {x: 150, y: 25, width: 25, height: 25},
    "V": {x: 175, y: 25, width: 25, height: 25},
    "W": {x: 200, y: 25, width: 25, height: 25},
    "X": {x: 225, y: 25, width: 25, height: 25},
    "Y": {x: 250, y: 25, width: 25, height: 25},
    "Z": {x: 275, y: 25, width: 25, height: 25},
    "Ź": {x: 300, y: 25, width: 25, height: 25},
    "Ż": {x: 325, y: 25, width: 25, height: 25},
    "a": {x: 0, y: 50, width: 25, height: 25},
    "b": {x: 25, y: 50, width: 25, height: 25},
    "c": {x: 50, y: 50, width: 25, height: 25},
    "d": {x: 75, y: 50, width: 25, height: 25},
    "e": {x: 100, y: 50, width: 25, height: 25},
    "f": {x: 125, y: 50, width: 25, height: 25},
    "g": {x: 150, y: 50, width: 25, height: 25},
    "h": {x: 175, y: 50, width: 25, height: 25},
    "i": {x: 200, y: 50, width: 25, height: 25},
    "j": {x: 225, y: 50, width: 25, height: 25},
    "k": {x: 250, y: 50, width: 25, height: 25},
    "l": {x: 275, y: 50, width: 25, height: 25},
    "m": {x: 300, y: 50, width: 25, height: 25},
    "n": {x: 325, y: 50, width: 25, height: 25},
    "o": {x: 0, y: 75, width: 25, height: 25},
    "p": {x: 25, y: 75, width: 25, height: 25},
    "q": {x: 50, y: 75, width: 25, height: 25},
    "r": {x: 75, y: 75, width: 25, height: 25},
    "s": {x: 100, y: 75, width: 25, height: 25},
    "t": {x: 125, y: 75, width: 25, height: 25},
    "u": {x: 150, y: 75, width: 25, height: 25},
    "v": {x: 175, y: 75, width: 25, height: 25},
    "w": {x: 200, y: 75, width: 25, height: 25},
    "x": {x: 225, y: 75, width: 25, height: 25},
    "y": {x: 250, y: 75, width: 25, height: 25},
    "z": {x: 275, y: 75, width: 25, height: 25},
    "ź": {x: 300, y: 75, width: 25, height: 25},
    "ż": {x: 325, y: 75, width: 25, height: 25},
    "Ą": {x: 0, y: 100, width: 25, height: 25},
    "Ć": {x: 25, y: 100, width: 25, height: 25},
    "Ę": {x: 50, y: 100, width: 25, height: 25},
    "Ł": {x: 75, y: 100, width: 25, height: 25},
    "Ń": {x: 100, y: 100, width: 25, height: 25},
    "Ó": {x: 125, y: 100, width: 25, height: 25},
    "Ś": {x: 150, y: 100, width: 25, height: 25},
    "ą": {x: 175, y: 100, width: 25, height: 25},
    "ć": {x: 200, y: 100, width: 25, height: 25},
    "ę": {x: 225, y: 100, width: 25, height: 25},
    "ł": {x: 250, y: 100, width: 25, height: 25},
    "ń": {x: 275, y: 100, width: 25, height: 25},
    "ó": {x: 300, y: 100, width: 25, height: 25},
    "ś": {x: 325, y: 100, width: 25, height: 25},
    ".": {x: 0, y: 125, width: 25, height: 25},
    ",": {x: 25, y: 125, width: 25, height: 25},
    ":": {x: 50, y: 125, width: 25, height: 25},
    ";": {x: 75, y: 125, width: 25, height: 25},
    "!": {x: 100, y: 125, width: 25, height: 25},
    "?": {x: 125, y: 125, width: 25, height: 25},
    "-": {x: 150, y: 125, width: 25, height: 25},
    "_": {x: 175, y: 125, width: 25, height: 25},
    "+": {x: 200, y: 125, width: 25, height: 25},
    "=": {x: 225, y: 125, width: 25, height: 25},
    "(": {x: 250, y: 125, width: 25, height: 25},
    ")": {x: 275, y: 125, width: 25, height: 25},
    "[": {x: 300, y: 125, width: 25, height: 25},
    "]": {x: 325, y: 125, width: 25, height: 25},
    "{": {x: 0, y: 150, width: 25, height: 25},
    "}": {x: 25, y: 150, width: 25, height: 25},
    "/": {x: 50, y: 150, width: 25, height: 25},
    "\ ": {x: 75, y: 150, width: 25, height: 25},
    "|": {x: 100, y: 150, width: 25, height: 25},
    '"': {x: 125, y: 150, width: 25, height: 25},
    "'": {x: 150, y: 150, width: 25, height: 25},
    "*": {x: 175, y: 150, width: 25, height: 25},
    "@": {x: 200, y: 150, width: 25, height: 25},
    "#": {x: 225, y: 150, width: 25, height: 25},
    "<": {x: 250, y: 150, width: 25, height: 25},
    ">": {x: 275, y: 150, width: 25, height: 25},
    "^": {x: 300, y: 150, width: 25, height: 25},
    "^ to ale pokazujące w dół": {x: 325, y: 150, width: 25, height: 25},
    "%": {x: 0, y: 175, width: 25, height: 25},
    "$": {x: 25, y: 175, width: 25, height: 25},
    "&": {x: 50, y: 175, width: 25, height: 25},
    " ": {x: 75, y: 175, width: 25, height: 25},
    "0": {x: 100, y: 175, width: 25, height: 25},
    "1": {x: 125, y: 175, width: 25, height: 25},
    "2": {x: 150, y: 175, width: 25, height: 25},
    "3": {x: 175, y: 175, width: 25, height: 25},
    "4": {x: 200, y: 175, width: 25, height: 25},
    "5": {x: 225, y: 175, width: 25, height: 25},
    "6": {x: 250, y: 175, width: 25, height: 25},
    "7": {x: 275, y: 175, width: 25, height: 25},
    "8": {x: 300, y: 175, width: 25, height: 25},
    "9": {x: 325, y: 175, width: 25, height: 25},
};

let scale;
const gameWidth = 1280;  
const gameHeight = 720;  

function resizeCanvas()
{
    let ratio = gameHeight / gameWidth; 
    let width = window.innerWidth;
    let height = width * ratio; 
    if(height > window.innerHeight){     
        height = window.innerHeight;     
        width = height / ratio; 
    }
    let left = (window.innerWidth - width) / 2;     //left
    let top = (window.innerHeight - height) / 2;    //top
    scale = width / 1000;
    
    mainCanvas.style.width = width + "px";  //main canvas size
    mainCanvas.style.height = height + "px";
    mainCanvas.style.left = left + "px";       
    mainCanvas.style.top = top + "px";

    mainCanvas.width = width * devicePixelRatio;  // main canvas devicePixelRatio (pixel size)
    mainCanvas.height = height * devicePixelRatio;
    mainCtx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
}
function clearCanvas()
{
    mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height); //clear canvas
}
function goFullscreen()
{
    if(board.requestFullscreen){
        board.requestFullscreen(); // request fullscreen
    }else if(board.mozRequestFullScreen){  
        board.mozRequestFullScreen(); // request fullscreen for Firefox
    }else if(board.webkitRequestFullscreen){
        board.webkitRequestFullscreen(); // request fullscreen for Chrome, Safari and Opera
    }else if(board.msRequestFullscreen){
        board.msRequestFullscreen(); // request fullscreen for Internet Explorer and Edge
    }
}
let mouse = {
    x: 0,
    y: 0,
    down: {
        x: 0,
        y: 0,
        isTrue: false,
        button: 0
    }
}
window.addEventListener("mousemove", (event) => {
    mouse.x = event.offsetX / scale; // calculate mouse x position
    mouse.y = event.offsetY / scale; // calculate mouse y position
});
window.addEventListener("mousedown", (event) => {
    mouse.down.x = event.offsetX / scale; // calculate mouse down x position
    mouse.down.y = event.offsetY / scale; // calculate mouse down y position
    mouse.down.isTrue = true; // set mouse down state
    mouse.down.button = event.button; // set mouse down button
});
window.addEventListener("mouseup", () => {
    mouse.down.isTrue = false; 
});
window.addEventListener("blur", () => {
    mouse.down.isTrue = false; 
});
window.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});
window.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        if(document.fullscreenElement)
            document.exitFullscreen(); 
    }
    if(event.key.toLocaleLowerCase() === "f"){
        event.preventDefault(); 
        if(document.fullscreenElement)
            document.exitFullscreen(); 
        else
            goFullscreen(); 
    }
});

class Cursor{
    constructor(width, height, left, top, id) 
    {
        this.x = 0;
        this.y = 0;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.id = id;
        this.html = document.createElement("img");
        this.html.src = "Images/cursor.png"; // set cursor image
        this.html.id = id; 
        window.addEventListener("mousemove", (event) => {
            let x = event.clientX; 
            let y = event.clientY; 
            this.update(x, y);
        });
    }
    update(x, y)
    {
        if(x !== null) 
            this.x = x;
        if(y !== null) 
            this.y = y;
        if(!document.getElementById(this.id)) 
            board.appendChild(this.html);
        this.html.style.left = this.x - this.left * scale + "px";
        this.html.style.top = this.y - this.top * scale + "px";
        this.html.style.width = this.width * scale + "px";
        this.html.style.height = this.height * scale + "px";   
    }
}

let joints = [];
let bones = [];
let lastZIndex = 0;
let lastId = 0;
let jointToJoin = null;

function getNewJointId(joint)
{
    joint.id = lastId + 1;
    lastId++;
}
function getNewJointZIndex(joint)
{
    joint.z = lastZIndex + 1;
    lastZIndex++;
}
function updateJoints()
{
    let list = joints.length;
    if(list > 0){
        let lastMinimumZ = -Infinity;
        while(list > 0){
            let actualJoints = [];
            let actualMinimumZ = Infinity;
            for(let i = 0; i < joints.length; i++){
                if(joints[i].z < actualMinimumZ && joints[i].z > lastMinimumZ){
                    actualMinimumZ = joints[i].z;
                    actualJoints.push(joints[i]);
                }else if(joints[i].z === actualMinimumZ){
                    actualJoints.push(joints[i]);
                }
            }
            lastMinimumZ = actualMinimumZ;
            actualJoints.forEach(joint => joint.update());
            list--;
        }
    }
}
function getJoint(id)
{
    for(let i = 0; i < joints.length; i++){
        if(joints[i]?.id === id){
            return joints[i];
        }
    }
    return null;
}
function updateBones(updatesNumber)
{
    bones.forEach(bone => {
        bone.update(updatesNumber);
    });
}
function isItClicked(left, top, width, height, x, y)
{
    return x > left 
    && y > top 
    && x < left + width 
    && y < top + height;
}
class Joint{
    constructor(x = 10, y = 10, color = "#00ff00") 
    {
        this.x = x; // x position
        this.y = y; // y position
        this.z = null;
        this.width = 15; // width
        this.height = 15; // height
        this.color = color; // color
        this.status = {tracking: false, selected: false, pinned: false, boning: false, menu: false};
        this.clickedPoint = {x: 0, y: 0};
        this.id = null;
        joints.push(this);
        getNewJointId(this);
        getNewJointZIndex(this);
    }
    draw() 
    {
        //mainCtx.fillStyle = this.color; // set color
        //mainCtx.fillRect(this.x * scale, this.y * scale, this.width * scale, this.height * scale); // draw rectangle
        mainCtx.strokeStyle = this.color; // set color
        mainCtx.lineWidth = 5 * scale; // set line width
        mainCtx.beginPath();
        mainCtx.arc((this.x + this.width / 2) * scale, (this.y + this.height / 2) * scale, this.width / 2 * scale, 0, 2 * Math.PI);
        mainCtx.stroke();
        if(this.status.selected){
            if(this.status.boning) 
                mainCtx.fillStyle = ["red", "green", "blue", "white"][Math.floor(Math.random() * 4)];
            else
                mainCtx.fillStyle = "white";
            mainCtx.fill();
        }
       // mainCtx.strokeRect(this.x * scale, this.y * scale, this.width * scale, this.height * scale);
    }
    updateStatus()
    {
        let isThisClicked = isItClicked(this.x, this.y, this.width, this.height, mouse.down.x, mouse.down.y);
        let isAnyOneMove = false;
        joints.forEach(joint => {
            isAnyOneMove = isAnyOneMove || joint.status.tracking;
        });
        if(mouse.down.isTrue){
            if(isThisClicked){
                if(!this.status.selected && !isAnyOneMove && mouse.down.button === 0){
                    this.status.selected = true;
                    mouse.down.isTrue = false;
                }else if(this.status.selected && !isAnyOneMove && mouse.down.button === 1 && !this.status.menu){
                    this.status.menu = true;
                    mouse.down.isTrue = false;
                }else if(this.status.selected && !this.status.tracking && mouse.down.button === 0 && mouse.down.isTrue){
                    if(mouse.x !== mouse.down.x || mouse.y !== mouse.down.y){
                        this.clickedPoint.x = this.x - mouse.down.x;
                        this.clickedPoint.y = this.y - mouse.down.y;
                        this.status.tracking = true;
                    }
                }else if(this.status.selected && mouse.down.button === 2){
                    this.status.selected = false;
                    mouse.down.isTrue = false;
                    this.status.menu = false;
                }else if(this.status.selected && mouse.down.button === 1){
                    this.delete();
                }
            }else if(this.status.selected && !this.status.tracking && mouse.down.button === 0 && mouse.down.isTrue){
                if(mouse.x !== mouse.down.x || mouse.y !== mouse.down.y){
                    this.clickedPoint.x = this.x - mouse.down.x;
                    this.clickedPoint.y = this.y - mouse.down.y;
                    this.status.tracking = true;
                }
            }
        }else if(!mouse.down.isTrue){
            this.status.tracking = false;
        }
    }
    update() 
    {
        this.updateStatus();
        if(this.status.selected){
            if(this.status.tracking){
                this.x = mouse.x + this.clickedPoint.x; 
                this.y = mouse.y + this.clickedPoint.y; 
            }else if(this.status.boning){
                joints.forEach(joint => {
                    let iIC = isItClicked(joint.x, joint.y, joint.width, joint.height, mouse.x, mouse.y);
                    if(iIC && joint !== this){
                        jointToJoin = joint;
                    }
                });
                if(jointToJoin !== null){
                    mainCtx.strokeStyle = ["red", "green", "blue", "white"][Math.floor(Math.random() * 4)];;
                    mainCtx.lineWidth = 1 + Math.floor(Math.random() * 7) * scale;
                    mainCtx.beginPath();
                    mainCtx.moveTo((this.x + this.width / 2) * scale, (this.y + this.height / 2) * scale);
                    mainCtx.lineTo((jointToJoin.x + jointToJoin.width / 2) * scale, (jointToJoin.y + jointToJoin.height / 2) * scale);
                    mainCtx.stroke();
                    if(isItClicked(jointToJoin.x, jointToJoin.y, jointToJoin.width, jointToJoin.height, mouse.x, mouse.y) && mouse.down.isTrue){
                        let canCreateBone = true;
                        bones.forEach(bone => {
                            if(bone.jointA === this && bone.jointB === jointToJoin || bone.jointA === jointToJoin && bone.jointB === this){
                                canCreateBone = false;
                            }
                        });
                        if(canCreateBone){
                            mouse.down.isTrue = false;
                            new Bone(this, jointToJoin);
                            jointToJoin = null;
                            this.status.boning = false;
                        }
                    }
                }
            }
        }

        if(this.x + this.width > mainCanvas.width / scale){
            this.x = mainCanvas.width / scale - this.width;
        }else if(this.x < 0){
            this.x = 0;
        }
        if(this.y + this.height > mainCanvas.height / scale){
            this.y = mainCanvas.height / scale - this.height;
        }else if(this.y < 0){
            this.y = 0;
        }
        this.draw(); 
    }
    drawMenu()
    {

    }
    delete()
    {
        joints = joints.filter(i => i.id !== this.id);
    }
}
class Bone{
    constructor(jointA = null, jointB = null, color = "#00ff00"){
        this.jointA = jointA;
        this.jointB = jointB;
        this.color = color;
        this.z = null;
        bones.push(this);
        this.updateZindex();
        this.length = this.getLength();
    }
    updateZindex()
    {
        if(this.jointA && this.jointB){
            if(this.jointA.z > this.jointB.z){
                this.z = this.jointB.z;
            }else{
                this.z = this.jointA.z;
            }
        }
    }
    getLength()
    {
        if(this.jointA && this.jointB){
            let a = this.jointB.x - this.jointA.x;
            let b = this.jointB.y - this.jointA.y;
            return Math.sqrt(a * a + b * b);
        }
    }
    draw()
    {
        if(this.jointA && this.jointB){
            mainCtx.strokeStyle = this.color;
            mainCtx.lineWidth = 5 * scale;
            mainCtx.beginPath();
            mainCtx.moveTo((this.jointA.x + this.jointA.width / 2) * scale, (this.jointA.y + this.jointA.height / 2) * scale);
            mainCtx.lineTo((this.jointB.x + this.jointB.width / 2) * scale, (this.jointB.y + this.jointB.height / 2) * scale);
            mainCtx.stroke();
        }
    }
    update(updatesNumber)
    {
        if(updatesNumber < 1){
            updatesNumber = 1;
        }
        this.updateZindex();
        let jointsAreThere = 0;
        if(this.jointA && this.jointB){
            joints.forEach(joint => {
                if(joint === this.jointA || joint === this.jointB){
                    jointsAreThere++;
                }
            });
        }
        if(jointsAreThere === 2){
            for(let i = 0; i < updatesNumber; i++){  
                if(this.length !== this.getLength()){
                    let deffX = this.jointA.x - this.jointB.x;
                    let deffY = this.jointA.y - this.jointB.y;
                    let dist = this.getLength();
                    let deff = (this.length - dist) / dist;
                    let x = deffX * deff;
                    let y = deffY * deff;
                    this.jointA.x += x * 0.5;
                    this.jointA.y += y * 0.5;
                    this.jointB.x -= x * 0.5;
                    this.jointB.y -= y * 0.5;
                }
            }
            this.draw();
        }
        
    }
}
class Tekst{
    constructor(x = mouse.x, y = mouse.y, textWidth = 100, letterSize = 50, color = "#00ff00", content = [])
    {
        this.x = x;
        this.y = y;
        this.textWidth = textWidth;
        this.letterSize = letterSize;
        this.color = color;
        this.content = content;
        this.oldContent = JSON.parse(JSON.stringify(content));
    }
    repairContent()
    {
        this.content = JSON.parse(JSON.stringify(this.oldContent));
        let newContent = [];
        let actualLetterSize = this.letterSize * 0.75;
        for(let i = 0; i < this.content.length; i++){

            /*if(this.content[i].length * this.letterSize > this.textWidth){
                let maxLetters = Math.floor(this.textWidth / this.letterSize);
                let line = this.content[i].slice(maxLetters);
                this.content[i] = this.content[i].slice(0, maxLetters);
                if(this.content[i + 1] !== undefined){
                    this.content[i + 1] = line + this.content[i + 1];
                }else{
                    this.content.push(line);
                }
            }*/
            
            let newContentLine = [];
            let lineWords = [];
            let wordNumber = 0;
            for(let j = 0; j < this.content[i].length; j++){
                if(this.content[i][j] !== " "){
                    if(this.content[i][j] !== undefined){
                        if(lineWords[wordNumber] !== undefined)
                            lineWords[wordNumber] = lineWords[wordNumber] + this.content[i][j];
                        else
                            lineWords.push(this.content[i][j]);
                    }
                }else{
                    wordNumber++;
                }
            }
            //console.log("length: " + this.content[i].length + ", textWidth: " + this.textWidth);
            if(this.content[i].length > Math.floor(this.textWidth / actualLetterSize)){
                let maxLetters = Math.floor(this.textWidth / actualLetterSize);
                for(let j = 0; j < lineWords.length; j++){
                    let word = lineWords[j];
                    if(word.length > maxLetters){
                        let linesForThisWord = word.length / (maxLetters - 1);
                        if(linesForThisWord > Math.floor(linesForThisWord))
                            linesForThisWord = Math.floor(linesForThisWord + 1);
                        for(let x = 0; x < linesForThisWord; x++){
                            let line = word.slice(0, maxLetters);
                            if(x < linesForThisWord - 1)
                                line = line + "-";
                            newContentLine.push(line);
                            word = word.slice(maxLetters);
                        }
                    }else{
                        let lastWord = "";
                        if(newContentLine.length > 0)
                            lastWord = newContentLine[newContentLine.length - 1];
                        //console.log(lastWord);
                        if((lastWord + word).length < maxLetters){
                            if(newContentLine.length > 0)
                                newContentLine[newContentLine.length - 1] = lastWord + " " + word;
                            else
                                newContentLine.push(word);
                        }else{
                            newContentLine.push(word);
                        }
                    }
                }
                //console.log(newContent);
            }else{
                newContentLine = this.content[i];
                //console.log(this.content[i]);
            }
            newContent = newContent.concat(newContentLine);
        }
        //console.log(newContent);
        this.content = newContent;
    }
    draw(newContent = null)
    {
        if(newContent !== null){
            this.content = newContent;
            this.oldContent = JSON.parse(JSON.stringify(newContent));
        } 
        this.repairContent();
        for(let i = 0; i < this.content.length; i++){
            for(let j = 0; j < this.content[i].length; j++){
                let letter = this.content[i][j];
                if(letters[letter]){
                    let l = letters[letter];
                    mainCtx.drawImage(
                        atlas, 
                        l.x, 
                        l.y, 
                        l.width, 
                        l.height, 
                        (this.x + j * this.letterSize * 0.75) * scale, 
                        (this.y + i * this.letterSize) * scale, 
                        this.letterSize * scale, 
                        this.letterSize * scale
                    );
                }
            }
        }
    }
    changeContent(newContent = [])
    {
        this.content = newContent;
        this.oldContent = JSON.parse(JSON.stringify(newContent));
    }
}
class Button{  //ma to robić tak że jak się kliknie jakimś przyciskiem to wtedy wyskakuje dymek z jakąś opcją czy coś
    constructor(x = mouse.x, y = mouse.y, width = 100, letterSize = 50, color = ["#00ff00", "#00a000"], text = [], onClickFunction = () => {})
    {
        this.x = x; 
        this.y = y; 
        this.width = width;
        this.text = new Tekst(x, y, this.width, letterSize, color[0], text);
        this.color = color[1];
        this.clickedPoint = {
            x: mouse.x,
            y: mouse.y
        };
        this.onClickFunction = onClickFunction;
    }
    getHeight()
    {
        return this.text.content.length * this.text.letterSize;
    }
    draw() 
    {
        this.text.repairContent();
        mainCtx.strokeStyle = this.color; 
        mainCtx.lineWidth = 2 * scale;
        mainCtx.strokeRect(this.x * scale, this.y * scale, this.width * scale, this.getHeight() * scale);
        this.text.draw();
        this.status = {clicked: false};
    }
    updateStatus()
    {
        let isThisClicked = isItClicked(this.x, this.y, this.width, this.getHeight(), mouse.down.x, mouse.down.y);
        if(isThisClicked && mouse.down.isTrue && mouse.down.button === 0){
            this.onClickFunction();
            mouse.down.isTrue = false;
        }
    }
    update() 
    {
        this.text.textWidth = this.width;
        this.text.x = this.x;
        this.text.y = this.y;
        //this.x = mouse.x + this.clickedPoint.x; 
        //this.y = mouse.y + this.clickedPoint.y; 
        this.draw();
        this.updateStatus();
    }
}

//let joint = new Joint(100, 100, 50, 50, "#00ff00"); 

window.addEventListener("resize", () => {
    resizeCanvas(); 
    cursor.update(null, null); 
});
window.addEventListener("load", resizeCanvas);
let cursor = new Cursor(56, 56, 25.5, 14.5, "cursor"); 
let button = new Button(75, 75, 100, 10, ["#ffff00", "#003ba0ff"], ["Tło zrobione przez AI", "Edytor postaci v1.0 Kliknij F aby przełączyć fullscreen za niedługo będą kolory dla tekstu potem będę pracował nad edytorem samych postaci", "KLIKAJĄC TEN PRZYCISK DODAJESZ STAW POSTACI"], () => {new Joint(100, 40, "blue");});

function gameLoop()
{
    if(!document.getElementById("board")) 
        document.body.appendChild(board);
    if(!document.getElementById("myCanvas")) 
        board.appendChild(mainCanvas);
    clearCanvas(); 
    updateBones(4);
    updateJoints();
    button.update();
    requestAnimationFrame(gameLoop);
}
gameLoop(); 
