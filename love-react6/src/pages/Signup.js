import React from 'react'
import Template from '../componets/Template'

const Signup = ({setLoggedIn}) => {
  return (
    <div>
      <Template
        title="WelCome Back in Signup Pages"
        desc1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, deserunt."
        desc2="Lorem2 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, deserunt."

        formtype="signup"
        setLoggedIn={setLoggedIn}
      />
    </div>
  )
}

export default Signup
