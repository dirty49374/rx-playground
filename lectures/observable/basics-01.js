const observable = new Observable(subscribe => {
  // subscribe 할때 callback 함수가 호출된다.
  console.log('subscribed');
});

observable.subscribe();
