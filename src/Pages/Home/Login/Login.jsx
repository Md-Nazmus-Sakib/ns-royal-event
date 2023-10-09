import React, { useContext, useState } from 'react';
import loginImg from '../../../assets/Images/Login/draw2.svg'
import loginBgImg from '../../../assets/Images/Login/loginbg.jpg'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location)

    const from = location.state?.form?.pathname || '/';
    // console.log(from)
    const handelSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        setError('')

        signIn(email, password)
            .then(result => {
                const displayUser = result.user;
                console.log(displayUser)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Login Successful',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })
    }

    const handelGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${loginBgImg})`, backgroundSize: "cover" }} className="hero min-h-screen bg-base-200 mt-20 py-24 bg-opacity-50">
                <div className="hero-content flex-col md:flex-row">
                    <div className="text-center lg:text-left md:w-1/2">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-pink-200 bg-opacity-30 ">
                        <h1 style={{ textShadow: ' 4px 4px 8px black' }} className="text-5xl font-bold text-center mt-12 text-white ">Login now!</h1>
                        <form onSubmit={handelSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                                <label className="label">
                                    {error && <p className='text-red-600 rounded-md font-bold bg-white p-2'>{error}</p>}
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>


                        </form>
                        <div className="text-white my-4 text-center py-4 border-b-4 border-rose-500">
                            <h2> Don't Have an Account please <span style={{ textShadow: ' 4px 4px 8px black' }} className='text-xl bg-primary hover:bg-blue-600 mt-4  px-4 rounded-md'><Link to={'/register'}>Register</Link></span> </h2>
                        </div>

                        <div className='mb-8 text-center'>
                            <button onClick={handelGoogleLogIn} className="btn btn-circle btn-outline bg-rose-500 text-white">
                                <FaGoogle></FaGoogle>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;