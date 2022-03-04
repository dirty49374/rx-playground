const clicks = fromEvent(document, 'click')
  .pipe(
    mapTo('C'),
    timeline('clicks')
  );

const openings = interval(1000)
  .pipe(
    mapTo('['),
    timeline('openings')
  );

clicks
  .pipe(
    // bufferToggle은 observable을 사용하여, buffering 시작, 끝을 제어한다.
    // 실행후 화면을 아무곳이나 클릭하면, 매초단위로 500ms동안 버퍼링을 한다. 나머지는 버려진다.
    bufferToggle(
      openings,             // buffering이 시작하는 시점
      () => interval(500)   // buffering이 끝나는 시점
        .pipe(mapTo(']'),
          timeline('closings')
        ),
    ),
    timeline('buffered')
  )
  .subscribe(x => console.log(x));
