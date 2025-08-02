// Mock product database for skincare recommendations
export const products = {
  cleansers: [
    {
      id: 'cleanser-1',
      name: 'CeraVe Foaming Facial Cleanser',
      price: '$12.99',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
      benefit: 'Removes excess oil without stripping skin',
      description: 'Gentle foaming cleanser with ceramides and hyaluronic acid',
      amazonLink: 'https://amazon.com/cerave-foaming-cleanser?tag=mytag123',
      suitableFor: ['oily', 'combination', 'normal'],
      concerns: ['acne', 'dullness'],
      budget: ['budget', 'mid-range']
    },
    {
      id: 'cleanser-2',
      name: 'Cetaphil Gentle Skin Cleanser',
      price: '$8.99',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
      benefit: 'Ultra-gentle cleansing for sensitive skin',
      description: 'Soap-free, fragrance-free cleanser for sensitive skin',
      amazonLink: 'https://amazon.com/cetaphil-gentle-cleanser?tag=mytag123',
      suitableFor: ['sensitive', 'dry'],
      concerns: ['sensitivity', 'dryness'],
      budget: ['budget']
    },
    {
      id: 'cleanser-3',
      name: 'La Roche-Posay Toleriane Caring Wash',
      price: '$15.99',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
      benefit: 'Soothes and cleanses reactive skin',
      description: 'Gentle cleanser with La Roche-Posay thermal spring water',
      amazonLink: 'https://amazon.com/laroche-posay-toleriane?tag=mytag123',
      suitableFor: ['sensitive', 'dry', 'normal'],
      concerns: ['sensitivity', 'dryness'],
      budget: ['mid-range']
    }
  ],
  
  toners: [
    {
      id: 'toner-1',
      name: 'Paula\'s Choice 2% BHA Liquid Exfoliant',
      price: '$32.00',
      image: 'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=300&h=300&fit=crop',
      benefit: 'Unclogs pores and reduces blackheads',
      description: 'Salicylic acid treatment for clearer skin',
      amazonLink: 'https://amazon.com/paulas-choice-bha-exfoliant?tag=mytag123',
      suitableFor: ['oily', 'combination'],
      concerns: ['acne', 'dullness'],
      budget: ['mid-range']
    },
    {
      id: 'toner-2',
      name: 'Thayers Rose Petal Witch Hazel Toner',
      price: '$10.95',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop',
      benefit: 'Balances and refreshes skin naturally',
      description: 'Alcohol-free toner with rose water and witch hazel',
      amazonLink: 'https://amazon.com/thayers-rose-toner?tag=mytag123',
      suitableFor: ['normal', 'combination', 'sensitive'],
      concerns: ['dullness', 'sensitivity'],
      budget: ['budget']
    }
  ],

  serums: [
    {
      id: 'serum-1',
      name: 'The Ordinary Niacinamide 10% + Zinc 1%',
      price: '$7.90',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
      benefit: 'Reduces appearance of blemishes and pores',
      description: 'High-strength niacinamide and zinc serum',
      amazonLink: 'https://amazon.com/ordinary-niacinamide-zinc?tag=mytag123',
      suitableFor: ['oily', 'combination'],
      concerns: ['acne', 'dullness'],
      budget: ['budget']
    },
    {
      id: 'serum-2',
      name: 'Skinceuticals CE Ferulic',
      price: '$169.00',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
      benefit: 'Powerful antioxidant protection and brightening',
      description: 'Vitamin C, E, and ferulic acid antioxidant serum',
      amazonLink: 'https://amazon.com/skinceuticals-ce-ferulic?tag=mytag123',
      suitableFor: ['normal', 'dry', 'combination'],
      concerns: ['aging', 'dark-spots', 'dullness'],
      budget: ['luxury']
    },
    {
      id: 'serum-3',
      name: 'The INKEY List Hyaluronic Acid Serum',
      price: '$9.99',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
      benefit: 'Intense hydration for plump, dewy skin',
      description: 'Multi-weight hyaluronic acid for deep hydration',
      amazonLink: 'https://amazon.com/inkey-list-hyaluronic-acid?tag=mytag123',
      suitableFor: ['dry', 'normal', 'sensitive'],
      concerns: ['dryness', 'aging'],
      budget: ['budget']
    },
    {
      id: 'serum-4',
      name: 'Olay Regenerist Micro-Sculpting Serum',
      price: '$28.99',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop',
      benefit: 'Firms and smooths fine lines',
      description: 'Amino-peptides and niacinamide for anti-aging',
      amazonLink: 'https://amazon.com/olay-regenerist-serum?tag=mytag123',
      suitableFor: ['normal', 'dry', 'combination'],
      concerns: ['aging', 'dullness'],
      budget: ['mid-range']
    }
  ],

  moisturizers: [
    {
      id: 'moisturizer-1',
      name: 'Neutrogena Hydro Boost Water Gel',
      price: '$15.47',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
      benefit: 'Lightweight hydration that won\'t clog pores',
      description: 'Oil-free gel moisturizer with hyaluronic acid',
      amazonLink: 'https://amazon.com/neutrogena-hydro-boost?tag=mytag123',
      suitableFor: ['oily', 'combination', 'normal'],
      concerns: ['dryness', 'acne'],
      budget: ['budget', 'mid-range']
    },
    {
      id: 'moisturizer-2',
      name: 'CeraVe Daily Moisturizing Lotion',
      price: '$13.99',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
      benefit: 'All-day hydration with essential ceramides',
      description: '24-hour moisturizer with ceramides and hyaluronic acid',
      amazonLink: 'https://amazon.com/cerave-daily-moisturizer?tag=mytag123',
      suitableFor: ['dry', 'normal', 'sensitive'],
      concerns: ['dryness', 'sensitivity'],
      budget: ['budget', 'mid-range']
    },
    {
      id: 'moisturizer-3',
      name: 'La Mer Moisturizing Cream',
      price: '$190.00',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
      benefit: 'Luxurious hydration and skin renewal',
      description: 'Miracle Broth formula for ultimate skin transformation',
      amazonLink: 'https://amazon.com/la-mer-moisturizing-cream?tag=mytag123',
      suitableFor: ['dry', 'normal', 'combination'],
      concerns: ['aging', 'dryness'],
      budget: ['luxury']
    }
  ],

  sunscreens: [
    {
      id: 'sunscreen-1',
      name: 'EltaMD UV Clear Broad-Spectrum SPF 46',
      price: '$37.00',
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop',
      benefit: 'Lightweight protection that calms sensitive skin',
      description: 'Zinc oxide sunscreen with niacinamide',
      amazonLink: 'https://amazon.com/eltamd-uv-clear-spf46?tag=mytag123',
      suitableFor: ['sensitive', 'oily', 'combination'],
      concerns: ['sensitivity', 'acne'],
      budget: ['mid-range']
    },
    {
      id: 'sunscreen-2',
      name: 'Neutrogena Ultra Sheer Dry-Touch SPF 30',
      price: '$8.97',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
      benefit: 'Non-greasy protection for daily wear',
      description: 'Lightweight, fast-absorbing sunscreen',
      amazonLink: 'https://amazon.com/neutrogena-ultra-sheer-spf30?tag=mytag123',
      suitableFor: ['oily', 'combination', 'normal'],
      concerns: ['acne', 'dullness'],
      budget: ['budget']
    }
  ],

  treatments: [
    {
      id: 'treatment-1',
      name: 'Differin Adapalene Gel 0.1%',
      price: '$12.88',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop',
      benefit: 'Prescription-strength retinoid for acne',
      description: 'FDA-approved retinoid for acne treatment',
      amazonLink: 'https://amazon.com/differin-adapalene-gel?tag=mytag123',
      suitableFor: ['oily', 'combination'],
      concerns: ['acne'],
      budget: ['budget', 'mid-range']
    },
    {
      id: 'treatment-2',
      name: 'Sunday Riley Good Genes Lactic Acid Treatment',
      price: '$122.00',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
      benefit: 'Brightens and smooths skin texture',
      description: 'Lactic acid treatment for radiant skin',
      amazonLink: 'https://amazon.com/sunday-riley-good-genes?tag=mytag123',
      suitableFor: ['normal', 'dry', 'combination'],
      concerns: ['aging', 'dark-spots', 'dullness'],
      budget: ['luxury']
    }
  ]
};

