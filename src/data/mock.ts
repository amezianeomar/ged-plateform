export interface VisaMatrix {
    oj_control?: 'VSO' | 'VAO' | 'REF' | 'VPI' | 'PENDING' | 'NC';
    lak?: 'VSO' | 'VAO' | 'REF' | 'VPI' | 'PENDING' | 'NC';
    carbo3s?: 'VSO' | 'VAO' | 'REF' | 'VPI' | 'PENDING' | 'NC';
    joule?: 'VSO' | 'VAO' | 'REF' | 'VPI' | 'PENDING' | 'NC';
}

export interface Document {
    id: string;
    ref: string;
    title: string;
    lot: string;
    indice: string;
    date: string;
    visas: VisaMatrix;
    link: string; // Added for completeness, useful for the 'Name' link
}

export const MOCK_DOCUMENTS: Document[] = [
    {
        id: "1",
        ref: "RSEB-G3C-EXE-MTE",
        title: "Methodologie MDS",
        lot: "Lot 01",
        indice: "C",
        date: "03/10/2024",
        link: "#",
        visas: {
            oj_control: "VAO",
            lak: "PENDING",
            carbo3s: "REF",
            joule: "NC"
        }
    },
    {
        id: "2",
        ref: "RSEB-G3C-SPTS-NDC",
        title: "Note de Calcul Tour",
        lot: "Lot 01",
        indice: "5",
        date: "16/10/2024",
        link: "#",
        visas: {
            oj_control: "VSO",
            lak: "VSO",
            carbo3s: "VSO",
            joule: "VPI"
        }
    },
    {
        id: "3",
        ref: "RSEB-G3C-SPTS-EXE-SONDAGE-S100",
        title: "RAPPORT PHOTOGRAPHIQUE DES SONDAGES",
        lot: "Lot 01",
        indice: "0",
        date: "03/10/2024",
        link: "#",
        visas: {
            oj_control: "VPI",
            carbo3s: "VPI"
        }
    },
    {
        id: "4",
        ref: "RSEB-G3C-EXE-STR-PLN-MDS-D-1000",
        title: "PLAN EXE MDS",
        lot: "Lot 01",
        indice: "D",
        date: "10/10/2024",
        link: "#",
        visas: {
            oj_control: "VAO",
            carbo3s: "REF"
        }
    },
    {
        id: "5",
        ref: "RSEB-G3C-SPTS-NDC-MDS-01",
        title: "NDC MDS",
        lot: "Lot 01",
        indice: "4",
        date: "10/10/2024",
        link: "#",
        visas: {
            oj_control: "VAO"
        }
    },
    {
        id: "6",
        ref: "RSEB-G3C-SPTS-EXE-STR-PLN-BATIMENT",
        title: "PLAN EXE NOUVEAU BATIMENT RDC",
        lot: "Lot 01",
        indice: "A",
        date: "10/10/2024",
        link: "#",
        visas: {
            oj_control: "VSO",
            carbo3s: "VAO"
        }
    },
    {
        id: "7",
        ref: "RSEB-G3C-SPTS-EXE-STR-PLN-POUTRE",
        title: "DETAIL POUTRE NOUVEAU BATIMENT",
        lot: "Lot 01",
        indice: "0",
        date: "10/10/2024",
        link: "#",
        visas: {
            oj_control: "VSO",
            carbo3s: "VAO"
        }
    },
    {
        id: "8",
        ref: "Dossier technique d’étancheité BERCHET",
        title: "CAHIER DE CHARGE ETANCHEITE",
        lot: "Lot 01",
        indice: "1",
        date: "18/10/2024",
        link: "#",
        visas: {
            oj_control: "REF",
            carbo3s: "VAO"
        }
    },
];

export const MOCK_USER = {
    name: 'Khawla Lafrid',
    role: 'Project Manager',
    avatar: 'https://i.pravatar.cc/150?u=khawla',
};

export const STATS = [
    { label: 'Documents Soumis', value: '124', trend: 'neutral' },
    { label: 'En Attente de Visa', value: '12', trend: 'warning' },
    { label: 'Approuvé (VSO)', value: '85', trend: 'up' },
    { label: 'Refusé (REF)', value: '5', trend: 'down' },
];