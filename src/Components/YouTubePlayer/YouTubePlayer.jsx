import { useOutletContext } from "react-router-dom";
import "./index.css";

const YouTubePlayer = (props) => {
  const recipe = useOutletContext();
  const { youtubeUrl } = recipe;

  console.log(recipe);

  return <div>Youtube url: "{youtubeUrl}"</div>;
};
export default YouTubePlayer;
