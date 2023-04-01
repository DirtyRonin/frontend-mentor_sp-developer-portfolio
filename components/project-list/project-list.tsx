'use client';

import { Project } from '@/model/project';
import React from 'react';
import { ProjectListItem } from './project-list-item';

export default function ProjectList() {
  const [projects, setProjects] = React.useState<Project[]>([]);

  React.useEffect(() => {
    fetch('/assets/data.json')
      .then((result) => result.json())
      .then((data: Project[]) => setProjects(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-10">
      {projects.map((x, index) => (
        <React.Fragment key={`project-${x.title}-${index}`}>
          <ProjectListItem project={x} />
        </React.Fragment>
      ))}
    </div>
  );
}
