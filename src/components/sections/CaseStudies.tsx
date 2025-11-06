import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import { Card } from '../Card';

export const CaseStudies = () => {
  const caseStudies = [
    {
      company: 'TechStyle Boutique',
      industry: 'Retail',
      image: 'https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg',
      challenge: 'Struggling with inventory management and understanding customer preferences',
      solution: 'AI-powered predictive analytics dashboard with customer behavior insights',
      results: [
        { icon: TrendingUp, metric: '300%', label: 'ROI Increase' },
        { icon: DollarSign, metric: '45%', label: 'Waste Reduction' },
        { icon: Users, metric: '200%', label: 'Marketing Efficiency' }
      ]
    },
    {
      company: 'GreenLeaf Organics',
      industry: 'Food & Beverage',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
      challenge: 'Overwhelmed customer service team handling repetitive queries',
      solution: 'Intelligent AI chatbot with natural language processing',
      results: [
        { icon: Clock, metric: '85%', label: 'Queries Automated' },
        { icon: Users, metric: '40%', label: 'Satisfaction Increase' },
        { icon: TrendingUp, metric: '60%', label: 'Response Time Reduced' }
      ]
    },
    {
      company: 'Summit Construction',
      industry: 'Construction',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg',
      challenge: 'Manual project management causing delays and miscommunication',
      solution: 'Custom business automation platform with AI-powered scheduling',
      results: [
        { icon: Clock, metric: '15hrs', label: 'Weekly Time Saved' },
        { icon: DollarSign, metric: '2 months', label: 'ROI Timeline' },
        { icon: TrendingUp, metric: '30%', label: 'Efficiency Gain' }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Success <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Real businesses, real results. See how we've helped companies like yours achieve transformative growth.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card hover={false} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative h-64 md:h-auto overflow-hidden rounded-lg">
                    <img
                      src={study.image}
                      alt={study.company}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{study.company}</h3>
                      <p className="text-cyan-300">{study.industry}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-2">
                        THE CHALLENGE
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300">{study.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-2">
                        OUR SOLUTION
                      </h4>
                      <p className="text-slate-700 dark:text-slate-300">{study.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-blue-600 dark:text-cyan-400 mb-4">
                        THE RESULTS
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result) => (
                          <div
                            key={result.label}
                            className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
                          >
                            <result.icon className="w-6 h-6 mx-auto mb-2 text-blue-600 dark:text-cyan-400" />
                            <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
