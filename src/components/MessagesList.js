import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function MessagesList(props) {

    const messList = props.messages;

    if (messList === undefined) {
        return (<></>);
    }

    const formatDate = (data) => {
        const date = new Date(+data * 1000);
        return (date.toDateString());
    }

    return (
        <div>

            {Object.keys(messList).map((id) =>
                <div key={id}>

                    <Card sx={{ minWidth: 275, m: 2 }}>
                        <CardContent>
                            <Typography variant="body2">
                                {messList[id].text}
                            </Typography>

                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {messList[id].author}
                            </Typography>

                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {formatDate(messList[id].date)}
                            </Typography>


                        </CardContent>
                    </Card>

                </div>
            )}
        </div>
    );
}

export default MessagesList;