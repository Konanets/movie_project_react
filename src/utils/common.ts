export const checkLimit = (name: string): boolean => {
    return name.length >= 2
}

export const randomizer = (length: number): number => {
    return Math.floor(Math.random() * length)
}


export const truncateString = (str: string, length: number): string => {
    if (str.length > length) {
        return str.slice(0, length) + '...'
    } else return str
}

export const convertTime = (time: number): string => {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;
    return `${hours}h ${minutes}m`
}

export const moneyConverter = (money: number): string | number => {
    return (Math.abs(Number(money)) >= 1.0e+9
        ? Math.floor(Math.abs(Number(money)) / 1.0e+9) + "B"
        : Math.floor(Math.abs(Number(money))) >= 1.0e+6
            ? Math.floor(Math.abs(Number(money)) / 1.0e+6) + "M"
            : Math.floor(Math.abs(Number(money))) >= 1.0e+3
                ? Math.floor(Math.abs(Number(money)) / 1.0e+3) + "K"
                : Math.floor(Math.abs(Number(money))))
}
