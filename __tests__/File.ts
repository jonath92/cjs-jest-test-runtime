import { File } from '../src/gi/Gio'
import { get_home_dir } from '../src/gi/GLib'

describe('query_exists works', () => {

    it('query_exists shall return true for existing directory', () => {
        const home_dir = File.new_for_path(get_home_dir())

        expect(home_dir.query_exists(null)).toBe(true)

    })

});