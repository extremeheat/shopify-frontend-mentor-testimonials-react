import React from "react";

export function Card({ info }) {
  console.log(info);
  return (
    // style={{ backgroundColor: info.background }}
    // className={`card ${info.id}`}
    <div className={`card ${info.id}`} >
      <div className="inner-content">
        <div className="pic-name-status">
          <img className="pic" src={info.picModified} style={{ boxShadow: info.picBackground }}></img>
          <div className="name-status">
            <h3 className="name {info.background}" style={{ color: info.fullNameColor }}>{info.fullName}</h3>
            <h3 className="status">{info.graduate}</h3>
          </div>
        </div>
        <p className="main-statement" style={{ color: info.mainStatementColor }}>{info.mainStatement}</p>
        <p className="paragraph" style={{ color: info.paragraphColor }}>{info.paragraph}</p>
      </div>
    </div>
  );
}