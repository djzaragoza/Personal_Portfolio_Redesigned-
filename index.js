const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
    console.log('We are live on port 4444');
});

app.get('/', (req, res) => {
    res.send('Welcome to my API');
})

app.post('/api/v1', (req, res) => {
    var data = req.body;

    var smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'USERNAME',
            pass: 'PASSWORD'
        }
    });
};

var mailOptions = {
    from: data.email,
    to: 'Enter_Your_Email',
    subject: 'Enter Your Subject',
    html: `<p>${data.name}</p>
           <p>${data.email}</p>
           <p>${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
    (error, response) => {
        if(error) {
            res.send(error)
        } else {
            res.send('Success')
        }
        smtpTransport.close();
    });

})

app.post('/api/v1', (req, res) => {
    var data = 
})

<form className = 'contact-form'
onSubmit = {
        e => this.formSubmit(e)
    } >
    <
    label class = 'message'
htmlFor = 'message-input' >
    Your Message <
    /label> <
    textarea
onChange = {
    e => this.ListeningStateChangedEvent({
        message: e.target.value
    })
}
name = 'message'
class = 'message-input'
type = 'text'
placeholder = 'Please write your message here'
value = {
    this.state.message
}
required
    /
    >

    <
    label class = 'message-name'
htmlFor = 'message-name' >
    Your Name <
    /label> <
    input
onChange = {
    e => this.setState({
        name: e.target.value
    })
}
name = 'name'
class = 'message-name'
type = 'text'
placeholder = 'Your Name'
value = {
    this.state.name
}
/>

<
label class = 'message-email'
htmlFor = 'message-email' >
    Your Email <
    /label> <
    input
onChange = '{(e) => this.setState({ email: e.target.value})}'
name = 'email'
class = 'message-email'
type = 'email'
placeholder = 'your@email.com'
required
value = {
    this.state.email
}
/>

<
div className = 'button--container' >
    <
    button type = 'submit'
className = 'button button-primary' > {
        this.state.buttonText
    } <
    /button> <
    /div> <
    /form>

formSubmit = (e) => {
    e.preventDefault();

    this.setState({
        buttonText: '...sending'
    })

    let data = {
        name: this.state.name,
        email: this.state.mail,
        message: this.state.message
    }

    axios.post('API_URI', data)
        .then(res => {
            this.setState({
                sent: true
            }, this.resetForm())
        })
        .catch(() => {
            console.log('Message not sent')
        })
}

resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent'
    })
}
