export interface Iproduct {
    productCategory: ICategory,
    productDescription: string,
    productName: string,
    productPrice: string,
    productRating: string,
    productProduct: number,
    createdAt: string,
    productImage: string
    _id: string

}

export interface ICategory{
    _id: string
    categoryName: string

}