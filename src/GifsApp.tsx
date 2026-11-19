import { GifList } from "./gifs/components/GifList";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./shared/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

            {/* Search */}
            <SearchBar placeholder="Buscar gifs..." textButton="Buscar" />

            {/* Búsquedas recientes */}
            <PreviousSearches
                title="Búsqueda previas"
                previousSearches={[
                    "Hollowknight",
                    "Hollowknight: Silksong",
                    "Astro robot",
                ]}
            />

            {/* Gifs */}
            <GifList emptyListMessage="No hay gifs" gifs={mockGifs} />
        </>
    );
};
