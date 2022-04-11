import React, { Component } from "react";
import { connect } from "react-redux";
import { setWordToGuess, setGuesser, setCanvas, loadDrawing,raiseGamePoint, getServerPoints } from "../actions/drawingActions"

import {withRouter} from '../withRouter';

class CanvasPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "choose a word to draw",
            input: '',
            chosenWord: '',
            wordToGuess: '',
            isGuesser: false,
            isDrawing: false,
            realCanvas: {},
            canvasUrl: ''
        };

        this.canvasRef = React.createRef(null);
        this.contextRef = React.createRef(null);

    }



    serialize = () => {
        const canvasData = this.canvasRef.current.toDataURL()
        this.props.setCanvas(canvasData);
    }


     componentDidMount() {

        setInterval(  () => {
            this.props.getServerPoints();
          }, 5000);

        const firstIsGuesser = this.props.drawing.isGuesser
        const isFirst = this.props.drawing.isFirstUser
        const shouldShowCanvas = ((isFirst && !firstIsGuesser) || (!isFirst && firstIsGuesser)) // XOR

        if (!shouldShowCanvas) {

            setInterval(  () => {
                this.props.loadDrawing();
              }, 1000);

        } else {
            const canvas = this.canvasRef.current
            if(true) { //TODO
                const context = canvas.getContext("2d")

                canvas.width = window.innerWidth * 2
                canvas.height = window.innerHeight * 2
                canvas.style.width = `${window.innerWidth}px`
                canvas.style.height = `${window.innerHeight}px`
    
                context.scale(2, 2)
                context.lineCap = "round"
                context.strokeStyle = "black"
                context.lineWidth = 5
                this.contextRef.current = context
      
            }
        }
    }

     setGuesser = async () => {
        const playerNum = 1

        let data = await this.props.setGuesser(false)
        this.setState({ isGuesser: data })
    }

    componentDidUpdate(prevProps, prevState) {

        if (this.state.canvasUrl != prevProps.drawing.canvasObj) {
            this.setState({ canvasUrl: this.props.drawing.canvasObj })
          }
        
          if(this.props.drawing.pointsFromServer !== prevProps.drawing.pointsFromServer) {
            this.props.setGuesser(!this.state.isGuesser)
            this.setState({ isGuesser: !this.state.isGuesser })

            this.props.navigate('/choose-words')

          }

    }

    startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent
        this.contextRef.current.beginPath()
        this.contextRef.current.moveTo(offsetX, offsetY)
       this.setState({ isDrawing: true })

    }

    finishDrawing = () => {
        this.contextRef.current.closePath()
        this.setState({ isDrawing: false })
        this.serialize()
    }

    draw = ({ nativeEvent }) => {
        if (!this.state.isDrawing) {
            return
        }
        const { offsetX, offsetY } = nativeEvent
        this.contextRef.current.lineTo(offsetX, offsetY)
        this.contextRef.current.stroke()
    }

    handleChange = (event) => {
        this.setState({input: event.target.value});

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const guess = {
            content: this.state.input,
        }
        if (guess.content === this.props.drawing.wordToGuess) {
            var wordLength = guess.content.length
            this.props.raiseGamePoint(wordLength);
        }
        event.preventDefault()
    }



    render() {
        const firstIsGuesser = this.props.drawing.isGuesser
        const isFirst = this.props.drawing.isFirstUser
        const shouldShowCanvas = ((isFirst && !firstIsGuesser) || (!isFirst && firstIsGuesser)) // XOR
        if (shouldShowCanvas) {
            return(
                <div className="home">
                    <div className="guess-input"> <h2>pls start drawing: {this.props.drawing.wordToGuess}</h2>
                        <canvas onMouseDown={this.startDrawing} onMouseUp={this.finishDrawing} onMouseMove={this.draw} ref={this.canvasRef} />
                    </div>
                </div>
                )
        } else {
            return(
                <div className="home guessing-view">
    
                <div className="pointsSection">
                {this.props.drawing.sessionPoints && <div>{this.props.drawing.sessionPoints}</div>}
                </div>
    
                    <div className="guess-input">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" value={this.state.input} onChange={this.handleChange} />
    
                            <button>
                                guess
                            </button>
                        </form>
                        <h2>take a guess</h2>
                    </div>
                    <img src={this.state.canvasUrl} />
                </div>
                )    
        }
}
}

const mapStateToProps = (state) => {
    return {
        drawing: state.drawing,
    };
};

const mapDispatchToProps = {
    setWordToGuess,
    setGuesser,
    setCanvas,
    loadDrawing,
    raiseGamePoint,
    getServerPoints
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CanvasPage));


