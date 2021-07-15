import { Row, Col } from 'antd';
import YoutubeEmbed from '../component/YoutubeEmbed';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const WEvent = () => {
    return(
        <div className="event">
           <Row className="weddingEvent">
                <Col xs={24} xl={12} className="invitation">
                    <div className="invitationContent">
                        <h4 className="invitationText">By the grace of God, <br/> We cordially invite you to join us in our Holy Matrimony</h4>
                        <h1 className="invitationName">Joshua Hendinata</h1>
                        <h4>Son of Mr. Hadi Sucianto and Mrs. Erviany Ie Lie Tshiu</h4>
                        <h1 style={{margin:"-5px"}}>&</h1>
                        <h1 className="invitationName">Grace Christina</h1>
                        <h4>Daughter of Mr. Sutopo Hermanto and Mrs. Minawati Yap</h4>
                        <h3 className="invitationText">Saturday, 2 October 2021 <br/>  Holy Matrimony at 10am | Bukit Batok Presbyterian Church </h3>
                    </div>
                </Col>
                <Col xs={24} xl={12} className="youtubeVideo">
                    <YoutubeEmbed/>
                    <Button type="primary" icon={<DownloadOutlined />}>
                        Download Booklet
                    </Button>
                    <Button>Add To Calendar</Button>
                </Col>
            </Row>
        </div>



        
    )
}

export default WEvent;