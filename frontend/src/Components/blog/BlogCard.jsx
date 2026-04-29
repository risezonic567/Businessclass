import React from "react";
import { Calendar, Clock, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="card h-100 shadow-sm border-0">

      <img
        src={post.image}
        alt={post.title}
        className="card-img-top"
        style={{ height: "210px", objectFit: "cover" }}
      />

      <div className="card-body">

        <span className="text-primary small">
          {post.category}
        </span>

        <div className="d-flex align-items-center text-secondary small mt-1">
          <Calendar size={14} className="me-1" />
          {new Date(post.date).toDateString()}
        </div>

        <h5 className="fw-semibold mt-2">
          {post.title}
        </h5>

        <p className="text-secondary small mt-2">
          {post.excerpt}
        </p>

        <div className="d-flex justify-content-between text-secondary small mt-3">

          <span className="d-flex align-items-center">
            <Clock size={14} className="me-1" />
            {post.readingTime}
          </span>

          <span className="d-flex align-items-center">
            <Eye size={14} className="me-1" />
            {post.views}
          </span>

        </div>

        <Link
          to={`/blog/${post.slug}`}
          className="text-primary fw-semibold mt-3 d-inline-block"
        >
          Read More →
        </Link>

      </div>
    </div>
  );
}