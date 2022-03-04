
/* eslint import/no-webpack-loader-syntax: off */
import { Test } from "./tests/types";

export const tests: Test[] = [
  {
    name: 'none',
    code: '',
    // test: () => [] as ObservableItem[],
  },
  {
    name: 'test1',
    // code: text,
    code: require('!!raw-loader!./tests/test1.ts'),
    // test: require('./test1').default,
  },
  // {
  //   name: 'test2',
  //   code: require('!!raw-loader?esModule=false!./test2.ts'),
  //   test: require('./test2').default,
  // },
  // {
  //   name: 'test3',
  //   code: require('!!raw-loader?esModule=false!./test3.ts'),
  //   test: require('./test3').default,
  // }
];
