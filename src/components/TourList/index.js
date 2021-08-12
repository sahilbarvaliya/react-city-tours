import React, { Component } from "react";
import Tour from "../Tour/Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";
export default class TourList extends Component {
  state = {
    tours: tourData,
  };
  removeTour = (id) => {
    // console.log(id);
    const { tours } = this.state;
    const sortedTour = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: sortedTour,
    });
  };
  render() {
    // console.log(this.state.tourData);
    const { tours } = this.state;
    console.log(tours);
    return (
      <section className="tourlist">
        {/* {tours.map((tour) => (
          <Tour
            key={tourData.id}
            tour={tour}
            rempveTour={this.removeTour}
          ></Tour>
        ))}*/}
        {tours
          ? tours.map((tour) => (
              <Tour
                key={tourData.id}
                tour={tour}
                removeTour={this.removeTour}
              ></Tour>
            ))
          : "Loading..."}{" "}
      </section>
    );
  }
}
