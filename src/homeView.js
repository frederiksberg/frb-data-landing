import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import ServiceCard from './serviceCard'

import Config from './config'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const styles = theme => ({
    root: {},
    cardContainer: {
        display: 'flex',
        padding: 16,
        marginBottom: 16,
        flexWrap: 'wrap',
        justifyContent:'space-evenly'
    },
    filterContainer: {
        padding: 4,
        display: 'flex',
        marginRight: 'auto',
        marginLeft: 'auto',
        width: '50%',
        justifyContent: 'center'
    },
    search: {
        marginRight: 16
    },
    categorySelect: {
        width: 200
    }
});

class HomeView extends Component {

    state = {
        search: '',
        category: '',
        categories:[]
    }

    componentDidMount() {
        let categoryDict = Config.pages.map(x => x.category).reduce((a, b) => {
            a[b] = ''
            return a;
        }, {})

        this.setState({
            categories: Object.keys(categoryDict)
        })
    }

    onSearch = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    handleDropdownChange = (e) => {
        this.setState({
            category: e.target.value
        })
    }

    render() {

        let pages = Config.pages.filter(x => x.name.toLowerCase().includes(this.state.search.toLowerCase()) && (x.category === this.state.category || this.state.category === '')).map((item, index) => {
            return (<ServiceCard key={index} config={item} />)
        })


        let categoryFilterOptions = this.state.categories.map((item, index) => {
            return <MenuItem value={item}>{item}</MenuItem>
        })

        let { classes } = this.props

        return (
            <div className={classes.root}>
                <Paper style={{ padding: 4 }}>
                    <div className={classes.filterContainer}>
                        <TextField
                            id="standard-name"
                            label="Søg"
                            className={classes.search}
                            value={this.state.search}
                            placeholder="Søg"
                            onChange={this.onSearch}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <FormControl margin="normal" className={classes.categorySelect}>
                            <InputLabel htmlFor="age-simple">Kategori</InputLabel>
                            <Select
                                value={this.state.category}
                                onChange={this.handleDropdownChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value="">
                                    <em>Alle</em>
                                </MenuItem>
                               {categoryFilterOptions}
                            </Select>
                        </FormControl>
                    </div>
                </Paper>


                <div className={classes.cardContainer}>
                    {pages}
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(HomeView);
