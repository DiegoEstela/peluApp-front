import React from "react";
import { Dna } from "react-loader-spinner";
import { LoaderComponent } from "./styles";
function Loader() {
  return (
    <LoaderComponent>
      <Dna
        visible={true}
        height="300"
        width="300"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </LoaderComponent>
  );
}

export default Loader;
