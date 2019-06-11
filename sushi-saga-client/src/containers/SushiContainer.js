import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi.js'

const SushiContainer = (props) => {
  
  let mySushis = props.sushis.slice(props.sushiNum, props.sushiNum + 4)
  console.log("this is my sushis", mySushis)
  let eatID = -1
  const tableSushis = mySushis.map(sushi => {
    eatID += 1
    return (
      <div>
        <Sushi buySushi={props.buySushi} eatSushi={props.eatSushi} data={props.data} eatenID={eatID} eaten={false} key={sushi.id} name={sushi.name} img={sushi.img_url} price={sushi.price}/>
      </div>
    )
  })
  return (
    <Fragment>
      <div className="belt">
        {
          tableSushis
        }
        <MoreButton onClick={props.moreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer

// {
//   "id": 1,
//   "name": "Tako Supreme",
//   "img_url": "https://sushistickers.com/img/sushi-slice_99.png",
//   "price": 20,
//   "created_at": "2018-07-27T18:53:16.241Z"
// },