import { thread } from "../components/model/thread";

export default class Utils {
  sortNumber(threadArray: any[], views, order = 1) {
    return threadArray.sort((a, b) => {
      // Use toUpperCase() to ignore character casing
      const numberA = a[views];
      const numberB = b[views];
      return order * (numberA - numberB);
    });
  }
}
