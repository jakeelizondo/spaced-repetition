import React from 'react';
import './DashWordWindow.css';

export default class DashWordWindow extends React.Component {
  static defaultProps = { words: [] };
  generateWords() {
    return this.props.words.map((word) => {
      return (
        <li className="list-word" key={word.id}>
          <h4 className="word-text">{word.original}</h4>
          <div className="list-word-counts">
            <p>Correct answer count: {word.correct_count}</p>
            <p>Incorrect answer count: {word.incorrect_count}</p>
          </div>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="dash-word-window">
        <h3>Words to practice</h3>
        <ul className="dash-word-list">{this.generateWords()}</ul>
      </div>
    );
  }
}
