import React, { Component } from 'react';
import { WordContext } from '../../contexts/WordContext';
import NextWordBar from '../../components/NextWordBar/NextWordBar';
import GuessFeedback from '../../components/GuessFeedback/GuessFeedback';
import WordGuessForm from '../../components/WordGuessForm/WordGuessForm';

class LearningRoute extends Component {
  static contextType = WordContext;

  componentWillUnmount() {
    this.context.resetGuessing();
  }
  render() {
    return (
      <section>
        {this.context.guessing === true ? (
          <div>
            <NextWordBar />
            <WordGuessForm />
          </div>
        ) : (
          <GuessFeedback />
        )}
      </section>
    );
  }
}

export default LearningRoute;
