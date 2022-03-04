const source$ = timer(0, 1000)
  .pipe(
    take(10),
    tap(console('source$')),

    // 동시에 연결된 observer가 모두 사라지면 reset된다.
    share()
  );

const ob1 = source$.subscribe(console('ob1'));
const ob2 = source$.subscribe(console('ob2'));

setTimeout(() => {
  ob1.unsubscribe();
  ob2.unsubscribe();
  console.log('----------------- ob1, ob2 unsubscribed');
  console.log('----------------- source$ restarted !!!!!!!!!!!');

  const ob3 = source$.subscribe(console('ob3'));
  const ob4 = source$.subscribe(console('ob4'));
}, 2000);

