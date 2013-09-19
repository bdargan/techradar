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

var makeCoords = function(depth, angle) {
  return {
    "r": depth,
    "t": angle
  };
}

var element = function(name, depth, angle, url) {
  var result = {
    "name": name,
    "pc":   makeCoords(depth,angle)
  };

  if (url) {
    result["url"] = url;
  }

  return result;
}

var radar_data = [
    { "quadrant": "Engineering Practices", // running from 30 to 270
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
          element("Marker #1", 200, 30),
          element("Marker #2", 200, 270)
        ]
    },
    { "quadrant": "Technology Stack", // running from 150 - 30 
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
          element("Marker #3", 300, 150),
          element("Marker #4", 300, 30) 
        ]
    },
    { "quadrant": "Operations", // running from 150 to 270
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
          element("Marker #5", 400, 150),
          element("Marker #6", 400, 270)
        ]
    }
];
