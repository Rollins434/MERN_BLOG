import React from 'react'
import notfound from "../src/assets/nofound.svg"

const NoMatch = () => {
  return (
    <div className='notfound' style={{marginTop:"2rem",display:"flex" ,alignItems:"center" ,justifyContent:"center"}}>
<img src={notfound} alt="notfound" height="400px" width="400px"/>

<h3>Not Found</h3>
    </div>
  )
}

export default NoMatch