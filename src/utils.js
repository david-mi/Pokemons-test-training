/**
 * Simulate waiting promise
 * 
 * @param {number} ms time to wait
 * @returns 
 */

export const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}; 