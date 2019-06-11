import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div onClick={() => props.buySushi(props.price)} data-price={props.price} className="sushi">
      <div className="plate" 
           onClick={() => props.eatSushi(props.eatenID, props.price)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.data[`sushi${props.eatenID}`] ?
            null
          :
            <img src={props.img} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.name} - ${props.price}
      </h4>
    </div>
  )
}

export default Sushi

// {
//   "id": 1,
//   "name": "Tako Supreme",
//   "img_url": "https://sushistickers.com/img/sushi-slice_99.png",
//   "price": 20,
//   "created_at": "2018-07-27T18:53:16.241Z"
// },