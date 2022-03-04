const tick$ = interval(1000);

timer(0, 300).pipe(take(10))
  .pipe(
    window(tick$),
    // 각 window별 observable들을 scan하여 window를 모은다.
    // 각 window별 observable이 완전히 순차적으로 발생되기 때문에,
    // concatMap, mergeMap, switchMap 모두 동일한 결과이다.
    switchMap(
      o => o.pipe(
        scan((acc, v) => [...acc, v], []),
      ),
    ),
  )
  // 결과는 high order observable들이다.
  .subscribe(console('observer'));
