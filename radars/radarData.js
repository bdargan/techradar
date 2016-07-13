//This is the title for your window tab, and your Radar
document.title = "SFW's Technology Radar (July 2016)";

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
    "color": "#8FA227",
    "items": [
        {
            "name": "Elixir + Phoenix",
            "pc": {
                "r": 390,
                "t": 98
            },
            "movement": "t"
        }, {
            "name": 'Ruby-on-Rails',
            "pc": {
                "r": 370,
                "t": 108
            },
            "movement": "c"
        }, {
            "name": "Akka",
            "pc": {
                "r": 289,
                "t": 127
            },
            "movement": "c"
        }, {
            "name": ".NET Core",
            "pc": {
                "r": 210,
                "t": 115
            },
            "movement": "t"
        }, {
            "name": ".NET",
            "pc": {
                "r": 349,
                "t": 115
            },
            "movement": "c"
        }, {
            "name": "Java EE",
            "pc": {
                "r": 388,
                "t": 125
            },
            "movement": "c"
        }, {
            "name": "Kotlin",
            "pc": {
                "r": 110,
                "t": 125
            },
            "movement": "t"
        }, {
            "name": "Scala",
            "pc": {
                "r": 180,
                "t": 125
            },
            "movement": "t"
        }, {
            "name": "Spring Boot",
            "pc": {
                "r": 30,
                "t": 128
            },
            "movement": "t"
        }, {
            "name": "Swagger",
            "pc": {
                "r": 66,
                "t": 135
            },
            "movement": "t"
        }, {
            "name": "Angular 2.0",
            "pc": {
                "r": 262,
                "t": 160
            },
            "movement": "t"
        }, {
            "name": "Ember",
            "pc": {
                "r": 274,
                "t": 154
            },
            "movement": "c"
        }, {
            "name": "Knockout.js",
            "pc": {
                "r": 282,
                "t": 149
            },
            "movement": "c"
        }, {
            "name": "TypeScript",
            "pc": {
                "r": 247,
                "t": 140
            },
            "movement": "t"
        }, {
            "name": "React + Redux",
            "pc": {
                "r": 150,
                "t": 159
            },
            "movement": "t"
        }, {
            "name": "node.js",
            "pc": {
                "r": 108,
                "t": 138
            },
            "movement": "t"
        }, {
            "name": "Python + Django",
            "pc": {
                "r": 344,
                "t": 138
            },
            "movement": "c"
        }, {
            "name": "Go (lang)",
            "pc": {
                "r": 378,
                "t": 143
            },
            "movement": "c"
        }, {
            "name": "Grunt",
            "pc": {
                "r": 132,
                "t": 139
            },
            "movement": "c"
        }, {
            "name": "SASS",
            "pc": {
                "r": 38,
                "t": 168
            },
            "movement": "c"
        }, {
            "name": "LESS",
            "pc": {
                "r": 392,
                "t": 166
            },
            "movement": "c"
        }, {
            "name": "Thymeleaf",
            "pc": {
                "r": 70,
                "t": 167
            },
            "movement": "c"
        }, {
            "name": "Play Framework",
            "pc": {
                "r": 280,
                "t": 143
            },
            "movement": "t"
        },
    ]
}, {
    "quadrant": "Platforms", // t 0-90
    "left": (w - 200 + 30),
    "top": 18,
    "color": "#587486",
    "items": [
        {
            "name": "Amazon DynamoDB",
            "pc": {
                "r": 285,
                "t": 5
            },
            "movement": "c"
        }, {
            "name": "Azure DocumentDB",
            "pc": {
                "r": 274,
                "t": 14
            },
            "movement": "c"
        }, {
            "name": "Amazon SNS & SQS",
            "pc": {
                "r": 244,
                "t": 42
            },
            "movement": "c"
        }, {
            "name": "Azure Notification Hub",
            "pc": {
                "r": 296,
                "t": 38
            },
            "movement": "c"
        }, {
            "name": "AWS Lambda & Azure Functions",
            "pc": {
                "r": 188,
                "t": 62
            },
            "movement": "c"
        }, {
            "name": "Azure SQL",
            "pc": {
                "r": 158,
                "t": 21
            },
            "movement": "c"
        }, {
            "name": "Azure App Services",
            "pc": {
                "r": 32,
                "t": 81
            },
            "movement": "t"
        }, {
            "name": "Powershell DSC",
            "pc": {
                "r": 209,
                "t": 68
            },
            "movement": "t"
        }, {
            "name": "MongoDB",
            "pc": {
                "r": 118,
                "t": 24
            },
            "movement": "c"
        }, {
            "name": "MariaDB",
            "pc": {
                "r": 57,
                "t": 35
            },
            "movement": "c"
        }, {
            "name": "Windows Server Nano",
            "pc": {
                "r": 284,
                "t": 78
            },
            "movement": "c"
        }, {
            "name": "Windows Server",
            "pc": {
                "r": 354,
                "t": 78
            },
            "movement": "c"
        }, {
            "name": "Joomla!",
            "pc": {
                "r": 83,
                "t": 61
            },
            "movement": "c"
        },
    ]
}, {
    "quadrant": "Tools", // t 180-270
    "left": 45,
    "top": (h / 2 + 18),
    "color": "#DC6F1D",
    "items": [
        {
            "name": "Habitat",
            "pc": {
                "r": 312,
                "t": 242
            },
            "movement": "t"
        }, {
            "name": "Spectre",
            "pc": {
                "r": 250,
                "t": 220
            },
            "movement": "t"
        }, {
            "name": "Protractor",
            "pc": {
                "r": 250,
                "t": 214
            },
            "movement": "t"
        }, {
            "name": "Nightwatch.js",
            "pc": {
                "r": 390,
                "t": 230
            },
            "movement": "t"
        }, {
            "name": "Docker Swarm",
            "pc": {
                "r": 288,
                "t": 258
            },
            "movement": "t"
        }, {
            "name": "Applitools",
            "pc": {
                "r": 270,
                "t": 238
            },
            "movement": "t"
        }, {
            "name": "Concourse CI",
            "pc": {
                "r": 235,
                "t": 199
            },
            "movement": "t"
        }, {
            "name": "Puppet",
            "pc": {
                "r": 266,
                "t": 264
            },
            "movement": "c"
        }, {
            "name": "Chef",
            "pc": {
                "r": 254,
                "t": 261
            },
            "movement": "c"
        }, {
            "name": "LambdaCD",
            "pc": {
                "r": 269,
                "t": 190
            },
            "movement": "t"
        }, {
            "name": "Vagrant",
            "pc": {
                "r": 146,
                "t": 209
            },
            "movement": "c"
        }, {
            "name": "Otto",
            "pc": {
                "r": 284,
                "t": 209
            },
            "movement": "t"
        }, {
            "name": "Kubernetes",
            "pc": {
                "r": 279,
                "t": 201
            },
            "movement": "c"
        }, {
            "name": "Jenkins 2.0",
            "pc": {
                "r": 232,
                "t": 184
            },
            "movement": "c"
        }, {
            "name": "ELK Stack (ElasticSearch/Logstash/Kibana)",
            "pc": {
                "r": 153,
                "t": 258
            },
            "movement": "t"
        }, {
            "name": "New Relic",
            "pc": {
                "r": 243,
                "t": 248
            },
            "movement": "c"
        }, {
            "name": "Docker",
            "pc": {
                "r": 30,
                "t": 260
            },
            "movement": "t"
        }, {
            "name": "TFVC",
            "pc": {
                "r": 399,
                "t": 220
            },
            "movement": "c"
        }, {
            "name": "JIRA",
            "pc": {
                "r": 309,
                "t": 215
            },
            "movement": "c"
        }, {
            "name": "BaseCamp",
            "pc": {
                "r": 244,
                "t": 240
            },
            "movement": "t"
        }, {
            "name": "Rocket.Chat",
            "pc": {
                "r": 263,
                "t": 228
            },
            "movement": "t"
        }, {
            "name": "VSTS",
            "pc": {
                "r": 112,
                "t": 220
            },
            "movement": "c"
        }, {
            "name": "Git",
            "pc": {
                "r": 15,
                "t": 248
            },
            "movement": "c"
        }
    ]
}, {
    "quadrant": "Techniques", // t 270-360
    "color": "#B70062",
    "left": (w - 200 + 30),
    "top": (h / 2 + 18),
    "items": [
        {
            "name": "Micro-service architecture",
            "pc": {
                "r": 152,
                "t": 358
            },
            "movement": "t"
        }, {
            "name": "Session-Based Testing",
            "pc": {
                "r": 110,
                "t": 325
            },
            "movement": "c"
        }, {
            "name": "Model-Based Testing",
            "pc": {
                "r": 278,
                "t": 325
            },
            "movement": "t"
        }, {
            "name": "TDD",
            "pc": {
                "r": 64,
                "t": 288
            },
            "movement": "c"
        }, {
            "name": "BDD",
            "pc": {
                "r": 56,
                "t": 300
            },
            "movement": "c"
        }, {
            "name": "BuildVNext with TFS/VSTS",
            "pc": {
                "r": 56,
                "t": 340
            },
            "movement": "t"
        }, {
            "name": "XAML builds with TFS",
            "pc": {
                "r": 386,
                "t": 330
            },
            "movement": "c"
        }, {
            "name": "Backend for Front-Ends",
            "pc": {
                "r": 262,
                "t": 338
            },
            "movement": "t"
        }, {
            "name": "Responsive Design",
            "pc": {
                "r": 27,
                "t": 321
            },
            "movement": "c"
        }, {
            "name": "Reactive Architectures",
            "pc": {
                "r": 247,
                "t": 316
            },
            "movement": "c"
        }, {
            "name": "SAFe",
            "pc": {
                "r": 378,
                "t": 299
            },
            "movement": "c"
        }, {
            "name": "Native Mobile",
            "pc": {
                "r": 358,
                "t": 277
            },
            "movement": "c"
        },
    ]
}];
