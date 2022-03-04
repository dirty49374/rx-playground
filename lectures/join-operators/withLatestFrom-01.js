const concurrentUsres = timer(200, 1000)
  .pipe(
    take(5),
    map((_, i) => [100, 150, 140, 130, 120][i]),
    timeline('user#')
  );

const faluts = timer(0, 600)
  .pipe(
    take(10),
    map((_, i) => `${i}th fault`),
    timeline('fault'),

    // withLatestFrom은 다른 observable의 최신값을 같이 전달한다
    // 만약 같이 전달할 observable의 값이 없다면, 해당 이벤트는 skip된다.
    withLatestFrom(concurrentUsres),
    timeline('withLatestFrom')
  )
  .subscribe(console('withLatestFrom'));
