import ReactStars from 'react-stars'
import React from 'react'
import { render } from 'react-dom'

// const ratingChanged = (newRating:number) => {
//   console.log(newRating,)
// }


// render(<ReactStars
//   count={5}
//   onChange={ratingChanged}
//   size={24}
//   color2={'#ffd700'} />,

//   document.getElementById('tack')

//   );


export const Rating = () => {
    const ratingChanged = () => {
        console.log()
      }
  return (
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    color2={'#ffd700'}
    />

    // document.getElementById('where-to-render')
    )
}
