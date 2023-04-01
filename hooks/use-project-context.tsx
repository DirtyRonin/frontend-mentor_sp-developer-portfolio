'use client';

import { ProjectContext } from '@/contexts/project-context';
import React from 'react';

export function useProjectContext() {
  const useProjectContext = React.useContext(ProjectContext);

  if (!useProjectContext) {
    throw new Error('useProjectContext has to be used within <ProjectContext.Provider>');
  }

  return useProjectContext;
}
