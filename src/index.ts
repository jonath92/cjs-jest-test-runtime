import * as Atk from './gi/Atk'
import * as Clutter from './gi/Clutter'
import * as Cvc from './gi/Cvc'
import * as GLib from './gi/GLib'
import * as Pango from './gi/Pango'
import * as St from './gi/St'
import * as interfaces from './misc/interfaces'

export function createCjsGlobals() {
  return {
    global: {
      log: (msg: string) => console.log(msg),
      logError: (error: string) => console.log(error),
    },
    imports: {
      gi: {
        Atk,
        Cvc,
        Clutter,
        GLib,
        Pango,
        St
      },
      misc: {
        interfaces
      }
    }
  }
}

exports.createCjsGlobals = createCjsGlobals