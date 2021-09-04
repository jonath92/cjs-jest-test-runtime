import { createIcon } from "./dummy"

describe('Jest describe not throwing an error', () => {
});


it('createIcon working', () => {

    const myIcon = createIcon()

    expect(myIcon.icon_name).toBe('dummy')
})