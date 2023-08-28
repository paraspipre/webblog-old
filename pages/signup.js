import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link';

const Signup = () => {
    return (
        <Layout>
            <div className="sign">
                <div className="d-flex justify-content-center mb-4">
                    <h1 className="main-head">Signup</h1>
                </div>
                <SignupComponent />
            </div>
        </Layout>
    );
};

export default Signup;