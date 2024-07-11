import React from "react";
import { SMALL_BLOGS } from "../../utils/mock";

const SmallBusinessBlog = () => {
  return (
    <div className="bg-background flex flex-col items-center justify-center gap-24 pt-8 pb-16 text-secondary">
      <div className="marginBody grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <h2 className="heading1-primary my-auto">Business Finance Blog</h2>
        <div className="flex flex-col gap-2 md:gap-5 p-4 md:p-8 border-l-4 border-secondary">
          <p className="heading3">Helping businesses reach their goal</p>
          <p className="paragraph1">
          Cidwell Capital's blog serves as a business finance knowledge base,
            providing professional tips and advice on all aspects of business
            funding.
          </p>
        </div>
      </div>
      <div className="marginBody grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SMALL_BLOGS.map((blog, index) => (
          <div key={index} className="border border-primary rounded-md">
            <img
              src={blog?.imageSrc}
              className="rounded-md w-full h-[226px] object-cover"
              alt="blog"
            />
            <div className="p-6 flex flex-col gap-5 ">
              <h5 className="text-lg text-light">{blog?.title}</h5>
              <p className="text-[11px] text-lighttext font-medium">
                {blog?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmallBusinessBlog;
