import s from "./FeedbackOptions.module.css";
import PropTypes from "prop-types";
import Button from "../Button";

const FeedbackOptions = ({ markup, hadleClick }) => {
  const btnMarkup = markup.map(({ mark, id }) => (
    <li key={id} className={s.item}>
      <Button btnTitle={mark} hadleClick={hadleClick} />
    </li>
  ));
  return <ul className={s.list}>{btnMarkup}</ul>;
};

FeedbackOptions.propTypes = {
  markup: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  hadleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
