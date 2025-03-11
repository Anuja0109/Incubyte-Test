export default function addNumbersOnly(numString: string): number {
  if (numString === "") {
    return 0;
  }
  const numbers: number[] = [];
  numString?.split(",").forEach((num) => {
    numbers.push(parseInt(num));
  });

  const sum = numbers?.reduce((acc, num) => {
    return (acc += num);
  }, 0);
  console.log({ sum });
  return sum;
}
