import ReusableHeader from "@/components/common/ReusableHeader";
import React from "react";

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="education-section bg-primary py-10 sm:py-20 px-4 sm:px-10  w-full"
    >
      <ReusableHeader
        title="My Blog"
        message="I love to share my thoughts with you."
      />
    </section>
  );
};

export default BlogSection;
