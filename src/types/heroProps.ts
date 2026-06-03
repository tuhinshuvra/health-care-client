export interface HeroSectionProps {
    onGetMatched?: () => void;
    onHowItWorks?: () => void;
    onFindDoctor?: (data: {
        symptoms: string;
        specialty: string;
        preferredTime: string;
    }) => void;
}

export const SPECIALTIES = [
    'Any (AI decides)',
    'General Practice',
    'Dermatology',
    'Mental Health',
    'Pediatrics',
];

export const TIME_SLOTS = ['Today', 'Tomorrow', 'This Week', 'Anytime'];