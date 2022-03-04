interval(100) // 영원히 지속되는 observable에 유용하다
  .pipe(
    take(10)
  )
  .subscribe(console('100ms x 10'));
