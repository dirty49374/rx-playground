const observable = new Observable(subscribe => {
  subscribe.next(1);
  subscribe.next(2);
  subscribe.next(3);
  subscribe.complete();

  // complete() 호출해도 끝이다.
  subscribe.next(4);
  subscribe.error(-999);
  subscribe.complete();
});

const observer = {
  next: v => console.log('observed value', v),
  error: e => console.log('observed error', e),
  complete: () => console.log('completed'),
}

observable.subscribe(observer);
