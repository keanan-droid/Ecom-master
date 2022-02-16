import React from 'react'
import "../Stylesheet/Components/Register.scss";

export const Register = () => {
  return (
    <main className='registerForm'>
        <div className='registerForm_one'>
            <div className='form_one'>
                <h1>ACCOUNT SETTINGS</h1>
                <span>CREATE AN ACCOUNT</span>
            </div>
            <div>
                <h1>REGISTRATION</h1>
                <h1>CREATE AN ACCOUNT</h1>
            </div>
        </div>
        <div className='registerForm_two'>
            <div className='form_one'>
                <p>Title</p>
                <input type="text" />
            </div>
            <div className='form_two'>
                <p>Email</p>
                <input type="email" />
            </div>
            <div className='form_three'>
                <p>Confirm email</p>
                <input type="email" />
            </div>
            <div className='form_four'>
                <p>Password</p>
                <input type="password" />
            </div>
            <div className='form_five'>
                <p>Confirm password</p>
                <input type="password" />
            </div>
        </div>
        <small>ALL FORM FIELDS ARE MANDATORY</small>
        <div className='registerForm_three'>
            <h2>CONSENT TO PERSONAL DATA PROCESSING</h2>
            <p>I confirm that I am of legal age, that have read the information provided by the Data Controller in accordance with local applicable laws, and that I understand that the provision of my personal data for profiling and marketing purposes is optional and it is not required to process a credit card transaction and I:</p>
        </div>
        <div className='registerForm_four'>
            <div>
                <input type="checkbox" />
                <p>I agree</p>  
            </div>
            <div>
                <input type="checkbox" />
                <p>I don't agree</p> 
            </div>
        </div>
        <div className='registerForm_five'>
            <p>On subscription you accept our<span>Privacy Policy</span></p>
        </div>
        <div className='registerForm_six'>
            <button>Apply</button>
        </div>
    </main>
  )
}
