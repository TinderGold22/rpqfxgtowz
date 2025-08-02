# 🌟 GlowGuide - Personalized Skincare Routine Generator

A modern, interactive web application that generates personalized AM/PM skincare routines based on user preferences, featuring affiliate product recommendations and an SEO-optimized beauty blog.

![GlowGuide Preview](https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=400&fit=crop)

## ✨ Features

### 🎯 Interactive Skincare Quiz
- **5-step personalized quiz** to determine skin type, concerns, budget, age, and routine preference
- **Real-time progress tracking** with animated progress bar
- **Smooth transitions** and micro-interactions powered by Framer Motion

### 💄 Personalized Recommendations
- **Custom AM/PM routines** tailored to user responses
- **Product cards** with images, benefits, prices, and affiliate links
- **Dynamic product selection** from curated database
- **Professional layout** with gradient cards and hover effects

### 📝 SEO-Optimized Blog
- **6 pre-built beauty articles** with engaging content
- **Category filtering** and search functionality
- **Newsletter signup** for lead generation
- **Schema.org markup** for enhanced SEO
- **Open Graph** and Twitter Card meta tags

### 🎨 Modern Design
- **Feminine aesthetic** with pastel gradients and soft animations
- **Mobile-first responsive design** optimized for all devices
- **Accessibility features** with proper ARIA labels and contrast ratios
- **Floating animations** and watercolor background effects

### 🔗 Affiliate Integration
- **Amazon affiliate links** with customizable tracking tags
- **Product recommendation engine** based on user preferences
- **CTA buttons** optimized for conversion
- **Social sharing** functionality

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/glowguide.git
   cd glowguide
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your affiliate tracking tags:
   ```env
   VITE_AMAZON_AFFILIATE_TAG=your-affiliate-tag
   VITE_APP_URL=http://localhost:5173
   ```

4. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
glowguide/
├── public/
│   ├── favicon.svg              # Custom favicon
│   └── og-image.jpg            # Open Graph image
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.jsx      # Navigation header
│   │   │   └── Footer.jsx      # Site footer
│   │   └── ui/                 # Reusable UI components
│   ├── data/
│   │   └── products.js         # Product database
│   ├── pages/
│   │   ├── Home.jsx           # Landing page
│   │   ├── Quiz.jsx           # Interactive quiz
│   │   ├── Results.jsx        # Personalized results
│   │   └── Blog.jsx           # SEO blog page
│   ├── App.jsx                # Main app component
│   ├── App.css               # Global styles
│   └── main.jsx              # App entry point
├── index.html                # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind configuration
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: `#EC4899` (Pink)
- **Secondary**: `#F97316` (Orange)
- **Accent**: `#8B5CF6` (Purple)
- **Background**: Gradient combinations of primary colors

### Typography
- **Headings**: Inter font family, bold weights
- **Body**: Inter font family, regular weights
- **Responsive sizing** with Tailwind CSS utilities

### Components
- **Gradient cards** with hover effects
- **Animated buttons** with micro-interactions
- **Progress indicators** with smooth transitions
- **Form elements** with focus states

## 🛠️ Technology Stack

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Beautiful icons

### UI Components
- **ShadCN/UI** - High-quality component library
- **Custom components** built with Tailwind CSS
- **Responsive design** with mobile-first approach

### SEO & Analytics
- **Meta tags** for social sharing
- **Schema.org markup** for rich snippets
- **Open Graph** and Twitter Cards
- **Sitemap ready** structure

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy with one click

3. **Environment Variables**
   Set these in your Vercel dashboard:
   ```
   VITE_AMAZON_AFFILIATE_TAG=your-affiliate-tag
   VITE_APP_URL=https://your-domain.vercel.app
   ```

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

## 📊 SEO Features

### Meta Tags
- **Title tags** optimized for each page
- **Meta descriptions** with target keywords
- **Open Graph** tags for social sharing
- **Twitter Card** markup
- **Canonical URLs** to prevent duplicate content

### Content Strategy
- **Keyword-optimized** blog articles
- **Internal linking** structure
- **Image alt tags** for accessibility
- **Schema.org markup** for rich snippets

### Performance
- **Lazy loading** for images
- **Code splitting** with Vite
- **Optimized assets** and compression
- **Fast loading times** under 3 seconds

## 🎯 Monetization Features

### Affiliate Marketing
- **Amazon affiliate links** with tracking
- **Product recommendation engine**
- **Conversion-optimized CTAs**
- **Performance tracking** ready

### Lead Generation
- **Newsletter signup** forms
- **Email capture** on quiz completion
- **Social media sharing** buttons
- **Retargeting** pixel ready

### Content Marketing
- **SEO-optimized blog** for organic traffic
- **Shareable content** with social meta tags
- **Expert positioning** with author bios
- **Engagement features** like comments ready

## 🔧 Customization

### Adding New Products
Edit `src/data/products.js` to add new products:

```javascript
{
  id: 'new-product',
  name: 'Product Name',
  brand: 'Brand Name',
  price: 29.99,
  image: 'product-image-url',
  benefit: 'Key benefit statement',
  description: 'Detailed description',
  affiliateLink: 'amazon-affiliate-url',
  category: 'cleanser',
  skinTypes: ['oily', 'combination'],
  concerns: ['acne'],
  budgetRange: 'mid-range'
}
```

### Updating Affiliate Tags
Update your affiliate tag in the environment variables:

```env
VITE_AMAZON_AFFILIATE_TAG=your-new-tag
```

### Adding Blog Articles
Add new articles to the `articles` array in `src/pages/Blog.jsx`:

```javascript
{
  id: 7,
  title: 'Your Article Title',
  excerpt: 'Article excerpt...',
  image: 'article-image-url',
  category: 'Category',
  readTime: '10 min read',
  publishDate: 'Jan 15, 2025',
  author: 'Author Name',
  tags: ['tag1', 'tag2'],
  slug: 'article-url-slug'
}
```

## 📈 Analytics & Tracking

### Google Analytics
Add your GA4 tracking code to `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Conversion Tracking
Track quiz completions and affiliate clicks:

```javascript
// Track quiz completion
gtag('event', 'quiz_complete', {
  event_category: 'engagement',
  event_label: 'skincare_quiz'
});

// Track affiliate clicks
gtag('event', 'affiliate_click', {
  event_category: 'monetization',
  event_label: 'amazon_product'
});
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for beautiful stock photography
- **ShadCN/UI** for excellent component library
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Lucide** for beautiful icons

## 📞 Support

For support, email support@glowguide.com or join our Discord community.

---

**Made with ❤️ for beautiful skin**

