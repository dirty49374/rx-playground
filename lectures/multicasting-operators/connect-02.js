const source$ = defer(() => {
  console.log('source subscribed ---------------');
  return of(1, 2, 3, 4, 5)
});

of(1)
  .pipe(
    mapTo(source$),
    // connect를 사용하여 multicasting으로 바꾸지 않는다면,
    // source$는 여러번 재시작되게 된다.
    mergeMap((each$) => merge(
      each$.pipe(map(n => `all ${n}`)),
      each$.pipe(filter(n => n % 2 === 0), map(n => `even ${n}`)),
      each$.pipe(filter(n => n % 2 === 1), map(n => `odd ${n}`)),
    ))
  )
  .subscribe(console('without connect'));
