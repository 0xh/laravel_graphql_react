import {AppContext} from '../../contexts/home/Context';
import Home from "../../pages/home/Home";
import Autosuggest from 'react-autosuggest';
import {Switch, withRouter} from "react-router-dom";
import Error404 from "./Error404";
import Transition from 'react-transition-group/Transition';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: {

            },
            isNavbarOpen: false,
            homeKey: +new Date(),
        };

    }

    componentDidMount() {
        let react = this;
    }

    closeNavbar() {
        this.setState(update(this.state, {
            isNavbarOpen: {$set: false}
        }));
    }

    render() {
        return (
            <AppContext.Consumer>
                {context => (
                    <React.Fragment>
                        <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">

                            <Link to={'/'} className="navbar-brand"
                                  onClick={async () => {
                                      await this.closeNavbar.bind(this)();
                                      await this.setState(update(this.state, {
                                          homeKey: {$set: +new Date()},
                                      }));
                                  }}>
                                {t('example')}
                            </Link>
                            <NavbarToggler onClick={() => {
                                this.setState(update(this.state, {
                                    isNavbarOpen: {$set: !this.state.isNavbarOpen}
                                }));
                            }} className="navbar-toggler" type="button">
                                <span className="navbar-toggler-icon"/>
                            </NavbarToggler>

                            <Collapse isOpen={this.state.isNavbarOpen} navbar className="bg-white">
                                <Nav navbar className="navbar-nav ml-auto">
                                    <li className={"nav-item " + (location.pathname === '/' ? 'active' : '')}>

                                            <a href="#" className="nav-link" onClick={async () => {
                                                await this.closeNavbar.bind(this)();
                                                await this.setState(update(this.state, {
                                                    homeKey: {$set: +new Date()},
                                                }));
                                                this.props.history.push('/');
                                            }}>
                                                {t('home')}
                                            </a>

                                    </li>
                                    {context.user &&
                                            <li className="nav-item">
                                                <a className="nav-link" href="/logout">{t('logout')}</a>
                                            </li>
                                    }
                                </Nav>
                            </Collapse>
                        </nav>
                        <div className="wrapper">
                            <Switch>
                                <Route exact path="/"
                                           homeKey={this.state.homeKey}
                                           component={Home}
                                           context={context}
                                       />
                                <Route component={Error404}/>
                            </Switch>
                        </div>
                    </React.Fragment>
                )}
            </AppContext.Consumer>
        );
    }
}

export default withRouter(Header);