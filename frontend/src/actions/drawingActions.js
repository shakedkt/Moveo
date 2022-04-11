import { DrawingService } from '../services/drawing.service'


export function loadDrawing() {    
    return async dispatch => {
        const drawing = await DrawingService.getDrawing()
        dispatch({ type: 'GET_DRAWING', canvas: drawing })
    }
}

export function setCanvas(canvas) {
    return async dispatch => {
        const canvasData = await DrawingService.setDrawing(canvas)
        dispatch({ type: 'SET_DRAWING', canvas: canvasData })
    }
}


export function setGuesser(isGuesserFromGame) {    
    return async dispatch => {
        const isGuesser = isGuesserFromGame
        dispatch({ type: 'SET_ISGUESSER', isGuesser: isGuesser })
    }
}

export function setWordToGuess(word) {    
    return async dispatch => {
        DrawingService.setWord(word)
        dispatch({ type: 'SET_WORD', wordToGuess: word })
    }
}

export function getWordToGuess() {    
    return async dispatch => {
        const word = await DrawingService.getWord()

        dispatch({ type: 'SET_WORD', wordToGuess: word })
    }
}

export function raiseGamePoint(pointsToRaise) {
    return async dispatch => {
        const pointsFromServer = await DrawingService.raisePoints(pointsToRaise)
        dispatch({ type: 'RAISE_POINTS', points: pointsFromServer })
    }
}

export function getIsFirstUser(isFirst) {    
    return async dispatch => {
        const isFirstUser = await DrawingService.getFirstUser(isFirst)
        dispatch({ type: 'SET_FIRST_USER', isFirstUser })
    }
}

export function getServerPoints() {
return async dispatch => {
        const serverPoints = await DrawingService.getPoints()
        dispatch({ type: 'GET_POINTS', serverPoints })
    }
}


