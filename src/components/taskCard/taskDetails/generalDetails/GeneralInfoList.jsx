import React from "react";
import Gdetail from "./Gdetail";

export default function GeneralInfoList({ general }) {
  return (
    <div className="space-y-5">
      {general.map((detail) => (
        <Gdetail title={detail.title} value={detail.value} />
      ))}
    </div>
  );
}
