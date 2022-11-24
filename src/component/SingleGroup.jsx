import React from "react";
import CountryImage from "./CountryImage";

const SingleGroup = ({ctry, noBackground, idx}) => {
  return ctry.name ? (
    <li className='list'>
      <div style={{width: noBackground && 0}}></div>
      <CountryImage height={20} imgUrl={`https://flagcdn.com/${ctry.code}.svg`} />
      {ctry?.name}
      {idx===0 ? <span>first</span> : idx===1 ? <span>Second</span> : null}
    </li>
  ): (
    <li className="list">

    </li>
  );
};

export default SingleGroup;
