import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  Clock, 
  Shield, 
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Personalized Routines",
      description: "Get custom AM/PM skincare routines tailored to your unique skin type and concerns."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Expert Recommendations",
      description: "Curated product suggestions from dermatologists and skincare professionals."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Quick & Easy",
      description: "Complete our 5-minute quiz and get instant results with actionable steps."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trusted Products",
      description: "Only the best, scientifically-backed products that deliver real results."
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "GlowGuide completely transformed my skincare routine! My skin has never looked better."
    },
    {
      name: "Emily R.",
      rating: 5,
      text: "Finally found products that work for my sensitive skin. The quiz was so accurate!"
    },
    {
      name: "Jessica L.",
      rating: 5,
      text: "Love how personalized everything is. The routine fits perfectly into my busy schedule."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero watercolor-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Discover Your
                <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Perfect Glow
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl">
                Get a personalized skincare routine designed just for you. Answer 5 simple questions 
                and unlock the secret to radiant, healthy skin with expert-recommended products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="gradient-button text-lg px-8 py-6">
                  <Link to="/quiz">
                    Start Your Skincare Quiz
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  <Link to="/blog">Learn More</Link>
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-1" />
                  Free Quiz
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-1" />
                  Instant Results
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-primary mr-1" />
                  Expert Approved
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 float-animation">
                <div className="w-full max-w-md mx-auto aspect-square rounded-full gradient-card p-8 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/40 flex items-center justify-center">
                    <Sparkles className="h-24 w-24 text-primary" />
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 right-4 w-16 h-16 rounded-full bg-accent/60 flex items-center justify-center"
              >
                <Heart className="h-8 w-8 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-8 left-4 w-12 h-12 rounded-full bg-secondary/60 flex items-center justify-center"
              >
                <Star className="h-6 w-6 text-primary" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose GlowGuide?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine science, expertise, and personalization to create the perfect skincare routine for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full gradient-card border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of women who've transformed their skin with GlowGuide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="gradient-card border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take our personalized skincare quiz and discover the routine that will give you the glowing, healthy skin you deserve.
            </p>
            <Button asChild size="lg" className="gradient-button text-lg px-8 py-6">
              <Link to="/quiz">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

