interface Props {
    title: string,
    previousSearches?: string[]
}

export const PreviousSearches = ({ title, previousSearches }: Props) => {
    return (
        <div className="previous-searches">
            <h2>{title}</h2>
            <ul className="previous-searches-list">
                {
                    previousSearches?.map((item: string) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    );
};
