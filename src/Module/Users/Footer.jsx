import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
    footer: {
        display: 'flex',
        padding: '8px',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: 'white',
        width: '420px',
        margin: 'auto',
        marginTop: '32px',
    },
}));

const Footer = ({ currentPage, setCurrentPage, totalPages }) => {
    const classes = useStyles();
    return (
        <div className={classes.footer}>
            <Button 
                variant="outlined"
                color="primary"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={!(currentPage - 1)}
            >
                Previous Page
            </Button>
            <Typography
                variant="h7"
            >
                Current Page : {currentPage}
            </Typography>
            <Button
                color="primary"
                variant="outlined"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={(currentPage + 1 > totalPages)}
            >
                Next Page
            </Button>
        </div>
    );
}

Footer.propTypes = {
    setCurrentPage: PropTypes.func,
    currentPage: PropTypes.number, 
    totalPages: PropTypes.number, 
};

export default Footer;