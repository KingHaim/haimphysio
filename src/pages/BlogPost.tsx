import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Markdown from 'react-markdown';
import { BlogPost as BlogPostType, getBlogPost } from '../lib/blog';
import { ArrowLeft } from 'lucide-react';

const BlogPost: React.FC<{ lang: string }> = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostType | null>(null);

  useEffect(() => {
    if (slug) {
      getBlogPost(slug).then(setPost);
    }
  }, [slug]);

  if (!post) return <div className="pt-32 text-center text-white">Loading...</div>;

  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-6 max-w-4xl">
      <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
      </Link>
      
      {post.image && (
          <img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8 border border-white/10" />
      )}

      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{post.title}</h1>
      <p className="text-primary mb-8">{post.date}</p>

      <div className="prose prose-invert prose-lg max-w-none">
        <Markdown>{post.content}</Markdown>
      </div>
    </div>
  );
};

export default BlogPost;
