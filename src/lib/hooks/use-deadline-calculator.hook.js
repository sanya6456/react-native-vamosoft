import useDatesDifference from "./use-dates-difference.hook";

const useDeadlineCalculator = () => {
  const {
    getDays: getDaysDiff,
    getMonths: getMonthsDiff,
    getHours: getHoursDiff,
    getDaysInMonth,
  } = useDatesDifference();

  const getMonths = (deadline) => {
    const monthsLeft = getMonthsDiff(new Date(deadline));
    const months = monthsLeft < 0 ? 0 : monthsLeft;

    return months;
  };

  const getDays = (deadline) => {
    const daysLeft =
      getDaysDiff(new Date(deadline)) - getDaysInMonth(new Date(deadline));
    const days = daysLeft < 0 ? 0 : daysLeft;

    return days;
  };

  const getHours = (deadline) => {
    const hoursLeft = Math.floor(getHoursDiff(deadline) % 24);
    const hours = hoursLeft < 0 ? 0 : hoursLeft;

    return hours;
  };

  return { getMonths, getHours, getDays };
};

export default useDeadlineCalculator;
