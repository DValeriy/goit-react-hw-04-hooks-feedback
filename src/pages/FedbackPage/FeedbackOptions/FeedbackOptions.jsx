import s from "./FeedbackOptions.module.css";

import Button from "../../../components/Button";

const FeedbackOptions = ({ marksArr }) => {
  const btnMarkup = marksArr.map((item) => (
    <li>
      <Button btnTitle={item} />
    </li>
  ));
  return <ul>{btnMarkup}</ul>;
};

export default FeedbackOptions;
