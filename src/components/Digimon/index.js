import { useSelector } from "react-redux";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import "./style.css";

const Digimons = () => {
  const { digimons } = useSelector((state) => state);
  const show = digimons ? true : false;

  return show && (
    <Card sx={{ width: 375 }}>
      <CardMedia
        component="img"
        height="275"
        image={`${digimons.img}`}
        alt={`${digimons.name}`}
      ></CardMedia>
      <CardContent>
        <Typography variant="h5" component="div">
          {digimons.name}
        </Typography>
        <Typography component="div">
          {`Level: ${digimons.level}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Digimons;
