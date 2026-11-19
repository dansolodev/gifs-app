import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";

export const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title="Buscador de Gifs" description="Descubre y comparte el Gif perfecto" />

            {/* Search */}
            <div className="search-container">
                <input type="text" placeholder="Buscar gifs..." />
                <button>Buscar</button>
            </div>

            {/* Búsquedas recientes */}
            <div className="previous-searches">
                <h2>Búsqueda previas</h2>
                <ul className="previous-searches-list">
                    <li>Hollowknight</li>
                    <li>Hollowknight: Silksong</li>
                    <li>Astro robot</li>
                </ul>
            </div>

            {/* Gifs */}
            <div className="gifs-container">
                {
                    mockGifs.map((gif) => (
                        <div key={gif.id} className="gif-card">
                            <img src={gif.url} alt={gif.title} />
                            <h3>{gif.title}</h3>
                            <p>
                                {gif.width}x{gif.height} (1.5mb)
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    );
};
