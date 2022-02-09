import React from "react";
import estilos from "./Search.module.css";

function SearchBar(props) {
  return (
    <>
      <div className={estilos.contenedor}>
        <input type="text" />
        <button
          onClick={() => props.onSearch("colombia")}
          className={estilos.btn}
        >
          Agregar
        </button>
      </div>
    </>
  );
}
export default SearchBar;
