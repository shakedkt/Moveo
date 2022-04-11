import axios from 'axios';

// const BASE_URL = `${process.env.REACT_APP_BACKEND_URL}api/product/`

const BASE_URL = 'http://localhost:4000/api/drawing';

// const BASE_URL = 'http://moveo-app-shaked-backend2.herokuapp.com/api/drawing';

async function getDrawing() {

    const res = await axios.get(BASE_URL, {
        proxy: {
            host: process.env.REACT_APP_BACKEND_URL
        },
        header: {
            crossorigin: true
        }
    })
    return res.data.canvas
}

async function setDrawing(canvas) {
    const res = await axios.post(BASE_URL + '/setCanvas', {
        params: {canvas},
        proxy: {
            host: process.env.REACT_APP_BACKEND_URL
        },
        header: {
            crossorigin: true
        }
    })
    return res.data.Drawing
}


async function getFirstUser(isFirstUser) {

    const res = await axios.get(BASE_URL + '/firstUser', {
        params: {
            isFirstUser: isFirstUser,
        },
        proxy: {
            host: process.env.REACT_APP_BACKEND_URL
        },
        header: {
            crossorigin: true
        }
    })
    return res.data.isFirstUser
}


async function raisePoints(points) {

    const res = await axios.post(BASE_URL + '/raisePoints', {
        params: {
            pointsToRaise: points,
        },
        proxy: {
            host: process.env.REACT_APP_BACKEND_URL
        },
        header: {
            crossorigin: true
        }
    })
    return res.data.Points
}

async function getPoints() {
    const res = await axios.get(BASE_URL + '/getPoints', {
        proxy: {
            host: process.env.REACT_APP_BACKEND_URL
        },
        header: {
            crossorigin: true
        }
    })
    return res.data.Points
}

async function getWord() {
    const res = await axios.get(BASE_URL + '/getWord', {
        proxy: {
            host: process.env.REACT_APP_BACKEND_URL
        },
        header: {
            crossorigin: true
        }
    })
    return res.data.Points
}


async function setWord(word) {
    const res = await axios.post(BASE_URL + '/setWord', {
        params: {
            word: word,
        },
        proxy: {
            host: process.env.REACT_APP_BACKEND_URL
        },
        header: {
            crossorigin: true
        }
    })
    return res.data.Points
}


async function setReset() {
    const res = await axios.post(BASE_URL + '/reset', {
        proxy: {
            host: process.env.REACT_APP_BACKEND_URL
        },
        header: {
            crossorigin: true
        }
    })
    return res.data
}
 




export const DrawingService = {
    getDrawing,
    getFirstUser,
    setDrawing,
    raisePoints,
    getPoints,
    getWord,
    setWord,
    setReset
}