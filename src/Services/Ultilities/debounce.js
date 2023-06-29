/**
 * Create a delay function
 * @param {function} func Set a function to be called
 * @param {number} timeout set the timeout in milliseconds. Default is 300
 * @returns Delayed Function
 */
export default function debounce(func, timeout) {
  let timer;
  let setDelay = timeout ?? 300;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, setDelay);
  };
}
