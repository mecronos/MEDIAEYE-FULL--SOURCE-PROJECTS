import React, { Component } from "react";
export default class Optionsaccesories extends Component {
  constructor(props) {
    super(props);
  }

  deleteClass() {
    let c = document.getElementById("accesories").children,
      i;
    for (i = 0; i < c.length; i++) {
      c[i].classList.remove("show");
    }
  }
  showEarphones() {
    if (document.querySelector("#a_earphones").classList.contains("show")) {
      this.deleteClass();
    } else {
      this.deleteClass();
      document.querySelector("#a_earphones").classList.add("show");
    }
  }
  showEarring1() {
    if (document.querySelector("#a_earring1").classList.contains("show")) {
      this.deleteClass();
    } else {
      this.deleteClass();
      document.querySelector("#a_earring1").classList.add("show");
    }
  }
  showEarring2() {
    if (document.querySelector("#a_earring2").classList.contains("show")) {
      this.deleteClass();
    } else {
      this.deleteClass();
      document.querySelector("#a_earring2").classList.add("show");
    }
  }
  showEarring3() {
    if (document.querySelector("#a_earring3").classList.contains("show")) {
      this.deleteClass();
    } else {
      this.deleteClass();
      document.querySelector("#a_earring3").classList.add("show");
    }
  }
  render() {
    return (
      <div className="mn">
        <div onClick={() => this.showEarphones()}>
          <svg viewBox="0 0 220 220">
            <g id="a_earphones">
              <path
                fill="#b9b9b9"
                d="M31 54c1,-2 2,-3 4,-3l4 0c2,0 3,1 3,3l0 10c0,2 -1,4 -3,4l-4 0c-2,0 -3,-2 -4,-4l0 7c0,0 0,1 -1,1l0 0c0,15 10,28 25,46 4,4 7,8 11,13 5,6 10,10 14,13 7,6 13,10 17,22 1,4 1,8 1,14 0,6 -1,13 1,20 2,11 3,25 3,39 0,7 1,15 1,21l0 1 -2 0 0 -1c-1,-6 -1,-14 -1,-21 -1,-14 -1,-28 -3,-38 -2,-7 -2,-15 -1,-21 0,-5 0,-10 -1,-13 -4,-11 -10,-16 -16,-21 -5,-3 -10,-7 -15,-13 -3,-5 -7,-9 -10,-13 -16,-19 -27,-32 -27,-48l0 0c0,0 -1,-1 -1,-1 0,-5 0,-9 0,-14 0,-2 3,-3 5,-3z"
              />
              <path
                fill="#b9b9b9"
                d="M189 54c-1,-2 -2,-3 -4,-3l-4 0c-2,0 -3,1 -3,3l0 10c0,2 1,4 3,4l4 0c2,0 3,-2 4,-4l0 7c0,0 0,1 1,1l0 0c0,10 -10,18 -22,27 -9,7 -20,15 -29,26 -4,6 -11,10 -19,15 -13,8 -26,17 -25,29l1 2 2 -1 0 -1c-1,-11 11,-19 23,-27 8,-5 15,-9 20,-15 9,-11 19,-19 29,-26 12,-10 23,-17 23,-29l0 0c0,0 1,-1 1,-1 0,-5 0,-9 0,-14 0,-2 -3,-3 -5,-3z"
              />
            </g>
          </svg>
        </div>

        <div onClick={() => this.showEarring1()}>
          <svg viewBox="0 0 220 220">
            <g id="a_earring1">
              <path
                fill="#2B2A29"
                fillRule="nonzero"
                d="M33 103c0,-1 0,-3 1,-4 2,-1 4,0 4,1 1,1 1,2 2,3 0,1 0,2 0,3 0,3 -1,6 -3,8l0 0c-2,2 -5,3 -8,3 -3,0 -6,-1 -8,-3 -2,-2 -3,-5 -3,-8 0,-3 1,-6 3,-8 1,-2 4,-3 7,-3l0 0 0 1c0,2 0,3 1,4 0,0 0,0 -1,0 -1,1 -2,1 -3,2 -1,1 -2,2 -2,4 0,1 1,3 2,3 1,1 2,2 4,2 1,0 3,-1 3,-2l0 0c1,0 2,-2 2,-3 0,-1 0,-1 0,-2 0,0 0,0 -1,-1z"
              />
              <path
                fill="#2B2A29"
                fillRule="nonzero"
                d="M191 100c0,0 0,0 0,0 0,-1 0,-2 0,-4l0 -1c3,0 6,1 8,3 2,2 3,5 3,8 0,3 -1,6 -3,8l0 0c-2,2 -5,3 -8,3 -3,0 -6,-1 -8,-3 -2,-2 -3,-5 -3,-8 0,-1 0,-2 0,-3 1,-1 1,-2 2,-3 0,-1 2,-2 4,-1 1,1 1,3 1,4 -1,1 -1,1 -1,1 0,1 0,1 0,2 0,1 1,3 2,3 1,1 2,2 3,2 2,0 3,-1 4,-2l0 0c1,0 2,-2 2,-3 0,-2 -1,-3 -2,-4 -1,-1 -2,-2 -4,-2z"
              />
            </g>
          </svg>
        </div>

        <div onClick={() => this.showEarring2()}>
          <svg viewBox="0 0 120 120">
            <g id="a_earring2">
              <circle fill="gold" cx="21" cy="60" r="9" />
              <circle fill="gold" cx="89" cy="60" r="9" />
            </g>
          </svg>
        </div>

        <div onClick={() => this.showEarring3()}>
          <svg viewBox="0 0 160 160">
            <g id="a_earring3">
              <path
                fill="#57A7B3"
                fillRule="nonzero"
                d="M28 91c3,0 5,2 7,4 2,2 3,5 3,8 0,3 -1,6 -3,8l0 0c-2,2 -5,4 -8,4 -4,0 -7,-2 -9,-4 -2,-2 -3,-5 -3,-8 0,-3 1,-6 3,-8 2,-2 5,-4 7,-4l0 -25c-1,0 -2,-1 -2,-3 0,-2 2,-3 4,-3 1,0 3,1 3,3 0,2 -1,3 -2,3l0 25zm3 8c-1,-1 -3,-2 -4,-2 -2,0 -3,1 -5,2 -1,1 -1,2 -1,4 0,1 0,3 1,4 2,1 3,2 5,2 1,0 3,-1 4,-2l0 0c1,-1 1,-3 1,-4 0,-2 0,-3 -1,-4z"
              />
              <path
                fill="#57A7B3"
                fillRule="nonzero"
                d="M135 91c2,0 5,2 7,4 2,2 3,5 3,8 0,3 -1,6 -3,8l0 0c-2,2 -5,4 -9,4 -3,0 -6,-2 -8,-4 -2,-2 -3,-5 -3,-8 0,-3 1,-6 3,-8 2,-2 4,-4 7,-4l0 -25c-1,0 -2,-1 -2,-3 0,-2 2,-3 3,-3 2,0 4,1 4,3 0,2 -1,3 -2,3l0 25zm3 8c-2,-1 -3,-2 -5,-2 -1,0 -3,1 -4,2 -1,1 -1,2 -1,4 0,1 0,3 1,4 1,1 3,2 4,2 2,0 3,-1 5,-2l0 0c1,-1 1,-3 1,-4 0,-2 0,-3 -1,-4z"
              />
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
