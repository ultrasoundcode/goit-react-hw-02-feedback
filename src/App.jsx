import { FeedbackOptions } from 'components/FeedbackOptions.jsx/FeedbackOptions';
import { GlobalStyle } from 'components/GlobalStyle';
import { Statistics } from 'components/Statistics/Statistics';
import { Component } from 'react';

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
          <FeedbackOptions />
          <h3>Statistics</h3>
          <Statistics />
        </section>
      </div>
    );
  }
}
