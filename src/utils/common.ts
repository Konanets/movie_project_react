export const checkLimit=(name:string):boolean=>{
    return name.length>=2
}

export const randomizer=(length:number):number=>{
    return Math.floor(Math.random()*length)
}
