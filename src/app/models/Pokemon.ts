export interface Pokemone {
count: number;
next: string;
previous: string;
results: PokemonList[]
}

export interface PokemonList {
    name: string;
    url: string;
    id?: number;
}