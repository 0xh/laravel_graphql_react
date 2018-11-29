import Moment from 'react-moment';
import MomentTimezone from 'moment-timezone';
import 'moment-timezone';
export default class LocaleMoment extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let moment;
        let timezone = MomentTimezone.tz.guess();
        let locale = this.props.locale || i18n.language;
        let showSeconds = this.props.showSeconds;
        let addMinutes = this.props.addMinutes;
        let format = 'YYYY['+t('moment::year')+']MM['+t('moment::month')+']DD['+t('moment::day')+'] kk:mm' + (showSeconds? ':ss [' +t('moment::second') + ']':'');
        switch(locale)
        {
            case 'zh-cn':
            case 'zh-tw':
            case 'zh':
                moment = <Moment unix fromNow locale="zh-cn">{this.props.children}</Moment>;
                //moment = <Moment unix add={{ minutes: addMinutes }} tz={timezone} format={format} locale="zh-cn">{this.props.children}</Moment>
                break;
            case 'en':
                moment = <Moment unix fromNow locale="en">{this.props.children}</Moment>;
                //moment = <Moment fromNow><Moment unix add={{ minutes: addMinutes }} tz={timezone} format={'YYYY-MM-DD kk:mm' + (showSeconds? ':ss':'')} locale='en'>{this.props.children}</Moment></Moment>
                break;
            default:
                moment = <Moment unix fromNow locale="en">{this.props.children}</Moment>;
                //moment = <Moment fromNow><Moment unix add={{ minutes: addMinutes }} tz={timezone} format={'YYYY-MM-DD kk:mm' + (showSeconds? ':ss':'')} locale='en'>{this.props.children}</Moment></Moment>
        }

        return (
            moment
        );
    }
}

