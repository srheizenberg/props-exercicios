import React from "react";


export function reproduzVideo() {
  alert("O vídeo está sendo reproduzido");
}

export function CardVideo(props) {

  
  return (
    <div>
      <div className="box-pagina-principal" onClick={reproduzVideo}>
        <img src={props.carlos.imagem} alt="video" />
        <h4>{props.carlos.titulo}</h4>
        <h4>Autor: {props.carlos.usuario}</h4>
      </div>
    </div>
  );
}
