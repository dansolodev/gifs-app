import { useState } from "react";

import { GifList } from "./gifs/components/GifList";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./shared/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['dragon ball z'])

    const handleTermClicked = (term: string) => {
        console.log({ term });
    }

    const handleSearch = (query: string) => {
        console.log({ query });
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
                previousSearches={[
                    "Hollowknight",
                    "Hollowknight: Silksong",
                    "Astro robot"
                ]}
                onLabelClick={handleTermClicked}
            />

            {/* Gifs */}
            <GifList emptyListMessage="No hay gifs" gifs={mockGifs} />
        </>
    );
};
