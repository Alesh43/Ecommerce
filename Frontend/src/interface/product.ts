export interface Iproduct {
    productCategory: ICategory,
    productDescription: string,
    productName: string,
    productPrice: string,
    productRating: number,
    productProduct: number,
    createdAt: string,
    productImage: string
    _id: string
    totalProduct: number

}

export interface ICategory{
    _id: string
    categoryName: string

}