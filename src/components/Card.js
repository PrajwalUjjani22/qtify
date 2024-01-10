import "./Card.css";
import { Chip, Tooltip } from "@mui/material";

function Card({ data, type }) {
  
    const getCard = (type) => {
    switch (type) {
      case "song": {
        const { image, likes, title } = data;
        return (
          <div className="wrapper">
            <div className="card">
              <img src={image} alt="song" loading="lazy" />

              <div className="banner">
                <div className="pill">
                  <p>{likes} likes</p>
                </div>
              </div>
            </div>

            <div className="titleWrapper">{title}</div>
          </div>
        );
      }
      case "album": {
        const { image, title, follows, songs, slug } = data;
        return (
          <Tooltip title={`${songs.legth} songs`} placement="top" arrow>
            <a href={`/album/${slug}`}>
              <div className="wrapper">
                <div className="card">
                  <img src={image} alt="song" loading="lazy" />

                  <div className="banner">
                    <Chip
                      label={`${follows} Follows`}
                      size="small"
                      className="chip"
                    />
                    <div className="pill">
                      <p>{follows} Follows</p>
                    </div>
                  </div>
                </div>

                <div className="titleWrapper">{title}</div>
              </div>
            </a>
          </Tooltip>
        );
      }
      default:
        return <></>;
    }
  };

  return getCard(type);
}

export default Card;
