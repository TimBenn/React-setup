import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};
 
function Item(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.plant}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.plant}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
          {props.price}
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Item);