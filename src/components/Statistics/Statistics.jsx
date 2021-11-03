import s from "./Statistics.module.css";
import PropTypes from "prop-types";

const Statistics = ({ markup, stats, total, positivePercentage }) => {
  const combineMarkAndStat = markup.reduce((acc, item, index) => {
    item.stat = Object.values(stats)[index];
    acc.push(item);
    return acc;
  }, []);
  const statMarkup = combineMarkAndStat.map(({ mark, id, stat }) => (
    <li key={id} className={s.item}>
      <span>{mark}:</span>
      <span>{stat}</span>
    </li>
  ));
  return (
    <ul className={s.list}>
      {statMarkup}
      <li key={1} className={s.item}>
        <span>Total:</span>
        <span>{total}</span>
      </li>
      <li key={2} className={s.item}>
        <span>Positive feedback:</span>
        <span>{positivePercentage}</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.node.isRequired,
};

export default Statistics;