// Recommendation algorithm
export const getRecommendations = (quizResults) => {
  const { skinType, skinConcern, budget, age, routinePreference } = quizResults;
  
  const filterProducts = (productCategory) => {
    return productCategory.filter(product => {
      const matchesSkinType = product.suitableFor.includes(skinType);
      const matchesConcern = product.concerns.includes(skinConcern);
      const matchesBudget = product.budget.includes(budget);
      
      return matchesSkinType && matchesConcern && matchesBudget;
    });
  };

  // Get filtered products for each category
  const recommendedCleansers = filterProducts(products.cleansers);
  const recommendedToners = filterProducts(products.toners);
  const recommendedSerums = filterProducts(products.serums);
  const recommendedMoisturizers = filterProducts(products.moisturizers);
  const recommendedSunscreens = filterProducts(products.sunscreens);
  const recommendedTreatments = filterProducts(products.treatments);

  // Fallback to first product if no matches found
  const getProduct = (category, filtered) => {
    return filtered.length > 0 ? filtered[0] : category[0];
  };

  // Build routine based on preference
  const amRoutine = [
    {
      step: 1,
      name: 'Cleanser',
      product: getProduct(products.cleansers, recommendedCleansers),
      timeOfDay: 'AM'
    },
    {
      step: 2,
      name: 'Serum',
      product: getProduct(products.serums, recommendedSerums),
      timeOfDay: 'AM'
    },
    {
      step: 3,
      name: 'Moisturizer',
      product: getProduct(products.moisturizers, recommendedMoisturizers),
      timeOfDay: 'AM'
    },
    {
      step: 4,
      name: 'Sunscreen',
      product: getProduct(products.sunscreens, recommendedSunscreens),
      timeOfDay: 'AM'
    }
  ];

  const pmRoutine = [
    {
      step: 1,
      name: 'Cleanser',
      product: getProduct(products.cleansers, recommendedCleansers),
      timeOfDay: 'PM'
    }
  ];

  // Add toner for full routine
  if (routinePreference === 'full' && recommendedToners.length > 0) {
    pmRoutine.push({
      step: 2,
      name: 'Toner',
      product: getProduct(products.toners, recommendedToners),
      timeOfDay: 'PM'
    });
  }

  // Add treatment for specific concerns
  if (skinConcern === 'acne' || skinConcern === 'aging') {
    pmRoutine.push({
      step: routinePreference === 'full' ? 3 : 2,
      name: 'Treatment',
      product: getProduct(products.treatments, recommendedTreatments),
      timeOfDay: 'PM'
    });
  }

  // Add serum (different from AM if full routine)
  const pmSerum = routinePreference === 'full' && recommendedSerums.length > 1 
    ? recommendedSerums[1] 
    : getProduct(products.serums, recommendedSerums);
  
  pmRoutine.push({
    step: pmRoutine.length + 1,
    name: 'Serum',
    product: pmSerum,
    timeOfDay: 'PM'
  });

  // Add moisturizer
  pmRoutine.push({
    step: pmRoutine.length + 1,
    name: 'Moisturizer',
    product: getProduct(products.moisturizers, recommendedMoisturizers),
    timeOfDay: 'PM'
  });

  return {
    amRoutine,
    pmRoutine,
    skinProfile: {
      skinType,
      skinConcern,
      budget,
      age,
      routinePreference
    }
  };
};

