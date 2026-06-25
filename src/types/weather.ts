export interface Weather {
    city: string;
    temperature: number;
    feelsLike: number;
    humidity: number;
    windspeed: number;
    icon: string;
    condition: string;
}

export interface ForecastDay {
    day: string;
    temperature: number;
    icon: string;
    condition: string;
}

export interface OpenWeatherResponse {
    name: string;

    main: {
        temp: number;
        feels_like: number;
        humidity: number;
    };

    wind: {
        speed: number;
    };

    weather: {
        main: string;
        description: string;
        icon: string;
    }[];
}

export interface ForecastItem {
    dt_txt: string;

    main: {
        temp: number;
    };

    weather: {
        main: string;
        description: string;
        icon: string;
    }[];
}

export interface ForecastResponse {
    list: ForecastItem[];
}