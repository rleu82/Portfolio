import React from 'react';

function SingleProject({ project }) {
  return (
    <div>
      <p>{project.name}</p>
    </div>
  );
}

export default function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div>
      {projects.map((project) => (
        <SingleProject key={project.id} project={project} />
      ))}
    </div>
  );
}
