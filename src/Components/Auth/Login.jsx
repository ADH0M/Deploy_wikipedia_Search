import { useContext, useEffect, useRef, useState } from "react";
import {AuthContext} from './../Context/AuthProvider';
import axios from '../../api/axios';
const Login = () => {

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const context = useContext(AuthContext);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pass]);

  

  const handelSubmit = async(e) => {
    e.preventDefault();
    try{
        const respose = await axios.post('/auth/login' ,{email:user, password:pass} 
            // withCredentials: true
        );
        const accessToken = respose?.data?.token ;
        const data = respose?.data;
        setUser('');
        setPass('');
        setSuccess(true)
        console.log(respose);
        console.log(accessToken);
        console.log(data);
        


    } catch(err){
        console.log(err);
        
        errRef.current.focus()
    }
};

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p ref={errRef}>{errMsg}</p>
          <form onSubmit={handelSubmit}>
            <label htmlFor="username">
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => {
                  setUser(e.target.value);
                }}
                value={user}
                required
              />
            </label>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
              required
            />
            <button>Sign In</button>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
