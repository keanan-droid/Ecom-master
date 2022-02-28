import React from 'react'
import "../Stylesheet/Components/Register.scss";

export const Register = () => {
    const [ isError, setIsError ] = React.useState("")

    const validation = (data) => {
        fetch("http://localhost:3004/accounts")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            for (let i = 0; i < data.length; i++) {
                const account = data[i];
                
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
        validation();
        fetch("http://localhost:3004/accounts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(data.entries())),
            }).then(() => {
                console.log("NEW ACCOUNT ADDED");
            })
    }

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
        <form onSubmit={handelSubmit}>
            <div className='registerForm_two'>
                <div className='form_one'>
                    <label>Title</label>
                    <input type="text" 
                    name='title' />
                </div>
                <div className='form_two'>
                    <label>Email</label>
                    <input type="email" 
                    name='email' />
                </div>
                <div className='form_three'>
                    <label>Password</label>
                    <input type="password" 
                    name='password' />
                </div>
            </div>
            <small>ALL FORM FIELDS ARE MANDATORY</small>
            <div className='registerForm_three'>
                <h2>CONSENT TO PERSONAL DATA PROCESSING</h2>
                <p>I confirm that I am of legal age, that have read the information provided by the Data Controller in accordance with local applicable laws, and that I understand that the provision of my personal data for profiling and marketing purposes is optional and it is not required to process a credit card transaction and I:</p>
            </div>
            <div className='registerForm_four'>
                <div>
                    <input type="checkbox" 
                    name='true'/>
                    <p id='tos'>I agree</p>  
                </div>
                <div>
                    <input type="checkbox" 
                    name='false'/>
                    <p id='tos'>I don't agree</p> 
                </div>
            </div>
            <div>
                <div className='registerForm_five'>
                    <p>On subscription you accept our<span>Privacy Policy</span></p>
                </div>
                <div className='registerForm_six'>
                    <button>Apply</button>
                </div>
            </div>
        </form>
    </main>
  )
}
