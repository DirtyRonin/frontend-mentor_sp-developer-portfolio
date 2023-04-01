'use client';

import { Project } from '@/model/project';
import React from 'react';

interface ProjectContextType {
  projects: Project[];
}

export const ProjectContext = React.createContext<ProjectContextType | null>(null);
