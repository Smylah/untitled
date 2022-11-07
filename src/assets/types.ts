export interface icon {
    id:number,
    name:string,
    logo:string,
}

export interface feature {
    id:number,
    name:string,
    expand:string,
    learnMore?:boolean,
    border?:boolean
}
export interface cardFeature {
    id:number,
    name:string,
}

export interface link{
    link: string,
    name: string, 
    id: number
    badge?:boolean
}

export interface linksdata{
    id: number,
    title: string,
    link: Array<link>
}