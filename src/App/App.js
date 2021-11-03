import { Component } from "react";
import PropTypes from "prop-types";

import Section from "../components/Section";
import FeedbackOptions from "../components/FeedbackOptions";
import Statistics from "../components/Statistics";
import Notification from "../components/Notification";
import {
  countTotalFeedback,
  countPositiveFeedbackPercentage,
} from "../utils/functions";

import { markObj } from "../assets/data/marks";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  hadleClick = (e) => {
    const { name } = e.target;
    const nameInRegister = name.toLowerCase();
    this.setState((prev) => ({
      [nameInRegister]: prev[nameInRegister] + 1,
    }));
  };

  render() {
    const total = countTotalFeedback(this.state);
    const positivePercentage = countPositiveFeedbackPercentage(
      this.state.good,
      total
    );
    return (
      <>
        <Section title={`Please leave feddback`}>
          <FeedbackOptions
            markup={markObj.marksArr}
            hadleClick={this.hadleClick}
          />
        </Section>
        <Section title={`Statistics`}>
          {total === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              markup={markObj.marksArr}
              stats={this.state}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </>
    );
  }
}

export default App;
