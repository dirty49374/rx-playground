const clicks = fromEvent(document, 'click')
  .pipe(
    mapTo('C'),
    timeline('clicks')
  );

clicks
  .pipe(
    // bufferToggle과 다르게 buffer는 닫히자마자 바로 다시 열리며,
    // closingSelector를 사용해서 닫히는 시점을 제어한다
    bufferWhen(
      () => interval(500)   // buffering이 끝나는 시점
        .pipe(mapTo('|'),
        timeline('closings')
      ),
    ),
    timeline('buffered')
  )
  .subscribe(x => console.log(x));
