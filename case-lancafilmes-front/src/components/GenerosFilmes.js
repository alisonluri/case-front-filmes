import React from "react";
import { ButtonCat } from "./styled";

const GenerosFilmes = ({ id, name, selected, onClick }) => {


    return (
        <ButtonCat
            className={`genero-button ${selected ? 'selected' : ''}`}
            onClick={() => onClick(id)}
        >
            {name}
        </ButtonCat>
    )
}

export default GenerosFilmes