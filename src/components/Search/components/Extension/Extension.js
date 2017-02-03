import React from 'react';
import { Link } from 'react-router';

const Extension = () =>
  <div className="info">
    <p>This is the advanced filter</p>
    <button><Link to="/search">Back to Search</Link></button>
    <p>Written by <a href="https://twitter.com/jmarcosuarez">@jmarcosuarez</a></p>
    <p>Code in <a href="https://github.com/jmarcosuarez/agenda">Contacts</a></p>
  </div>;

export default Extension;
