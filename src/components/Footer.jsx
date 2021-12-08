import React from "react";
import { useDispatch } from "react-redux";
import { incrementPageNo } from "../redux/slices/pageNumberSlice";
import "../css/footer.css";

function Footer() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(incrementPageNo());
  };

  return (
    <footer className="text-center footer">
      <button type="button" onClick={handleClick} className="btn btn-md">
        Load More...
      </button>
    </footer>
  );
}

export default Footer;
