import YoutubeEmbed from '../component/YoutubeEmbed';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Col, Container, Row } from 'react-bootstrap';

const WEvent = () => {
    return(
        <Container fluid>
            <div className="event">
                <Row className="weddingEvent my-5">
                        <Col lg={true} className="invitation text-center">
                            <p className="lh-sm fs-4 mt-5">By the grace of God, <br/> We cordially invite you to join us in our Holy Matrimony</p>
                            <p className="invitationName my-0 ">Joshua Hendinata</p>
                            <p className="parents lh-sm fs-4">Son of Mr. Hadi Sucianto and Mrs. Erviany</p>
                            <p className="invitationAnd my-0">&</p>
                            <p className="invitationName my-0">Grace Christina</p>
                            <p className="parents lh-sm fs-4">Daughter of Mr. Sutopo Hermanto and Mrs. Minawati Yap</p>
                            <p className="mt-0 fs-3 fw-bold">Saturday, 2 October 2021 <br/>  Holy Matrimony at 10am | Bukit Batok Presbyterian Church </p>
                        </Col>
                        <Col lg={true} className="youtubeVideo my-5">
                            <YoutubeEmbed/>
                            <Button type="primary" icon={<DownloadOutlined />}>
                                Download Booklet
                            </Button>
                            <Button>Add To Calendar</Button>
                        </Col>
                </Row>
            </div>
        </Container>


        
    )
}

export default WEvent;