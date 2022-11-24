import React from 'react'

const CountryImage = ({imgUrl, height}) => {
  return (
    <img alt={imgUrl} style={{height: height, width: height}} src={imgUrl} />
  )
}

export default CountryImage