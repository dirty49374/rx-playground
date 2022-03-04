of(1, 2, 3, 4, 5, 1)    // 마지막 1은 전달되지 않는다, filter가 아니다
  .pipe(
    takeWhile(v => v < 3)
  )
  .subscribe(console('takeWhile < 3'));
