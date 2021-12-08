import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateQuery } from "../redux/slices/searchSlice";
import { resetPageNo } from "../redux/slices/pageNumberSlice";

function SearchBar() {
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(resetPageNo());
    dispatch(updateQuery(searchTerm));
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className="searchBar">
      <input
        type="text"
        placeholder="Search anime..."
        onChange={handleInputChange}
        value={searchTerm}
        autoFocus={true}
        className="input"
      />
      <button type="submit" disabled={!searchTerm} className="btn">
        Go
      </button>
    </form>
  );
}

export default SearchBar;
