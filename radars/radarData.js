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

var Quadrants = {
  Techniques: 0,
  Tools:      90,
  Platforms:  180,
  Languages:  270
};

var offset = function(base) {
  return function(ness) { return base + (100 - ness/100*100); };
};

var jfdi = function(ness) {
  return offset(0)(ness);
};

var validate = function(ness) {
  return offset(100)(ness);
};

var explore = function(ness) {
  return offset(200)(ness);
};

var kill = function(ness) {
  return offset(300)(ness);
};

var element = function(name, depth, baseAngle, percentageAngle, url) {
  var result = {
    "name": name,
    "pc":   makeCoords(depth,baseAngle + (90 * percentageAngle / 100))
  };

  if (url) {
    result["url"] = url;
  }

  return result;
}

var techniques = function(name,depth,position,url) {
  return element(name, depth, Quadrants.Techniques, position, url);
};

var languages = function(name,depth,position,url) {
  return element(name, depth, Quadrants.Languages, position, url);
};

var operations = function(name,depth,position,url) {
  return element(name, depth, Quadrants.Operations, position, url);
};

var radar_data = [
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
          techniques("Peer Code Review", jfdi(50), 30),
          techniques("Continuous Integration", jfdi(40), 60),
          techniques("Boy Scout Rule", jfdi(40), 80),
          techniques("Collective Code Ownership", jfdi(40), 90),
          techniques("Configuration as Code", jfdi(70), 10),
          techniques("Continuous Deployment", validate(80), 25),
          techniques("Visible Architecture", validate(70), 50),
          techniques("Test Driven Development", validate(20), 20),
          techniques("Pair Programming", validate(60), 70),
          techniques("Deliberate Development", validate(40), 50),
          techniques("Behaviour Driven Development", validate(80), 65),
          techniques("Long Lived Branches", kill(50), 50)
        ]
    },
    { "quadrant": "Languages", 
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
          languages("C#", jfdi(20), 20), 
          languages("JavaScript", jfdi(40), 90),
          languages("ASP.NET", jfdi(60), 70),
          languages("NuGet", jfdi(50), 60),
          languages("TypeScript", validate(50), 80),
          languages("Ruby-on-Rails", validate(50), 40),
          languages("Clojure", explore(50), 20),
          languages("Scala", explore(50), 70),
          languages("WinForms", kill(50), 30),
          languages("WPF", kill(50), 90), 
          languages("Classic ASP", kill(50), 10)
        ]
    },
    { "quadrant": "Tools", 
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
          operations("Visual Studio", jfdi(10), 60),
          operations("nCrunch", jfdi(50), 30, 'http://www.ncrunch.net'),
          operations("Git", jfdi(30), 90, 'http://www.github.com/'),
          operations("IntelliJ", validate(50), 60),
          operations("WebStorm", explore(50), 60),
          operations("Graphite", validate(50), 90),
          operations("Riemann", explore(50), 30),
          operations("Feature Usage Reporting", kill(50), 50),
          operations("Mercurial", kill(30), 20),
          operations("Subversion", kill(30), 90)
        ]
    },
    { "quadrant": "Platforms",
        "left": (w-200+30),
        "top": (h/2 + 18),
        "color": "Purple",
        "items":  [
        ]
    }
];
