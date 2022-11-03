import React, { Component } from "react";
export default class Optionstattoos extends Component {
  constructor(props) {
    super(props);
  }
  deleteClass() {
    let c = document.getElementById("tattoos").children,
      i;
    for (i = 0; i < c.length; i++) {
      c[i].classList.remove("show");
    }
  }
  showHarry() {
    if (document.querySelector("#t_harry").classList.contains("show")) {
      this.deleteClass();
    } else {
      this.deleteClass();
      document.querySelector("#t_harry").classList.add("show");
    }
  }

  showAirBender() {
    if (document.querySelector("#t_airbender").classList.contains("show")) {
      this.deleteClass();
    } else {
      this.deleteClass();
      document.querySelector("#t_airbender").classList.add("show");
    }
  }

  showKrilin() {
    if (document.querySelector("#t_krilin").classList.contains("show")) {
      this.deleteClass();
    } else {
      this.deleteClass();
      document.querySelector("#t_krilin").classList.add("show");
    }
  }
  showFront() {
    if (document.querySelector("#t_front").classList.contains("show")) {
      this.deleteClass();
    } else {
      this.deleteClass();
      document.querySelector("#t_front").classList.add("show");
    }
  }
  showTribal() {
    if (document.querySelector("#t_tribal").classList.contains("show")) {
      this.deleteClass();
    } else {
      this.deleteClass();
      document.querySelector("#t_tribal").classList.add("show");
    }
  }
  showTribal2() {
    if (document.querySelector("#t_tribal2").classList.contains("show")) {
      this.deleteClass();
    } else {
      this.deleteClass();
      document.querySelector("#t_tribal2").classList.add("show");
    }
  }
  showThroat() {
    if (document.querySelector("#t_throat").classList.contains("show")) {
      this.deleteClass();
    } else {
      this.deleteClass();
      document.querySelector("#t_throat").classList.add("show");
    }
  }
  render() {
    return (
      <div className="mn">
        <div onClick={() => this.showHarry()}>
          <svg viewBox="0 0 100 100">
            <g id="t_harry">
              <polygon
                fill="#000000"
                fillOpacity="0.7"
                points="47,14 63,50 47,47 49,69 37,40 55,43 "
              />
            </g>
          </svg>
        </div>

        <div onClick={() => this.showAirBender()}>
          <svg viewBox="0 0 120 120">
            <g id="t_airbender">
              <path
                fill="#000000"
                fillOpacity="0.7"
                d="M74 31c-4,-1 -9,-2 -14,-2l0 0c-5,0 -10,1 -14,2l0 36 -17 0 31 30 31 -30 -17 0 0 -36z"
              />
            </g>
          </svg>
        </div>

        <div onClick={() => this.showKrilin()}>
          <svg viewBox="0 0 120 120">
            <g id="t_krilin">
              <path
                fill="#000000"
                fillOpacity="0.7"
                d="M71 41c3,0 6,3 6,7 0,3 -3,6 -6,6 -4,0 -6,-3 -6,-6 0,-4 2,-7 6,-7zm0 32c3,0 6,3 6,7 0,3 -3,6 -6,6 -4,0 -6,-3 -6,-6 0,-4 2,-7 6,-7zm-22 0c4,0 6,3 6,7 0,3 -2,6 -6,6 -3,0 -6,-3 -6,-6 0,-4 3,-7 6,-7zm22 -16c3,0 6,3 6,7 0,3 -3,6 -6,6 -4,0 -6,-3 -6,-6 0,-4 2,-7 6,-7zm-22 0c4,0 6,3 6,7 0,3 -2,6 -6,6 -3,0 -6,-3 -6,-6 0,-4 3,-7 6,-7zm0 -16c4,0 6,3 6,7 0,3 -2,6 -6,6 -3,0 -6,-3 -6,-6 0,-4 3,-7 6,-7z"
              />
            </g>
          </svg>
        </div>

        <div onClick={() => this.showFront()}>
          <svg viewBox="0 0 140 140">
            <g id="t_front">
              <path
                fill="#000000"
                fillOpacity="0.7"
                d="M40 53l0 3 0 0c2,-3 4,-4 4,-5 -1,0 -3,1 -4,2zm49 27c0,0 1,1 3,1 1,0 2,0 4,0 0,0 0,0 0,0 4,0 10,-1 14,-6 0,0 -1,1 -1,1 0,1 0,1 0,2 0,1 0,1 -1,2 0,1 -1,3 -2,4 -1,2 -2,3 -3,4 0,0 0,0 1,-1 0,-1 0,-1 0,-2 0,0 0,0 0,0 0,-1 0,-1 -1,-2 -1,0 -1,0 -1,0 0,0 -1,0 -1,0 -1,0 -2,0 -3,1 -1,1 -2,2 -2,3 0,0 0,0 0,1 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,0 0,0 1,0 1,0 0,0 0,-1 1,-1 0,0 0,-1 0,-1 0,0 0,1 0,1 0,0 0,1 0,1 0,1 -1,2 -1,2 -1,1 -1,3 -2,4 -2,1 -3,3 -5,4 0,-1 0,-2 1,-3 0,-2 1,-4 1,-6 0,0 0,0 0,0 0,-3 -1,-6 -4,-9zm19 5c2,-3 3,-6 3,-10 0,-1 0,-2 0,-3 0,-1 -1,-2 -1,-3 0,0 0,0 0,0 1,0 1,0 1,0 0,0 0,0 0,0 2,0 6,0 9,3 0,0 0,-1 0,-1 0,0 0,0 0,0 -1,0 -3,1 -4,3 0,1 0,1 0,1l0 0c0,1 0,1 1,2 0,0 0,0 0,0 0,0 0,0 1,0 0,0 1,0 2,-1 0,0 1,0 1,-1 0,-1 1,-1 1,-2 0,-1 0,-2 0,-3l0 0c0,-3 -1,-6 -5,-8 0,0 1,0 1,0 2,0 6,0 9,2 2,1 3,2 4,4 1,1 2,4 2,6 0,1 0,1 0,1 0,-1 -1,-2 -2,-3 0,-1 -2,-2 -3,-2 0,0 -1,0 -1,0 0,0 0,0 -1,1 -1,0 -2,1 -2,3 0,0 0,0 0,0 0,2 1,4 1,7 0,0 0,0 0,0 0,0 0,1 0,2 0,1 -1,2 -1,3 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,-1 0,-1 0,-2 0,0 0,0 -1,-1 0,0 0,-1 0,-1 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -1,0 -2,0 -2,2 -1,1 -1,2 -1,4 0,1 0,1 0,2 0,0 0,-1 0,-1 -1,-1 -1,-2 -2,-3 -1,0 -2,-1 -3,-1 0,0 0,0 -1,0 0,0 -1,1 -1,2 -1,1 -1,2 -1,3 0,2 0,4 1,5 0,2 1,4 2,5 0,0 0,0 -1,0 0,-1 0,-1 -1,-1 0,-1 -1,-1 -1,-1 -1,-1 -2,-2 -3,-3 -1,-2 -2,-3 -2,-4 0,-1 1,-2 3,-4zm-30 -18c0,0 0,1 0,1 0,1 0,1 0,2 0,1 0,2 0,3 1,1 1,2 2,3 0,0 1,0 1,0 0,0 0,0 1,0 1,0 3,-1 5,-2 1,-2 3,-3 5,-4 3,-2 12,-4 18,-4 1,0 2,0 3,0 1,0 2,0 3,0 -1,0 -4,1 -7,2 -3,1 -6,3 -8,6 0,0 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-3 -2,-3 0,0 0,0 0,0 -1,0 -2,0 -2,1 -1,1 -1,1 -1,2l0 0c0,1 0,2 2,3 0,0 1,0 1,0 1,0 1,0 2,0 1,0 3,0 4,-1 2,0 3,-1 4,-1 -1,0 -1,0 -1,0 0,1 -1,1 -1,1 0,1 -1,1 -1,2 -1,0 -3,1 -5,2 -1,0 -3,1 -6,1 -1,0 -2,0 -3,-1 -1,0 -2,0 -3,0 0,0 0,0 1,0 0,0 0,0 1,-1 0,0 1,0 1,-1 1,0 1,-1 1,-1 0,-1 0,-1 0,-1 0,-1 0,-1 -1,-1 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 0,0 -1,0 -1,1 -1,0 -1,2 -1,3 0,0 0,0 0,0 0,1 0,3 0,4 1,1 1,3 2,5 0,0 0,0 0,0 -1,-1 -1,-1 -2,-1 0,0 -1,0 -2,-1 0,0 -1,0 -2,-1 -1,-1 -3,-2 -4,-4 -1,-2 -2,-4 -2,-7 0,-1 0,-2 0,-3 0,-1 1,-2 1,-3zm23 -7l-1 0 0 -1c-1,-1 -1,-2 -2,-3 0,0 -1,-1 -1,-2 -1,0 -1,-1 -2,-1 0,0 0,0 0,-1 0,0 0,0 0,0 0,0 0,1 0,1 0,2 -1,4 -2,5 -1,2 -3,3 -5,3 0,0 0,0 0,0 -2,0 -3,0 -3,-1 -1,-1 -2,-2 -2,-3l0 0c0,-1 1,-2 2,-2 0,0 0,0 0,0 1,0 2,1 2,1 1,0 1,1 1,1 0,-2 -2,-3 -3,-5 -1,-1 -3,-2 -4,-3 -1,-1 -1,-1 -2,-2 -1,0 -1,-1 -2,-1 0,0 0,0 0,0 -1,0 -1,-1 -1,-1 5,6 7,12 7,18 0,3 -1,5 -1,7 0,2 -1,4 -1,4 1,-1 2,-2 3,-3 0,-1 1,-2 1,-2 0,-1 0,-1 1,-1 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,-1 0,-1l0 0c0,0 0,0 0,0 0,-1 0,-1 0,-1 1,0 1,0 1,0 0,0 1,0 1,0 1,1 1,1 1,1 1,0 1,1 1,1 0,0 0,0 0,0 0,1 0,1 -1,2 0,0 0,1 0,1 -1,1 -1,1 -1,1 0,1 0,1 0,1 0,0 -1,0 -1,0 0,0 1,0 1,0 0,0 1,-1 2,-1 0,-1 1,-1 2,-2 1,0 2,-1 2,-1 1,-1 1,-1 1,-1 0,0 0,0 1,-1 0,0 0,-1 0,-2 0,0 0,-1 1,-1 0,-1 1,-1 2,-1 0,0 0,0 0,0 1,0 2,0 3,1 1,0 1,1 2,2 -1,-2 -2,-3 -2,-4l0 0zm-2 6c-1,0 -1,0 -1,0 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 -1,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,0 1,0 1,-1 0,-1 1,-1 2,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 1,0 1,1 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,1 0,1 -1,0 -1,1 -1,1zm34 -3c-1,0 -2,0 -3,-1 1,1 2,2 3,3l0 0c0,0 0,0 0,0 0,-1 0,-1 0,-2zm-19 -3c-2,0 -4,0 -6,0l-6 0c1,1 2,3 2,4 1,0 1,0 2,0 1,0 2,0 4,0 1,0 1,0 2,0 1,0 2,0 2,0 0,0 0,0 0,0 0,0 -1,0 -1,-1 0,0 -1,-1 -1,-1 0,0 0,-1 1,-1 0,-1 0,-1 1,-1zm-14 -4l0 -3c-1,-1 -3,-2 -4,-2 0,1 2,2 4,5l0 0zm-49 24c0,0 -1,1 -3,1 -1,0 -2,0 -4,0 0,0 0,0 0,0 -4,0 -10,-1 -14,-6 0,0 1,1 1,1 0,1 0,1 0,2 0,1 0,1 1,2 0,1 1,3 2,4 1,2 2,3 3,4 0,0 0,0 -1,-1 0,-1 0,-1 0,-2 0,0 0,0 0,0 0,-1 0,-1 1,-2 1,0 1,0 1,0 0,0 1,0 1,0 1,0 2,0 3,1 1,1 2,2 2,3 0,0 0,0 0,1 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 0,0 -1,0 -1,0 0,0 0,-1 -1,-1 0,0 0,-1 0,-1 0,0 0,1 0,1 0,0 0,1 0,1 0,1 1,2 1,2 1,1 1,3 2,4 2,1 3,3 5,4 0,-1 0,-2 -1,-3 0,-2 -1,-4 -1,-6 0,0 0,0 0,0 0,-3 1,-6 4,-9zm-19 5c-2,-3 -3,-6 -3,-10 0,-1 0,-2 0,-3 0,-1 1,-2 1,-3 0,0 0,0 0,0 -1,0 -1,0 -1,0 0,0 0,0 0,0 -2,0 -6,0 -9,3 0,0 0,-1 0,-1 0,0 0,0 0,0 1,0 3,1 4,3 0,1 0,1 0,1l0 0c0,1 0,1 -1,2 0,0 0,0 0,0 0,0 0,0 -1,0 0,0 -1,0 -2,-1 0,0 -1,0 -1,-1 0,-1 -1,-1 -1,-2 0,-1 0,-2 0,-3l0 0c0,-3 1,-6 5,-8 0,0 -1,0 -1,0 -2,0 -6,0 -9,2 -2,1 -3,2 -4,4 -1,1 -2,4 -2,6 0,1 0,1 0,1 0,-1 1,-2 2,-3 0,-1 2,-2 3,-2 0,0 1,0 1,0 0,0 0,0 1,1 1,0 2,1 2,3 0,0 0,0 0,0 0,2 -1,4 -1,7 0,0 0,0 0,0 0,0 0,1 0,2 0,1 1,2 1,3 0,0 0,-1 0,-1 0,0 0,-1 0,-1 0,-1 0,-1 0,-2 0,0 0,0 1,-1 0,0 0,-1 0,-1 1,0 1,0 1,0 1,0 1,0 1,0 1,0 2,0 2,2 1,1 1,2 1,4 0,1 0,1 0,2 0,0 0,-1 0,-1 1,-1 1,-2 2,-3 1,0 2,-1 3,-1 0,0 0,0 1,0 0,0 1,1 1,2 1,1 1,2 1,3 0,2 0,4 -1,5 0,2 -1,4 -2,5 0,0 0,0 1,0 0,-1 0,-1 1,-1 0,-1 1,-1 1,-1 1,-1 2,-2 3,-3 1,-2 2,-3 2,-4 0,-1 -1,-2 -3,-4zm30 -18c0,0 0,1 0,1 0,1 0,1 0,2 0,1 0,2 0,3 -1,1 -1,2 -2,3 0,0 -1,0 -1,0 0,0 0,0 -1,0 -1,0 -3,-1 -5,-2 -1,-2 -3,-3 -5,-4 -3,-2 -12,-4 -18,-4 -1,0 -2,0 -3,0 -1,0 -2,0 -3,0 1,0 4,1 7,2 3,1 6,3 8,6 0,0 0,-1 0,-1 0,0 0,0 0,0 0,-1 0,-3 2,-3 0,0 0,0 0,0 1,0 2,0 2,1 1,1 1,1 1,2l0 0c0,1 0,2 -2,3 0,0 -1,0 -1,0 -1,0 -1,0 -2,0 -1,0 -3,0 -4,-1 -2,0 -3,-1 -4,-1 1,0 1,0 1,0 0,1 1,1 1,1 0,1 1,1 1,2 1,0 3,1 5,2 1,0 3,1 6,1 1,0 2,0 3,-1 1,0 2,0 3,0 0,0 0,0 -1,0 0,0 0,0 -1,-1 0,0 -1,0 -1,-1 -1,0 -1,-1 -1,-1 0,-1 0,-1 0,-1 0,-1 0,-1 1,-1 0,0 1,0 1,0 1,0 1,0 2,0 0,0 1,0 1,1 1,0 1,2 1,3 0,0 0,0 0,0 0,1 0,3 0,4 -1,1 -1,3 -2,5 0,0 0,0 0,0 1,-1 1,-1 2,-1 0,0 1,0 2,-1 0,0 1,0 2,-1 1,-1 3,-2 4,-4 1,-2 2,-4 2,-7 0,-1 0,-2 0,-3 0,-1 -1,-2 -1,-3zm-22 -8l0 1 -1 0 0 0c0,1 -1,2 -2,4 1,-1 1,-2 2,-2 1,-1 2,-1 3,-1 0,0 0,0 0,0 1,0 2,0 2,1 1,0 1,1 1,1 0,1 0,2 0,2 1,1 1,1 1,1 0,0 0,0 1,1 0,0 1,1 2,1 1,1 2,1 2,2 1,0 2,1 2,1 0,0 1,0 1,0 0,0 -1,0 -1,0 0,0 0,0 0,-1 0,0 0,0 -1,-1 0,0 0,-1 0,-1 -1,-1 -1,-1 -1,-2 0,0 0,0 0,0 0,0 0,-1 1,-1 0,0 0,0 1,-1 0,0 1,0 1,0 0,0 0,0 1,0 0,0 0,0 0,1 0,0 0,0 0,0l0 0c0,0 0,1 0,1 0,0 0,0 -1,0 0,0 0,0 0,0 0,0 0,1 0,1 0,0 0,0 0,1 1,0 1,0 1,1 0,0 1,1 1,2 1,1 2,2 3,3 0,0 -1,-2 -1,-4 0,-2 -1,-4 -1,-7 0,-6 2,-12 7,-18 0,0 0,1 -1,1 0,0 0,0 0,0 -1,0 -1,1 -2,1 -1,1 -1,1 -2,2 -1,1 -3,2 -4,3 -1,2 -3,3 -3,5 0,0 0,-1 1,-1 0,0 1,-1 2,-1 0,0 0,0 0,0 1,0 2,1 2,2l0 0c0,1 -1,2 -2,3 0,1 -1,1 -3,1 0,0 0,0 0,0 -2,0 -4,-1 -5,-3 -1,-1 -2,-3 -2,-5 0,0 0,-1 0,-1 0,0 0,0 0,0 0,1 0,1 0,1 -1,0 -1,1 -2,1 0,1 -1,2 -1,2 -1,1 -1,2 -2,3zm1 7c1,0 1,0 1,0l0 0c1,0 1,0 1,0 0,0 0,0 1,0 0,-1 0,-1 0,-1 0,0 0,-1 0,-1 0,0 -1,0 -1,-1 0,-1 -1,-1 -2,-1 0,0 0,0 0,0 0,0 0,0 0,0 0,0 -1,0 -1,1 0,0 0,0 0,0 0,1 0,1 0,1 0,0 0,1 0,1 1,0 1,1 1,1zm-3 -6l-6 0c-2,0 -4,0 -6,0 1,0 1,0 1,1 1,0 1,1 1,1 0,0 -1,1 -1,1 0,1 -1,1 -1,1 0,0 0,0 0,0 0,0 1,0 2,0 1,0 1,0 2,0 2,0 3,0 4,0 1,0 1,0 2,0 0,-1 1,-3 2,-4zm-28 2c-1,1 -2,1 -3,1 0,1 0,1 0,2 0,0 0,0 0,0 1,-1 2,-2 3,-3z"
              />
            </g>
          </svg>
        </div>

        <div onClick={() => this.showTribal()}>
          <svg viewBox="0 0 150 150">
            <g id="t_tribal">
              <path
                fill="#000000"
                fillOpacity="0.7"
                d="M20 80c1,0 3,-1 6,0 2,0 5,1 7,3 1,1 1,2 2,3 0,1 0,2 0,3 -1,1 -2,1 -4,1 2,1 5,1 8,1 3,0 6,-1 10,-3 4,-1 8,-4 12,-9 1,-1 2,-2 3,-3 -2,1 -5,2 -9,3 -4,0 -9,0 -14,-2 -12,-4 -19,1 -21,3zm-10 -19c1,5 2,10 5,15 0,-1 0,-1 0,-1 0,0 0,0 0,0 1,-1 2,-2 3,-3 2,0 3,-1 5,-2 5,-2 10,-2 14,-1 5,1 9,3 11,4 0,0 -1,-1 -2,-1 -11,-10 -24,-13 -36,-11zm15 30c4,6 10,10 16,14 1,0 1,0 2,-1 6,-2 11,-6 15,-10 2,-2 4,-5 5,-7 1,-2 2,-4 2,-5 0,0 -1,1 -1,1 0,0 0,0 0,0 -10,11 -19,14 -26,14 -4,-1 -7,-2 -9,-3 -2,-1 -3,-2 -4,-3z"
              />
              <path
                fill="#000000"
                fillOpacity="0.7"
                d="M134 80c-1,0 -3,-1 -6,0 -2,0 -5,1 -7,3 -1,1 -1,2 -2,3 0,1 0,2 0,3 1,1 2,1 4,1 -2,1 -5,1 -8,1 -3,0 -6,-1 -10,-3 -4,-1 -8,-4 -12,-9 -1,-1 -2,-2 -3,-3 2,1 5,2 9,3 4,0 9,0 14,-2 12,-4 19,1 21,3zm-21 25c6,-4 12,-8 16,-14 -1,1 -2,2 -4,3 -2,1 -5,2 -9,3 -7,0 -16,-3 -26,-14 0,0 0,0 0,0 0,0 -1,-1 -1,-1 0,1 1,3 2,5 1,2 3,5 5,7 4,4 9,8 15,10 1,1 1,1 2,1zm26 -29c3,-5 4,-10 5,-15 -12,-2 -25,1 -36,11 -1,0 -2,1 -2,1 2,-1 6,-3 11,-4 4,-1 9,-1 14,1 2,1 3,2 5,2 1,1 2,2 3,3 0,0 0,0 0,0 0,0 0,0 0,1z"
              />
            </g>
          </svg>
        </div>

        <div onClick={() => this.showTribal2()}>
          <svg viewBox="0 0 140 140">
            <g id="t_tribal2">
              <path
                fill="#000000"
                fillOpacity="0.7"
                fillRule="nonzero"
                d="M122 78c0,1 -1,2 -2,2 -2,2 -3,2 -4,3 -2,0 -3,0 -4,-1 -2,-2 -1,-4 -1,-4 0,0 1,-2 2,-3 0,-1 1,-1 2,-1 1,-1 1,0 2,0 0,0 0,0 0,0 1,1 1,2 1,3 0,-1 1,-2 2,-5 0,-2 0,-5 0,-9 -1,-4 -1,-9 0,-12 0,-3 2,-5 2,-6 -1,0 -2,1 -3,2 -1,2 -3,5 -4,10 -1,5 -1,11 -5,20 -3,4 -6,10 -11,16 0,0 0,0 0,0 -2,2 -5,5 -7,8 2,-2 4,-4 8,-5 3,-2 7,-3 12,-4 2,-1 4,-2 6,-3 1,-1 3,-2 4,-4 0,0 0,0 0,0 6,-7 7,-19 7,-23 0,2 -1,4 -2,7 -1,3 -3,7 -5,9zm-104 0c0,1 1,2 2,2 2,2 3,2 4,3 2,0 3,0 4,-1 2,-2 1,-4 1,-4 0,0 -1,-2 -2,-3 0,-1 -1,-1 -2,-1 -1,-1 -1,0 -2,0 0,0 0,0 0,0 -1,1 -1,2 -1,3 0,-1 -1,-2 -2,-5 0,-2 0,-5 0,-9 1,-4 1,-9 0,-12 0,-3 -1,-5 -2,-6 1,0 2,1 3,2 1,2 3,5 4,10 1,5 1,11 5,20 3,4 6,10 11,16 0,0 0,0 0,0 2,2 5,5 7,8 -2,-2 -4,-4 -8,-5 -3,-2 -7,-3 -12,-4 -2,-1 -4,-2 -6,-3 -1,-1 -3,-2 -4,-4 0,0 0,0 0,0 -6,-7 -7,-19 -7,-23 0,2 1,4 2,7 1,3 3,7 5,9z"
              />
            </g>
          </svg>
        </div>

        <div onClick={() => this.showThroat()}>
          <svg viewBox="0 0 150 150">
            <g id="t_throat">
              <path
                fill="#000000"
                fillOpacity="0.7"
                fillRule="nonzero"
                d="M10 76c0,-1 1,-1 2,-1 0,0 1,1 1,2 -1,1 -3,2 -4,1 0,1 0,1 0,1 4,3 6,6 7,7 0,0 1,0 2,-1 1,0 3,0 4,0l0 0c3,0 6,1 7,5 0,0 0,1 0,1l0 0c0,2 -1,3 -2,4 -1,0 -1,0 -2,0 -1,1 -1,1 -2,1 0,0 -1,0 -1,0 1,1 3,2 6,3 2,2 7,3 13,5 5,1 9,4 12,7 3,4 5,7 6,9 -1,-4 -2,-8 -3,-11 -1,0 -1,0 -1,0 0,-1 0,-1 0,-2 -2,-4 -4,-7 -6,-10 -3,-4 -5,-6 -6,-8 -1,-1 -1,-1 -1,-1 0,1 1,1 1,2 0,1 0,1 0,2 0,1 -1,2 -1,3 -1,1 -2,1 -3,1 0,0 0,0 0,0 -1,-1 -3,-2 -4,-3 -1,-1 -2,-3 -2,-5 0,0 0,-1 0,-1 0,-3 2,-5 4,-6 2,-2 4,-2 5,-2 -5,-11 11,-11 12,2 3,-20 23,-31 23,-10 0,-21 20,-10 23,10 1,-13 17,-13 12,-2 1,0 3,0 5,2 2,1 4,3 4,6 0,0 0,1 0,1 0,2 -1,4 -2,5 -1,1 -3,2 -4,3 0,0 0,0 0,0 -1,0 -2,0 -3,-1 0,-1 -1,-2 -1,-3 0,-1 0,-1 0,-2 0,-1 1,-1 1,-2 0,0 0,0 -1,1 -1,2 -3,4 -6,8 -2,3 -4,6 -6,10 0,1 0,1 0,2l-1 0c-1,3 -2,7 -3,11 1,-2 3,-5 6,-9 3,-3 7,-6 12,-7 6,-2 11,-3 13,-5 3,-1 5,-2 6,-3 0,0 -1,0 -1,0 -1,0 -1,0 -2,-1 -1,0 -1,0 -2,0 -1,-1 -2,-2 -2,-4l0 0c0,0 0,-1 0,-1 1,-4 4,-5 7,-5l0 0c1,0 3,0 4,0 1,1 2,1 2,1 1,-1 3,-4 7,-7 0,0 0,0 0,-1 -1,1 -3,0 -4,-1 0,-1 1,-2 1,-2 1,0 2,0 2,1 2,-2 3,-5 1,-8 -1,-4 -4,-4 -4,-4 0,11 -17,13 -24,5 -2,-2 -3,-5 -2,-7 3,-2 4,2 5,4 1,-18 -10,-24 -10,-24 3,7 4,18 -5,21 -5,2 -12,-5 -4,-4 -4,-4 -12,-3 -19,-2 1,-1 1,-1 2,-2 0,0 0,0 0,0 0,0 0,0 1,-1 2,-1 6,-1 9,-1 0,0 1,0 1,1 1,0 1,0 1,0 0,0 0,0 -1,-1 0,0 0,0 -1,0 -3,-1 -5,-3 -8,-5 2,-1 4,-2 7,-2 0,-1 1,-1 2,-1 1,0 3,1 4,1 3,2 4,4 6,5 3,-6 2,-16 -2,-21 1,4 -2,8 -6,9 -2,1 -4,2 -7,1 -1,0 -2,-1 -3,-2 0,-1 0,-2 0,-3 1,-3 1,-7 0,-11 -1,1 -2,1 -3,1 0,0 0,1 0,1 0,2 -1,4 -1,5 -1,2 -3,4 -4,6 -1,1 -1,2 -2,3 -1,-1 -2,-2 -2,-3 -2,-1 -3,-3 -4,-6 0,-1 -1,-3 -1,-4 0,-1 -1,-2 -1,-2 -1,0 -2,0 -3,-1 0,4 0,8 0,11 0,1 1,2 1,3 -1,1 -2,2 -3,2 -3,1 -5,0 -8,-1 -3,-1 -6,-5 -5,-9 -4,5 -6,15 -2,21 1,-1 3,-3 6,-5 1,0 2,-1 4,-1 1,0 1,0 2,1 3,0 5,1 7,2 -3,2 -6,4 -9,5 0,0 0,0 -1,0 0,1 0,1 -1,1 1,0 1,0 2,0 0,-1 0,-1 1,-1 3,0 6,0 9,1 0,1 1,1 1,1 0,0 0,0 0,0 1,1 1,1 2,2 -8,-1 -15,-2 -19,2 8,-1 1,6 -4,4 -9,-3 -8,-14 -5,-21 0,0 -11,6 -10,24 1,-2 2,-6 5,-4 1,2 0,5 -2,7 -7,8 -24,6 -24,-5 0,0 -3,0 -4,4 -2,3 -1,6 1,8z"
              />
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
