import React from "react";
import { connect } from "react-redux";
import SingleBlog from "./SingleBlog";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const Blog = (props ) => {
 const { t } = useTranslation();

  return (
    < section className="blogCon">
    {/* Introdaction in blog  */}
    <div className='introBlog d-flex align-items-center justify-content-evenly flex-column '>
      <div>
        <h2 className="ms-3 ps-3">Blog</h2>
        <div className='d-flex  '>
          <Link to='/' className="color-main2">{t(`aboutFirst.2`)} &nbsp;  </Link>
          <p> / Blog</p>
        </div>
      </div>
    </div>
    <div className="">
      <div className="container">
       <div className="row">
         <div className="blogArea">
            <div className="mt-3">
               <div className="row">
                         {props.blogvalues.map((fd, i) => {
                       return <SingleBlog key={i} {...fd} />;
              })}
            
           </div>
        </div>
      </div>
      </div>
      </div>
    </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    blogvalues: state.actionreducer,
  };
};

export default connect(mapStateToProps)(Blog);