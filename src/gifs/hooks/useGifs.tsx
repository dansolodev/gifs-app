import { useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";

export const useGifs = (initialPrevTerms: string[] = [], initialGifs: Gif[] = []) => {

    const [previousTerms, setPreviousTerms] = useState<string[]>(initialPrevTerms);

    const [giphys, setGiphys] = useState<Gif[]>(initialGifs);

    const handleTermClicked = async (term: string) => {
        const giphys = await getGifsByQuery(term);
        setGiphys(giphys)
    }

    const handleSearch = async (query: string = '') => {
        query = query.trim().toLowerCase();
        if (query.length === 0) return;
        if (previousTerms.includes(query)) return;

        /*const currentTerms = previousTerms.slice(0, 6);
        currentTerms.unshift(currentQuery);
        setPreviousTerms(currentTerms);*/

        setPreviousTerms([query, ...previousTerms].slice(0, 8));
        const giphys = await getGifsByQuery(query);
        setGiphys(giphys)
    };

    return {
        // Props
        previousTerms,
        giphys,

        // Methods / actions
        handleTermClicked,
        handleSearch
    }

};