const drawingService = require('./drawing.service')

let isFirstUser = false;
let canvas;
let pointsCounter = 0
let wordToGuess = ''

async function getFirstUser(req, res) {
    let result;
    if(isFirstUser === false) {
        isFirstUser = true
        result = true;
    } else {
        result = false;
    }

  
    res.status(200).json({
        message: "Success",
        isFirstUser: result
    })
}

async function getCanvas(req, res) {
    res.status(200).json({
        message: "Success",
        canvas
    })
}


async function setCanvas(req, res) {
    canvas = req.body.params.canvas    
    res.status(200).json({
        message: "Success",
        Drawing: canvas
    })
}

async function raisePoints(req, res) {
    pointsCounter += req.body.params.pointsToRaise    
    res.status(200).json({
        message: "Success",
        Points: pointsCounter
    })
}

async function getPoints(req, res) {
    res.status(200).json({
        message: "Success",
        Points: pointsCounter
    })
}

async function getWord(req, res) {
    res.status(200).json({
        message: "Success",
        Points: wordToGuess
    })
}

async function setWord(req, res) {
    wordToGuess = req.body.params.word  
    res.status(200).json({
        message: "Success",
        Points: pointsCounter
    })
}


async function reset(req, res) {
    isFirstUser = false
    canvas = '';
    pointsCounter = 0
    wordToGuess = ''

    res.status(200).json({
        message: "Success",
        reset: 'true'
    })
}



module.exports = {
    getFirstUser,
    getCanvas,
    setCanvas,
    raisePoints,
    getPoints,
    getWord,
    setWord,
    reset
}