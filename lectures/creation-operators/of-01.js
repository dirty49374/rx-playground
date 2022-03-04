// of()는 정해진 값을 반환하는 observable을 만든다
const observable = of(1, 2, 3);

observable.subscribe({
  next: console.log,
  complete: () => console.log('completed'),
});
