import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    card: {
      width: '345px',
      marginTop: "10px",
      float: 'left',
      marginLeft: '16px',
    },
    media: {
      height: '140px',
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: "5px",
      },
    },
    email: {
      fontSize: '12px',
    },
    fullName: {
      fontSize: '18px',
    },
  });

const UserProfile = ({ avatar, email, firstName, lastName, id }) => {
    const classes = useStyles();
    const fullName = `${firstName} ${lastName}`;
    
    return (
      <Card className={classes.card}>
          <CardMedia
            component="img"
            className={classes.media}
            image={avatar}
          />
          <CardContent>
            <Typography className={classes.fullName} color="textSecondary">
              {fullName}
            </Typography>
            <Typography variant="h7" className={classes.email}>
              {email}
            </Typography>
          </CardContent>
      </Card>
    );
}

UserProfile.propTypes = {
  avatar: PropTypes.string,
  email: PropTypes.string, 
  firstName: PropTypes.string, 
  lastName: PropTypes.string, 
  id: PropTypes.string,
};

export default UserProfile;