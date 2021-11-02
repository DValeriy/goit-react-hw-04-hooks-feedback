import s from "./Statistics.module.css";

const Statistics = ({ marksArr }) => {
  const statMarkup = marksArr.map((item) => (
    <li>
      <span>{item}</span>
      <span></span>
    </li>
  ));
  return <ul>{statMarkup}</ul>;
};

export default Statistics;
