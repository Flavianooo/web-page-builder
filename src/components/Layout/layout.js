import style from "./layout.module.scss";
import React from "react";

export default class Layout extends React.Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
