interval(100)
  .pipe(
    // 100ms 마다 발생되는 event를 1초 단위로 buffering해서 전달한다.
    bufferTime(1000),
    take(5)
  )
  .subscribe(console('bufferTime'));
