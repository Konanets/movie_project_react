export const checkLimit = (name: string): boolean => {
    return name.length >= 2
}

export const randomizer = (length: number): number => {
    return Math.floor(Math.random() * length)
}


export const truncateString = (str: string, length: number):string => {
    if (str.length > length) {
        return str.slice(0, length)+'...'
    }else return str
}
