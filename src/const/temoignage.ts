import Temoignage from "@/components/presentation/Temoignage";

const  temoignages = [
    Temoignage({
        citation: "'Je suis content du travail qu'a réalisé Baptiste sur le développement de notre SaaS Express'",
        image: '/assetPresentation/thomasMillet.webp',
        nom: 'Thomas Millet',
        poste: 'Product Owner',
        entreprise: 'MyConnectedCompany',
    }),
    Temoignage({
        citation: "'Désolé, en tant que développeur freelance junior, il m'est compliqué d'inventer 10 expériences quand on a que 22 ans. À un moment donné, il faut bien commencer quelque part !'",
        image: '/assetPresentation/moiMidJourney.webp',
        nom: 'Votre serviteur',
        poste: 'Developpeur Web',
        entreprise: 'Freelance',
    }),
];

export default temoignages;