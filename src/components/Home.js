import React from 'react'

function Home() {
  
  return (
    

    <div className='container'>
        
            <form className="login-form login-mover" action="">
            <h1 className='header'>LOGIN</h1>
            <hr />
             <div className="mover">
                <input className='login-info' type="text" name="Email" placeholder='Email or phone' />
                <input className='login-info' type="password" name="Password" placeholder='Password'/>
             </div>
                <p>Forgot Password?<a href="#"> click here</a></p>
                

                <button className='btn'>Login</button>
                <p>Don't have an account? <a href="/Signup" > click here to sign up</a></p><br /><br /><br />
            </form>


            <form className='signup-form login-mover login-form' action="">
            <h1 className='header'>SIGNUP</h1>
            <hr />
             <div className="mover">
                <input className='login-info' name="fName" type="text" placeholder='First Name' />
                <input className='login-info' name="Lname" type="text" placeholder='Last Name' />
                <input className='login-info' name="Email" type="Email" placeholder='Insert Email' />
                <input className='login-info' name="phoneNo" type="Number" placeholder='Phone no' />
                <input className='login-info' name="password" type="Password" placeholder='Password'/>
                <input className='login-info' name="confirmPassword" type="Password" placeholder='Confirm Password'/>
             </div>
                
                

                <button className='btn'>Sign up</button>
                
            </form>


        

    </div>
  )
}

export default Home