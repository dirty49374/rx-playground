// x2() 함수는 observable을 받아서 2배값을 리턴하는 observable로 변환한다
function x2(orig) {
  return new Observable(subscribe => {
    // 자신이 subscribe되면 원래 observable (orig)에 subscribe한다.
    const subscription = orig.subscribe({
      next: v => subscribe.next(v * 2),   // 값을 2배로
      error: e => subscribe.error(e),
      complete: () => subscribe.complete(),
    });

    return () => subscription.unsubscribe();  // very important
  });
}

const original = of(1, 2, 3);
const originalx2 = x2(original);

original.subscribe(console('original'));
originalx2.subscribe(console('originalx2'));
