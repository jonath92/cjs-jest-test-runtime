import * as Atk from './gi/Atk'
import * as Clutter from './gi/Clutter'
import * as Cvc from './gi/Cvc'
import * as GLib from './gi/GLib'
import * as Pango from './gi/Pango'
import * as St from './gi/St'


export function createImports() {

  return {
    gi: {
      Atk,
      Cvc,
      Clutter,
      GLib, 
      Pango,
      St
    }
  }
}


export function createGlobalObject() {

  return {
    log: (msg: string) => console.log(msg),
    logError: (error: string) => console.log(error),
    dummy: 5,
    // @ts-ignore
    dummyFun: () => console.log('dummy Func called')
  }
}
// @ts-ignore
exports.createGlobalObject = createGlobalObject
// @ts-ignore
exports.createImports = createImports