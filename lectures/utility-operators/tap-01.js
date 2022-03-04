of(1, 2, 3, 4)
  .pipe(
    // tap는 observable을 변경하지 않고, 중간에 값을 관측할 수 있다
    tap(v => console.log('tap:  ', v))
  )
  .subscribe(console('final'));
