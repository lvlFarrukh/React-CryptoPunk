import React from "react";
import PunkCard from "../PunkCard/PunkCard"
import "./PunkList.css"

const PunkList = ({ punkData, setSelectedPunk }) => {
  return (
    <div className="punkList">
      {punkData?.map((punk, index) => {
        return (
          <PunkCard
            key={punk?.id}
            id={punk?.token_id}
            name={punk?.name}
            traits={punk?.traits[0]}
            image={punk?.image_url}
            setSelectedPunk={setSelectedPunk}
            punk={punk}
          />
        );
      })}
    </div>
  );
};

export default PunkList;
