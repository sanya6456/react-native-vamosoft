const daysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const getYear = (date) => date.getFullYear();

const getMonth = (date) =>
  date.length < 2 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
const getMonthString = (date) =>
  date.toLocaleString("en-US", { month: "long" });

const getDay = (date) =>
  date.length < 2 ? `0${date.getDate()}` : date.getDate();
const getDayString = (dayIndex) => {
  return daysArray[dayIndex];
};

const customDate = ({ date, order }) => {
  let d = date;

  switch (order) {
    case "y-m-d":
      d = [getYear(d), getMonth(d), getDay(d)].join(" ");
      break;

    case "d-ms-y":
      d = [getDay(d), getMonthString(d), getYear(d)].join(" ");
      break;

    case "ds-ms-d-y":
      d = `${getDayString(d.getDay())}, ${[
        getMonthString(d),
        getDay(d),
        getYear(d),
      ].join(" ")}`;
      break;

    default:
      d = "";
      break;
  }

  return d.toString();
};

export default customDate;
