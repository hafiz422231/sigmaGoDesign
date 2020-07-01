import React from 'react'
import './homeEvaluationChart.css';
import { Line , Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

const HomeEvaluationChart = () => {

    const data = {

        labels: [ 'Mon' , 'Tus' , 'Wed' , 'Thr' , 'Fri' , 'Sat' , 'Sun' ],
        datasets: [
            {
                label: '',
                data: [10,25,35,45,30,20,40],
                borderBottomColor: ['rgba(255,204,33,1)'],
                borderColor: ['rgba(1,182,255,1)'],
                backgroundColor: ['rgba(229,249,255,1)'],
                pointBorderColor: ['rgba(1,182,255,1)'],
                pointBackgroundColor: ['rgba(255,255,255,1)']
            }
        ]

    }

    const dataPie = {
        labels: [ 'open' , 'All Tickets' , 'Pending' , 'Surveys' ],
        
        datasets: [
            {
                fontSize: 30,
                backgroundColor: [
                    '#f72566',
                    '#45cac7',
                    '#faac1f',
                    '#01bcff',
                ],
                  hoverBackgroundColor: [
                  '#f72566',
                  '#45cac7',
                  '#faac1f',
                  '#01bcff',
                ],
                  data: [20, 43, 17, 30]
            }
    ],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
    }

    var dropdown = {
        container: {
            border: 'none',
            borderRadius: '50px',
        },
        btn: {
            backgroundColor: 'white',
            color: 'skyblue',
            border: '1px solid rgba(0,0,0,.11)',
            borderRadius: '50px',
            fontSize: '10px',
            padding: '4px 12px 4px 12px',
        },
        item: {
            color: 'skyblue'
        }
    }

    return (
        <div className="row" id="home-chart-header">
            
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-7">
                <div className="chart">
                    
                    <div className="d-flex justify-content-between">
                        
                        <div className="top-head">
                            <p>Tickets Records</p>    
                            <span>Lorem Ipsum is Simply</span>
                        </div>

                        <Dropdown style={dropdown.container}>
                            <Dropdown.Toggle style={dropdown.btn}>
                                This Week
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link style={dropdown.item}>Item</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>       

                    </div>

                    <Line data={data} width={100}
                    height={28} />
                
                </div>
            </div>

            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
                
                <div className="chart">

                    <div className="d-flex justify-content-between">
                        
                        <div className="top-head">
                            <p>Tickets Records</p>    
                            <span>Lorem Ipsum is Simply</span>
                        </div>

                        <Dropdown style={dropdown.container}>
                            <Dropdown.Toggle style={dropdown.btn}>
                                This Month
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link style={dropdown.item}>Item</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>       

                    </div>

                    <Pie 
                     data={dataPie} 
                     width={100} 
                     height={36}
                     borderAlign='inner'
                     animation={true}
                     options={{
                        legend:{
                          display:false,
                          position:'bottom',
                        },
                      }}
                      />
                    

                    <div className="d-flex justify-content-between">
                        <div id="all-tick" className="bottom-menus">
                            <div className="d-flex">
                                <div id="color-all"></div>
                                    <div className="d-flex flex-column">
                                        <span>1234</span>
                                        <p>All Tickets</p>            
                                    </div>
                            </div>
                        </div>
                        <div id="open-tick" className="bottom-menus">
                            <div className="d-flex">
                                <div id="color-open"></div>
                                    <div className="d-flex flex-column">
                                        <span>1234</span>
                                        <p>Open</p>            
                                    </div>
                            </div>
                        </div>
                        <div id="pen-tick" className="bottom-menus">
                            <div className="d-flex">
                                <div id="color-pen"></div>
                                    <div className="d-flex flex-column">
                                        <span>1234</span>
                                        <p>Pending</p>            
                                    </div>
                            </div>
                        </div>
                        <div id="survey-tick" className="bottom-menus">
                            <div className="d-flex">
                                <div id="color-sur"></div>
                                    <div className="d-flex flex-column">
                                        <span>1234</span>
                                        <p>Surveys</p>            
                                    </div>
                            </div>
                        </div>
                    </div>

                </div>
            
            </div>

        </div>
    )
}

export default HomeEvaluationChart;
