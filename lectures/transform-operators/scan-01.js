of(1, 2, 3, 4, 5)
  .pipe(
    // scan은 reduce와 비슷하나 중간값을 계속 전달한다.
    scan((acc, v) => acc + v, 0)
  )
  .subscribe(console('scan'));

of(1, 2, 3, 4, 5)
  .pipe(
    // reduce는 마지막 값을 전달한다.
    reduce((acc, v) => acc + v, 0)
  )
  .subscribe(console('reduce'));
