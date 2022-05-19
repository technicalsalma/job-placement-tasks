import React from 'react';
import { Card } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    if (error) {
        return (
          <div>
            <p className="text-danger">Error: {error.message}</p>
          </div>
        );
      }

      if(user){
          navigate('/home');
      }

    return (
      <div>
        <Card className="mt-5 mx-auto" style={{ width: "30rem" }}>
          <div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-info d-block mx-auto w-50 my-2"
            >
              <img style={{ width: "20px" }} src={google} alt="" />
              <span className="px-2">Sign In With Google</span>
            </button>
          </div>
        </Card>
      </div>
    );
};

export default Login;

