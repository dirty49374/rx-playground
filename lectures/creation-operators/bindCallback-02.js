const myfunc = (cb) => {
  cb(1, 2, 3);
};

// callback 함수의 파라메터가 여러개이면 array로 호출된다.
const bindedObservable = bindCallback(myfunc);
bindedObservable()
  .subscribe(console('bindCallback'));
