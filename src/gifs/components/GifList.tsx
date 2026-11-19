import type { FC } from "react";
import type { Gif } from "../../mock-data/gifs.mock";

interface Props {
    emptyListMessage: string
    gifs?: Gif[] | null
}

export const GifList: FC<Props> = ({ emptyListMessage, gifs }) => {

    if (!gifs?.length) {
        return (
            <div className="content-center">
                <h2>{emptyListMessage}</h2>
            </div>
        );
    }

    return (
        <div className="gifs-container">
            {
                gifs?.map((gif) => (
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
    );
};
