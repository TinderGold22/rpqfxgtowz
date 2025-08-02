import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Sparkles, 
  Sun, 
  Moon, 
  ShoppingCart, 
  RefreshCw, 
  Mail, 
  Twitter,
  Clock,
  Star,
  Heart,
  Share2
} from 'lucide-react';
import { getRecommendations } from '../data/products';

const Results = () => {
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const quizResults = localStorage.getItem('quizResults');
    if (!quizResults) {
      navigate('/quiz');
      return;
    }

    try {
      const parsedResults = JSON.parse(quizResults);
      const recs = getRecommendations(parsedResults);
      setRecommendations(recs);
      setIsLoading(false);
    } catch (error) {
      console.error('Error parsing quiz results:', error);
      navigate('/quiz');
    }
  }, [navigate]);

  const handleRetakeQuiz = () => {
    localStorage.removeItem('quizResults');
    navigate('/quiz');
  };

  const handleEmailRoutine = () => {
    const subject = 'My Personalized GlowGuide Skincare Routine';
    const body = `Check out my personalized skincare routine from GlowGuide!\n\nVisit: ${window.location.href}`;
    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const handleShareTwitter = () => {
    const text = 'Just got my personalized skincare routine from @GlowGuide! ✨ #skincare #beauty #glowup';
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
  };

  if (isLoading || !recommendations) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Generating your personalized routine...</p>
        </div>
      </div>
    );
  }

  const { amRoutine, pmRoutine, skinProfile } = recommendations;

  const ProductCard = ({ step, timeOfDay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: step.step * 0.1 }}
    >
      <Card className="gradient-card border-0 shadow-lg hover:shadow-xl transition-all">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                src={step.product.image}
                alt={step.product.name}
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <Badge variant="outline" className="mb-2">
                    Step {step.step}: {step.name}
                  </Badge>
                  <h3 className="font-semibold text-foreground text-lg leading-tight">
                    {step.product.name}
                  </h3>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary text-lg">{step.product.price}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-primary font-medium mb-2">
                ✨ {step.product.benefit}
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                {step.product.description}
              </p>
              <Button 
                asChild 
                className="gradient-button w-full"
                size="sm"
              >
                <a 
                  href={step.product.amazonLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Buy on Amazon</span>
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="min-h-screen gradient-hero watercolor-bg py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Sparkles className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Your Personalized Routine
            </h1>
            <p className="text-muted-foreground mb-6">
              Based on your skin profile, here's your custom AM/PM skincare routine
            </p>
            
            {/* Skin Profile Summary */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="secondary" className="capitalize">
                {skinProfile.skinType} Skin
              </Badge>
              <Badge variant="secondary" className="capitalize">
                {skinProfile.skinConcern.replace('-', ' ')} Concern
              </Badge>
              <Badge variant="secondary" className="capitalize">
                {skinProfile.budget} Budget
              </Badge>
              <Badge variant="secondary" className="capitalize">
                {skinProfile.age} Age Range
              </Badge>
              <Badge variant="secondary" className="capitalize">
                {skinProfile.routinePreference} Routine
              </Badge>
            </div>
          </motion.div>

          {/* Routines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* AM Routine */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="gradient-card border-0 shadow-xl">
                <CardHeader className="text-center pb-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                      <Sun className="h-6 w-6 text-yellow-600" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Morning Routine
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Start your day with protection and hydration
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {amRoutine.map((step, index) => (
                    <div key={step.step}>
                      <ProductCard step={step} timeOfDay="AM" />
                      {index < amRoutine.length - 1 && (
                        <div className="flex justify-center my-4">
                          <div className="w-px h-6 bg-border"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* PM Routine */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="gradient-card border-0 shadow-xl">
                <CardHeader className="text-center pb-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <Moon className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Evening Routine
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Repair and rejuvenate while you sleep
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {pmRoutine.map((step, index) => (
                    <div key={step.step}>
                      <ProductCard step={step} timeOfDay="PM" />
                      {index < pmRoutine.length - 1 && (
                        <div className="flex justify-center my-4">
                          <div className="w-px h-6 bg-border"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Tips Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <Card className="gradient-card border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Pro Tips for Your Routine</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Application Order</h4>
                    <p className="text-sm text-muted-foreground">
                      Always apply products from thinnest to thickest consistency for best absorption.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Patch Testing</h4>
                    <p className="text-sm text-muted-foreground">
                      Test new products on a small area first to check for any reactions.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Consistency is Key</h4>
                    <p className="text-sm text-muted-foreground">
                      Use your routine consistently for 4-6 weeks to see optimal results.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">Sun Protection</h4>
                    <p className="text-sm text-muted-foreground">
                      Never skip sunscreen, even on cloudy days or when staying indoors.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Floating CTA Bar */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur border-t border-border/40 p-4 z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={handleRetakeQuiz}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <RefreshCw className="h-4 w-4" />
              <span>Retake Quiz</span>
            </Button>
            <Button
              onClick={handleEmailRoutine}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <Mail className="h-4 w-4" />
              <span>Email My Routine</span>
            </Button>
            <Button
              onClick={handleShareTwitter}
              className="gradient-button flex items-center space-x-2"
              size="sm"
            >
              <Twitter className="h-4 w-4" />
              <span>Share on Twitter</span>
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Results;

