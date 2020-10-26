import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Main from "../components/Main";

import PhonesStore from "../store/store";

export default class Landing extends Component {
  render() {
    const phonesStore = new PhonesStore();
    return (
      <div>
        <Navbar store={phonesStore} />

        <Main store={phonesStore} />
      </div>
    );
  }
}
