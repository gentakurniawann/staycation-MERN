import React, { Component } from "react";
import InputDate from "elements/Form/InputDate";
import Breadcrumb from "elements/Breadcrumb";
export default class BrowseBy extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const breadCrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            {/* <InputDate
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            /> */}
            <Breadcrumb data={breadCrumb} />
          </div>
        </div>
      </div>
    );
  }
}
