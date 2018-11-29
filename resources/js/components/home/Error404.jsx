import {AppContext} from '../../contexts/home/Context';


export default class Error404 extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        let react = this;
    }

    render() {
        return (
            <AppContext.Consumer>
                {context => (
                    <React.Fragment>
                        <div className="container d-flex justify-content-center align-items-center vh-60">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{t('page not found')}</h5>
                                    <p className="card-text">{t('we can\'t find the page you\'re looking for.')}</p>
                                    <Link to={'/'}
                                          className="btn btn-primary">
                                        {t('back to home')}
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </React.Fragment>
                )}
            </AppContext.Consumer>
        );
    }
}

