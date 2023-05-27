import Layout from "../../components/Layout"
import Link from 'next/link'
import Admin from "../../components/auth/Admin"


const AdminIndex = () => {
    return <Layout>
        <Admin>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 pt-5 pb-5">
                        <h2>Admin Dashboard</h2>
                    </div>
                    <div className="col-md-4">
                        <ui className="list-group">
                            <li className="list-group-item">
                                <Link legacyBehavior href="admin/crud/category"><a>Create Category</a></Link>
                            </li>
                            <li className="list-group-item">
                                <Link legacyBehavior href="admin/crud/category-tag"><a>Create Tag</a></Link>
                            </li>
                            <li className="list-group-item">
                                <Link legacyBehavior href="admin/crud/blog"><a>Create Blog</a></Link>
                            </li>
                            <li className="list-group-item">
                                <Link legacyBehavior href="admin/crud/blogs"><a>Update/Delete Blog</a></Link>
                            </li>
                            <li className="list-group-item">
                                <Link legacyBehavior href="/user/update">
                                    <a>Update Profile</a>
                                </Link>
                            </li>
                        </ui>
                    </div>
                    {/* <div className="col-md-8"></div> */}
                </div>
            </div>
        </Admin>
    </Layout>
}

export default AdminIndex