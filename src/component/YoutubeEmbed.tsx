import PropTypes from "prop-types";

const YoutubeEmbed = () => {
    return(
        <iframe
        className= "youtubeEmbed"
        width="100%"
        src={"https://www.youtube.com/embed/toBG-FE2MGc"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        />
    )
}
  
export default YoutubeEmbed;
