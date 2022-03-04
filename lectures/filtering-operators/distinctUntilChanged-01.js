of(1, 1, 2, 2, 2)
  .pipe(
    // distinctUntilChanged()는 바뀌면 전달한다
    distinctUntilChanged()
  )
  .subscribe(console('distinctUntilChanged 1'));

of({ v: 1 }, { v: 1 }, { v: 2 }, { v: 2 }, { v: 2 },)
  .pipe(
    distinctUntilChanged()
  )
  .subscribe(console('distinctUntilChanged 2'));


of({ v: 1 }, { v: 1 }, { v: 2 }, { v: 2 }, { v: 2 },)
  .pipe(
    distinctUntilChanged((a, b) => a.v === b.v)
  )
  .subscribe(console('distinctUntilChanged 3'));
