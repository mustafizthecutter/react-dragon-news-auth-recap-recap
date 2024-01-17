import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const { signInUser } = useContext(AuthContext);

    const handleLogin = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signInUser(email, password)
            .then(result => console.log(result.user))
            .catch(error => console.error(error.message));
    };

    return (
        <div>

            <Helmet>
                <title>Dragon News | Login</title>
            </Helmet>

            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">
                <div>
                    <h2 className="text-3xl text-center">Please Login</h2>
                    <form onSubmit={handleLogin} className="card-body mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary" type="submit">Login</button>
                        </div>
                    </form>

                    <p className="text-center">Do not have an account? Please <Link to={'/register'} className="text-blue-600 font-semibold"><button className="btn btn-primary">Register</button></Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;