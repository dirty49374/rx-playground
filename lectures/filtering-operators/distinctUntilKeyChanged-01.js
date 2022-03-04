of({ v: undefined }, { v: null }, { v: 1 }, { v: 1 })
  .pipe(
    // distinctUntilKeyChanged()는 object의 key가 바뀌면 전달한다
    distinctUntilKeyChanged('v')
  )
  .subscribe(console('distinctUntilKeyChanged 1'));


of({ v: undefined }, { v: null }, { v: 1 }, { v: 1 })
  .pipe(
    distinctUntilKeyChanged('v', (a, b) => a == b)
  )
  .subscribe(console('distinctUntilKeyChanged 2'));

of([], [], [1], [1], [1, 2])
  .pipe(
    distinctUntilKeyChanged('length')
  )
  .subscribe(console('distinctUntilKeyChanged 3'));
