import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import apiDataAction from '../Actions/ApidataAction'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function Contact() {

    const apiData = useSelector((state) => state.userData.data)
    const dispatch = useDispatch()
    console.log(apiData.data)
    useEffect(() => {
        console.log('dispatched data')
        dispatch(apiDataAction())

    }, [dispatch])
    return (
        <div>
            <h1>Contact</h1>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                        backgroundColor: 'gray',
                    },
                }}
            >
                {apiData.data && apiData.data.map((item) => (
                    <Paper elevation={1}>
                        user id : {item.id}<br />
                        user name:{item.name}
                        user email : {item.email}
                        {/* <img style={{width: '30px', height: '30px'}} src='https://picsum.photos/200/300' /> */}
                    </Paper>
                ))}
                {/* <Paper/>
      <Paper elevation={3} /> */}

            </Box>



            {/* 
                         {apiData.length && apiData.map((item) => (
                                    <div>
                                        {item.continent.toLowerCase().match(keyword) && (
                                            <Paper style={{backgroundColor: 'dodgerblue', color: 'white'}}>
                                                <h3> {item.data}</h3>

                                                Total Active Cases : {item.id}<br />
                                                Total Deaths : {item.deaths}<br />
                                                Total Recover : {item.recovered}
                                            </Paper>
                                        )}
                                    </div>
                                ))}  */}
        </div>
    )
}
export default Contact;