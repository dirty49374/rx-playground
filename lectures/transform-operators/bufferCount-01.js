of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
  .pipe(
    // 3개씩 buffering한다
    bufferCount(3),
  )
  .subscribe(console('buffer'));
