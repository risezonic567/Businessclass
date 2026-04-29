import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../BlogData/blogData";
import { Helmet } from "react-helmet";
import { Calendar } from "lucide-react";

export default function SingleBlog() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post)
    return <h2 className="text-center py-5">Blog Not Found</h2>;

  return (
    <div className="container py-5" style={{ maxWidth: "900px" }}>
      <Helmet>
        <title>{post.metatitle}</title>
        <meta name="description" content={post.metadescription} />
        <meta name="keywords" content={post.metakeywords} />
        <link
          rel="canonical"
          href={`https://www.business-classflights.com/${post.slug}`}
        />
      </Helmet>

      <h1 className="fw-bold mb-3">
        {post.title}
      </h1>

      <div className="d-flex align-items-center text-secondary mb-4">
        <Calendar size={16} className="me-2" />
        {new Date(post.date).toDateString()}
      </div>

      <img
        src={post.image}
        alt={post.title}
        className="img-fluid rounded mb-4"
      />

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
  );
}