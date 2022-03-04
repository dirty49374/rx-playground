const observable = new Observable(subscribe => {
  // subscribe 할때마다 callback 함수가 호출된다.
  console.log('subscribed');
});

observable.subscribe();
observable.subscribe();
observable.subscribe();
observable.subscribe();
