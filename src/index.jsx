import React from 'react';
import ReactDOM from 'react-dom';
import SkillsList from './app/components/SkillsList.jsx';
import style from './css/main.scss';

class App extends React.Component {
  render () {
    return (
      <div>
        <SkillsList />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
