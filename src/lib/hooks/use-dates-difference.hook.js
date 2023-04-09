const useDatesDifference = () => {
  const getDaysInMonth = (date) => {
    const incomingDate = new Date(date);

    return new Date(
      incomingDate.getFullYear(),
      incomingDate.getMonth() + 1,
      0
    ).getDate();
  };

  const getDays = (date) => {
    const diffInTime = new Date(date).getTime() - new Date().getTime();
    const diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));

    return diffInDays;
  };

  const getMonths = (date) => {
    const diffInMonth = new Date(date).getMonth() - new Date().getMonth();
    const diffInMonths = Math.floor(diffInMonth);

    return diffInMonths;
  };

  const getHours = (date) => {
    const msInHour = 1000 * 60 * 60;

    return Math.round(
      Math.abs(new Date(date).getTime() - new Date().getTime()) / msInHour
    );
  };

  return { getDays, getMonths, getDaysInMonth, getHours };
};

export default useDatesDifference;
