type Props = {
    city: string;
    setCity: (value: string) => void;
    onSearch: () => void;
    onLocation: () => void;
};

const SearchBar = ({ city, setCity, onSearch, onLocation }: Props) => {
    return (
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl hover:scale-[1.01] transition-all duration-300">
            <input
                type="text"
                placeholder="Enter city name..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/60 outline-none mb-4"
            />

            <button
                onClick={onSearch}
                className="w-full bg-blue-500 hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300 text-white py-3 rounded-xl mb-3"            >
                Search Weather
            </button>

            <button
                onClick={onLocation}
                className="w-full bg-emerald-500 hover:bg-emerald-600 hover:scale-[1.02] transition-all duration-300 text-white py-3 rounded-xl"            >
                Use My Location
            </button>

        </div>
    );
};

export default SearchBar;