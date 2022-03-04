const after = (ms, val) => new Observable(subscribe => {
  setTimeout(() => {
    subscribe.next(val);
    subscribe.complete();
  }, ms);
});

// 각각의 observable들을 도착하는 순서대로 합친다
merge(after(3000, "1st"), after(2000, "2nd"), of("3rd"))
  .subscribe(console('merge'));
