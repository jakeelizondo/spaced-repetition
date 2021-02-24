import React from 'react';
import LanguageService from '../services/language-service';

export const WordContext = React.createContext();

WordContext.displayName = 'WordContext';

export class WordProvider extends React.Component {
  state = { nextWord: {}, feedback: {}, guessing: true, guess: '' };

  componentDidMount() {
    LanguageService.getNextWord().then((word) => {
      this.setState({
        nextWord: word,
      });
    });
  }
  handleGuess = (guess) => {
    this.setState({ guess, prevWord: this.state.nextWord.nextWord });
    LanguageService.guessWord(guess).then((feedback) => {
      this.setState({
        feedback,
        guessing: false,
        nextWord: {
          nextWord: feedback.nextWord,
          totalScore: feedback.totalScore,
          wordCorrectCount: feedback.wordCorrectCount,
          wordIncorrectCount: feedback.wordIncorrectCount,
        },
      });
    });
  };

  getNextWord = () => {
    LanguageService.getNextWord().then((word) => {
      this.setState({
        nextWord: word,
      });
    });
  };

  resetGuessing = () => {
    this.setState({ guessing: !this.state.guessing });
  };

  render() {
    const data = {
      nextWord: this.state.nextWord,
      guessing: this.state.guessing,
      handleGuess: this.handleGuess,
      feedback: this.state.feedback,
      guess: this.state.guess,
      prevWord: this.state.prevWord,
      resetGuessing: this.resetGuessing,
      getNextWord: this.getNextWord,
    };

    return (
      <WordContext.Provider value={data}>
        {this.props.children}
      </WordContext.Provider>
    );
  }
}
