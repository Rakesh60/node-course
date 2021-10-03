import React, { Component } from "react";
import axios from "axios";
import "./file.css";
import File2 from "./file2";
export default class file extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  async componentDidMount() {
    axios
      .get("/blogs")
      .then((res) => {
        console.log(res.data);
        this.setState({ data: res.data });
      })
      .catch((e) => {
        console.log(e);
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <File2 />
        <div className="top">
          {data.map((val, i) => (
            <div key={i} className="parent">
              <div className="header">{val.created_by}</div>
              <div className="body">{val.body}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
