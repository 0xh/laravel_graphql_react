import Header from '../../components/home/Header';
import Helmet from "../../components/Helmet";
import {AppContext} from '../../contexts/home/Context';
import Masonry from 'react-masonry-component';
import InfiniteScroll from 'react-infinite-scroller';
import {ClipLoader} from 'react-spinners';
import AliceCarousel from 'react-alice-carousel';
import Tloader from 'react-touch-loader';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {
        let react = this;
    }

    render() {
        return (
            <AppContext.Consumer>
                {context => (
                    <React.Fragment>
                        <Helmet
                            title={t('')}
                            description={''}
                            keywords={t('')}
                            ogImage="/images/favicon-228.png"
                        />

                    </React.Fragment>
                )}
            </AppContext.Consumer>
        );
    }
}

