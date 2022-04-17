import React from 'react';
import "./EachService.css"
const EachService = (props) => {

    const {service, headline, description, price} = props;
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4 service-container">
        <div className="card service-card">
          <div className="card-body">
            <h4 className="card-title text-center my-4">{service}</h4>
            <h6 className="card-headline text-center my-4">"{headline}"</h6>
            <p className="card-text text-center">{description}</p>
            <h4 className="card-price text-center">Price: {price}</h4>
            <div className="d-flex justify-content-center align-items-center">
              <div className="mt-4">
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default EachService;