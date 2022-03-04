// AsyncSubject는 complete후에 마지막 값만 전달한다.

const subject = new AsyncSubject();

subject.next(1);
subject.next(2);

subject.subscribe(console('ob1'));
subject.next(3);
subject.next(4);
subject.next(5);

console.log('subject complete -------------------')
subject.complete();   // ob1이 5를 받고 종료된다.


subject.subscribe(console('ob2'));  // 5를 받고 종료된다.
subject.subscribe(console('ob3'));  // 5를 받고 종료된다.
