export type TProjet = {
    nomProjet: string;
    description: string;
    enLigne: string;
    lienRepo: string;
    tagsTechnologie: string[];
    videoPresentation: string;
    date: string;
};

export type Props = {
    visible: boolean;
    switchNavBar: () => void;
};
