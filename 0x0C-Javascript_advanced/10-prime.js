function countPrimeNumbers() {
  let isPrime;
  let primesCount = 0;
  for (let i = 2; i <= 100; i++) {
    isPrime = true;
    let sqrt = Math.round(Math.sqrt(i));
    for (let mod = 2; mod <= sqrt; mod++) {
      if (i % mod == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primesCount += 1;
  }
  return primesCount;
}

const t0 = performance.now();
for (let i = 0; i < 100; i++) {
  countPrimeNumbers();
}
const t1 = performance.now();
console.log(
  `Execution time of calculating prime numbers 100 times was ${
    t1 - t0
  } milliseconds.`
);
