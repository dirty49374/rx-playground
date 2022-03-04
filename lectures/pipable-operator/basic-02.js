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
const originalx2 = x2(original);
originalx2.subscribe(console('originalx2'));
