import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => {
    return (
        <Layout>
            <article className="overflow-hidden">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="display-4 font-weight-bold main-head">
                                WEBBLOG
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center pt-4 pb-5">
                            <p className="lead sub-head">
                                Welcome to WEBBLOG
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row tt">
                        <div className="col-md-4">
                            <div className="c">
                                <div className="card-header">
                                    <img
                                        src="https://images.unsplash.com/photo-1640499900704-b00dd6a1103a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFydmVsJTIwYXZlbmdlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
                                        alt="rover"
                                    />
                                </div>
                                <div className="card-body">
                                    <span className="tag tag-teal">Christopher Nolan</span>
                                    <span style={{ color: "black" }} class="tag t-one">
                                        #science fiction
                                    </span>
                                    <Link href="/blogs">
                                        <h4 className="card-link mt-4">
                                            Why is the Tesla Cybertruck designed the way it is?
                                        </h4>
                                    </Link>

                                    <p>An exploration into the truck's polarising design</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="c">
                                <div className="card-header">
                                    <img src="https://images.unsplash.com/photo-1608889175638-9322300c46e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnZlbCUyMG1vdmllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="rover" />
                                </div>
                                <div className="card-body">
                                    <span className="tag tag-teal">Marvel</span>
                                    <span style={{ color: "black" }} class="tag t-one">
                                        #moon_knight
                                    </span>
                                    <Link href="/blogs">
                                        <h4 className="card-link mt-4">
                                            Moon Knight Is Unlike Any Other Superhero Show
                                        </h4>
                                    </Link>
                                    <p>
                                        Going into Moon Knight, I had few expectations. I wasn’t
                                        familiar with the character. All I knew about .
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="c">
                                <div className="card-header">
                                    <img
                                        src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW92aWUlMjBwb3N0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60"
                                        alt="rover"
                                    />
                                </div>
                                <div className="card-body">


                                    <span className="tag tag-teal">Netflix</span>
                                    <span style={{ color: "black" }} class="tag t-one">
                                        #stranger_things
                                    </span>
                                    <Link href="/blogs">
                                        <h4 className="card-link mt-4">
                                            We Need to Talk About the Stranger Things Season 4
                                        </h4>
                                    </Link>
                                    <p>
                                        Vecna gets a horrifying origin story, Hopper battles a
                                        familiar foe, and the kiddos learn more about the Upside
                                        Down.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </Layout>
    );
};

export default Index;