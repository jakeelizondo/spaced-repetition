import React from 'react';
import { WordContext } from '../../contexts/WordContext';
import './NextWordBar.css';

export default class NextWordBar extends React.Component {
  static contextType = WordContext;
  render() {
    return (
      <div className="next-word-bar">
        <h2>Translate the word:</h2>
        <span>{this.context.nextWord.nextWord}</span>
        <div className="word-scores">
          <p>Your total score is: {this.context.nextWord.totalScore}</p>
          <p>
            You have answered this word correctly{' '}
            {this.context.nextWord.wordCorrectCount} times.
          </p>
          <p>
            You have answered this word incorrectly{' '}
            {this.context.nextWord.wordIncorrectCount} times.
          </p>
        </div>
      </div>
    );
  }
}
