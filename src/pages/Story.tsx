import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaHeart } from "react-icons/fa";
import TimelineContent from '../component/TimelineContent';
import { Row } from 'react-bootstrap';

const Story = () => {
    return(
        <Row>
        <div className="story">

            <VerticalTimeline>
                <TimelineContent>
                    <h3 className="vertical-timeline-element-title">Aug 2013</h3>
                    <h4 className="vertical-timeline-element-subtitle">Our First Meeting</h4>
                    <p>
                        We met in Nanyang Technological University and became friends.
                        <br/> Grace: Nothing happened though
                        <br/> Joshua: Well, a little spark was there, I promise.
                    </p>
                </TimelineContent>
                <TimelineContent>
                    <h3 className="vertical-timeline-element-title">7 Dec 2014</h3>
                    <h4 className="vertical-timeline-element-subtitle">The Day We Get Together</h4>
                    <p>
                        On the side of Singapore River, the same place where we had our first date, we officially became a couple.
                        <br/> P.S. And it was an amazing (g)race 😉
                    </p>
                </TimelineContent>
                <TimelineContent>
                    <h3 className="vertical-timeline-element-title">2014 - 2020</h3>
                    <h4 className="vertical-timeline-element-subtitle">The Journey</h4>
                    <p>
                        Over the next few years, we went through many late night study sessions, graduations,
                        new jobs, moving to new country (and a new pandemic 😦)
                        <br/> But through it all, our love grew stronger.
                    </p>
                </TimelineContent>
                <TimelineContent>
                    <h3 className="vertical-timeline-element-title">13 Sep 2020</h3>
                    <h4 className="vertical-timeline-element-subtitle">Proposal Time!</h4>
                    <p>
                        Joshua proposed, and Grace said Yes!
                    </p>
                </TimelineContent>
                <TimelineContent>
                    <h3 className="vertical-timeline-element-title">2 Oct 2020</h3>
                    <h4 className="vertical-timeline-element-subtitle">We are Getting Married!</h4>
                </TimelineContent>
                <TimelineContent>
                    <h3 className="vertical-timeline-element-title">20XX</h3>
                    <h4 className="vertical-timeline-element-subtitle">To Infinity and Beyond!</h4>
                    <p>
                        Hopefully, Joshua and Grace's junior is in the making 
                    </p>
                </TimelineContent>
            </VerticalTimeline>

        </div>
        </Row>

    )
}

export default Story;