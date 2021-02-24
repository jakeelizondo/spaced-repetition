import React from 'react';
import { WordContext } from '../../contexts/WordContext';
import './GuessFeedback.css';

export default class GuessFeedback extends React.Component {
  static contextType = WordContext;
  generateFeedback = () => {
    if (this.context.feedback.isCorrect === false) {
      return (
        <div className="feedback">
          <h2>Good try, but not quite right :(</h2>

          <div className="DisplayScore">
            <p>Your total score is: {this.context.feedback.totalScore}</p>
          </div>
          <div className="DisplayFeedback">
            <p>
              The correct translation for {this.context.prevWord} was{' '}
              {this.context.feedback.answer} and you chose {this.context.guess}!
            </p>
          </div>
        </div>
      );
    }
    if (this.context.feedback.isCorrect === true) {
      return (
        <div className="feedback">
          <h2>You were correct! :D</h2>

          <div className="DisplayScore">
            <p>Your total score is: {this.context.feedback.totalScore}</p>
          </div>
          <div className="DisplayFeedback">
            <p>
              The correct translation for {this.context.prevWord} was{' '}
              {this.context.feedback.answer} and you chose {this.context.guess}!
            </p>
          </div>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="feedback-section">
        {this.generateFeedback()}
        <button onClick={this.context.resetGuessing} className="red-back">
          Try another word!
        </button>
      </div>
    );
  }
}
