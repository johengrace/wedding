import YoutubeEmbed from '../component/YoutubeEmbed';
import { Button, Col, Row } from 'react-bootstrap';
import React from 'react';
import { InferProps } from "prop-types";
import { FiGift, FiMapPin, FiCalendar } from "react-icons/fi";
import Modal from 'react-bootstrap/Modal';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import qrcode from '../assets/qrcode.jpg';

interface propTypes {
    rsvpFlag: boolean;
}

type Props = InferProps<propTypes>;

const WEvent = ({ rsvpFlag } : Props) => {
    const mapLink = "https://goo.gl/maps/6ZaL3fuevYXizWiH7";
    const calendarLink = "https://drive.google.com/uc?export=download&id=1tyBskip6VKlnUFbUTVAECW-Yv_c9LwY5";
    const [timerDays, setTimerDays] = React.useState(0);
    const [timerHours, setTimerHours] = React.useState(0);
    const [timerMinutes, setTimerMinutes] = React.useState(0);
    const [timerSeconds, setTimerSeconds] = React.useState(0);
    const countdownDate = new Date('2021-10-02 10:30:00+08:00').getTime();

    const [showModal, setShowModal] = React.useState(false);
    const handleClose = () => setShowModal(false);

    var sgBankNumber = "120-390450-0";
    var idBankNumber = "0561346240";

    React.useEffect(() => {
        let interval = setInterval (() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0) {
                clearInterval(interval);
              } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
              }
        }, 1000)
        return () => {
            clearInterval(interval);
        }
    });

    return(
        <>
        <Row className="weddingEvent">
            <div className="weddingEventBackground">
            </div>
                <Col lg={true} className="invitation mt-5 mt-lg-0 px-4 px-lg-0 eventContent">
                    <div>
                        <p className="lh-sm fs-5">By the grace of God, <br/> We cordially invite you to join us in our Holy Matrimony</p>
                        <p className="invitationName my-0 ">Joshua Hendinata</p>
                        <p className="lh-sm fs-5">
                            Son of Mr. Josephus Hadi Sucianto&nbsp;
                            <div className="parents d-block d-sm-block d-md-block d-lg-none d-xl-none"></div> 
                            and Mrs. Erviany</p>
                        <p className="my-0">&</p>
                        <p className="invitationName my-0">Grace Christina</p>
                        <p className="lh-sm fs-5">
                            Daughter of Mr. Sutopo Hermanto&nbsp;
                            <div className="parents d-block d-sm-block d-md-block d-lg-none d-xl-none"></div> 
                            and Mrs. Minawati Yap
                        </p>
                        <p className="mt-0 fs-5 fw-bold">Saturday, 2 October 2021 
                        <br/>  Holy Matrimony at 10:30 SGT | 09:30 WIB 
                        <br/> Bukit Batok Presbyterian Church, Singapore</p>
                    </div>
                </Col>
                <Col lg={true} className="mt-5 mt-lg-0 justify-content-md-center eventContent">
                    <div className="mx-1">
                        <div className="countdown-container">
                            <section>
                                <p>{timerDays}</p>
                                <p><small>Days</small></p> 
                            </section>
                            <span>:</span>
                            <section>
                                <p>{timerHours}</p>
                                <p><small>Hours</small></p> 
                            </section>
                            <span>:</span>
                            <section>
                                <p>{timerMinutes}</p>
                                <p><small>Minutes</small></p> 
                            </section>
                            <span>:</span>
                            <section>
                                <p>{timerSeconds}</p>
                                <p><small>Seconds</small></p> 
                            </section>
                        </div>
                    </div>
                    
                    <div className="youtubeVideo mb-5 mb-lg-0 px-2 px-lg-0">
                        <Row>
                            <YoutubeEmbed/>
                        </Row>

                        {rsvpFlag ? 
                        <Row>
                            <Col lg={4} className="mb-1 text-lg-end">
                                <Button 
                                target="_blank" 
                                variant="primary" 
                                className="eventButton mt-2"
                                onClick={() => setShowModal(true)}>
                                    <FiGift className="mb-1"/>&nbsp;E-Gift
                                </Button>
                            </Col>
                            <Col lg={4} className="mb-1 text-lg-center">
                                <Button href={mapLink} target="_blank" variant="primary" className="eventButton mt-2">
                                    <FiMapPin className="mb-1"/>&nbsp;How To Get There
                                </Button>
                            </Col>
                            <Col lg={4} className="text-lg-start">
                                <Button href={calendarLink} target="_blank" variant="primary" className="eventButton mt-2">
                                    <FiCalendar className="mb-1"/>&nbsp;Add To Calendar
                                </Button>
                            </Col>
                        </Row>
                        :
                        <Row>
                            <Col lg={6} className="mb-1 text-lg-end">
                                <Button 
                                target="_blank" 
                                variant="primary" 
                                className="eventButton mt-2"
                                onClick={() => setShowModal(true)}
                                >
                                    <FiGift className="mb-1"/>&nbsp;E-Gift
                                </Button>
                            </Col>
                            <Col lg={6} className="text-lg-start">
                                <Button href={calendarLink} target="_blank" variant="primary" className="eventButton mx-lg-2 mt-2">
                                    <FiCalendar className="mb-1"/>&nbsp;Add To Calendar
                                </Button>
                            </Col>
                        </Row>}
                    </div>
                </Col>
        </Row>

        <Modal show={showModal}>
        <Modal.Body>
            <Tabs defaultActiveKey="english" className="mb-3">
                <Tab eventKey="english" title="Singapore">
                    <div className="text-center">
                        <p className="openSans mt-3 lh-lg">For Singapore Bank Account:
                        To bless the couple with e-gift, please scan the QR Code or transfer via bank account number below.
                        Thank you for your generosity.</p>
                        <img src={qrcode} className= "qrCode img-fluid"></img>
                        <p className="openSans">Joshua Hendinata 
                            <br/> DBS {sgBankNumber}
                            <br/><br/> <i>Kindly input your name into the reference/description</i>
                        </p>
                        <Button 
                            target="_blank" 
                            variant="primary"
                            className="eventButton mx-auto"
                            onClick={() => {navigator.clipboard.writeText(sgBankNumber.replace(/-/g, ""))}}
                        >
                            Copy Bank Account Number
                        </Button>
                    </div>
                   
                </Tab>
                <Tab eventKey="indonesia" title="Indonesia">
                    <div className="text-center">
                    <p className="openSans mt-3 lh-lg">
                        Untuk memberkati mempelai, 
                        e-gift bisa ditransfer ke: 
                        <br/>
                        <br/>

                        <h4>
                            {idBankNumber}
                            <br/>
                            BCA a/n Grace Christina
                        </h4>
                        <br/>
                        Terima kasih untuk dukungan dan doa anda.
                    </p>
                    <Button 
                        target="_blank" 
                        variant="primary"
                        className="eventButton mx-auto"
                        onClick={() => {navigator.clipboard.writeText(idBankNumber.replace(/-/g, ""))}}
                    >
                        Copy Nomer Rekening
                    </Button>       
                    </div>
                </Tab>
            </Tabs>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" className="eventButton" onClick={handleClose}>
                Close
            </Button>
        </Modal.Footer>
        </Modal>
        </>
    )
}

export default WEvent;