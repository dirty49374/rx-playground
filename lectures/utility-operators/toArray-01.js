interval(100)
  .pipe(
    take(10),
    // 결과를 array로 변환하여 한번에 넘겨준다
    toArray()
  )
  .subscribe(console('toArray'));
