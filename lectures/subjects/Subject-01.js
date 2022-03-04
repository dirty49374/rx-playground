// Subject는 subscribe한 이후의 값을 받는다.
const subject = new Subject();

const sub1 = subject.subscribe(console('ob1'));
subject.next(1);  // ob1이 받는다

const sub2 = subject.subscribe(console('ob2'));
subject.next(2);  // ob1, ob2가 받는다

sub2.unsubscribe();
subject.next(3);  // ob1이 받는다

sub1.unsubscribe();
subject.next(4);  // 아무도 못 받는다

const sub3 = subject.subscribe(console('ob3'));
subject.next(5);  // ob3가 받는다

subject.error(-999);  // ob3가 에러를 받는다
subject.next(6);  // 무시된다

const sub4 = subject.subscribe(console('ob4')); // 에러를 받고 종료된다.
