import React from 'react';
import LanguageService from '../services/language-service';

export const LanguageContext = React.createContext();

LanguageContext.displayName = 'LanguageContext';

export class LanguageProvider extends React.Component {
  state = { language: {}, words: [] };

  componentDidMount() {
    LanguageService.getAllWords().then((language) => {
      this.setState({
        language: language.language,
        words: language.words,
      });
    });
  }

  render() {
    const data = {
      language: this.state.language,
      words: this.state.words,
    };

    return (
      <LanguageContext.Provider value={data}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}
