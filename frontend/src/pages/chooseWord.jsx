import React, { Component } from "react";
import { Link, NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { setWordToGuess, getWordToGuess, setGuesser } from "../actions/drawingActions"

class chooseWordPage extends Component {
  randomWords = require('random-words');

  constructor(props) {
    super(props);

    this.state = {
      title: "choose a word to draw",
      words: [],
      levels: {
        1: 'easy',
        2: 'medium',
        3: 'hard'
      },
      chosenWord: ''
    };
    this.loadWords = this.loadWords.bind(this);
  }

  async componentDidMount() {
    await this.loadWords()
  }

  onChange = (event) => {
    this.setState({ chosenWord: event.target.value })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.words > prevState.words) {
      this.setState({ chosenWord: this.state.words[0] })
    }
  }

  loadWords = () => {
    var words = []
    var wordsLength = 3;
    for (let i = 0; i < 3; i++) {
      var randomWord = this.randomWords({ exactly: 1, maxLength: wordsLength });
      if (randomWord[0].length === wordsLength) {
        words.push({ randomWord, i })
        wordsLength++
      } else {
        i--
      }
    }
    this.setState({ words: words })

  }


  sendGuessWord = () => {
    this.props.setWordToGuess(this.state.chosenWord.randomWord[0]);
  }

  getGuessWord = () => {
    this.props.getWordToGuess(this.state.chosenWord);
  }

  render() {    
    const firstIsGuesser = this.props.drawing.isGuesser
    const isFirst = this.props.drawing.isFirstUser
    const shouldShowCanvas = ((isFirst && !firstIsGuesser) || (!isFirst && firstIsGuesser)) // XOR

    if (this.state.words.length > 2 && shouldShowCanvas) {

      return (
        <section className="home">
          <div className="game-header">
            <h2 className="game-title-choose-screen"> {this.state.title} </h2>
            <div className="dropDown-wrapper">
              <CustomDropdown
                options={this.state.words}
                onChange={this.onChange}
              />

            </div>
            <div className="image-btn">
              <Link to={'/canvas'}>
                <div onClick={() => { this.sendGuessWord() }}>DRAW THE WORD</div>
              </Link>
            </div>
          </div>
        </section>
      );
    }

    if(!shouldShowCanvas) {
      return(
        <section className="home">
          <h2 className="game-title-choose-screen">
           wait for the first player user to choose  
           </h2>

           <NavLink to="/canvas">
              
              <button onClick={() => { this.getGuessWord() }}>
              GO TO GUESS
              </button>          
              </NavLink>

        </section>

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
  getWordToGuess
};

export default connect(mapStateToProps, mapDispatchToProps)(chooseWordPage);

export const CustomDropdown = (props) => (
  <div className="form-group">
    <select
      className="form-control"
      name="choose a word"
      onChange={props.onChange}
    >
      {props.options.map((item) => (
        <option key={item.i} value={item.randomWord[0]}>
          {item.randomWord[0]} - level {item.i+1}
        </option>
      ))}
    </select>
  </div>
)