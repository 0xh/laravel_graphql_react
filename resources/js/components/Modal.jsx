import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Modal innerRef={this.props.setModalRef} backdrop={this.props.backdrop ? this.props.backdrop : true} modalClassName={this.props.modalClassName} size={this.props.size} isOpen={this.props.isOpen} toggle={this.props.toggle}>
                    {!this.props.hideHeader &&
                    <ModalHeader toggle={this.toggle}>
                        { this.props.title }
                        <button onClick={this.props.toggle} type="button" className="close pull-right" toggle={this.toggle}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </ModalHeader>
                    }
                    <ModalBody>
                        {this.props.body}
                    </ModalBody>
                    {!this.props.hideFooter &&
                    <ModalFooter>
                        {this.props.footer}
                    </ModalFooter>
                    }
                </Modal>
            </React.Fragment>
        );
    }
}

