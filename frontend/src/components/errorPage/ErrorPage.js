import React from 'react'
import Spline from '@splinetool/react-spline'

function ErrorPage() {
  return (
    <div style={{height:'70vh'}}>
        <Spline 
          className='Spline'
          scene='https://prod.spline.design/RefPIDZctJGaFlZ4/scene.splinecode'
        />
    </div>
  )
}

export default ErrorPage