export interface Product {
    _id : string;
    name : string;
    _type : "product";
    image? : {
        assset : {
            _ref : string;
            _type : "image";
        }
    };
    price : string;
    description : string;
    discountPercentage : number;
    slug : {
        _type : "slug";
        current : string;
    };
    stockLevel : number;
    quantity?: number; 
    category: string;
}