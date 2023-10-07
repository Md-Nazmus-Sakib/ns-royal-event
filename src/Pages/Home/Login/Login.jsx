import React, { useContext } from 'react';
import loginImg from '../../../assets/Images/Login/draw2.svg'
import loginBgImg from '../../../assets/Images/Login/loginbg.jpg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handelSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
            .then(result => {
                const displayUser = result.user;
                console.log(displayUser)
            })
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

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>


                        </form>
                        <div className="text-white my-4 text-center">
                            <h2> Don't Have an Account please <span style={{ textShadow: ' 4px 4px 8px black' }} className='text-xl bg-primary hover:bg-blue-600 py-2 px-4 rounded-md'><Link to={'/register'}>Register</Link></span> </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;