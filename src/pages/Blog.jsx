import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen,
  Sparkles,
  Heart,
  Star,
  Calendar
} from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    // Update meta tags for SEO
    document.title = 'Beauty & Skincare Blog - Expert Tips & Product Reviews | GlowGuide';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover expert skincare tips, product reviews, and beauty advice. Learn about the best skincare routines, ingredients, and products for glowing, healthy skin.');
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Beauty & Skincare Blog - Expert Tips & Product Reviews | GlowGuide');
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Discover expert skincare tips, product reviews, and beauty advice for glowing, healthy skin.');
    }
  }, []);

  const articles = [
    {
      id: 1,
      title: "Best Moisturizers for Oily Skin: 2024 Dermatologist Picks",
      excerpt: "Discover the top-rated moisturizers that hydrate oily skin without clogging pores. Our dermatologist-approved list includes budget-friendly and luxury options.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop",
      category: "Product Reviews",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      author: "Dr. Sarah Johnson",
      tags: ["oily skin", "moisturizer", "skincare routine"],
      slug: "best-moisturizers-oily-skin-2024"
    },
    {
      id: 2,
      title: "How to Layer Skincare Products: The Complete Guide",
      excerpt: "Master the art of skincare layering with our step-by-step guide. Learn the correct order to apply serums, moisturizers, and treatments for maximum effectiveness.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      category: "Skincare Tips",
      readTime: "12 min read",
      publishDate: "Dec 12, 2024",
      author: "Emily Chen",
      tags: ["skincare routine", "layering", "beauty tips"],
      slug: "how-to-layer-skincare-products-guide"
    },
    {
      id: 3,
      title: "Retinol vs Retinoids: What's the Difference and Which is Right for You?",
      excerpt: "Confused about retinol and retinoids? Our comprehensive guide breaks down the differences, benefits, and how to choose the right one for your skin type.",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=250&fit=crop",
      category: "Ingredients",
      readTime: "10 min read",
      publishDate: "Dec 10, 2024",
      author: "Dr. Michael Rodriguez",
      tags: ["retinol", "anti-aging", "ingredients"],
      slug: "retinol-vs-retinoids-complete-guide"
    },
    {
      id: 4,
      title: "Morning vs Evening Skincare: Building the Perfect Routine",
      excerpt: "Learn why your AM and PM skincare routines should be different and how to optimize each for maximum skin health and protection.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=250&fit=crop",
      category: "Routines",
      readTime: "15 min read",
      publishDate: "Dec 8, 2024",
      author: "Jessica Williams",
      tags: ["morning routine", "evening routine", "skincare"],
      slug: "morning-vs-evening-skincare-routine"
    },
    {
      id: 5,
      title: "The Science of Vitamin C: Why Your Skin Needs This Powerhouse Antioxidant",
      excerpt: "Discover the proven benefits of Vitamin C for your skin, how to choose the right form, and the best ways to incorporate it into your routine.",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&h=250&fit=crop",
      category: "Ingredients",
      readTime: "11 min read",
      publishDate: "Dec 5, 2024",
      author: "Dr. Lisa Park",
      tags: ["vitamin c", "antioxidants", "brightening"],
      slug: "vitamin-c-skincare-benefits-guide"
    },
    {
      id: 6,
      title: "Skincare Mistakes That Are Aging Your Skin Faster",
      excerpt: "Avoid these common skincare mistakes that could be accelerating aging. Learn what dermatologists say you should stop doing immediately.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      category: "Anti-Aging",
      readTime: "9 min read",
      publishDate: "Dec 3, 2024",
      author: "Dr. Amanda Foster",
      tags: ["anti-aging", "skincare mistakes", "beauty tips"],
      slug: "skincare-mistakes-aging-skin-faster"
    }
  ];

  const categories = ["All", "Product Reviews", "Skincare Tips", "Ingredients", "Routines", "Anti-Aging"];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-hero watercolor-bg py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Beauty & Skincare Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert tips, product reviews, and science-backed advice for your best skin ever. 
              Stay updated with the latest in skincare and beauty trends.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge 
                  key={category} 
                  variant={category === "All" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full gradient-card border-0 shadow-lg hover:shadow-xl transition-all group cursor-pointer">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{article.publishDate}</span>
                      <span className="mx-2">•</span>
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      asChild 
                      className="w-full gradient-button group-hover:shadow-lg transition-shadow"
                    >
                      <Link to={`/blog/${article.slug}`} className="flex items-center justify-center">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Heart className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Never Miss a Beauty Tip
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest skincare advice, product reviews, and exclusive beauty tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="gradient-button px-6 py-3">
                Subscribe
                <Sparkles className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Join 50,000+ beauty enthusiasts. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "GlowGuide Beauty & Skincare Blog",
          "description": "Expert skincare tips, product reviews, and beauty advice for glowing, healthy skin",
          "url": "https://glowguide.vercel.app/blog",
          "publisher": {
            "@type": "Organization",
            "name": "GlowGuide",
            "logo": {
              "@type": "ImageObject",
              "url": "https://glowguide.vercel.app/logo.png"
            }
          },
          "blogPost": articles.map(article => ({
            "@type": "BlogPosting",
            "headline": article.title,
            "description": article.excerpt,
            "image": article.image,
            "author": {
              "@type": "Person",
              "name": article.author
            },
            "datePublished": article.publishDate,
            "url": `https://glowguide.vercel.app/blog/${article.slug}`
          }))
        })}
      </script>
    </div>
  );
};

export default Blog;

