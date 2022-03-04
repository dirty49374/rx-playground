// 함수를 리턴하는 함수로 바꾸자
function multiply(multiplier) {
  return function(orig) {
    return new Observable(subscribe => {
      const subscription = orig.subscribe({
        next: v => subscribe.next(v * multiplier), // v*2 ==> v*multiplier
        error: e => subscribe.error(e),
        complete: () => subscribe.complete(),
      });

      return () => subscription.unsubscribe();
    });
  }
}
const x2 = multiply(2);

const original = of(1, 2, 3);

// 함수 chain을 구성해서 여러번 변환을 거친다.
const originalx4 = x2(x2(original));
originalx4.subscribe(console('originalx4'));
