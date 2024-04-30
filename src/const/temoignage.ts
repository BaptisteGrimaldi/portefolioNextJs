import Temoignage from '@/components/presentation/Temoignage';
import { calculateAge } from '@/utils/calculateAge';

const age = calculateAge(new Date(2001, 11, 11));

const temoignages = [
    Temoignage({
        citation: `'Désolé, en tant que développeur freelance junior, il m'est compliqué d'inventer 10 expériences quand on a que ${age} ans. Il faut bien commencer quelque part !'`,
        image: '/assetPresentation/moiMidJourney.png',
        nom: 'Votre serviteur',
        poste: 'Developpeur Web',
        entreprise: 'Freelance',
    }),
];

export default temoignages;
