import React from "react";
import { Dna } from "react-loader-spinner";
function Loader() {
  return (
    <Dna
      visible={true}
      height="300"
      width="300"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
    />
  );
}

export default Loader;
