import { IDefault } from "./Default";

export interface IClub extends IDefault {
    name: string;
    slug: string;
    image: string;
    league: string;
    country: string;
}