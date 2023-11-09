import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", country: "India", checkbox: true, comments: false, candidates: false, offers: false })


    function changeHandler(event) {
        const { name, value, checked, type } = event.target
        setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
    }
    return (
        <div className='flex flex-col items-center mt-3'>


            <form action="">

                <label htmlFor="firstName">First name</label>
                <br />
                <input type="text"
                    name='firstName'
                    id='firstName'
                    placeholder='Mohammad'
                    value={formData.firstName}
                    onChange={changeHandler}
                    className='outline'
                />

                <br />
                <label htmlFor="lastName">Last name</label>
                <br />
                <input type="text"
                    name='lastName'
                    id='lastName'
                    placeholder='Mohammad'
                    value={formData.lastName}
                    onChange={changeHandler}
                    className='outline'
                />

                <br />
                <label htmlFor="email">Email name</label>
                <br />
                <input type="email"
                    name='email'
                    id='email'
                    placeholder='Mohammad'
                    value={formData.email}
                    onChange={changeHandler}
                    className='outline'
                />

                <br />
                <label htmlFor="country">Country</label>
                <br />
                <select

                    id='country'
                    name='country'
                    value={formData.country}
                    onChange={changeHandler}
                    className='outline'

                >
                    <option >
                        India
                    </option>
                    <option >
                        Canada
                    </option>
                    <option >
                        Mexico
                    </option>
                </select>


                <fieldset>
                        <legend>By email</legend>
                    <div className='flex'>

                        <input type="checkbox"
                            onChange={changeHandler}
                            id='comments'
                            name='comments'
                            value={formData.comments}

                        />
                        <label htmlFor=""></label>

                        <div>
                            <label htmlFor="comments">Comments</label>
                            <p>Lorem ipsum dolor sit amet.</p>

                        </div>
                    </div>
                </fieldset>







            </form>




        </div>
    )
}

export default Form
