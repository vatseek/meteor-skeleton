import { combineReducers } from 'redux';

import general from './reducer';

const ProjectsApp = combineReducers({
  general
});

export default ProjectsApp;