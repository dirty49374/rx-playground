const range = (delay, count) => interval(delay).pipe(take(count));

range(1000, 2)
  .pipe(
    timeline('input'),
    // mergeScan은 scan과 다르게 accumulator가 결과값을 observable을 반환한다.
    // 리턴된 observable은 merge된다.
    mergeScan(
      (acc, input) => of(`${acc}${input}, `).pipe(
        delay(500),
        timeline(`accum-${input}`)
      ),
      ''
    ),
    timeline('output')
  )
  .subscribe(console('mergeScan'));
