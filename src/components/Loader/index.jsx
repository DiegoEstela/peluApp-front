import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { LoaderComponent } from "./styles";
function Loader() {
  return (
    <LoaderComponent>
      <ThreeDots
        height="30"
        width="100"
        radius="9"
        color="#5C6B73"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderComponent>
  );
}

export default Loader;
