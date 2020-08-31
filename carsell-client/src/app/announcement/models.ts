export interface MainCategory {
    id: number;
    name: string;
    subCategories: SubCategory[];
}

export interface SubCategory {
    id: number;
    name: string;
    mainCategoryId: number;
}

export interface BrandGroup{
    name: string;
    brands: string[];
}