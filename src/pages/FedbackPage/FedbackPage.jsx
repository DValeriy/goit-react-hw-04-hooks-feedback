import { Component } from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import marks from "../../data/marks.json";

class FedbackPage extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleOn;

  render() {
    return (
      <>
        <Section title={`Please leave feddback`}>
          <FeedbackOptions marksArr={marks} />
        </Section>
        <Section title={`Statistics`}>
          <Statistics marksArr={marks} />
        </Section>
      </>
    );
  }
}

export default FedbackPage;
