import Header from '../../components/home/Header';
import {BrowserRouter} from 'react-router-dom';
import {AppContext} from '../../contexts/home/Context';
//import { withT } from 'react-i18next/hooks';
import {withNamespaces} from 'react-i18next';
import i18n from "./i18n"; //must import i18n
import {ApolloProvider} from "react-apollo";
import {ToastContainer} from 'react-toastify';
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: {

            },
            context: {
                getContext: this.getContext.bind(this),
            },
            contextLoading: true
        }

    }

    componentDidMount() {
        let react = this;
        this.getContext();
    }

    getContext() {
        let react = this;

        return apolloClient.query({
            query: gql`
                query User {
                    user{
                        items {
                            id
                            name
                            is_register_user
                            account
                        }
                    }
                }
            `,
            fetchPolicy: 'network-only'
        }).then(({data}) => {
            react.setState(update(this.state, {
                context: {
                    user: {$set: data.user.items[0]},
                },
                contextLoading: {$set: false},
            }));
        });
    }

    render() {
        if (this.state.contextLoading) return null;
        const supportsHistory = 'pushState' in window.history;
        return (
            <BrowserRouter forceRefresh={!supportsHistory}>
                <ApolloProvider client={apolloClient}>
                    <AppContext.Provider value={this.state.context}>
                        <Header context={this.state.context}/>
                        <ToastContainer/>
                    </AppContext.Provider>
                </ApolloProvider>
            </BrowserRouter>
        );
    }
}

const IndexHOC = withNamespaces()(Index); //withT()(Index);

ReactDOM.render(
    <IndexHOC/>,
    document.getElementById('react-index')
);