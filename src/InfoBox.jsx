import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ info }) {

    const images = () => {
        const temp = info.temp;
        if (temp <= 10) {
            return "downloadc.jpeg"; // Cold image
        } else if (temp <= 30) {
            return "download3.jpeg"; // Moderate image
        } else {
            return "images.jpeg"; // Hot image
        }
    }

    return (
        <div>
            <h2>Weather Information</h2>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="160px"
                        image={images()}
                        alt=""
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" style={{color:"rgb(33, 213, 234)"}}>
                            {info.city}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            <div className="flexs">
                                <p>Tempature: {info.temp}&deg;C</p>
                                <p>Feels_like: {info.feels_like}</p>
                                <p>Weather: {info.weather}</p>
                                <p>Humidity: {info.humidity}</p>
                                <p>Pressure: {info.pressure}</p>
                                <p>Speed: {info.speed}</p>
                            </div>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}
