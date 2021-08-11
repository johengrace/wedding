import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {

    return (
        <Row className="footer openSans pt-5 pb-3">
            <hr/>
            <Col lg={5} className="text-start px-5">
                <p><b>Credits</b></p>
                <p>All photo credits goes to Felika Stephanie
                <br/>
                Favicons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></p>
                
                <p><b>For fellow software developers</b>
                <br/>All codes for this website are open <a href="https://github.com/johengrace/wedding/">here</a>
                <br/>
                If you found a bug or issue, feel free to open a Pull Request</p>
            </Col>
            <Col lg={2} className="text-start text-lg-center px-5 pb-3 px-lg-auto">
                {/* <h5><b>02.10.21</b></h5> */}
            </Col>
            <Col lg={5} className="text-start text-lg-end px-5">
                <p><b>Made With Lots of Love by</b></p>
                <h2 className="blueHonest"><b>Joshua & Grace</b></h2>
            </Col>
        </Row>
    )
}

export default Footer;