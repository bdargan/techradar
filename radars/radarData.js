document.title = "Red Gate Technology Radar (straw man edition)";

var radar_arcs = [
                   {'r':100,'name':'JFDI'}     // well proven, safe choice
                  ,{'r':200,'name':'Validate'} // worked on small example, known good, does it meet our needs?
                  ,{'r':300,'name':'Explore'}  // new ideas on the periphery we should investigate and assess 
                  ,{'r':400,'name':'Kill'}     // in the past a JFDI, but not suitable for any new projects
                 ];

//This is your raw data
//
// Key
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//   r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Engineering Practices
// - Technology Stack
// - Operations

var h = 1160;
var w = 1200;

var radar_data = [
    { "quadrant": "Engineering Practices", // running from 30 to 270
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
          {"name": "Continuous Integration", "pc": {"r": 200, "t": 30} },      
          {"name": "Continuous Integration", "pc": {"r": 200, "t": 270} },      
        ]
    },
    { "quadrant": "Technology Stack", // running from 150 - 30 
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
          {"name": "C#", "pc": {"r": 300, "t": 150} }, // FAR BOUND OF TECHNOLOGY STACK
          {"name": "C#", "pc": {"r": 300, "t": 30} } // FAR BOUND OF TECHNOLOGY STACK
        ]
    },
    { "quadrant": "Operations", // running from 150 to 270
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
          {"name": "something", "pc": {"r": 400, "t": 150} }, // START BOUND OF OPERATIONS
          {"name": "something else", "pc": {"r": 400, "t": 270} } // FAR BOUND OF OPERATIONS
        ]
    }
];
