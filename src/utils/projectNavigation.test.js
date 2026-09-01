import { createProjectLocation, getProjectOrigin } from './projectNavigation';

describe('project navigation', () => {
  test('records the homepage as the project origin', () => {
    const destination = createProjectLocation('/projects/example', {
      pathname: '/',
      search: '',
      hash: '#outputs',
    });

    expect(destination).toEqual({
      pathname: '/projects/example',
      state: {
        projectOrigin: {
          pathname: '/',
          search: '',
          hash: '#outputs',
          label: 'Home',
        },
      },
    });
  });

  test('labels project and experience origins', () => {
    expect(createProjectLocation('/projects/example', { pathname: '/projects' }).state.projectOrigin.label).toBe('Projects');
    expect(createProjectLocation('/projects/example', { pathname: '/experience' }).state.projectOrigin.label).toBe('Experience');
  });

  test('returns null for direct visits without a trusted internal origin', () => {
    expect(getProjectOrigin({ state: undefined })).toBeNull();
    expect(getProjectOrigin({ state: { projectOrigin: { pathname: 'https://example.com' } } })).toBeNull();
  });
});
