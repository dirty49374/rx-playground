let lang = 'ko'

// iif는 if와 유사하다
const $observable = iif(
  () => lang === 'ko',      // condition
  of('하나', '둘'),          // then
  of('one', 'two')          // else
);

lang = 'ko';
$observable.subscribe(console('iif = ko'));

lang = 'en';
$observable.subscribe(console('iif = en'));
