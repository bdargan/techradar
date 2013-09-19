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
// - Running Software

var h = 1160;
var w = 1200;

var radar_data = [
    { "quadrant": "Engineering Practices",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
        ]
    },
    { "quadrant": "Technology Stack",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
        ]
    },
    { "quadrant": "Running Software",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
        ]
    }
];
