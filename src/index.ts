import * as Atk from './gi/Atk'
import * as Clutter from './gi/Clutter'
import * as Cvc from './gi/Cvc'
import * as Gio from './gi/Gio'
import * as GLib from './gi/GLib'
import * as Pango from './gi/Pango'
import * as Soup from './gi/Soup'
import * as St from './gi/St'

import * as interfaces from './misc/interfaces'
import * as util from './misc/util'
import * as tooltips from './ui/tooltips'
import * as applet from './ui/applet'
import * as panel from './ui/panel'

export function createCjsGlobals() {
  return {
    global: {
      log: console.log,
      logError: (error: string) => console.log(error),
    },
    imports: {
      gi: {
        Atk,
        Clutter,
        Cvc,
        Gio, 
        GLib,
        Pango,
        Soup,
        St
      },
      misc: {
        interfaces, 
        util
      }, 
      ui: {
        tooltips, 
        applet, 
        panel
      }
    }
  }
}

exports.createCjsGlobals = createCjsGlobals