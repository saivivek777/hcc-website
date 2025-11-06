import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase, Testimonial } from '../../lib/supabase';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('featured', { ascending: false })
        .order('created_at', { ascending: false });

      if (!error && data) {
        setTestimonials(data);
      }
      setLoading(false);
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (loading || testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            What Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from businesses that have transformed with HCC.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-24 h-24" />
              </div>

              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-300 text-yellow-300" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl leading-relaxed mb-8 font-medium">
                  "{currentTestimonial.content}"
                </p>

                <div className="flex items-center space-x-4">
                  {currentTestimonial.image_url && (
                    <img
                      src={currentTestimonial.image_url}
                      alt={currentTestimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-white/50"
                    />
                  )}
                  <div>
                    <div className="font-bold text-lg">{currentTestimonial.name}</div>
                    <div className="opacity-90">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-blue-600 dark:hover:bg-cyan-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-slate-700 dark:text-slate-200" />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? 'bg-blue-600 dark:bg-cyan-500 w-8'
                      : 'bg-slate-300 dark:bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 bg-slate-200 dark:bg-slate-700 rounded-full hover:bg-blue-600 dark:hover:bg-cyan-500 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-slate-700 dark:text-slate-200" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
