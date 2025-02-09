import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`;
export const featuredProduct = groq`[
*[_type == "product"][6],
*[_type == "product"][7],
*[_type == "product"][13],
*[_type == "product"][17],
]`;

export const trendingProduct = groq`[
*[_type == "product"][4],
*[_type == "product"][18],
*[_type == "product"][14],
*[_type == "product"][13],
]`;

export const topProduct = groq`[
    *[_type == "product"][1],
    *[_type == "product"][3],
    *[_type == "product"][5],
    ]`;

export const middleTwo = groq`[*[_type == "product"][11]]`;
