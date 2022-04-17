import React, { useContext } from "react";
import { AllContext } from "../App/App";
import EachService from "../EachService/EachService";
import "./Services.css";

const Services = () => {
  const {services} = useContext(AllContext);
//   console.log(services);

  const eachService = services.map((service) => {
    return (
      <EachService
        key={service.id}
        {...service}
      ></EachService>
    );
  });

  return (
    <div className="my-3">
      <div className="row px-5  container mx-auto">
          {eachService}
      </div>
    </div>
  );
};

export default Services;
