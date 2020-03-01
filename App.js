import React, {
    Component
} from 'react';
import axios from 'axios';

class Contact extends Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    render() {
        return (
            //Our form goes here
        );
    }
}

export default Contact;