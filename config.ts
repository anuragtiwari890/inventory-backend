export interface Config {
    mongodb: {
        url: string,
        dbName: string,
    };

    ClientBaseURL: string;
    serverPort: number;
}

export class ConfigImpl implements Config {

    mongodb = {
        url: "mongodb://localhost:32768/inventory",
        dbName: "inventory"
    };

    ClientBaseURL = "http://localhost:5041"

    serverPort = 8080;
}
