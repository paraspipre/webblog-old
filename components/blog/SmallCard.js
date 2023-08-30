import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';

const SmallCard = ({ blog }) => {
   return (
      <div className="c">
         <div className='card-header' style={{ margin: "auto", marginTop: "20px" }}>
            <Link legacyBehavior href={`/blogs/${blog.slug}`}>
               <a>
                  <img
                     className="img img-fluid"
                     style={{ height: '140px', width: '100%' }}
                     src={`${API}/blog/photo/${blog.slug}`}
                     alt={blog.title}
                  />
               </a>
            </Link>
         </div>

         <div className="card-body">
            <Link legacyBehavior href={`/blogs/${blog.slug}`}>
               <h4 style={{ cursor: "pointer", color: '#9153F4' }} className="card-title">{blog.title}</h4>
            </Link>
            <div className="card-text">{renderHTML(blog.excerpt)}</div>

         </div>

         <div className="card-body" style={{ padding: "20px" }}>
            Posted {moment(blog.updatedAt).fromNow()} by{' '}
            <Link legacyBehavior href={`/profile/${blog.postedBy.username}`}>
               <a style={{ color: '#9153F4' }}>{blog.postedBy.username}</a>
            </Link>
         </div>
      </div>
   );
};

export default SmallCard;

{/* <div className="col-md-4">
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
</div> */}