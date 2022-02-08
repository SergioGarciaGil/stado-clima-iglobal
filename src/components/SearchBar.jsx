import React from "react";

function SearchBar(props) {
  // acá va tu código
  return (
    <>
      <input type="text" />
      <button onClick={() => props.onSearch("colombia")}>Agregar</button>
    </>
  );
}
export default SearchBar;
