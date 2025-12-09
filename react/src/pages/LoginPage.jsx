import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            // Replace with your CI4 API login endpoint
            const res = await axios.post("http://localhost:8080/api/login", form);

            if (res.data.success) {
                // store token or session if returned
                localStorage.setItem("token", res.data.token);
                navigate("/dashboard"); // redirect after login
            } else {
                setError(res.data.message || "Login failed");
            }
        } catch (err) {
            console.error(err);
            setError("Server error or invalid credentials");
        }
    };

    return (

        <>
        <div>
            
        </div>

        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-4">

                <div className="card shadow-sm">
                    <div className="card-header bg-primary text-white text-center">
                        <h5 className="mb-0">Login</h5>
                    </div>

                    <div className="card-body">
                    {error && <div className="alert alert-danger">{error}</div>}

                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                        Login
                        </button>

                    </form>
                    </div>
                </div>

                </div>
            </div>
            </div>
            
        </>
    );
}
