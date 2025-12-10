// src/components/LoginPage.jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/assets/dist/css/login.css'; // small extra CSS below
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const [loading, setLoading] = useState(false);
const [errors, setErrors] = useState({});
const navigate = useNavigate();

// 👇 Run once when the component mounts
useEffect(() => {
const token = localStorage.getItem('token');
if (token) {
    // Already logged in → redirect
    navigate('/dashboard');
}
}, [navigate]);


const handleSubmit = async (e) => {
    e.preventDefault();
    //setErrors(null);
    setLoading(true);

    try {
        const response = await fetch('http://ocss.dev.local/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.status === 400) {
            setErrors(data.errors || {});
        } else if (!response.ok) {
            setErrors({ general: data.message || 'Login failed' });
            setTimeout(() => setErrors(''), 3000);
            return;
        } else {
            console.log('Login success', data);
            localStorage.setItem('token', data.token);
            navigate('/dashboard');
        }

    } catch (err) {
        setErrors('Network error: ' + err.message);
        
    } finally {
        setLoading(false);
    }
};


    return (
        <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <div className="row w-100 justify-content-center">
                {loading && (
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-white bg-opacity-75" style={{ zIndex: 10 }}>
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                )}
                <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                    <div className="card shadow-sm overflow-hidden">
                        <div className="row g-0">
                             {/* Illustration */}
                            <div className="col-12 col-md-5 order-1 order-md-1 d-flex align-items-center justify-content-center bg-success text-white p-3" style={{ minHeight: '150px' }}>
                                <div className="text-center w-100">
                                    <h4 className="mb-2">Welcome Back</h4>
                                    <p className="small">Sign in to continue</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-7 order-2 order-md-2">
                                <div className="card-body p-3 p-sm-4">
                                    <h3 className="h5 mb-3">Sign in</h3>
                                    {/* Alert */}
                                    {errors.general && <div className="alert alert-danger alert-dismissible fade show" role="alert">{errors.general}</div>}
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-2">
                                            <label htmlFor="username" className="form-label small">Username</label>
                                            <input id="username" type="text" className={`form-control form-control-sm ${errors.username ? 'is-invalid' : ''}`} value={username} onChange={e => setUsername(e.target.value)} />

                                            {errors.username && <div className="invalid-feedback">{errors.username}</div>}

                                        </div>

                                        <div className="mb-2">
                                            <label htmlFor="password" className="form-label small">Password</label>
                                            <div className="input-group input-group-sm">
                                                <input id="password" type={showPassword ? 'text' : 'password'} className={`form-control form-control-sm ${errors.password ? 'is-invalid' : ''}`} value={password} onChange={e => setPassword(e.target.value)} />
                                                <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(s => !s)} aria-pressed={showPassword}>
                                                {showPassword ? 'Hide' : 'Show'}
                                                </button>
                                                
                                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="remember" />
                                                <label className="form-check-label small" htmlFor="remember">Remember me</label>
                                            </div>
                                            <a className="small" href="/forgot">Forgot?</a>
                                        </div>

                                        <div className="d-grid">
                                            <button className="btn btn-success" type="submit" disabled={loading}>
                                                {loading ? 'Signing in...' : 'Sign in'}
                                            </button>

                                        </div>

                                        <p className="text-center mt-3 small mb-0">No account? <a href="/register">Register</a></p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center mt-3 text-muted small">© Your Company</p>
                </div>
            </div>
        </div>
    );
}