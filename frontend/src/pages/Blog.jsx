import React from "react";
import { Helmet } from "react-helmet";
import { blogPosts } from "../BlogData/blogData";
import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import BlogCard from "../Components/blog/BlogCard";

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Business Class Travel Blog | Tips & Flight Deals</title>
        <meta
          name="description"
          content="Explore our Business Class Travel Blog for flight deals, premium travel tips, airline insights, and expert advice to make your international journey smoother."
        />
        <link
          rel="canonical"
          href="https://www.business-classflights.com/blog"
        />
      </Helmet>

      <div className="py-5 bg-light">

        <div className="container">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-5"
          >

            <h1 className="display-5 fw-bold mb-3">
              Travel Smarter, Not Harder
            </h1>

            <p className="lead text-secondary d-flex justify-content-center align-items-center gap-2">
              <Bookmark size={24} className="text-info" />
              Expert guides, destination reviews, and money-saving tips from our travel team.
            </p>

          </motion.div>

          <div className="row g-4">

            {blogPosts.map((post) => (
              <div className="col-md-6 col-lg-4" key={post.slug}>
                <BlogCard post={post} />
              </div>
            ))}

          </div>

          <div className="text-center mt-5 p-4 bg-yellow rounded shadow-sm">

            <h2 className="h4 fw-bold mb-3">
              Ready to book your dream flight?
            </h2>

            <p className="text-secondary mb-4">
              Don't just read about the world—experience it. Find your best deal now.
            </p>

            <a
              href="/"
              className="btn btn-info text-yellow px-4 py-2 fw-semibold"
            >
              Start Your Flight Search
            </a>

          </div>

        </div>

      </div>
    </>
  );
}