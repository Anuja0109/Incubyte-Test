/**
 * Function to increment existing count.
 * @param {number} count - how many times a function get called already.
 * @return {number} The result of incrementing count.
 */
export default function getCallCount(count: number = 0) {
  count += 1;
  return count;
}
