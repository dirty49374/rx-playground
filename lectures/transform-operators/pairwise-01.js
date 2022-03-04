of(1, 2, 3, 4, 5)
  .pipe(
    // pairwise는 이전 이벤트와 현재 이벤트를 쌍으로 전달한다.
    pairwise()
  )
  .subscribe(console('pairwise'));
