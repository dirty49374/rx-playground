of(1, 2, 3, 4, 5, 1)  // 마지막 1도 전달된다, filter가 아니다
  .pipe(
    skipWhile(v => v < 3)
  )
  .subscribe(console('skipWhile < 3'));
