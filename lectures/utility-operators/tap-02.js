of(1, 2, 3, 4)
  .pipe(
    // error, complete도 관측할 수 있다
    tap({
      next: v => console.log('tap:   next', v),
      error: e => console.log('tap:   error', e),
      complete: () => console.log('tap:   completed'),
    })
  )
  .subscribe(console('final'));
