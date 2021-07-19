import React from "react";
import Pdf from "react-to-pdf";

// const ref = React.createRef();

function AnimeCard({ title, url, imageUrl, authorName, intro }) {
  const ref = React.createRef();

  return (
    <div className="anime-card" ref={ref}>
      <div className="img-container">
        <img alt="preview" src={imageUrl} className="card-img"></img>
      </div>

      <div className="info-container">
        <h1 className="card-title">{title}</h1>
        <h5>{authorName}</h5>
        <p>{intro}</p>

        {/* <div className="button-container"> */}
        <a href={url}>
          <button className="read-btn">Read</button>
        </a>

        <Pdf targetRef={ref} filename="animecard.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="pdf-btn">
              Download as PDF
            </button>
          )}
        </Pdf>
        {/* </div> */}
      </div>
    </div>
  );
}

export default AnimeCard;
