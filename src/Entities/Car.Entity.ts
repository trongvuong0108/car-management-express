import { brand } from "./Brand.Entity";
import { category } from "./Category.Entity";

export class car{
    public id: string;
    public name: string;
    public description: string;
    public category: category;
    public price: number;
    public brand: brand;
}