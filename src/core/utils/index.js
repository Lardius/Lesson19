import moment from "moment";
import 'moment-precise-range-plugin';

export const getFormattedTime = (date) => {
  return  moment(date).format('MMMM Do YYYY, h:mm:ss a')
}

export const calculateSumOfNumbers = (numbers) => {
  return numbers.reduce((acc, num) => {
    return acc + num
  }, 0)
}