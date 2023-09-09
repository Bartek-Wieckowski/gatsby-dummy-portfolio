import React from "react";

export default function ProgressBar(props) {
  const { percent, targetPercent, img, title } = props;
  return (
    <div className="skills__data">
      <div className="skills__names">
        <img src={img} alt="" />
        <span className="skills__name">{title}</span>
      </div>
      <div className="skills__bar" style={{ width: `${percent}%` }}></div>
      <div>
        <span className="skills__percentage">{targetPercent}%</span>
      </div>
    </div>
  );
}
