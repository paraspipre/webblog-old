import Router from "next/router";
import React, { useState, useEffect } from "react";
import { signin, authenticate, isAuth } from "../../actions/auth";
import Link from 'next/link';
import LoginGoogle from './LoginGoogle';

const SigninComponent = () => {
	const [values, setValues] = useState({
		email: "",
		password: "",
		error: "",
		loading: false,
		message: "",
		showForm: true
	})
	const [showPass, setShowPass] = useState(true);

	const { email, password, error, loading, message, showForm } = values

	useEffect(() => {
		isAuth() && Router.push('/')
	}, [])


	const handleSubmit = (e) => {
		e.preventDefault();
		//console.table({name,email,password,error,loading,message,showForm});
		setValues({ ...values, loading: true, error: false })
		const user = { email, password }

		signin(user).then(data => {
			if (data?.error) {
				setValues({ ...values, error: data?.error, loading: false })
			} else {
				authenticate(data, () => {
					if (isAuth() && isAuth().role === 1) {
						Router.push('/admin')
					} else {
						Router.push('/user')
					}
				})
			}
		})
	};
	const handleChange = name => (e) => {
		setValues({ ...values, error: false, [name]: e.target.value });
	};

	const showLoading = () => (
		loading ? <div className="d-flex justify-content-center" style={{ position: "fixed", right: "39vw", top: "37vh" }} >   <RotatingLines width="100" strokeColor="black" strokeWidth="2" /> </div> : ""
	)
	const showError = () => (
		error ? <div className="alert alert-danger">{error}</div> : ""
	);
	const showMessage = () => (
		message ? <div style={{ backgroundColor: "pink" }} className="alert alert-info">{message}</div> : ""
	);

	const signinForm = () => {
		return (
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<input
						value={email}
						onChange={handleChange('email')}
						type="email"
						className="form-control mt-3"
						placeholder="Enter your email"
					/>
				</div>
				<div className="form-group d-flex justify-content-end">
					<input
						value={password}
						onChange={handleChange('password')}
						type={showPass ? "password" : "text"}
						className="form-control mt-3"
						placeholder="Enter password"
					/>
					<i onClick={() => setShowPass(!showPass)} style={{ position: "absolute", marginTop: "28px", marginRight: "10px", cursor: "pointer" }} className={showPass ? "fas fa-eye-slash" : "fas fa-eye"} ></i>
				</div>
				<button type="submit" className="btn mt-4" style={{ backgroundColor: "white", boxShadow: "0 0 3px white" }}>Signin</button>
			</form>
		);
	};

	return <React.Fragment>
		{showError()}
		{showLoading()}
		{showMessage()}
		<LoginGoogle />
		<br />
		{showForm && signinForm()}
		<br />
		<Link legacyBehavior href="/auth/password/forgot">
			<a className="text-white btn btn-outline-dark w-50 btn-sm">Forgot password</a>
		</Link>
		<Link legacyBehavior href="/signup">
			<a style={{ textDecoration: "underline" }} className="text-white text-end">create new account!</a>
		</Link>
	</React.Fragment>;
};

export default SigninComponent;