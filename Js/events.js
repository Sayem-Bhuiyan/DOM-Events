// option 2
const makeYellowButton = document.getElementById('make-yellow');
makeYellowButton.onclick = makeYellow;
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

// option 3

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

// option 3 another
// important we will use this some time
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// option 4
const makePinkButton = document.getElementById('make-pink');
makePinkButton.addEventListener('click', makePink)
function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// option 4 another
const makeAquaButton = document.getElementById('make-aqua');
makeAquaButton.addEventListener('click', function makeAqua(){
    document.body.style.backgroundColor = 'aqua';
})

// final option 
// option final we will use some time
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})