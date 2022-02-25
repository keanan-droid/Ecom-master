import React from 'react'
import "../Stylesheet/Components/Register.scss";

export const Register = () => {

    const [inputEmail, setInputEmail] = React.useState("");
    const [inputTitle, setInputTitle] = React.useState("");
    const [inputPassword, setInputPassword] = React.useState("");
    const [inputTos, setInputTos] = React.useState("");

    let email = (e) => {
        const newEmail = e.target.value;
        setInputEmail(newEmail);
    };

    let title = (e) => {
        const newTitle = e.target.value;
        setInputTitle(newTitle);
    };

    let password = (e) => {
        const newPassword = e.target.value;
        setInputPassword(newPassword);
    };

    let tos = (e) => {
        const newTos = e.target.value;
        setInputTos(newTos);
    };

    async function postData(url = 'db.json', data = {}) {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            userId: "",
            title: inputTitle,
            email: inputEmail,
            password: inputPassword,
            tos: inputTos
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        return response.json()
    }

    React.useEffect(() => {
        fetch("http://localhost:3004/accounts")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
        console.log(JSON.stringify(data));
        })
        .catch((error) => {
          console.error(error);
        });
    });

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
                <input type="text" id='title' onChange={title}/>
            </div>
            <div className='form_two'>
                <p>Email</p>
                <input type="email" id='email' onChange={email}/>
            </div>
            <div className='form_three'>
                <p>Email</p>
                <input type="password" id='password' onChange={password}/>
            </div>
        </div>
        <small>ALL FORM FIELDS ARE MANDATORY</small>
        <div className='registerForm_three'>
            <h2>CONSENT TO PERSONAL DATA PROCESSING</h2>
            <p>I confirm that I am of legal age, that have read the information provided by the Data Controller in accordance with local applicable laws, and that I understand that the provision of my personal data for profiling and marketing purposes is optional and it is not required to process a credit card transaction and I:</p>
        </div>
        <div className='registerForm_four'>
            <div>
                <input type="checkbox" onChange={tos}/>
                <p id='tos'>I agree</p>  
            </div>
            <div>
                <input type="checkbox" onChange={tos}/>
                <p id='tos'>I don't agree</p> 
            </div>
        </div>
        <div className='registerForm_five'>
            <p>On subscription you accept our<span>Privacy Policy</span></p>
        </div>
        <div className='registerForm_six'>
            <button onChange={postData}>Apply</button>
        </div>
    </main>
  )
}
