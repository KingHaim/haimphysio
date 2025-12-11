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
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-block py-1 px-3 border border-primary/30 rounded-full text-primary text-xs font-bold tracking-widest uppercase mb-6">
                Journal
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Insights & Performance</h1>
            <p className="text-gray-400 text-lg">
                Explore the latest research, injury prevention strategies, and recovery techniques from elite physiotherapy.
            </p>
        </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="group block h-full">
            <div className="bg-surface rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1">
              {post.image && (
                <div className="h-56 overflow-hidden relative">
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              )}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center text-primary text-xs font-bold tracking-widest uppercase mb-4">
                    <span>{String(post.date)}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">{post.title}</h2>
                <p className="text-gray-400 mb-6 flex-1 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center text-white text-sm font-bold group-hover:translate-x-2 transition-transform">
                    Read Article <span className="text-primary ml-2">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
