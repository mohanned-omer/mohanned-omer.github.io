import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createProjectLocation } from '../../utils/projectNavigation';

const ProjectLink = ({ to, ...props }) => {
  const location = useLocation();

  return <Link to={createProjectLocation(to, location)} {...props} />;
};

export default ProjectLink;
