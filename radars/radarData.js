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
    "quadrant": "Back-end & Modern architectures",
    "left": 45,
    "top": 18,
    "color": "#8FA227",
    "items": [
        {
            "name": "Elixir + Phoenix",
            "pc": {
                "r": 330,
                "t": 133
            },
            "movement": "t"
        }, {
            "name": ".NET Core",
            "pc": {
                "r": 210,
                "t": 165
            },
            "movement": "t"
        }, {
            "name": "Kotlin",
            "pc": {
                "r": 110,
                "t": 135
            },
            "movement": "t"
        }, {
            "name": "Spring Boot",
            "pc": {
                "r": 30,
                "t": 145
            },
            "movement": "t"
        }
    ]
}, {
    "quadrant": "Front-end",
    "left": (w - 200 + 30),
    "top": 18,
    "color": "#587486",
    "items": [
        {
            "name": 'Ruby-on-Rails',
            "pc": {
                "r": 370,
                "t": 19
            },
            "movement": "c"
        }, {
            "name": "Play Framework",
            "pc": {
                "r": 210,
                "t": 44
            },
            "movement": "t"
        }, {
            "name": "React + Redux",
            "pc": {
                "r": 150,
                "t": 69
            },
            "movement": "t"
        }, {
            "name": "Thymeleaf",
            "pc": {
                "r": 70,
                "t": 49
            },
            "movement": "c"
        }
    ]
}, {
    "quadrant": "DevOps Tooling",
    "left": 45,
    "top": (h / 2 + 18),
    "color": "#DC6F1D",
    "items": [
        {
            "name": "Habitat",
            "pc": {
                "r": 302,
                "t": 242
            },
            "movement": "t"
        }, {
            "name": "Concourse CI",
            "pc": {
                "r": 235,
                "t": 208
            },
            "movement": "t"
        }, {
            "name": "ELK Stack (ElasticSearch/Logstash/Kibana)",
            "pc": {
                "r": 113,
                "t": 228
            },
            "movement": "t"
        }, {
            "name": "Docker",
            "pc": {
                "r": 30,
                "t": 260
            },
            "movement": "t"
        }, {
            "name": "Git",
            "pc": {
                "r": 15,
                "t": 230
            },
            "movement": "c"
        }
    ]
}, {
    "quadrant": "Something else",
    "color": "#B70062",
    "left": (w - 200 + 30),
    "top": (h / 2 + 18),
    "items": [
        {
            "name": "Hold this",
            "pc": {
                "r": 302,
                "t": 300
            },
            "movement": "t"
        }, {
            "name": "Assess this",
            "pc": {
                "r": 235,
                "t": 325
            },
            "movement": "t"
        }, {
            "name": "Trial something",
            "pc": {
                "r": 113,
                "t": 336
            },
            "movement": "t"
        }, {
            "name": "Do this now!",
            "pc": {
                "r": 30,
                "t": 309
            },
            "movement": "t"
        }
    ]
}];
