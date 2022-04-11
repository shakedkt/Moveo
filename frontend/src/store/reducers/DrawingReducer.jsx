const initalState = {
  isGuesser: false, // is the first user the guesser?
  canvasObj: '',
  word: '',
  wordToGuess: '',
  sessionPoints: 0,
  pointsFromServer: 0,
  isFirstUser: false
};

export default function DrawingReducer(state = initalState, action) {
  switch (action.type) {
    case "SET_DRAWING":
      return { ...state, canvasObj: action.canvas };

    case "GET_DRAWING":
      return { ...state, canvasObj: action.canvas };

    case "SET_ISGUESSER":
      return { ...state, isGuesser: action.isGuesser };

    case "SET_WORD":
      return { ...state, wordToGuess: action.wordToGuess };

    case "GET_WORD":
      return { ...state, wordToGuess: action.wordToGuess };

    case "RAISE_POINTS":
      return { ...state, pointsFromServer: action.pointsFromServer };

      case "GET_POINTS":
      return { ...state, pointsFromServer: action.serverPoints };

    case "SET_FIRST_USER":
      return { ...state, isFirstUser: action.isFirstUser }


    default:
      return state;
  }
}
