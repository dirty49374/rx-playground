const source$ = timer(0, 1000)
  .pipe(
    take(10),
    tap(console('source$')),

    // share()는 multicast 가능한 observable로 변환해준다.
    // 여러번 subscribe하더라도 source$는 공유되어 한번만 수행된다.
    share()
  );

source$.subscribe(console('ob1'));
source$.subscribe(console('ob2'));
