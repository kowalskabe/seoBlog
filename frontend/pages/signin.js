import Layout from '../components/Layout';
import SigninComponent from '../components/auth/SigninComponent'
import Link from 'next/link';

const Signin = () => {
    return (
        <Layout>
            <SigninComponent />
        </Layout>
    );
};

export default Signin;