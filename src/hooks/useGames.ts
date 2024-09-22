import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// Define an interface that represents our games.
export interface Game {
    id: number;
    name: string;
    rating: number;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number; // for emojis
}

const useGames = (gameQuery: GameQuery) => 
    useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id, 
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }}, 
        [gameQuery]);

export default useGames;