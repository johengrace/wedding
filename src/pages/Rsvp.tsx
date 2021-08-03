import { Col, Container, Row, Form } from 'react-bootstrap';
import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';
import CrossFadeImage from '../component/CrossFadeImage';
import useInterval from "../component/useInterval";
import rsvpPhoto1 from "../assets/DSC01574_compressed.jpg"
import rsvpPhoto2 from "../assets/DSC01317_compressed.jpg"
import { shuffle, keys } from 'lodash';

let images: string[] = [rsvpPhoto1, rsvpPhoto2]

const TextFieldRsvp = withStyles({
  root: {
    width: '100%',
    '& label.Mui-focused': {
      color: '#7b7571',
    },
    '& label.MuiInputLabel-root': {
      fontFamily: '"Open Sans", sans-serif !important',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#7b7571',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#7b7571',
      },
      '&:hover fieldset': {
        borderColor: '#7b7571',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#7b7571',
      },
    },
  },
})(TextField);

const RadioTextRsvp = withStyles({
  label: {
      fontFamily: '"Open Sans", sans-serif !important',
      color: 'rgb(93, 88, 84)'
  },
})(FormControlLabel);

const ButtonRsvp = withStyles({
  root: {
    fontFamily: '"Open Sans", sans-serif',
    color: "white",
    backgroundColor: 'rgb(123, 117, 112);',
    '&:hover': {
      backgroundColor: 'rgb(93, 88, 84)',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'rgb(93, 88, 84)',
    },
  },
})(Button);

const CircularProgressRsvp = withStyles({
  root: {
    color: "rgb(123, 117, 112)",
  },
})(CircularProgress);

interface FormValue {
    name?: string,
    email?: string,
    phone?: string,
    attendance?: string,
    messageForCouple?: string
}

const Rsvp = () => {
    const [image, setImage] = React.useState(images[0]);
    const [formValue, setFormValue] = React.useState<FormValue>({});
    const [formLoading, setFormLoading] = React.useState(false);
    const [formSubmitted, setFormSubmitted] = React.useState(false);

    const handleChange = (event: any) => {
        setFormValue(formValue => ({...formValue, [event.target.name]: event.target.value}))
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        setFormLoading(true)
        setTimeout(() => {setFormSubmitted(true);}, 3000)
        
        event.preventDefault();
        event.stopPropagation();
    };

    const submitAnotherRsvp = () => {
        setFormValue({name: "", email: "", phone: "", attendance: "", messageForCouple: ""})
        setFormSubmitted(false)
        setFormLoading(false)
    }

    const getRandomImage = () => {
        const displayedImg = images.shift()!;
        images = shuffle(images).concat([displayedImg]);
        return images[0];
    };
    
    useInterval(() => {
        if (true) {
          setImage(getRandomImage());
        }
    }, 8000);

    return(
        <Row className="rsvp">
            <Col lg={6} className="d-none d-lg-block">
                <CrossFadeImage
                    src={image}
                    alt="desktop"
                    transitionDuration={0.8}
                    curve="ease-in-out"
                    className="rsvpPhoto"
                /> 
            </Col>
            
            <Col lg={6} xs={12} className="rsvpForm">
                <Row>
                    <p className="invitation">We truly hope you can join us!</p>
                </Row>
                <div className={formSubmitted ? "" : "d-none"}>
                    <Row>
                        <FormLabel className="openSans mt-3 lh-lg">
                            Thank you for your RSVP! Your response has been recorded.
                        </FormLabel>
                    </Row>
                    <Row>
                        <ButtonRsvp variant="contained" onClick={submitAnotherRsvp} disableElevation>
                            Submit Another RSVP
                        </ButtonRsvp>
                    </Row>
                </div>
                <Form onSubmit={handleSubmit} className={formSubmitted ? "d-none" : ""}>
                    <Row>
                        <Form.Group as={Col} xs={12} >
                            <TextFieldRsvp 
                                required 
                                type="text" 
                                label="Full Name" 
                                name="name"
                                value={formValue.name} 
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} >
                            <TextFieldRsvp 
                                required 
                                type="email" 
                                label="Email Address" 
                                name="email"
                                value={formValue.email} 
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} >
                            <TextFieldRsvp 
                                required 
                                type="tel" 
                                label="Phone Number" 
                                name="phone"
                                value={formValue.phone} 
                                onChange={handleChange} />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} >
                            <FormLabel component="legend" className="openSans lh-lg">Will you attend our wedding onsite? <b>Kindly RSVP by 5 Sep 2021</b></FormLabel>
                            <RadioGroup aria-label="attendance" name="attendance" >
                                <RadioTextRsvp 
                                    value="Attending" 
                                    name="attendance"
                                    onChange={handleChange}
                                    control={<Radio color="default" required/>} 
                                    label="Attending" />
                                <RadioTextRsvp 
                                    value="Not Attending" 
                                    name="attendance"
                                    onChange={handleChange}
                                    control={<Radio color="default" />} 
                                    label="Not Attending" />
                            </RadioGroup>
                            <FormLabel className="openSans mt-3 lh-lg">
                                Due to the limited guests regulation from Singapore Government, 
                                please RSVP only for yourself. 
                                <br/>All +1s will be invited separately. 
                                Thank you and we appreciate your understanding.
                            </FormLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} >
                            <TextFieldRsvp 
                                multiline 
                                type="text" 
                                name="messageForCouple"
                                value={formValue.messageForCouple}
                                onChange={handleChange}
                                minRows={1} 
                                maxRows={5} 
                                label="Message for the couple (Optional)" />
                        </Form.Group>
                    </Row>
                    <Row>
                        <ButtonRsvp
                            type="submit" 
                            variant="contained" 
                            disabled={formLoading}
                            disableElevation>
                            Submit RSVP {formLoading && <div className="mx-2"><CircularProgressRsvp size={24}/></div>}
                        </ButtonRsvp>
                    </Row>
                </Form>  
                {/* /* render default no rsvp content 
                <Row>
                    <p className="openSans mt-3 lh-lg">
                        Dear guests - Due to the COVID-19 situation, only limited guest can attend the onsite wedding, 
                        hence we will be tying the knot live from Youtube for some of our family 
                        and friends who we wish to be there. We really appreciate your understanding.
                        <br/>
                        <br/>
                        The youtube link will be available on this website on our wedding day, 2 October 2021
                        <br/>
                        <br/>
                        Stay tune and hope to celebrate with you soon!
                        <br/>
                        <br/>
                        <hr/>
                        Kepada semua undangan yang terhormat. Karena kondisi pandemi COVID-19, pernikahan kami 
                        hanya dapat dihadiri dengan jumlah undangan onsite yang terbatas. Kami berharap anda 
                        dapat mengambil bagian dalam hari spesial kami melalui Youtube Live 
                        (link akan tersedia di website ini pada hari H, 2 Oktober 2021)
                        <br/>
                        <br/>
                        Terima kasih untuk dukungan dan doa anda.
                    </p>
                </Row> */}
            </Col>
        </Row>
    )
}

export default Rsvp;