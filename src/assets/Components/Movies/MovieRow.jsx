import React, { useEffect, useState } from "react";
import instance from "../../../axios";
import "./MovieRow.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { toast } from "react-toastify";

const MovieRow = ({ title, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    const srcBaseUrl = "http://image.tmdb.org/t/p/original";

    useEffect(() => {
        try {
        const fetchMovies = async () => {
            const requests = await instance.get(fetchUrl);
            // requests.data.results.map(({backdrop_path,id}) => (console.log(backdrop_path,id)))
            setMovies(requests.data.results);
            return requests;

            // if [], run once when the row loads and don't run again
            // the square brackets are dependent on whatever we pass
            //  in the brackets
        };

        fetchMovies();
        } catch (e) {
        toast.error(e.message);
        }
    }, [fetchUrl]);

    const options = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (name) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(name || "")
            .then((url) => {
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get('v'))
                {toast(name)}
            }).catch((e) => {toast.error(e.message)});
        }
    };
    return (
        <div className="row__parent">
        <h2>{title}</h2>
        <div className="movies__container flex">
            {movies &&
            movies.map(({id, name, backdrop_path}) => (
                <img
                className="movies"
                src={`${srcBaseUrl}${backdrop_path}}`}
                key={id}
                onClick={() => handleClick(name)}
                alt={name}
                />
            ))}
        </div>
        {trailerUrl && (<YouTube videoId={trailerUrl} opts={options} />)}
        </div>
    );
};

export default MovieRow;
