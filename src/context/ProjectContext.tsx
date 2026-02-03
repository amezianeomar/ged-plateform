import React, { createContext, useContext, useState, useEffect } from 'react';

// Mock Data for Projects
const MOCK_PROJECTS = [
    { id: '1', name: 'Résidence Les Oliviers (Bloc A)', code: 'RES-OLV-A', status: 'active' },
    { id: '2', name: 'Résidence Les Oliviers (Bloc B)', code: 'RES-OLV-B', status: 'active' },
    { id: '3', name: 'Clinique Al Azhar - Extension', code: 'CLIN-AZH', status: 'pending' },
];

interface Project {
    id: string;
    name: string;
    code: string;
    status: string;
}

interface ProjectContextType {
    currentProject: Project | null;
    projects: Project[];
    setCurrentProject: (project: Project) => void;
    isLoading: boolean;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export function ProjectProvider({ children }: { children: React.ReactNode }) {
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [projects, setProjects] = useState<Project[]>([]); // Initialize empty then load mock
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate API fetch
        setTimeout(() => {
            setProjects(MOCK_PROJECTS);
            // Default to first project
            setCurrentProject(MOCK_PROJECTS[0]);
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <ProjectContext.Provider value={{ currentProject, projects, setCurrentProject, isLoading }}>
            {children}
        </ProjectContext.Provider>
    );
}

export function useProject() {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error('useProject must be used within a ProjectProvider');
    }
    return context;
}
