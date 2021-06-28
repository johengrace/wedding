import PropTypes from "prop-types";

const YoutubeEmbed = () => {
    return(
        <iframe
        width="100%"
        height="70%"
        src={"https://www.youtube.com/embed/rokGy0huYEA"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    )
}
  
export default YoutubeEmbed;