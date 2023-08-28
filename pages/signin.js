import Layout from '../components/Layout';
import { withRouter } from 'next/router';
import SigninComponent from '../components/auth/SigninComponent';

const Signin = ({ router }) => {
    const showRedirectMessage = () => {
        if (router.query.message) {
            return <div className="alert alert-danger">{router.query.message}</div>;
        } else {
            return;
        }
    };

    return (
        <Layout>
            <div className="sign">
                <div className="d-flex justify-content-center mb-4" >
                    <h1 className="main-head" >SignIn</h1>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-md-3">{showRedirectMessage()}</div>
                </div>


                <SigninComponent />
            </div>
        </Layout>
    );
};

export default withRouter(Signin);