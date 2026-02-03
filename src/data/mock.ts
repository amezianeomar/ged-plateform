import { FileText, Clock, CheckCircle, XCircle } from 'lucide-react';

export interface Document {
    id: string;
    ref: string;
    title: string;
    lot: string;
    indice: string;
    date: string;
    status: 'VSO' | 'VAO' | 'REF' | 'PENDING';
}

export const MOCK_DOCUMENTS: Document[] = [
    { id: '1', ref: 'GC-PL-001', title: 'Plan Coffrage RDC - Bloc A', lot: 'Gros Œuvre', indice: 'A', date: '2023-10-24', status: 'VSO' },
    { id: '2', ref: 'GC-PL-002', title: 'Plan Ferraillage Poteaux', lot: 'Gros Œuvre', indice: 'B', date: '2023-10-25', status: 'VAO' },
    { id: '3', ref: 'ARCH-EL-005', title: 'Élévation Façade Nord', lot: 'Architecture', indice: '0', date: '2023-10-26', status: 'PENDING' },
    { id: '4', ref: 'CVC-PL-102', title: 'Réseau Ventilation R+1', lot: 'CVC', indice: 'A', date: '2023-10-27', status: 'REF' },
    { id: '5', ref: 'ELEC-SH-011', title: 'Schéma Unifilaire TGBT', lot: 'Électricité', indice: 'C', date: '2023-10-28', status: 'VSO' },
    { id: '6', ref: 'GC-PL-003', title: 'Plan Coffrage R+1 - Bloc A', lot: 'Gros Œuvre', indice: 'A', date: '2023-10-29', status: 'PENDING' },
    { id: '7', ref: 'PLMB-RES-004', title: 'Réseau Evacuation EU/EV', lot: 'Plomberie', indice: 'B', date: '2023-10-30', status: 'VSO' },
    { id: '8', ref: 'VRD-VOI-001', title: 'Plan Voirie et Réseaux', lot: 'VRD', indice: '0', date: '2023-10-31', status: 'VAO' },
    { id: '9', ref: 'MEN-DET-009', title: 'Détails Menuiserie Ext', lot: 'Menuiserie', indice: 'A', date: '2023-11-01', status: 'PENDING' },
    { id: '10', ref: 'GC-DET-022', title: 'Coupe sur Voile V2', lot: 'Gros Œuvre', indice: 'B', date: '2023-11-02', status: 'VSO' },
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
