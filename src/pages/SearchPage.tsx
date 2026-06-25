import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useWeatherStore } from "../store/weatherStore";
import SearchBar from "../components/SearchBar";

const SearchPage = () => {
    const [city, setCity] = useState("");
    const navigate = useNavigate();

    const {
        fetchWeatherByCity,
        fetchWeatherByCoords,
    } = useWeatherStore();

    useEffect(() => {
        const savedCity = localStorage.getItem("lastCity");

        if (savedCity) {
            setCity(savedCity);
        }
    }, []);

    const handleSearch = async () => {
        if (!city.trim()) return;

        await fetchWeatherByCity(city);
        navigate("/weather");
    };

    const handleLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                const { latitude, longitude } = pos.coords;

                await fetchWeatherByCoords(latitude, longitude);
                navigate("/weather");
            },
            () => {
                alert("Please allow location permission");
            }
        );
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-4">

            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold text-white mb-2">
                    🌤 Weather App
                </h1>

                <p className="text-white/70">
                    Get real-time weather updates anywhere
                </p>
            </div>

            <SearchBar
                city={city}
                setCity={setCity}
                onSearch={handleSearch}
                onLocation={handleLocation}
            />

        </div>
    );
};

export default SearchPage;