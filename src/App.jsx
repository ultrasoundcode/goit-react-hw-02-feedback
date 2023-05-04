import { Component } from 'react';
import { GlobalStyle } from 'components/GlobalStyle';
import { Feedback } from 'components/Feedback/Feedback';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <GlobalStyle />
        <section>
          <h2>Please leave Feedback</h2>
          <Feedback />
          <h3>Statistics</h3>
          <Statistics />
        </section>
      </div>
    );
  }
}
