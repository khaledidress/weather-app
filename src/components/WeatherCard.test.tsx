import { render, screen } from "@testing-library/react";
import WeatherCard from "./WeatherCard";

describe("WeatherCard", () => {
    it("renders city name correctly", () => {
        const mockWeather = {
            name: "Cairo",

            main: {
                temp: 30,
                feels_like: 32,
                humidity: 50,
            },

            wind: {
                speed: 10,
            },

            weather: [
                {
                    main: "Clear",
                    description: "clear sky",
                    icon: "01d",
                },
            ],
        };

        render(<WeatherCard weather={mockWeather} />);

        expect(screen.getByText("Cairo")).toBeInTheDocument();
    });
});