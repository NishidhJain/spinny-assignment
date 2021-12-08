import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResults, updateLoadingState } from "../redux/slices/searchSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Anime from "./Anime";
import "../css/anime.css";
import Footer from "./Footer";
import Loading from "./Loading";
import Error from "./Error";

function AnimeList() {
  // get data from redux store
  const dispatch = useDispatch();
  const { pageNo } = useSelector((state) => state.pageNumber);
  const { query, results, loading } = useSelector((state) => state.search);

  const [isError, setIsError] = useState(false);

  // fetch data from API
  const fetchAnimes = async () => {
    setIsError(false);
    if (results.length === 0) {
      dispatch(updateLoadingState(true));
    }
    try {
      const response = await fetch(
        `https://api.jikan.moe/v3/search/anime?q=${query}&limit=16&page=${pageNo}`
      );
      const data = await response.json();
      // console.log("data", data);

      // Check if response is 200 but results array is empty
      if (data?.results?.length === 0) {
        setIsError(true);
        toast.error("No Result Found!!");
        return;
      }

      // check if some error is occured
      if (!data?.results) {
        setIsError(true);
        switch (data.status) {
          case "429":
            toast.error("Rate Limit Exceeded!!");
            break;
          case 404:
            toast.error(data.message);
            break;
          default:
            toast.error(`Oops!! Some error occured!`);
          // console.log(`Oops!! Some error occured!`, data);
        }
        return;
      }

      dispatch(updateResults(data.results));
    } catch (error) {
      // console.error(`Err in fetching : ${error}`);
      setIsError(true);
      toast.error(error);
    } finally {
      dispatch(updateLoadingState(false));
    }
  };

  useEffect(() => {
    fetchAnimes();
  }, [query, pageNo]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        <>
          <section className="anime-container">
            {results.map((anime) => (
              <Anime key={anime.mal_id} {...anime} />
            ))}
          </section>
          <Footer />
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default AnimeList;
