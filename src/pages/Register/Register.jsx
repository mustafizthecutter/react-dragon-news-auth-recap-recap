import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const img = form.get('photo');
        const name = form.get('name');
        console.log(email, password, img, name);
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero min-h-screen bg-base-200">
                <div>
                    <h2 className="text-3xl text-center">Please Register</h2>
                    <form onSubmit={handleRegister} className="card-body mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Your Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-secondary" type="submit">Register</button>
                        </div>
                    </form>

                    <p className="text-center">Already have an account? Please <Link to={'/login'} className="text-blue-600 font-semibold"><button className="btn btn-primary">Log In</button></Link> </p>

                </div>
            </div>
        </div>
    );
};

export default Register;