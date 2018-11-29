export default class SocialButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a href={"/login/" + this.props.social} className={"btn btn-block btn-social btn-" + this.props.social}>
                <i className={"fa fa-" + this.props.social} aria-hidden="true" /> {t("sign in with " + this.props.social)}
            </a>
        );
    }
}

