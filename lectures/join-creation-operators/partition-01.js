const observable = of(1, 2, 3, 4, 5, 6);

// partition은 원래 observable를 2개의 observable로 나눈다
const [evens$, odds$] = partition(
  observable,
  (value, index) => value % 2 === 0,
);

evens$.subscribe(console('evens'));
evens$.subscribe(console('odds'));
