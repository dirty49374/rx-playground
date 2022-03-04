of(1, 2, 3, 4)
  .pipe(
    // 상수값으로 mapping한다.
    mapTo('updated')
    /* 아래 코드와 동일하다
    map(() => 'updated')
    */
  )
  .subscribe(console('mapTo'));
