import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';
import draw from '../images/drawandguess.png';
import { DrawingService } from '../services/drawing.service'

import { getIsFirstUser } from '../actions/drawingActions'


class homePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: "",
      title: "Welcome to Draw & Guess",
      width: 0,
      height: 0,
    };

  }

  async componentDidMount() {
    await this.loadIsFirst()
  }

  loadIsFirst() {
    this.props.getIsFirstUser()
  }

  resetServer = () => {
    DrawingService.setReset()
  }



  render() {
    return (
      <section className="home">
      <button className="reset-button"  onClick={() => { this.resetServer() }}>reset server</button>

        <div className="home">
          <div className="game-header">
            <h2 className="game-title"> {this.state.title} </h2>
            <div className="image-btn">
              <NavLink to="/choose-words">
                  <img
                    src={draw}
                    alt="draw and guess image" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    section: state.drawing,
  };
};

const mapDispatchToProps = {
  getIsFirstUser
};

export default connect(mapStateToProps, mapDispatchToProps)(homePage);
