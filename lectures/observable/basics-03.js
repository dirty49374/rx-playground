let count = 0;
const observable = new Observable(subscribe => {
  const nth = ++count;
  console.log(`${nth}th observer subscribed`);

  // callback 함수를 리턴하면, unsubscribe 시에 호출된다.
  return () => console.log(`${nth}th observer unsubscribed`);
});

observable.subscribe().unsubscribe();
observable.subscribe().unsubscribe();
observable.subscribe().unsubscribe();
