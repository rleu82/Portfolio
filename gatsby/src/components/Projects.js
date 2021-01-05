import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectList from './ProjectList';

export default function Projects() {
  // query the projects
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      projects: allSanityProjects {
        nodes {
          name
          githubLink
          tech {
            name
          }
        }
      }
    }
  `);
  const projects = data.projects.nodes;
  return (
    <>
      <ProjectList projects={projects} />
    </>
  );
}
