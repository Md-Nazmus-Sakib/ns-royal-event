import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import registerImg from '../../assets/Images/Login/register.png'
import registerBgImg from '../../assets/Images/Login/registerBg.jpeg'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(name, photo)
                    .then(() => {
                        form.reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Register Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error)
                        setError(error.message)
                    })
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
        setError(null)

    }
    return (
        <div>
            <div style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4)),url(${registerBgImg})`, backgroundSize: "cover" }} className="hero min-h-screen bg-base-200 mt-20 py-24 bg-opacity-50">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-1/2">
                        <img src={registerImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-pink-200 bg-opacity-30 ">
                        <h1 style={{ textShadow: ' 4px 4px 8px black' }} className="text-5xl font-bold text-center mt-12 text-white ">Register now!</h1>
                        <form onSubmit={handelRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Name</span>
                                </label>
                                <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white font-bold">Photo Url</span>
                                </label>
                                <input type="text" placeholder="photo url" name='photo' className="input input-bordered" required />
                            </div>
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
                                <button className="btn bg-yellow-500 hover:bg-yellow-600" type='submit'>Register</button>
                            </div>


                        </form>
                        <div className="text-white my-4 text-center mb-8">
                            <h2> Already Have an Account please <span style={{ textShadow: ' 4px 4px 8px black' }} className='text-xl bg-yellow-500 hover:bg-yellow-600  px-4 rounded-md'><Link to={'/login'}>Login</Link></span> </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;