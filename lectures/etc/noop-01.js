noop();  // 아무것도 읽어나지 않는 빈 함수이다.

function someFunction(cb) {
  console.log('someFunction called');
  (cb || noop)();
}

someFunction();
