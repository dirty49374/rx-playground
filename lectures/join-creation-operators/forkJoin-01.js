const observable = forkJoin({
  foo: of(1, 2, 3, 4),
  bar: Promise.resolve(8),
  baz: timer(2000),
});

// 모든 observable이 끝나기를 기다렸다가, 최종값을 모아 반환한다.
observable.subscribe(console('forkJoin'));
