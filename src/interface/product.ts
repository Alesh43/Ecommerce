export interface Iproduct {
    category : string,
    description: string,
    id : number,
    image: string,
    rating: {
        rate: number,
        count: number,
    }
    title:string,
    price: number
}