/**
 * Function to add only positive numbers ignoring any delimiters & throw error for negative numbers in input.
 * @param {string} numString - string containing numbers with delimiters.
 * @return {number} The result of addition.
 */

export default function addNumbersOnly(numString: string): number {
  if (numString === "") {
    return 0;
  }
  const numbers: number[] = [];
  const negatives: number[] = [];
  const alphabets: string[] = [];

  numString.split(/[,\n\\n'%*&#@!^;]/).forEach((num) => {
    const regexAl =/([A-Za-z])\w+/g;
    if (regexAl.test(num)) {
      alphabets.push(num);
    }
   else if (!isNaN(parseInt(num, 10))) {
      if (parseInt(num) < 0) {
        negatives.push(parseInt(num, 10));
      } else if (parseInt(num, 10) <= 1000) numbers.push(parseInt(num, 10));
    }
  });

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }
  if (alphabets?.length > 0) {
    throw new Error(`Alphabets are not allowed: ${alphabets.join(",")}`);
  }

  const sum = numbers?.reduce((acc, num) => {
    return (acc += num);
  }, 0);
  return sum;
}
