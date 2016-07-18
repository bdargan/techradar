//This is the title for your window tab, and your Radar
document.title = "SFW's TechRadar (July 2016)";

//This is the concentic circles that want on your radar
var radar_arcs = [
  {'r': 100,'name': 'Adopt'}, 
  {'r': 200,'name': 'Trial'}, 
  {'r': 300,'name': 'Assess'}, 
  {'r': 400,'name': 'Hold'}
];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
  {
    "quadrant": "Languages & Frameworks", // t 90-180
    "left": 45,
    "top": 18,
    "color": "#00A499",
    "items": [
        //  Adopt
        {"pc": {"r":  30, "t": 100}, "movement": "t", "name": "Spring Boot",}, 
        {"pc": {"r":  38, "t": 162}, "movement": "c", "name": "SASS",}, 
        {"pc": {"r":  66, "t": 120}, "movement": "t", "name": "Swagger",}, 
        {"pc": {"r":  70, "t": 167}, "movement": "c", "name": "Thymeleaf",}, 

        //  Trial
        {"pc": {"r": 108, "t": 138}, "movement": "c", "name": "node.js",}, 
        {"pc": {"r": 110, "t": 125}, "movement": "t", "name": "Kotlin",}, 
        {"pc": {"r": 132, "t": 139}, "movement": "c", "name": "Grunt",}, 
        {"pc": {"r": 150, "t": 159}, "movement": "c", "name": "React + Redux",}, 
        {"pc": {"r": 180, "t": 125}, "movement": "c", "name": "Scala",}, 

        //  Assess
        {"pc": {"r": 210, "t": 115}, "movement": "t", "name": ".NET Core",}, 
        {"pc": {"r": 247, "t": 120}, "movement": "t", "name": "TypeScript",}, 
        {"pc": {"r": 212, "t": 140}, "movement": "c", "name": "Angular 2.0",}, 
        {"pc": {"r": 274, "t": 154}, "movement": "t", "name": "Ember",}, 
        {"pc": {"r": 280, "t": 143}, "movement": "t", "name": "Play Framework",},
        {"pc": {"r": 282, "t": 149}, "movement": "t", "name": "Knockout.js",},
        {"pc": {"r": 289, "t": 127}, "movement": "c", "name": "Akka",},

        //  Hold 
        {"pc": {"r": 344, "t": 138}, "movement": "c", "name": "Python + Django",}, 
        {"pc": {"r": 349, "t": 115}, "movement": "c", "name": ".NET",}, 
        {"pc": {"r": 370, "t": 108}, "movement": "c", "name": "Ruby-on-Rails",}, 
        {"pc": {"r": 378, "t": 143}, "movement": "c", "name": "Go (lang)",}, 
        {"pc": {"r": 388, "t": 125}, "movement": "c", "name": "Java EE",}, 
        {"pc": {"r": 390, "t":  98}, "movement": "t", "name": "Elixir + Phoenix",}, 
        {"pc": {"r": 392, "t": 166}, "movement": "c", "name": "LESS",}, 
    ]
}, {
    "quadrant": "Platforms", // t 0-90
    "left": (w - 200 + 30),
    "top": 18,
    "color": "#CB6015",
    "items": [
        //  Adopt
        {"pc": {"r":  22, "t":  61}, "movement": "t", "name": "Azure App Services",}, 
        {"pc": {"r":  57, "t":  35}, "movement": "c", "name": "MariaDB",}, 
        {"pc": {"r":  83, "t":  61}, "movement": "c", "name": "Joomla!",},
        
        //  Trial
        {"pc": {"r": 118, "t":  24}, "movement": "c", "name": "MongoDB",}, 
        {"pc": {"r": 158, "t":  21}, "movement": "c", "name": "Azure SQL",}, 
        {"pc": {"r": 188, "t":  31}, "movement": "c", "name": "AWS Lambda & Azure Functions",},

        //  Assess 
        {"pc": {"r": 209, "t":  68}, "movement": "t", "name": "Powershell DSC",}, 
        {"pc": {"r": 244, "t":  42}, "movement": "c", "name": "Amazon SNS & SQS",}, 
        {"pc": {"r": 274, "t":  14}, "movement": "c", "name": "Azure DocumentDB",}, 
        {"pc": {"r": 284, "t":  78}, "movement": "c", "name": "Windows Server Nano",}, 
        {"pc": {"r": 285, "t":   5}, "movement": "c", "name": "Amazon DynamoDB",}, 
        {"pc": {"r": 296, "t":  38}, "movement": "c", "name": "Azure Notification Hub",},

        //  Hold 
        {"pc": {"r": 354, "t":  78}, "movement": "c", "name": "Windows Server Deployments",}, 
    ]
}, {
    "quadrant": "Tools", // t 180-270
    "left": 45,
    "top": (h / 2 + 18),
    "color": "#893CA2",
    "items": [
        //  Adopt
        {"pc": {"r":  20, "t": 228}, "movement": "c", "name": "Git",},
        {"pc": {"r":  62, "t": 192}, "movement": "c", "name": "SurveyMonkey",}, 
        {"pc": {"r":  75, "t": 240}, "movement": "t", "name": "Docker",}, 
        {"pc": {"r":  78, "t": 208}, "movement": "c", "name": "Sketch",}, 
        {"pc": {"r":  88, "t": 202}, "movement": "c", "name": "UXpin",}, 

        //  Trial
        {"pc": {"r": 112, "t": 235}, "movement": "c", "name": "VSTS",}, 
        {"pc": {"r": 123, "t": 258}, "movement": "t", "name": "ELK Stack (ElasticSearch/Logstash/Kibana)",}, 
        {"pc": {"r": 146, "t": 259}, "movement": "c", "name": "Vagrant",},
        {"pc": {"r": 160, "t": 185}, "movement": "c", "name": "Balsamiq",}, 
        {"pc": {"r": 166, "t": 190}, "movement": "c", "name": "Axure",}, 
        {"pc": {"r": 167, "t": 216}, "movement": "t", "name": "Loop11",}, 
        {"pc": {"r": 177, "t": 205}, "movement": "t", "name": "Optimal Workshop",}, 
        {"pc": {"r": 181, "t": 210}, "movement": "t", "name": "Zoom",}, 
        {"pc": {"r": 187, "t": 215}, "movement": "t", "name": "InVision App",}, 

        //  Assess
        {"pc": {"r": 214, "t": 261}, "movement": "c", "name": "Chef",}, 
        {"pc": {"r": 216, "t": 266}, "movement": "c", "name": "Puppet",}, 
        {"pc": {"r": 223, "t": 220}, "movement": "t", "name": "Tobii Eyetracker",},
        {"pc": {"r": 232, "t": 184}, "movement": "c", "name": "Jenkins 2.0",}, 
        {"pc": {"r": 243, "t": 258}, "movement": "c", "name": "New Relic",}, 
        {"pc": {"r": 250, "t": 204}, "movement": "t", "name": "Protractor",}, 
        {"pc": {"r": 250, "t": 220}, "movement": "t", "name": "Spectre",}, 
        {"pc": {"r": 255, "t": 189}, "movement": "t", "name": "Concourse CI",}, 
        {"pc": {"r": 267, "t": 225}, "movement": "t", "name": "Nuivo (For Qualitative Analysis)",}, 
        {"pc": {"r": 269, "t": 190}, "movement": "t", "name": "LambdaCD",}, 
        {"pc": {"r": 270, "t": 238}, "movement": "t", "name": "Applitools",}, 
        {"pc": {"r": 276, "t": 234}, "movement": "t", "name": "SPSS (For Quantitative Analysis)",}, 
        {"pc": {"r": 277, "t": 220}, "movement": "c", "name": "Video editing software",},
        {"pc": {"r": 278, "t": 258}, "movement": "t", "name": "Docker Swarm",}, 
        {"pc": {"r": 279, "t": 253}, "movement": "c", "name": "Kubernetes",}, 
        {"pc": {"r": 281, "t": 210}, "movement": "t", "name": "Techsmith Morae",}, 
        {"pc": {"r": 283, "t": 228}, "movement": "t", "name": "Rocket.Chat",}, 
        {"pc": {"r": 294, "t": 240}, "movement": "t", "name": "BaseCamp",}, 
        {"pc": {"r": 294, "t": 259}, "movement": "t", "name": "Otto",}, 

        //  Hold
        {"pc": {"r": 309, "t": 215}, "movement": "c", "name": "JIRA",}, 
        {"pc": {"r": 322, "t": 252}, "movement": "t", "name": "Habitat",}, 
        {"pc": {"r": 390, "t": 230}, "movement": "t", "name": "Nightwatch.js",}, 
        {"pc": {"r": 399, "t": 220}, "movement": "c", "name": "TFVC",}, 
    ]
}, {
    "quadrant": "Approaches", // t 270-360
    "color": "#64B044",
    "left": (w - 200 + 30),
    "top": (h / 2 + 18),
    "items": [
        //  Adopt
        {"pc": {"r":  44, "t": 340}, "movement": "t", "name": "User-Centred Design",},
        {"pc": {"r":  47, "t": 311}, "movement": "c", "name": "Responsive Design",}, 
        {"pc": {"r":  56, "t": 281}, "movement": "c", "name": "BDD",}, 
        {"pc": {"r":  64, "t": 343}, "movement": "t", "name": "Lean UX",}, 
        {"pc": {"r":  70, "t": 288}, "movement": "c", "name": "TDD",}, 
        {"pc": {"r":  86, "t": 300}, "movement": "t", "name": "BuildVNext with TFS/VSTS",}, 
        {"pc": {"r":  88, "t": 336}, "movement": "t", "name": "Service Design",},
        
        //  Trial
        {"pc": {"r": 110, "t": 325}, "movement": "c", "name": "Session-Based Testing",}, 
        {"pc": {"r": 152, "t": 358}, "movement": "t", "name": "Micro-service architecture",}, 
        {"pc": {"r": 176, "t": 328}, "movement": "t", "name": "Eye Tracking",},

        //  Assess
        {"pc": {"r": 247, "t": 316}, "movement": "t", "name": "Reactive Architectures",}, 
        {"pc": {"r": 262, "t": 338}, "movement": "t", "name": "Backend for Front-Ends",}, 
        {"pc": {"r": 278, "t": 325}, "movement": "t", "name": "Model-Based Testing",},

        //  Hold 
        {"pc": {"r": 358, "t": 277}, "movement": "c", "name": "Native Mobile",}, 
        {"pc": {"r": 378, "t": 299}, "movement": "t", "name": "SAFe",}, 
        {"pc": {"r": 386, "t": 330}, "movement": "c", "name": "XAML builds with TFS",}, 
    ]
}];
