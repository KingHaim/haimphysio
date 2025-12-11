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

  if (!post) return (
    <div className="min-h-screen flex items-center justify-center bg-background text-gray-400">
        <div className="animate-pulse">Loading amazing content...</div>
    </div>
  );

  return (
    <article className="min-h-screen bg-background pb-32 pt-32">
        {/* Progress bar or similar could go here */}
        
        <div className="container mx-auto px-6">
            <Link to="/blog" className="group inline-flex items-center text-sm font-bold text-gray-400 hover:text-white mb-12 transition-colors uppercase tracking-widest">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
                Back to Journal
            </Link>
        </div>

        {/* Hero Section */}
        <div className="container mx-auto px-6 max-w-4xl text-center mb-16">
            <span className="inline-block py-1 px-3 border border-primary/30 rounded-full text-primary text-xs font-bold tracking-widest uppercase mb-6">
                Physiotherapy Insights
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 text-gray-400 text-sm">
                <p>{String(post.date)}</p> {/* Explicit String cast for safety */}
                <span>•</span>
                <p>3 min read</p> {/* Placeholder reading time */}
            </div>
        </div>

        {/* Featured Image */}
        {post.image && (
            <div className="container mx-auto px-6 max-w-5xl mb-20">
                <div className="aspect-video relative rounded-lg overflow-hidden shadow-2xl shadow-primary/5">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-lg"></div>
                </div>
            </div>
        )}

        {/* Content */}
        <div className="container mx-auto px-6 max-w-2xl">
            <div className="prose prose-invert prose-lg md:prose-xl prose-p:text-gray-300 prose-headings:text-white prose-a:text-primary prose-blockquote:border-primary prose-blockquote:bg-white/5 prose-blockquote:p-8 prose-blockquote:rounded-lg prose-img:rounded-lg">
                <Markdown>{post.content}</Markdown>
            </div>
            
            {/* Share/CTA Footer */}
            <div className="mt-20 pt-10 border-t border-white/10 text-center">
                <h3 className="text-white font-bold mb-4">Ready to perform at your peak?</h3>
                <a href="/#contact" className="inline-block bg-primary text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-colors">
                    Book Consultation
                </a>
            </div>
        </div>
    </article>
  );
};

export default BlogPost;
