import React, { Component } from 'react';
import DashBar from '../../components/DashBar/DashBar';
import DashWordWindow from '../../components/DashWordWindow/DashWordWindow';
import { LanguageContext } from '../../contexts/LanguageContext';

class DashboardRoute extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <section>
        <DashBar
          language={this.context.language.name}
          total_score={this.context.language.total_score}
        />
        <DashWordWindow words={this.context.words} />
      </section>
    );
  }
}

export default DashboardRoute;
