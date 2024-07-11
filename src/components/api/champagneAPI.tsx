import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Rating {
    average: string;
    reviews: string;
}

interface Champagne {
    id: number;
    wine: string;
    image: string;
    location: string;
    winery: string;
    rating: Rating;
    price?: number;
}

const ChampagneAPI: React.FC = (): React.ReactElement => {
    const [champagnes, setChampagnes] = useState<Champagne[]>([]);
    const [error, setError] = useState<string | null>(null);

    const getChampagnes = async () => {
        try {
            const resp = await fetch("https://api.sampleapis.com/wines/sparkling");
            if (!resp.ok) {
                throw new Error(`HTTP error! status: ${resp.status}`);
            }
            const json: Champagne[] = await resp.json();

            // Optional: Validate data structure if necessary
            if (!Array.isArray(json)) {
                throw new Error("Unexpected API response format");
            }

            const sortedChampagnes = json.sort((a, b) => parseFloat(b.rating.average) - parseFloat(a.rating.average));
            const top40Champagnes = sortedChampagnes.slice(0, 40);
            setChampagnes(top40Champagnes);
        } catch (err) {
            console.error("Error fetching data:", err instanceof Error ? err.message : String(err));
            setError(err instanceof Error ? err.message : "Unknown error");
        }
    };

    useEffect(() => {
        getChampagnes();
    }, []);

    if (error) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Top 40 Best Ranked Champagnes</h1>
            <div className="row">
                {champagnes.map((champagne) => (
                    <div key={champagne.id} className="col-md-6 mb-4">
                        <div className="card bg-dark text-white h-100">
                            <div className="card-body">
                                <h3 className="card-title">{champagne.wine}</h3>
                                <img
                                    src={champagne.image}
                                    alt={champagne.wine}
                                    className="img-fluid mb-3"
                                    style={{ maxHeight: "200px" }}
                                />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item bg-secondary text-white">
                                        <strong>Rating:</strong> {champagne.rating.average}
                                    </li>
                                    <li className="list-group-item bg-secondary text-white">
                                        <strong>Location:</strong> {champagne.location.replace("\n·\n", ", ")}
                                    </li>
                                    <li className="list-group-item bg-secondary text-white">
                                        <strong>Winery:</strong> {champagne.winery}
                                    </li>
                                    <li className="list-group-item bg-secondary text-white">
                                        <strong>Reviews:</strong> {champagne.rating.reviews}
                                    </li>
                                    {champagne.price !== undefined && (
                                        <li className="list-group-item bg-secondary text-white">
                                            <strong>Price:</strong> ${champagne.price}
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChampagneAPI;
