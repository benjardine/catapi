import React from "react";

const CatList = ({ cats }) => {
  return (
    <div className="catscard">
      {cats &&
        cats.map((cat, index) => {
          return (
            <div className="cats" key={index}>
              <div className="details">
                <div className="details-left">
                  <h1>{cat.name}</h1>
                  <p>Affection Level - {cat.affection_level} / 5 || <i class="fas fa-cat"></i> || {(cat.short_legs === 1 ? "Long" : "Short")} Legs</p>
                  <p className="description">{cat.description}</p>
                </div>
                <div className="details-right">
                  <a href={cat.wikipedia_url}>
                  <img src={cat.image && cat.image.url} alt={cat.name} className="catimage" />
                  </a>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default CatList;
