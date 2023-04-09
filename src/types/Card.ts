export interface Card {
    id: number;
    title: string;
    img: string;
    description?: string;
    flex?: number; // use in parent component's v-col
}