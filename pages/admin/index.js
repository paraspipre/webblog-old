import Layout from "../../components/Layout"
import Link from 'next/link'
import Admin from "../../components/auth/Admin"


const AdminIndex = () => {
    return <Layout>
        <Admin>
            <div className="container-fluid">
                <div className="row">
                    <h1 className="main-head">Hello Admin</h1>
                </div>

                <div className="all">
                    <div className="row ">
                        <div className="col-md-6">
                            <Link legacyBehavior href="/admin/crud/category-tag">
                                <a>
                                    <div class="admin-option">
                                        <div class="icon-set">
                                            <i className="fa fa-comment"></i>
                                        </div>
                                        Create Category
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link legacyBehavior href="/admin/crud/category-tag">
                                <a>
                                    <div class="admin-option ">
                                        <div class="icon-set">
                                            <i class="fa fa-hashtag"></i>
                                        </div>
                                        create tag
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6">
                            <Link legacyBehavior href="/admin/crud/blog">
                                <a>
                                    <div class="admin-option">
                                        <div class="icon-set">
                                            <i class="fa fa-pen"></i>
                                        </div>
                                        create Blog
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link legacyBehavior href="/user/crud/blogs">
                                <a>
                                    <div class="admin-option ">
                                        <div class="icon-set">
                                            <i class="fa fa-edit"></i>
                                        </div>
                                        Update Blog
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Link legacyBehavior href="/user/crud/blogs">
                                <a>
                                    <div class="admin-option">
                                        <div class="icon-set">
                                            <i class="fa fa-trash"></i>
                                        </div>
                                        Delete Blog
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link legacyBehavior href="/user/update">
                                <a>
                                    <div class="admin-option">
                                        <div class="icon-set">
                                            <i class="fa fa-user"></i>
                                        </div>
                                        Update profile
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Admin>
    </Layout>
}

export default AdminIndex