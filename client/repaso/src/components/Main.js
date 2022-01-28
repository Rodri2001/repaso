import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Digimon from "./Digimon.js";
import { filterDigimon, getAllDigimons } from "../redux/actions/index.js";

export default function Main() {
  const digimons = useSelector((state) => state.digimons);
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    name: "",
    color: "",
  });

  useEffect(() => {
    dispatch(getAllDigimons());
  }, []);

  function handleOnChange(e) {
    if (e.target.value === "") return dispatch(getAllDigimons());
    e.preventDefault();
    dispatch(filterDigimon(e.target.value));
  }

  const animos = ["Enojado", "Feliz", "Triste", "Emocionado"];
  let id = 0;

  function handleSubmit(){
    if(!state.name || !state.color){
      return alert("debes completar todos")
    }
    return alert('se mando el post')
  }

  return (
    <div>
      {digimons.length > 0 ? (
        digimons.map((digi) => (
          <Digimon
            name={digi.name}
            color={digi.color}
            id={digi.id}
            key={digi.id}
          />
        ))
      ) : (
        <div>Cargando... </div>
      )}
      <select onChange={(e) => handleOnChange(e)}>
        <option value="">Selecciona un color</option>
        <option value="Azul">Azul</option>
        <option value="Verde">Verde</option>
        <option value="Rojo">Rojo</option>
      </select>

      <select>
          {animos &&
            animos.map((ele) => {
              id++;
              return (
                <option key={id} value={ele}>
                  {ele}
                </option>
              );
            })}
        </select>

      <form onSubmit={() => handleSubmit()}>
        {state.name === "" ? <p>llena el campo</p>: null}
        <input type="text" value={state.name} placeholder="ingrese un nombre" />
        <input type="text" value={state.color} placeholder="ingrese un color" />
        <input type="submit" value="enviar"/>
      </form>
    </div>
  );
}
