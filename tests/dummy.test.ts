import { createIcon } from "../dummy"

it('sum working', () => {

    const myIcon = createIcon()

    expect(myIcon.icon_name).toBe('dummy')
})