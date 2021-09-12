export function file_new_for_path(path: string) {
    // TODO
}

export enum FileCreateFlags {
    NONE = 0,
    PRIVATE = 1,
    REPLACE_DESTINATION = 2
}

// helper interface to mock the fileSystem
// can be a file or a directory
interface FileSimple {
    name: string,
    children?: FileSimple[]
}

const rootDir: FileSimple = {
    name: '',
    children: [
        {
            name: 'home',
            children: [{
                name: 'MOCKED_USER',
                children: []
            }]
        }
    ]
}


export class File {

    #path: string
    #basename: string


    private constructor(path: string) {
        this.#path = path

        // TODO: 
        // this.#basename = 

    }

    static new_for_path(path: string) {
        return new File(path)
    }

    public query_exists(cancellable: null) {

        const findInDir = (path: String, children?: FileSimple[]): boolean => {
            const foundFileOrDir = children.find(child => {
                const childPath = path + '/' + child.name

                if (childPath === this.#path) {
                    return true
                }

                if (!child.children) return false

                return findInDir(childPath, child.children)
            })

            return foundFileOrDir ? true : false
        }

        return findInDir(rootDir.name, rootDir.children)
    }

}