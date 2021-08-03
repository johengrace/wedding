import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import React from "react";
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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

const Rsvp = () => {
    const [image, setImage] = React.useState(images[0]);
    const [validated, setValidated] = React.useState(false);

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

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
                    <p className="invitation">We Truly Hope You Can Join Us!</p>
                </Row>
                <Form validated={validated} onSubmit={handleSubmit}>
                    <Row>
                        <Form.Group as={Col} xs={12} >
                            <TextFieldRsvp required type="text" label="Full Name"/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} >
                            <TextFieldRsvp required type="email" label="Email Address"/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} >
                            <TextFieldRsvp required type="tel" label="Phone Number"/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} >
                            <FormLabel component="legend" className="openSans">Will you attend our wedding onsite?</FormLabel>
                            <RadioGroup aria-label="attendance" name="attendance" >
                                <RadioTextRsvp value="Attending" control={<Radio color="default" />} label="Attending" />
                                <RadioTextRsvp value="Not Attending" control={<Radio color="default"  />} label="Not Attending" />
                            </RadioGroup>
                            <FormLabel className="openSans my-3 lh-lg">
                                Due to the limited guests regulation from Singapore Government, 
                                please RSVP only for yourself. 
                                <br/>All +1s will be invited separately. 
                                Thank you and we appreciate your understanding
                            </FormLabel>
                            <FormLabel component="label" className="openSans my-3"><b>Kindly RSVP by 5 Sep 2021</b></FormLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={12} >
                            <TextFieldRsvp multiline type="text" rows={5} label="Message for the couple (Optional)"/>
                        </Form.Group>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}

export default Rsvp;