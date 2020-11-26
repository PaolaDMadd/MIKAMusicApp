import React from 'react';
// withRouter will give access to the props history of the react-router-dom
import { withRouter } from 'react-router-dom';

const BackButton = ({ history }) => <button id="back-button" onClick={history.goBack}>Back</button>

export default withRouter(BackButton)