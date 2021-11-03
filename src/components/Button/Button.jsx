import s from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ btnTitle, hadleClick }) => {
  return (
    <button type="button" onClick={hadleClick} name={btnTitle}>
      {btnTitle}
    </button>
  );
};

Button.propTypes = {
  btnTitle: PropTypes.string.isRequired,
  hadleClick: PropTypes.func.isRequired,
};

export default Button;
