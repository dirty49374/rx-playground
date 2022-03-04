// from은 다양한 종류의 입력소스를 observable로 변환한다

// array
from([1, 2, 3])
  .subscribe(console('from array'));

// generator
const generator = function*() { yield 1; yield 2; };
from(generator())
  .subscribe(console('from generator'));

// promise
from(Promise.reject(-999))
  .subscribe(console('from promise'));
