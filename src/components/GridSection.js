import React from "react";
import { Card } from "./Card";

export function GridSection({ info }) {
  console.log(info);
  return (
    <div className="grid-section">
      <Card info={info['DanielClifford']} />
      <Card info={info['JonathanWalters']} />
      <Card info={info['JeanetteHarmon']} />
      <Card info={info['PatrickAbrams']} />
      <Card info={info['KiraWhittle']} />
    </div>
  );
}