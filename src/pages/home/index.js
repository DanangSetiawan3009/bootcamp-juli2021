import React, { Component } from 'react';
import { Carousel } from '../../components';
import { Skeleton, Stack } from '@mui/material'
import { connect } from 'react-redux';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username1: "",
            button: 1,
            loading: true
        }
        this.intervalId = null
    }

    componentDidMount() {
        console.log(this.props);
        setTimeout(() => {
            this.setState({ loading: false })
        }, 1000)

        let no = 1
        this.intervalId = setInterval(() => {
            console.log("ini set interval ke", no++);
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <h1>{this.props.username56}</h1>
                {this.state.loading ?
                    <Stack spacing={1}>
                        <Skeleton variant="rectangular" width={600} height={400} />
                    </Stack>
                    :
                    <div style={{
                        width: 600,
                        height: 400
                    }}>
                        <Carousel />
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username56: state.username
})

export default connect(mapStateToProps)(Home);