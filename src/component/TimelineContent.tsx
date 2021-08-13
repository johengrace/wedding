import React from "react";
import { FaHeart } from "react-icons/fa";
import { VerticalTimelineElement, VerticalTimelineElementProps } from "react-vertical-timeline-component";

class TimelineContent extends React.Component<VerticalTimelineElementProps> {
    render() {
        return(
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255)', color: '#544b45', boxShadow:'0 0 0 0', WebkitBoxShadow: '0 0 0 0', fontFamily: 'Open Sans, sans-serif', fontSize: "1.1rem"}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' , top: '13px'}}
                date={this.props.date}
                iconStyle={{ background: 'white', color: '#f01468', boxShadow:'0 0 0 0', WebkitBoxShadow: '0 0 0 0' }}
                icon={<FaHeart/>}>
                {this.props.children}
            </VerticalTimelineElement>
        )
    }
}

export default TimelineContent;