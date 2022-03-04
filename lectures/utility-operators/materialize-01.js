of(1, 2, 3, 4)
  .pipe(
    // next, error, complete를 ObservableNotification 형식으로 바꾼다
    // { kind: 'N' | 'E' | 'C', value?: any, ... }
    materialize()
  )
  .subscribe(console('materialize'));
