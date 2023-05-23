import React from 'react'
import bgVideo from "../public/video/Circuit.mp4"

const BgVideo = () => {
  return (
    <>
        <div className="backgrounVideo">
          <video autoPlay loop muted >
            <source src={bgVideo} type="video/mp4" />
          </video>
        </div>
    </>
  )
}

export default BgVideo
