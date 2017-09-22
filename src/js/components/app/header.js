import {NavLink} from 'react-router-dom';
import box from 'images/box.svg';
// import {observer} from 'mobx-react';

// @observer(['counter'])
export default class Header extends React.Component {
  componentWillMount() {
    // this.contractAdded = this.props.counter.onContractAdded();
  }
  componentWillUnmount() {
    // this.contractAdded.removeAllListeners();
  }
  render() {
    return <nav className="nav">
      <div className="container">
        <div className="nav-left">
          <NavItem to="/">
            <img src={box} className="image is-32x32"/>
            &nbsp;
            <strong className="logo">Ethcrow</strong>
          </NavItem>
        </div>
        <span className="nav-toggle">
          <span/>
          <span/>
          <span/>
        </span>
        <div className="nav-right nav-menu">
          <NavItem to="/demo">
            Demo
          </NavItem>
          <NavItem to="/about">
            About
          </NavItem>
          <NavItem to="/contracts">
            App<Counter counter={0}/>
          </NavItem>
          <NavItem to="/keys">
            Keys
          </NavItem>
        </div>
      </div>
    </nav>;
  }
}

function Counter({counter}) {
  if (counter == 0) {
    return null;
  } else {
    return <span>
      &nbsp;<span className="tag is-info">{counter}</span>
    </span>;
  }
}

function NavItem({to, children, ...props}) {
  return <NavLink {...props}
    to={to}
    className="nav-item"
    activeClassName="is-active">
    {children}
  </NavLink>;
}
