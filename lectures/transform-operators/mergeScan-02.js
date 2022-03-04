const range = (delay, count) => interval(delay).pipe(take(count));

range(1000, 2)
  .pipe(
    timeline('input'),
    // 순서가 꼬여서, 다음 input이 들어온 뒤에 합산이 끝이 난다면,
    // 합산을 덮어쓰게 될 수 있다.
    mergeScan(
      (acc, input) => of(`${acc}${input}, `).pipe(
        delay(1500),
        timeline(`accum-${input}`)
      ),
      ''
    ),
    timeline('output')
  )
  .subscribe(console('mergeScan'));

/*
이전 예제)
1506 ms: mergeScan: next = 0, 
2506 ms: mergeScan: next = 0, 1, 

이번 예제)
2506 ms: mergeScan: next = 0, 
3508 ms: mergeScan: next = 1,
*/
