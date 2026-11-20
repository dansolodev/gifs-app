import { useState } from "react";

import { GifList } from "./gifs/components/GifList";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./shared/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.actions";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const [giphys, setGiphys] = useState<Gif[]>([]);

    const handleTermClicked = (term: string) => {
        console.log({ term });
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

    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

            {/* Search */}
            <SearchBar placeholder="Buscar gifs..." textButton="Buscar" onQuery={handleSearch} />

            {/* Búsquedas recientes */}
            <PreviousSearches
                title="Búsqueda previas"
                previousSearches={previousTerms}
                onLabelClick={handleTermClicked}
            />

            {/* Gifs */}
            <GifList emptyListMessage="No hay gifs" gifs={giphys} />
        </>
    );
};
