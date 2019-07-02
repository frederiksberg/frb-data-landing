const config = {
    pages: [
        {
            name: 'Grafana',
            description:'Dashboards til bl.a. sensordata',
            category:'IoT',
            image:'grafana.png',
            links:[
                {
                    name:'Cykelhjelm',
                    tooltip:'Andel af cyklister med cykelhjelm',
                    value:'http://138.68.94.229:3000/d/CMxeOmemz/cykel-hjelm-overvagning'
                },
                {
                    name:'Klimaprojekter',
                    tooltip:'Data fra regn- og vandstandsmålere til at overvåge klimaprojekter',
                    value:'http://138.68.94.229:3000/d/uWm4wrAiz/mariendalsvej-klima-sensor'
                },
                {
                    name:'Parkering',
                    tooltip:'Status på parkeringspladser bag rådhuset',
                    value:'http://138.68.94.229:3000/d/EwVJQj0ik/parkerings-dashboard'
                },
                {
                    name:'Trafiktælling',
                    tooltip:'Tællinger af biler, cykler og fodgængere',
                    value:'http://138.68.94.229:3000/d/lHRMvjaiz/trafiktaelling'
                }
            ]
        },
        {
            name: 'NodeRED',
            description:'IoT platform til styre at datastrømme',
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
