timer(0, 1000)
  .pipe(
    take(3),
    map(i => ['A', 'B', 'C'][i]),
    tap(console('input'))
  )
  .pipe(
    // switchScan은 입력값을 accumulator를 통해 합산을 넘겨주는 observable을 리턴하고,
    // 가장 최신 observable을 바깥쪽 observable에 전달한다.
    switchScan(
      (acc, p) => timer(0, 600).pipe(
        take(3),
        scan((acc2, q) => [...acc2, `${p}-${q}`], acc),
      ),
      []
    ),
    take(10)
  )
  .subscribe(console('switchScan'));
