import PropTypes from "prop-types";

const YoutubeEmbed = () => {
    return(
        <iframe
        width="100%"
        style={{height: "23vw"}}
        src={"https://www.youtube.com/embed/toBG-FE2MGc"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    )
}
  
export default YoutubeEmbed;
