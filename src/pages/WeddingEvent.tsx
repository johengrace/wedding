import { Row, Col } from 'antd';
import YoutubeEmbed from '../component/YoutubeEmbed';
import { Button, Radio } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const WEvent = () => {
    return(
        <div className="event">
           <Row className="weddingEvent">
                <Col xs={24} xl={12} className="invitation">
                    col
                </Col>
                <Col xs={24} xl={12} className="youtubeVideo">
                    <YoutubeEmbed/>
                    <Button type="primary" block icon={<DownloadOutlined />}>
                        Download Booklet
                    </Button>
                    <br/> <br/>
                    <Button block>Add To Calendar</Button>
                </Col>
            </Row>
        </div>



        
    )
}

export default WEvent;