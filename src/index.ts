import * as _ from 'lodash';

import * as St from './gi/St'

export function createImports() {

  return {
    gi: {
      St
    }
  }
}


export function createGlobalObject() {

  return {
    // @ts-ignore
    log: (msg: string) => console.log(msg),
    dummy: 5,
    // @ts-ignore
    dummyFun: () => console.log('dummy Func called')
  }
}
// @ts-ignore
exports.createGlobalObject = createGlobalObject
// @ts-ignore
exports.createImports = createImports