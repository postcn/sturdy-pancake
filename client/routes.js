import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import SkillsList from './components/SkillsList';
import CthulhuHome from './components/CthulhuHome';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={CthulhuHome} />
        <Route path="/skills" component={SkillsList} />
    </Route>
)