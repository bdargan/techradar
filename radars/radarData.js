document.title = "Red Gate Technology Radar (straw man edition)";

var radar_arcs = [
                   {'r':100,'name':'JFDI'}     // well proven, safe choice
                  ,{'r':200,'name':'Validate'} // worked on small example, known good, does it meet our needs?
                  ,{'r':300,'name':'Explore'}  // new ideas on the periphery we should investigate and assess 
                  ,{'r':400,'name':'Kill'}     // in the past a JFDI, but not suitable for any new projects
                 ];

var h = 1160;
var w = 1200;

var makeCoords = function(depth, angle) {
  return {
    "r": depth,
    "t": angle
  };
}

var Quadrants = {
  Languages:  0,
  Techniques: 90,
  Tools:      180,
  Platforms:  270
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

var tools = function(name,depth,position,url) {
  return element(name, depth, Quadrants.Tools, position, url);
};

var platforms = function(name,depth,position,url) {
  return element(name, depth, Quadrants.Platforms, position, url);
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
          techniques("Automatic Syntax Enforcement ", jfdi(80), 30),

          techniques("Polyglot Programming", validate(100), 50),
          techniques("Continuous Deployment", validate(80), 25),
          techniques("Visible Architecture", validate(70), 50),
          techniques("Immutable Servers", validate(30), 30),
          techniques("Semantic Monitoring", validate(60), 30),
          techniques("Test Driven Development", validate(20), 20),
          techniques("Pair Programming", validate(60), 70),
          techniques("Deliberate Development", validate(40), 50),
          techniques("Behaviour Driven Development", validate(80), 65),

          techniques("Functional Programming", explore(50), 50),

          techniques("Exhaustive Browser Based Testing", kill(50), 50)
        ]
    },
    { "quadrant": "Languages and Frameworks", 
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
          languages("C#", jfdi(20), 20), 
          languages("JavaScript", jfdi(40), 90),
          languages("NuGet", jfdi(50), 60),
          languages("CSS Frameworks", jfdi(50), 20),
     
          languages("OWIN", validate(70), 60),
          languages("TypeScript", validate(50), 80),
          languages("Ruby-on-Rails", validate(50), 40),
          languages("node.js", validate(30), 20),
          languages("Bootstrap", validate(20), 80),
          languages("JS MV*", validate(80), 20),
          languages("Cucumber", validate(10), 85),
          languages("Ruby", validate(50), 15),
          languages("Python", validate(10), 70),

          languages("Clojure", explore(50), 20),
          languages("Scala", explore(50), 70),

          languages("CoffeeScript", kill(50), 50),
          languages("Hand-written CSS", kill(50), 75),
        ]
    },
    { "quadrant": "Tools", 
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
          tools("Visual Studio", jfdi(10), 60),
          tools("nCrunch", jfdi(50), 30, 'http://www.ncrunch.net'),
          tools("Git", jfdi(30), 90, 'http://www.github.com/'),
          tools("ASP.NET", jfdi(60), 70),

          tools("Chef", validate(25), 30),
          tools("CFEngine", validate(25), 60),
          tools("Puppet", validate(75), 50),
          tools("IntelliJ", validate(50), 60),
          tools("Graphite", validate(50), 90),
     

          tools("WebStorm", explore(50), 60),
          tools("Riemann", explore(50), 30),
          tools("Log Stash", explore(75), 90, 'http://logstash.net/'),

          tools("Feature Usage Reporting", kill(50), 50),
          tools("Mercurial", kill(30), 20),
          tools("Subversion", kill(30), 90),
          tools("WinForms", kill(50), 30),
          tools("WPF", kill(50), 60), 
        ]
    },
    { "quadrant": "Platforms",
        "left": (w-200+30),
        "top": (h/2 + 18),
        "color": "Purple",
        "items":  [
          platforms("Azure", jfdi(10), 60),
          platforms("EC2", jfdi(20), 30),
          platforms("IIS", jfdi(30), 85),

          platforms("Linux", validate(40), 50),
          platforms("Mongo", validate(60), 75),
          platforms("Redis", validate(80), 25),
          platforms("MySQL", validate(20), 20),
          platforms("PostgreSQL", validate(95), 40),

          platforms("Datamoic", explore(50), 50),
          platforms("Apache Cordova", explore(25), 25),

          platforms("Physical Machines", kill(50), 50)
        ]
    }
];
