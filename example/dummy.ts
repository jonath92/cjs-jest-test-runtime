// @ts-ignore
const { Icon } = imports.gi.St

export function createIcon() {
    const icon = new Icon({
        icon_name: 'dummy'
    })

    // @ts-ignore
    global.log('global is working')

    return icon
}