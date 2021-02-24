import React from 'react';
import { WordContext } from '../../contexts/WordContext';
import './WordGuessForm.css';

export default class WordGuessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { guess: '' };
  }

  static contextType = WordContext;

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ guess: e.target.value });
  };

  handleGuess = (e) => {
    e.preventDefault();
    this.context.handleGuess(this.state.guess);
  };

  render() {
    return (
      <form className="learn-guess-form" onSubmit={(e) => this.handleGuess(e)}>
        <label htmlFor="learn-guess-input">
          What's the translation for this word?
        </label>
        <input
          type="text"
          id="learn-guess-input"
          onChange={(e) => this.handleChange(e)}
          required
        ></input>
        <button type="submit" className="red-back">
          Submit your answer
        </button>
      </form>
    );
  }
}
