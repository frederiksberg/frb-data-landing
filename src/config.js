const config = {
    pages: [
        {
            name: 'Grafana',
            description:'Dashboards til bl.a. sensordata',
            category:'IoT',
            image:'grafana.png',
            links:[
                {
                    name:'Grafana',
                    tooltip:'Visualiseringsværktøj til tidsserier m.m.',
                    value:'https://grafana.frb-data.dk'
                }
            ]
        },
        {
            name: 'NodeRED',
            description:'IoT løsning til grafisk at styre datastrømme',
            category:'IoT',
            image:'nodered.png',
            links:[
                {
                    name:'NodeRED',
                    tooltip:'Gå til NodeRED',
                    value:'https://nodered.frb-data.dk'
                },
              
            ]
        },
        {
            name: 'API',
            description:'API til udstilling af geodata',
            category:'GIS',
            image:'api.png',
            links:[
                {
                    name:'API',
                    tooltip:'Gå til Swagger',
                    value:'https://api.frb-data.dk'
                },
              
            ]
        },
        {
            name: 'Vector Tiles',
            description:'Løsninger til styling og serving af vector tiles',
            category:'GIS',
            image:'mapbox.png',
            links:[
                {
                    name:'Tegola',
                    tooltip:'Serving af vector tiles',
                    value:'https://tegola.frb-data.dk'
                },
                {
                    name:'Maputnik',
                    tooltip:'Styling af vector tiles',
                    value:'https://maputnik.frb-data.dk'
                }          
            ]
        },
        {
            name: 'Monitorering',
            description:'Overvågning af servere',
            category:'Drift',
            image:'schedule.png',
            links:[
                {
                    name:'Monitorering',
                    tooltip:'Følg med i servernes tilstand',
                    value:'https://monitor.frb-data.dk'
                }
            ]
        }
    ]
}

export default config
