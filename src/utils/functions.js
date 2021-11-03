export const countTotalFeedback = (obj) =>
  Object.values(obj).reduce((acc, value) => (acc += value), 0);
export const countPositiveFeedbackPercentage = (value, total) => {
  return total > 0 ? `${parseInt((value / total) * 100)}%` : "";
};
