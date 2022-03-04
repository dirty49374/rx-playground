const query = concat(of(1, 2, 3, 4), throwError(() => -999));

query
  .pipe(
    // 에러가 발생하면 추가로 2회 더 반복한다
    retry(2)
  )
  .subscribe(console('retry'));
