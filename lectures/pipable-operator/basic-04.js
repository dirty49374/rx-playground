function multiply(multiplier) {
  return function (orig) {
    return new Observable(subscribe => {
      const subscription = orig.subscribe({
        next: v => subscribe.next(v * multiplier), // v*2 ==> v*multiplier
        error: e => subscribe.error(e),
        complete: () => subscribe.complete(),
      });

      return () => subscription.unsubscribe();
    });
  }
}

// 이것이 pipable operator이다.
of(1, 2, 3)
  .pipe(
    multiply(2),
    multiply(2),
  )
  .subscribe(console('originalx4'));
