import { useEffect, useState } from "react";

interface Props {
    placeholder?: string;
    textButton: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({ placeholder = 'Buscar', textButton, onQuery }: Props) => {
    const [query, setQuery] = useState('');

    // Debounce
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return () => {
            // Función de limpieza cuando el componente se desmonta.
            // Los effects deben ser un uso único.
            clearTimeout(timeoutId);
        };

    }, [query, onQuery]);

    const handleSearch = () => {
        onQuery(query);
        setQuery('');
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button onClick={handleSearch}>{textButton}</button>
        </div>
    );
};
