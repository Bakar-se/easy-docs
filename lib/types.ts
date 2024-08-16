interface FeaturesPropTypes {
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string
  }

  export interface PricingPropTypes {
    title: string;
    price: string;
    features: Feature[];
    benefits: Benefit[];
    cta: string;
  }

  interface Feature {
    description: string;
  }

  interface Benefit {
    description: string;
    icon: React.ReactNode;
  }