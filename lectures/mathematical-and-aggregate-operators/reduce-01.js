of(1, 2, 3, 4, 5)
  .pipe(
    // array의 reduce와 의미가 동일하다.
    reduce((acc, v) => acc + v, 0)
  )
  .subscribe(console('reduce'));

of(1, 2, 3, 4, 5)
  .pipe(
    // 중간값을 계속 보고 싶으면 scan을 사용한다.
    scan((acc, v) => acc + v, 0)
  )
  .subscribe(console('scan'));
