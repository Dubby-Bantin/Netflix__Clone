import MovieRow from "../../assets/Components/Movies/MovieRow";
import requests from "../../Requests";
import Navbar from "../../assets/Components/Header/Navbar";
import Banner from "../../assets/Components/Banner/Banner";
import Footer from "../../assets/Components/Footer/Footer";

const Home = () => {
    return (
        <div className="App">
        <Navbar />
        <Banner />
        <MovieRow
            title="NEW ON NETFLIX"
            fetchUrl={requests.fetchNetflixOriginals}
        />
        <MovieRow title="Trending Now" fetchUrl={requests.fetchTrending} />
        <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <MovieRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <Footer/>
        </div>
    );
};

export default Home;
