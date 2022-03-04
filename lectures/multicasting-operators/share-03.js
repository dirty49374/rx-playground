const source$ = timer(0, 1000)
  .pipe(
    take(10),
    tap(console('source$')),

    // 연결된 observer가 없어도 (refCount() == 0) reset되지 않는다.
    share({
      resetOnRefCountZero: false
    })
  );

const ob1 = source$.subscribe(console('ob1'));
const ob2 = source$.subscribe(console('ob2'));

setTimeout(() => {
  ob1.unsubscribe();
  ob2.unsubscribe();
  console.log('----------------- ob1, ob2 unsubscribed');
  console.log('----------------- source$ continues !!!!!!!!!!!');

  setTimeout(() => {
    console.log('----------------- ob3, ob4 subscribed');
    const ob3 = source$.subscribe(console('ob3'));
    const ob4 = source$.subscribe(console('ob4'));
  }, 2000);

}, 2000);

