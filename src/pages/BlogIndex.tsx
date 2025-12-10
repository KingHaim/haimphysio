import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost, getBlogPosts } from '../lib/blog';
import { TranslationKeys } from '../types';

interface BlogIndexProps {
    t: any; // Type lazily for now or extend types
    lang: string;
}

const BlogIndex: React.FC<BlogIndexProps> = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    getBlogPosts().then(setPosts);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen container mx-auto px-6">
      <h1 className="text-5xl font-bold text-white mb-12 text-center">Latest Insights</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="group">
            <div className="bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
              {post.image && (
                <div className="h-48 overflow-hidden">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
              )}
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-primary text-sm mb-2">{post.date}</p>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-gray-400 mb-4 flex-1">{post.excerpt}</p>
                <span className="text-white font-bold underline decoration-primary underline-offset-4">Read Article</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
