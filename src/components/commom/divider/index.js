import { Divider as DividerAntd } from "antd";
import React from "react";

const Divider = (props) => {
  const { type } = props;

  return (
    <DividerAntd
      type={type}
      style={{
        color: "#fff",
        borderLeft: '1px solid #fff'
      }}
    />
  );
};

export default Divider;
