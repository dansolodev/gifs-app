import { GifList } from "./gifs/components/GifList";
import { CustomHeader } from "./shared/components/CustomHeader";
import { PreviousSearches } from "./shared/components/PreviousSearches";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {

    const { previousTerms, giphys, handleTermClicked, handleSearch } = useGifs();

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
