const computeNthPrimeNumber = (nth, cb) => {
  setTimeout(() => cb(null, `I don't know ${nth}th prime number`), 1000);
};

// callback으로 결과를 전달하는 함수를 observable로 바꿔준다.
// 해당함수는 callback의 위치가 마지막이어야 한다.
const computePrimeNumber = bindCallback(computeNthPrimeNumber);
computePrimeNumber(100000)
  .subscribe(console('bindCallback'));
