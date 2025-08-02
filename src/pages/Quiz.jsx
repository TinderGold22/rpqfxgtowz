import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles,
  User,
  Heart,
  DollarSign,
  Calendar,
  Clock
} from 'lucide-react';

const quizSchema = z.object({
  skinType: z.enum(['oily', 'dry', 'combination', 'sensitive', 'normal']),
  skinConcern: z.enum(['acne', 'aging', 'dryness', 'sensitivity', 'dark-spots', 'dullness']),
  budget: z.enum(['budget', 'mid-range', 'luxury']),
  age: z.enum(['teens', 'twenties', 'thirties', 'forties', 'fifties-plus']),
  routinePreference: z.enum(['basic', 'full'])
});

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();
  
  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(quizSchema),
    mode: 'onChange'
  });

  const watchedValues = watch();
  const totalSteps = 5;
  const progress = (currentStep / totalSteps) * 100;

  const steps = [
    {
      id: 1,
      title: "What's your skin type?",
      subtitle: "Understanding your skin type is the foundation of great skincare",
      icon: <User className="h-6 w-6" />,
      field: 'skinType',
      options: [
        { value: 'oily', label: 'Oily', description: 'Shiny, large pores, prone to breakouts' },
        { value: 'dry', label: 'Dry', description: 'Tight, flaky, sometimes rough texture' },
        { value: 'combination', label: 'Combination', description: 'Oily T-zone, dry cheeks' },
        { value: 'sensitive', label: 'Sensitive', description: 'Easily irritated, reactive to products' },
        { value: 'normal', label: 'Normal', description: 'Balanced, few imperfections' }
      ]
    },
    {
      id: 2,
      title: "What's your main skin concern?",
      subtitle: "Let's focus on what matters most to you",
      icon: <Heart className="h-6 w-6" />,
      field: 'skinConcern',
      options: [
        { value: 'acne', label: 'Acne & Breakouts', description: 'Pimples, blackheads, blemishes' },
        { value: 'aging', label: 'Anti-Aging', description: 'Fine lines, wrinkles, firmness' },
        { value: 'dryness', label: 'Dryness', description: 'Dehydration, flakiness, tightness' },
        { value: 'sensitivity', label: 'Sensitivity', description: 'Redness, irritation, reactions' },
        { value: 'dark-spots', label: 'Dark Spots', description: 'Hyperpigmentation, uneven tone' },
        { value: 'dullness', label: 'Dullness', description: 'Lack of radiance, tired-looking skin' }
      ]
    },
    {
      id: 3,
      title: "What's your budget range?",
      subtitle: "We'll recommend products that fit your budget",
      icon: <DollarSign className="h-6 w-6" />,
      field: 'budget',
      options: [
        { value: 'budget', label: 'Budget-Friendly', description: 'Under $50 per product' },
        { value: 'mid-range', label: 'Mid-Range', description: '$50-$100 per product' },
        { value: 'luxury', label: 'Luxury', description: '$100+ per product' }
      ]
    },
    {
      id: 4,
      title: "What's your age range?",
      subtitle: "Age helps us recommend the right ingredients",
      icon: <Calendar className="h-6 w-6" />,
      field: 'age',
      options: [
        { value: 'teens', label: 'Teens (13-19)', description: 'Focus on gentle, acne-fighting ingredients' },
        { value: 'twenties', label: '20s', description: 'Prevention and maintenance' },
        { value: 'thirties', label: '30s', description: 'Early anti-aging and hydration' },
        { value: 'forties', label: '40s', description: 'Targeted anti-aging treatments' },
        { value: 'fifties-plus', label: '50+', description: 'Advanced anti-aging and repair' }
      ]
    },
    {
      id: 5,
      title: "Routine preference?",
      subtitle: "How comprehensive would you like your routine to be?",
      icon: <Clock className="h-6 w-6" />,
      field: 'routinePreference',
      options: [
        { value: 'basic', label: 'Basic Routine', description: '3-4 steps, quick and simple' },
        { value: 'full', label: 'Full Routine', description: '6-8 steps, comprehensive care' }
      ]
    }
  ];

  const currentStepData = steps.find(step => step.id === currentStep);

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data) => {
    // Store quiz results in localStorage for the results page
    localStorage.setItem('quizResults', JSON.stringify(data));
    navigate('/results');
  };

  const isStepValid = () => {
    const fieldValue = watchedValues[currentStepData.field];
    return fieldValue && fieldValue.length > 0;
  };

  return (
    <div className="min-h-screen gradient-hero watercolor-bg py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              Skincare Quiz
            </h1>
            <p className="text-muted-foreground">
              Answer 5 quick questions to get your personalized routine
            </p>
          </motion.div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Step {currentStep} of {totalSteps}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </motion.div>

          {/* Quiz Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="gradient-card border-0 shadow-xl">
                  <CardHeader className="text-center pb-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <div className="text-primary">{currentStepData.icon}</div>
                      </div>
                    </div>
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {currentStepData.title}
                    </CardTitle>
                    <p className="text-muted-foreground">
                      {currentStepData.subtitle}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup
                      value={watchedValues[currentStepData.field] || ''}
                      onValueChange={(value) => setValue(currentStepData.field, value)}
                    >
                      {currentStepData.options.map((option) => (
                        <motion.div
                          key={option.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Label
                            htmlFor={option.value}
                            className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:border-primary/50 cursor-pointer transition-all bg-card/50 hover:bg-card"
                          >
                            <RadioGroupItem
                              value={option.value}
                              id={option.value}
                              className="mt-1"
                            />
                            <div className="flex-1">
                              <div className="font-medium text-foreground">
                                {option.label}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {option.description}
                              </div>
                            </div>
                          </Label>
                        </motion.div>
                      ))}
                    </RadioGroup>
                    
                    {errors[currentStepData.field] && (
                      <p className="text-sm text-destructive">
                        Please select an option to continue
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Previous</span>
              </Button>

              {currentStep === totalSteps ? (
                <Button
                  type="submit"
                  disabled={!isStepValid()}
                  className="gradient-button flex items-center space-x-2"
                >
                  <span>Get My Routine</span>
                  <Sparkles className="h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={!isStepValid()}
                  className="gradient-button flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

