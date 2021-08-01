import moment from "moment";
import 'moment-precise-range-plugin';

export const getTodayDateFormat = (date) => {
  return  moment(date).format('MMMM Do YYYY, h:mm:ss a')
}