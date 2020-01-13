import React, {Fragment} from 'react';
import Toolbar from "../Navigation/Toolbar/Toolbar";

import './Layout.css';

const Layout = props => (
  <Fragment>
    <Toolbar/>
    <main className="Layout-Content">
      {props.children}
    </main>
  </Fragment>
);

export default Layout;