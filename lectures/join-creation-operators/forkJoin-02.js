const observable = forkJoin([
  of(1, 2, 3, 4),
  Promise.resolve(8),
  timer(2000),
]);

// array도 가능
observable.subscribe(console('forkJoin - array'));
