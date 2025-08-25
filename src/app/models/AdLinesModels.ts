export interface AdLine {
  lineId: string;
  platform: string;
  dailyBudget: string;
  biddingStrategy: string;
  targetKpi: {
    type: string;
    targetValue: string;
  };
  countries: string[];
  ageRange: string;
  placements: string[];
  frequencyCapPerDay: number | null;
  flight: {
    start: string;
    end: string;
  };
  predictedMetrics: string;
  lineType: string;

  headlineStyle?: string;
  descriptionStyle?: string;
  keywords?: {
    term: string;
    match: string;
    intent: string;
  }[];
  videoConcept?: string;
  hook?: string;
  musicMood?: string;
  creativeAngle?: string;
  leadFields?: string[];
  cta?: string;
}
