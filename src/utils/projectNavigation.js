export const PROJECT_ORIGIN_STATE_KEY = 'projectOrigin';

const originLabels = {
  '/': 'Home',
  '/projects': 'Projects',
  '/experience': 'Experience',
};

export const createProjectLocation = (pathname, location) => ({
  pathname,
  state: {
    [PROJECT_ORIGIN_STATE_KEY]: {
      pathname: location.pathname,
      search: location.search || '',
      hash: location.hash || '',
      label: originLabels[location.pathname] || 'Previous page',
    },
  },
});

export const getProjectOrigin = (location) => {
  const origin = location.state?.[PROJECT_ORIGIN_STATE_KEY];

  if (!origin || typeof origin.pathname !== 'string' || !origin.pathname.startsWith('/')) {
    return null;
  }

  return origin;
};
