const source$ = defer(() => {
  console.log('source interval created');
  return timer(100, 1000).pipe(take(5));
});

const tick$ = connectable(source$, {
  connector: () => new Subject()
});

// tick$.connect()를 호출하기 전에는 연결되지 않는다.
tick$.subscribe(console('ob1'));
tick$.subscribe(console('ob2'));

console.log('ob1, ob2 subscribed and waiting 2 seconds ...');
setTimeout(() => {
  console.log('$tick.connect() -----------------------');
  tick$.connect();

  setTimeout(() => {
    console.log('ob3 subscribed');
    // 추가로 subscribe 가능하다
    tick$.subscribe(console('ob3'));

    setTimeout(() => {
      // 이미 source$가 종료되었다. subscribe 하더라도 재시작되지 않는다.
      tick$.subscribe(console('ob4'));
      console.log('ob4 subscribed and waiting 2 seconds ...');

      setTimeout(() => {
        console.log('$tick.connect() -----------------------');
        tick$.connect();
      }, 2000);

    }, 3000);
  }, 2000);

}, 2000);
