import React, { useEffect, useState } from "react";
import instance from "../../../axios";
import requests from "../../../Requests";
import "./Banner.css";
import { toast } from "react-toastify";
import play__icon from "/play_icon.png"
import info__icon from "/info_icon.png"

const Banner = () => {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        try {
        const fetchBanner = async () => {
            const response = await instance.get(requests.fetchNetflixOriginals);
            // console.log(response.data.results[0].backdrop_path);
            // console.log((Math.random(Math.ceil(response.data.results[0].backdrop_path))));
            // console.log(Math.floor(Math.random() * 20 - 1));
            // console.log(Math.random() * 19)
            // console.log(Math.floor(6.92792126461307));
            // console.log(response.data.results[3]);
            //  console.log(Math.floor(Math.random() * response.data.results.length -1));
            // this code is to get one random movie from the array object
            console.log(
            response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
            ]
            );

            // here we will set our banner variable to one movie state
            setBanner(
            response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)
            ]
            );

            // setBanner(randomBanner);
            return response;
        };
        fetchBanner();
        } catch (e) {
        toast.error(e.message);
        }
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <header
        className="banner__image"
        style={{
            backgroundImage: `url(
                            "http://image.tmdb.org/t/p/original/${banner.backdrop_path}"
                        )`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
        }}
        >
        <div className="banner__contents flex flex__column">
            <div>
            <h1>{banner?.title || banner?.name || banner?.original_name}</h1>
            </div>

            <div>
            <h1 className="banner__description">
                {truncate(banner?.overview, 200)}
            </h1>
            </div>

            <div className="banner__buttons flex">
            <button className="banner__button"><img src={play__icon} alt="" />Play</button>
            <button className="banner__button"><img src={info__icon} alt="" />More Info</button>
            </div>
        </div>

        <div className="fade__bottom" />
        </header>
    );
};

export default Banner;
