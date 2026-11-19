interface Props {
    title: string;
    previousSearches?: string[];
    onLabelClick: (term: string) => void;
}

export const PreviousSearches = ({ title, previousSearches, onLabelClick }: Props) => {
    return (
        <div className="previous-searches">
            <h2>{title}</h2>
            <ul className="previous-searches-list">
                {
                    previousSearches?.map((item: string) => (
                        <li
                            key={item}
                            onClick={() => onLabelClick(item)}
                        >{item}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};
