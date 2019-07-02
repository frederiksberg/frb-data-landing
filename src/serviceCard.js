import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import Grow from '@material-ui/core/Grow';
import MenuList from '@material-ui/core/MenuList';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme();

const styles = theme => ({
    root: {
        position: 'relative',
        marginTop:16
    },
    card: {
        minWidth: 350,
        maxWidth: 350,
        background:'#ffffff7a'
    },
    cardContent: {
        minHeight: 100
    },
    media: {
        height: 180,
        width: 'auto',
        margin: 16,
        backgroundPosition: 'center',
        backgroundSize: 'contain'
    },
    cardHeader: {
        padding: 16,
        backgroundColor: 'darkslategray',
        display: 'flex'
    },
    headerText: {
        color: 'white',
        flexGrow: 1
    },
    divider: {
        backgroundColor: 'whitesmoke',
        height: 1,
        border: 0
    },
    linkBtn: {
        position: 'absolute',
        bottom: 16
    },
    tooltip: {
        fontSize: 16
    },
    white: {
        color: 'white'
    },
    box: {
        border: '1px solid whitesmoke',
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 15
    }
});

class ServiceCard extends Component {

    state = {
        open: false,
    }

    handleToggle = event => {
        this.setState(state => ({ open: !state.open }));
    };

    handleLinkClick = (e, link) => {
        var win = window.open(link, '_blank');
        this.handleClose(e)
    }

    handleSingleLinkClick = (link) => {
        window.open(link, '_blank');
    }

    handleClose = (event) => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }

        this.setState({ open: false });
    };

    render() {

        let { classes } = this.props
        let { open } = this.state

        let menuOptions = this.props.config.links.map((item, index) => {
            return (
                <Tooltip title={item.tooltip} className={classes.tooltip} placement="right" aria-label="Add">
                    <MenuItem onClick={(e) => this.handleLinkClick(e, item.value)}>{item.name}</MenuItem>
                </Tooltip>
            )
        })

        let button = this.props.config.links.length > 1 ?
            <Button
                className={classes.linkBtn}
                variant="outlined"
                buttonRef={node => {
                    this.anchorEl = node;
                }}
                aria-owns={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={this.handleToggle}
            >
                Links ▼
            </Button> :
            <Button className={classes.linkBtn} variant="outlined" onClick={() => this.handleSingleLinkClick(this.props.config.links[0].value)}>Åben {this.props.config.name}</Button>

        return (
            <div className={classes.root}>
                <Card className={classes.card}>

                    <div className={classes.cardHeader}>
                        <Typography variant="h5" className={classes.headerText} >
                            {this.props.config.name}
                        </Typography>
                        <div className={classes.box}>
                            <Typography variant="subtitle1" className={classes.white} >
                                {this.props.config.category}
                            </Typography>
                        </div>


                    </div>

                    <CardMedia
                        className={classes.media}
                        image={"media/" + this.props.config.image}
                        title={this.props.config.name}
                    />
                    {/* <hr className={classes.divider} /> */}
                    <CardContent className={classes.cardContent}>


                        <Typography variant="subtitle1" gutterBottom>
                            {this.props.config.description}
                        </Typography>
                        {button}
                    </CardContent>



                </Card>
                <Popper style={{zIndex:9999}} open={open} placement="bottom" anchorEl={this.anchorEl} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="menu-list-grow"
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={this.handleClose}>
                                    <MenuList>
                                        {menuOptions}
                                    </MenuList>
                                </ClickAwayListener>

                            </Paper>

                        </Grow>
                    )}
                </Popper>
            </div>
        );
    }

}

export default withStyles(styles)(ServiceCard);
