const divide = (p, q, cb) => {
  if (q === 0) cb(new Error('divide by zero'));
  else cb(null, p/q);
};

// nodejs 스타일의 callback을 지원한다 (callback에서 최초 인자가 Error)
const divideObservable = bindNodeCallback(divide);

divideObservable(10, 2).subscribe(console('10/2'));
divideObservable(10, 0).subscribe(console('10/0'));
