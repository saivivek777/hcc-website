import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Card } from '../Card';
import { Button } from '../Button';
import { supabase, BlogPost } from '../../lib/supabase';

export const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('published_at', { ascending: false })
        .limit(3);

      if (!error && data) {
        setPosts(data);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return null;
  }

  return (
    <section id="blog" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Latest <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Stay ahead with our expert analysis on AI trends, automation strategies, and business innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden p-0">
                {post.image_url && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image_url}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        <Tag className="w-3 h-3 mr-1" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(post.published_at)}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  <motion.a
                    href="#blog"
                    className="inline-flex items-center text-blue-600 dark:text-cyan-400 font-semibold hover:gap-2 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </motion.a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.querySelector('#blog');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View All Articles
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
