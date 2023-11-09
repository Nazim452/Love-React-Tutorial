import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {
    const navigate = useNavigate();

    function clikHandler() {

        navigate("/about")

    }
    function moveBack(){
        navigate(-1)
    }
    return (
        <div>
            <div>
                Support
            </div>

            <div>
                <button
                    onClick={clikHandler}
                >Move To About</button>

                <button
                onClick={moveBack}> MOve Back
                    
                </button>
            </div>
        </div>
    )
}

export default Support
