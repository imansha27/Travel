// import React, { useState } from 'react';
// import Navbar from '../../Components/Navbar/Navbar';
// import './login.scss';

// export const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(username, password);
//   };

//   return (
//     <>
//       <Navbar />
//       <form onSubmit={handleSubmit}>
//         <section className='login container section'>
//           <div className=''>
//             <center>
//               <h2 className=''>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 LOGIN HERE
//               </h2>
//               <br></br>
//               <input
//                 type='text'
//                 placeholder='username'
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//               <br></br>
//               <br></br>
//               <input
//                 type='password'
//                 placeholder='password'
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <br></br>
//               <button type='submit' className='button'>
//                 LOGIN
//               </button>
//             </center>
//           </div>
//         </section>
//       </form>
//     </>
//   );
// };


import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import './login.scss';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/login-user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Username: username, Password: password })
      });

      const data = await response.json();

      if (response.status === 201) {
        //Successful login
        alert('Successfully logged in');
        window.localStorage.setItem("token",data.data);
        console.log(data);
       window.location.href="../userprofile";
       
     
      } else {
      
        alert(data.error); // Show error message in alert
        console.log('Error:', data.error);
      }
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <section className='login container section'>
          <div className=''>
            <center>
              <h2 className=''>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                LOGIN HERE
              </h2>
              <br></br>
              <input
                type='text'
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br></br>
              <br></br>
              <input
                type='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br></br>

              <button type='submit' className='button'>
                LOGIN
              </button>
            </center>
          </div>
        </section>
      </form>
    </>
  );
};
