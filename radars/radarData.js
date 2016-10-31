//This is the title for your window tab, and your Radar
document.title = "SFW's TechRadar (October 2016)";

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
        {pc: {r:  30, t: 100}, movement: "c", name: "Spring Boot", topic: "16277305"}, 
        {pc: {r:  38, t: 162}, movement: "c", name: "SASS", topic: "16322377"}, 
        {pc: {r:  53, t: 140}, movement: "c", name: "Gradle", topic: "11642700", reason: "Configuration management for JVM (Java, Kotlin, Scala) projects"},  
        {pc: {r:  66, t: 120}, movement: "c", name: "Swagger", reason: "Great tool for documenting APIs and speeding up API development", topic: "13683108" },
        {pc: {r:  78, t: 138}, movement: "c", name: "node.js (for micro-services or simple front-ends)", topic: "12342592", reason: "Concerned about its usage for a whole application, but certainly proven benefits for prototyping, simple web applications, and potentially for microservices"}, 

        //  Trial
        {pc: {r: 103, t: 125}, movement: "c", name: "Kotlin", reason: "Used for a number of internal projects. Looks a good option for JVM development for people more comfortable with C#", topic: "12008290"}, 
        {pc: {r: 132, t: 139}, movement: "t", name: "Gulp", topic: "14740191", reason: "Build system for JS/TS (node) projects. Should go with either this or Grunt"},  
        {pc: {r: 143, t: 120}, movement: "t", name: "TypeScript", reason: "Prefered choice for Angular2 development and SharePoint Framework. Gaining traction in community", topic: "16277404", }, 
        {pc: {r: 160, t: 140}, movement: "c", name: "Angular 2.0", topic: "16277359", reason: "Seems pretty simple and powerful following Matthew George's Show & Tell. Less of a learning curve over React"},
        {pc: {r: 180, t: 125}, movement: "c", name: "Scala", topic: "11449457"}, 
        {pc: {r: 189, t: 137}, movement: "t", name: "Cake (C# Make)",},        
        {pc: {r: 194, t: 167}, movement: "t", name: "Webpack", reason: "Can see obvious potential for prototyping along with React"},

        //  Assess
        {pc: {r: 203, t: 144}, movement: "c", name: "SharePoint framework", topic: "16157669", reason: "New upcoming approach for developing web parts to SharePoint sites"},  
        {pc: {r: 210, t: 115}, movement: "c", name: ".NET Core", topic: "16265842", reason: "Trialling this predominantly with the Travel Desk application in India. Still questions about its maturity, particularly around tooling", investigators: "Dhirajsinh Rajeshirke, Saurabh Soni"}, 
        {pc: {r: 222, t: 159}, movement: "t", name: "React + Redux", topic: "16277357", reason: "Initial thoughts are that Angular 2.0 seems a better fit for our needs, and less learning curve than React"},
        {pc: {r: 233, t: 160}, movement: "c", name: "Flight framework", reason: "New front-end JS framework from Twitter. Seems to be generating some interest. URL: <a href='https://flightjs.github.io/'>https://flightjs.github.io/</a>."},
        {pc: {r: 259, t: 132}, movement: "c", name: "Python", topic: "16322391", reason: "Have seen a number of sales opportunities for Python in the past month"},
        {pc: {r: 268, t: 162}, movement: "c", name: "Symfony", topic: "16422850", reason: "Have seen a number of sales opportunities for PHP and Symfony over the past month"},
        {pc: {r: 270, t: 167}, movement: "t", name: "Thymeleaf", topic: "16277344", reason: "Downgraded due to potentially better JVM MV* frameworks available (like Spark or Grails)"},
        {pc: {r: 274, t: 154}, movement: "c", name: "Ember",}, 
        {pc: {r: 278, t: 127}, movement: "t", name: "Grails",},
        {pc: {r: 280, t: 120}, movement: "t", name: "Spark",},
        {pc: {r: 282, t: 149}, movement: "c", name: "Knockout.js", topic: "17711509"},
        {pc: {r: 285, t: 159}, movement: "t", name: "TestCafe",},
        {pc: {r: 289, t: 127}, movement: "c", name: "Akka",},

        //  Hold 
        {pc: {r: 332, t: 139}, movement: "t", name: "Grunt", topic: "14740191", reason: "Gulp seems to be gaining more traction than Grunt. Gulp now supports sequentially running tasks rendering this less useful."},
        {pc: {r: 370, t: 108}, movement: "c", name: "Ruby-on-Rails",}, 
        {pc: {r: 372, t: 143}, movement: "c", name: "Play Framework", reason: "Massive difficulties deploying this to Azure have put this on hold"},
        {pc: {r: 390, t:  98}, movement: "c", name: "Elixir + Phoenix",}, 
        {pc: {r: 392, t: 166}, movement: "c", name: "LESS (CSS)",}, 
    ]
}, {
    "quadrant": "Platforms", // t 0-90
    "left": (w - 200 + 30),
    "top": 18,
    "color": "#CB6015",
    "items": [
        //  Adopt
        {pc: {r:  22, t:  61}, movement: "c", name: "Azure App Services", topic: "12342594"}, 
        {pc: {r:  57, t:  35}, movement: "c", name: "MariaDB",}, 
        {pc: {r:  73, t:  61}, movement: "c", name: "Joomla!",},
        {pc: {r:  93, t:  58}, movement: "t", name: "VSTS", topic: "11331403", reason: "Successful usage of this for CRM and SharePoint projects. More projects should start adopting this"},

        //  Trial
        {pc: {r: 118, t:  24}, movement: "c", name: "MongoDB", topic: "11449460"}, 
        {pc: {r: 158, t:  21}, movement: "c", name: "Azure SQL",}, 
        {pc: {r: 188, t:  31}, movement: "c", name: "AWS Lambda & Azure Functions", topic: "16277475"},

        //  Assess 
        {pc: {r: 209, t:  68}, movement: "c", name: "Powershell DSC",},
        {pc: {r: 225, t:  38}, movement: "t", name: "Cloud Foundry", reason: "Have seen a number of sales opportunities for Cloud Foundry in the past month"}, 
        {pc: {r: 244, t:  42}, movement: "c", name: "Amazon SNS & SQS",}, 
        {pc: {r: 274, t:  14}, movement: "c", name: "Azure DocumentDB",}, 
        {pc: {r: 283, t:  61}, movement: "c", name: "Drupal 8", reason: "Seen a couple of proposals asking for Drupal experience recently"},
        {pc: {r: 284, t:  78}, movement: "c", name: "Windows Server Nano",}, 
        {pc: {r: 285, t:   5}, movement: "c", name: "Amazon DynamoDB",}, 
        {pc: {r: 296, t:  38}, movement: "c", name: "Azure Notification Hub",}, 

        //  Hold 
        {pc: {r: 354, t:  78}, movement: "c", name: "Windows Server Deployments (for non-.NET developments)",}, 
    ]
}, {
    "quadrant": "Tools", // t 180-270
    "left": 45,
    "top": (h / 2 + 18),
    "color": "#893CA2",
    "items": [
        //  Adopt
        {pc: {r:  20, t: 228}, movement: "c", name: "Git", topic: "12342590"},
        {pc: {r:  62, t: 192}, movement: "c", name: "SurveyMonkey", topic: "16276858"}, 
        {pc: {r:  75, t: 240}, movement: "c", name: "Docker", topic: "14695438", reason: "Seeing many opportunities asking for this, solid usage from internal projects and TEC"}, 
        {pc: {r:  78, t: 208}, movement: "c", name: "Sketch",}, 
        {pc: {r:  88, t: 202}, movement: "c", name: "UXpin",}, 

        //  Trial
        {pc: {r: 123, t: 258}, movement: "c", name: "ELK Stack (ElasticSearch/Logstash/Kibana)", topic: "16322856"}, 
        {pc: {r: 160, t: 185}, movement: "c", name: "Balsamiq",}, 
        {pc: {r: 166, t: 190}, movement: "c", name: "Axure",}, 
        {pc: {r: 167, t: 216}, movement: "c", name: "Loop11",}, 
        {pc: {r: 177, t: 205}, movement: "c", name: "Optimal Workshop",}, 
        {pc: {r: 181, t: 210}, movement: "c", name: "Zoom",}, 
        {pc: {r: 187, t: 215}, movement: "c", name: "InVision App",}, 
        {pc: {r: 192, t: 251}, movement: "t", name: "Rancher", reason: "Looks promising for managing Docker agents/hosts"}, 

        //  Assess
        {pc: {r: 214, t: 261}, movement: "c", name: "Chef",}, 
        {pc: {r: 216, t: 266}, movement: "c", name: "Puppet",}, 
        {pc: {r: 223, t: 220}, movement: "c", name: "Tobii Eyetracker",},
        {pc: {r: 232, t: 184}, movement: "c", name: "Jenkins 2.0", topic: "16322304"}, 
        {pc: {r: 243, t: 258}, movement: "c", name: "New Relic",}, 
        {pc: {r: 250, t: 204}, movement: "c", name: "Protractor",}, 
        {pc: {r: 250, t: 220}, movement: "c", name: "Spectre",}, 
        {pc: {r: 255, t: 189}, movement: "c", name: "Concourse CI",}, 
        {pc: {r: 259, t: 200}, movement: "t", name: "Tenon.io", reason: "Always looking for better tooling for automating Accessibility checking"},  
        {pc: {r: 267, t: 225}, movement: "c", name: "Nuivo (For Qualitative Analysis)",}, 
        {pc: {r: 269, t: 190}, movement: "c", name: "LambdaCD",}, 
        {pc: {r: 270, t: 238}, movement: "c", name: "Applitools",}, 
        {pc: {r: 276, t: 234}, movement: "c", name: "SPSS (For Quantitative Analysis)",}, 
        {pc: {r: 277, t: 220}, movement: "c", name: "Video editing software",},
        {pc: {r: 278, t: 258}, movement: "c", name: "Docker Swarm",}, 
        {pc: {r: 279, t: 253}, movement: "c", name: "Kubernetes", topic: "15585266"}, 
        {pc: {r: 281, t: 210}, movement: "c", name: "Techsmith Morae",},
        {pc: {r: 291, t: 200}, movement: "t", name: "Pa11y", reason: "Always looking for better tooling for automating Accessibility checking"},  
        {pc: {r: 294, t: 240}, movement: "c", name: "BaseCamp",},

        //  Hold
        {pc: {r: 309, t: 215}, movement: "c", name: "JIRA", reason: "VSTS looks to be the future direction for SFW/Civica"}, 
        {pc: {r: 316, t: 259}, movement: "t", name: "Vagrant", reason: "Unsure of the value of this with Docker preferred"},
        {pc: {r: 322, t: 252}, movement: "c", name: "Habitat",}, 
        {pc: {r: 383, t: 228}, movement: "t", name: "Rocket.Chat", topic: "16323383", reason: "Unsure of value add over TFS/VSTS team rooms", investigators: "Richard Press, David Raine"}, 
        {pc: {r: 390, t: 230}, movement: "c", name: "Nightwatch.js",}, 
        {pc: {r: 399, t: 220}, movement: "c", name: "TFVC (except for CRM)", reason: "Microsoft are mainly using Git in-house now. A lack of dogfooding will likely result in lesser suppot for TFVC in the future"}, 
    ]
}, {
    "quadrant": "Approaches", // t 270-360
    "color": "#64B044",
    "left": (w - 200 + 30),
    "top": (h / 2 + 18),
    "items": [
        //  Adopt
        {pc: {r:  44, t: 340}, movement: "c", name: "User-Centred Design",},
        {pc: {r:  47, t: 311}, movement: "c", name: "Responsive Design",}, 
        {pc: {r:  56, t: 281}, movement: "c", name: "BDD",}, 
        {pc: {r:  64, t: 343}, movement: "c", name: "Lean UX",}, 
        {pc: {r:  70, t: 288}, movement: "c", name: "TDD", topic: "11979406"}, 
        {pc: {r:  86, t: 300}, movement: "t", name: "Build and Release Management with TFS/VSTS", reason: "Looks promising, Plaza and Home Office are starting to use this, could be a good way of managing releases to environments", investigators: "Nikhil Patel, Adam Londero"}, 
        {pc: {r:  88, t: 336}, movement: "c", name: "Service Design", topic: "16277562"},
        
        //  Trial
        {pc: {r: 110, t: 325}, movement: "c", name: "Session-Based Testing", topic: "16277512"}, 
        {pc: {r: 152, t: 358}, movement: "c", name: "Micro-service architecture", topic: "15379550"}, 
        {pc: {r: 176, t: 328}, movement: "c", name: "Eye Tracking",},

        //  Assess
        {pc: {r: 247, t: 316}, movement: "c", name: "Reactive Architectures", topic: "14697886"}, 
        {pc: {r: 262, t: 338}, movement: "c", name: "Backend for Front-Ends",}, 
        {pc: {r: 278, t: 325}, movement: "c", name: "Model-Based Testing",},
        {pc: {r: 238, t: 345}, movement: "c", name: "CRM collaborative development without relying on TFVC", reason: "As TFVC may become deprecated, relying on this for locking out areas of a CRM system for development to prevent clashes is risky. Need to come up with an alternative approach"},

        //  Hold 
        {pc: {r: 358, t: 277}, movement: "c", name: "Native Mobile"}, 
        {pc: {r: 368, t: 321}, movement: "t", name: "Big data & Data analytics", reason: "This is one of IPL's strengths, rather than SFW"}, 
        {pc: {r: 386, t: 330}, movement: "c", name: "XAML builds with TFS",}, 
    ]
}];
