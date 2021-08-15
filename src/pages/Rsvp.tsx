import { Col, Container, Row, Form } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import axios from 'axios';
import React from "react";
import { MdHelp } from 'react-icons/md';
import { ImSmile } from 'react-icons/im';
import { scroller } from "react-scroll";
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
import { shuffle } from 'lodash';

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
    vaccinated?:string,
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
        
        const targetForm = "https://docs.google.com/forms/u/0/d/e/1FAIpQLScypildVC9SU0EFyIBwckPWRc6Q9Hk8RJbssO0hhyKJmltXLQ/formResponse";
        setFormLoading(true);

        axios.post(
            targetForm, null, 
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                params: {
                    "entry.1509748593": formValue.name,
                    "entry.476281907": formValue.email,
                    "entry.2136064807": formValue.phone,
                    "entry.842295271": formValue.attendance,
                    "entry.1278028715": formValue.vaccinated,
                    "entry.1528621649": formValue.messageForCouple
                }
            }
        )
        .then(response => {
            setFormSubmitted(true);
            setFormLoading(false);
            scrollToRsvp();
        })
        .catch(error => {
            // CORS wont allow JS to inspect the headers. So just assume it succeed
            setFormSubmitted(true);
            setFormLoading(false);
            scrollToRsvp();
        });
        
        event.preventDefault();
        event.stopPropagation();
    };

    const submitAnotherRsvp = () => {
        setFormValue({name: "", email: "", phone: "", attendance: "", vaccinated: "", messageForCouple: ""})
        setFormSubmitted(false)
        setFormLoading(false)
        scrollToRsvp();
    }

    const scrollToRsvp = () => {
        scroller.scrollTo('rsvp', {
            offset: -30,
            duration: 200,
        });
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
                        <FormLabel className="openSans mt-3 lh-lg text-center">
                            Thank you for your RSVP! Your response has been recorded.<br/>
                            Please check your email for confirmation from us <ImSmile/>
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
                                type="tel" 
                                label="Phone Number (Optional)" 
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
                                    control={<Radio color="default" required checked={formValue.attendance === "Attending"}/>} 
                                    label="Attending" />
                                <RadioTextRsvp 
                                    value="Not Attending" 
                                    name="attendance"
                                    onChange={handleChange}
                                    control={<Radio color="default" checked={formValue.attendance === "Not Attending"}/>} 
                                    label="Not Attending" />
                            </RadioGroup>
                            <FormLabel className="openSans mt-3 lh-lg">
                                <i>Please RSVP only for yourself. All +1s will be invited separately.</i>
                            </FormLabel>
                        </Form.Group>
                    </Row>
                    {formValue.attendance === "Attending" ? <><Row>
                        <Form.Group as={Col} xs={12} >
                            <FormLabel component="legend" className="openSans lh-lg">
                                Will you receive COVID-19 full vaccination by our wedding date? &nbsp;
                                <OverlayTrigger
                                    placement="auto"
                                    overlay={
                                        <Tooltip id="vaccinated-definition">
                                            <b>Full vaccination</b> includes <b>2 weeks</b> after receiving the final dose(s) of COVID-19 vaccine
                                        </Tooltip>
                                    }>
                                    <MdHelp fontSize="small" className="mb-1"/>
                                </OverlayTrigger>
                            </FormLabel>
                            <RadioGroup aria-label="vaccinated" name="vaccinated" >
                                <RadioTextRsvp 
                                    value="Yes" 
                                    name="vaccinated"
                                    onChange={handleChange}
                                    control={
                                        <Radio 
                                            color="default"
                                            required={formValue.attendance === "Attending"}
                                            checked={formValue.vaccinated === "Yes"}/>
                                    } 
                                    label="Yes" />
                                <RadioTextRsvp 
                                    value="No" 
                                    name="vaccinated"
                                    onChange={handleChange}
                                    control={<Radio color="default" checked={formValue.vaccinated === "No"}/>} 
                                    label="No" />
                            </RadioGroup>
                            <FormLabel className="openSans mt-3 lh-lg">
                                <i>This will determine the number of guests allowed onsite</i>
                            </FormLabel>
                        </Form.Group>
                    </Row></> : <></>}
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
            </Col>
        </Row>
    )
}

export default Rsvp;