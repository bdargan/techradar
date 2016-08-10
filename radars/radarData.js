//This is the title for your window tab, and your Radar
document.title = "MoJ DS's Technology Radar (August 2016)";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
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
    { "quadrant": "Techniques",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            { name: 'Git flow / Pull Requests ^', pc: { r: 230, t: 133 }, movement: 'c' },
            {"name":"Incremental data warehousing", "pc":{"r":250,"t":165},"movement":"c"},    
            {"name":"Events for messages - CQRS", "pc":{"r":225,"t":120},"movement":"c"},
            {"name":"Measure Pipeline disruptions", "pc":{"r":280,"t":110},"movement":"c"}, 
            {"name":"Continuous Experimentation", "pc":{"r":230,"t":110},"movement":"c"},
            { name: 'Reduce iRules dependence ^', pc: { r: 280, t: 133 }, movement: 'c' },
            {"name":"SaaS for non-core systems", "pc":{"r":170,"t":150},"movement":"c"},   
            {"name":"Pair Programming", "pc":{"r":130,"t":170},"movement":"c"}, 
            {"name":"iOS Accessibility", "pc":{"r":170,"t":110},"movement":"c"},
            {"name":"Single Page App", "pc":{"r":150,"t":95},"movement":"c", "url":"http://www.google.com"},
            {"name":"iOS Adaptivity", "pc":{"r":180,"t":105},"movement":"c"},   
            {"name":"Build Pipelines", "pc":{"r":180,"t":100},"movement":"c"},   
            {"name":"Data Informed Decion Making", "pc":{"r":130,"t":110},"movement":"c"},
            {"name":"Polygot Programming", "pc":{"r":180,"t":170},"movement":"c"},
            { name: 'internal load balancing off F5^', pc: { r: 180, t: 133 }, movement: 'c' },
            {"name":"Isolated dev envs", "pc":{"r":180,"t":125},"movement":"c"},  
            {"name":"Edge Services", "pc":{"r":130,"t":160},"movement":"c"}, 
            {"name":"Clean Code", "pc":{"r":130,"t":120},"movement":"c"},
            {"name":"Wide and Thin Front-Ends", "pc":{"r":180,"t":160},"movement":"c"},
            {"name":"Zookeeper for App Config", "pc":{"r":130,"t":130},"movement":"c"}, 
            {"name":"Property based testing", "pc":{"r":130,"t":165},"movement":"c"},
            {"name":"Evolutionary architecture", "pc":{"r":120,"t":95},"movement":"c"},
            {"name":"Code Reviews", "pc":{"r":110,"t":110},"movement":"c"},
            {"name":"Valuable, cheap tests", "pc":{"r":130,"t":150},"movement":"c"},
            {"name":"Sacrificial Architecture", "pc":{"r":80,"t":100},"movement":"c"},   
            {"name":"Sensible defaults", "pc":{"r":80,"t":150},"movement":"c"},   
            {"name":"Dependency Injection", "pc":{"r":80,"t":130},"movement":"c"},   
            {"name":"Coding architects", "pc":{"r":90,"t":170},"movement":"c"}

        ]
    },
    { "quadrant": "Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 

{ name: 'Docker', pc: { r: 170, t: 19 }, movement: 't' },
  { name: 'bind',    pc: { r: 150, t: 69 },    movement: 'c' },
  { name: 'Appium',    pc: { r: 110, t: 70 },    movement: 'c',    domain: 'mobile, front-end' }, 
 { name: 'Android Studio',    pc: { r: 180, t: 66 },    movement: 'c',    domain: 'mobile, dev' },
  { name: 'Responsive Android',    pc: { r: 150, t: 14 },    movement: 'c' },
  { name: 'AutoLayout - iOS',    pc: { r: 180, t: 55 },    movement: 'c',    domain: '' },
  { name: 'Kiwi - iOS unit test',    pc: { r: 120, t: 14 },    movement: 'c',    domain: '' },
  { name: 'BEM',    pc: { r: 160, t: 60 },    movement: 'c',    domain: 'front-end' },
  { name: 'Crashlytics',    pc: { r: 180, t: 5 },    movement: 'c',    domain: 'mobile' },
  { name: 'Consul',    pc: { r: 170, t: 29 },    movement: 't' }, 
   { name: 'Swagger Code-Gen',    pc: { r: 180, t: 82 },    movement: 'c' },
   { name: 'PowerMock ^',    pc: { r: 180, t: 46 },    movement: 'c' },
   { name: 'Mockito',    pc: { r: 170, t: 84 },    movement: 'c',    domain: 'back-end' },
   { name: 'Json Web Tokens (JWT)',    pc: { r: 180, t: 77 },    movement: 'c' },
   { name: 'Lemming',    pc: { r: 160, t: 82 },    movement: 'c' },
   { name: 'Hystrix',    pc: { r: 150, t: 36 },    movement: 'c' },
  { name: 'Git',    pc: { r: 130, t: 73 },    movement: 'c' },

  { name: 'Ansible',    pc: { r: 280, t: 74 },    movement: 'c' },  
  { name: 'Hip Chat',    pc: { r: 280, t: 78 },    movement: 'c' },
  { name: 'Trello',    pc: { r: 260, t: 75 },    movement: 'c' },
  { name: 'Charles HTTP Proxy',    pc: { r: 260, t: 48 },    movement: 'c' },
  { name: 'Xamarin', pc: { r: 280, t: 51 }, movement: 'c' },
  { name: 'Android Annotations',    pc: { r: 280, t: 25 },    movement: 'c' },
  { name: 'GenyMotion',    pc: { r: 210, t: 31 },    movement: 'c' },

  { name: 'JDBI ^',    pc: { r: 80, t: 56 },    movement: 'c' },
  { name: 'Kafka',    pc: { r: 12, t: 25 },    movement: 'c',    domain: 'back-end' },
  { name: 'ELK',    pc: { r: 30, t: 72 },    movement: 'c',    domain: 'back-end' },
  { name: 'Liquibase',    pc: { r: 80, t: 76 },    movement: 'c' },
  { name: 'haproxy',    pc: { r: 80, t: 46 },    movement: 'c' },

  { name: 'AppManager ^',    pc: { r: 360, t: 82 },    movement: 'c' },
  { name: 'Hibernate ^',    pc: { r: 380, t: 56 },    movement: 'c' },
  { name: 'mongoDB',    pc: { r: 330, t: 5 },    movement: 'c' }, 
  { name: 'Subversion',    pc: { r: 330, t: 18 },    movement: 'c' }
  ]
    },
    { "quadrant": "Platforms",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [

            {"name":"OpenId Connect", "pc":{"r":130,"t":260},"movement":"t"},   
            {"name":"Location based services", "pc":{"r":130,"t":230},"movement":"c"},
            {"name":"Openstack", "pc":{"r":190,"t":190},"movement":"c"},
            {"name":"RHEL 7", "pc":{"r":170,"t":215},"movement":"c"},      

            {"name":"App containers", "pc":{"r":250,"t":260},"movement":"c"},
            {"name":"Google Cloud Data Flow", "pc":{"r":275,"t":260},"movement":"t"},
            { name: 'Postgres as NoSQL',              pc: { r: 220, t: 255 },              movement: 'c' },
            {"name":"AWS 2014 Innovations", "pc":{"r":270,"t":195},"movement":"c"},
            {"name":"Azure", "pc":{"r":290,"t":265},"movement":"c"},   
            { name: 'Mesos',              pc: { r: 260, t: 265 },              movement: 't' },
            { name: 'Marathon',              pc: { r: 240, t: 268 },              movement: 't' },
            { name: 'Kubernetes',              pc: { r: 270, t: 236 },              movement: 't' },
            {"name":"Google App Engine", "pc":{"r":290,"t":255},"movement":"c"},   
            {"name":"Google as corporate platform", "pc":{"r":290,"t":200},"movement":"c"},   


            {"name":"Google Play - (alpha/beta builds)", "pc":{"r":30,"t":225},"movement":"c"},
            {"name":"JVM as platform", "pc":{"r":90,"t":265},"movement":"c"},   
            {"name":"AWS", "pc":{"r":90,"t":250},"movement":"c"},   
            { name: 'BigIP v11',              pc: { r: 50, t: 257 },              movement: 'c' },



            {"name":"Ruby On Rails", "pc":{"r":390,"t":215},"movement":"c"},
            {"name":"Everest", "pc":{"r":390,"t":185},"movement":"c"},   
            {"name":"Magnolia CMS", "pc":{"r":390,"t":235},"movement":"c"},   
            {"name":"Java EE - the Bad Parts", "pc":{"r":390,"t":245},"movement":"c"},   
            {"name":"MS SqlServer", "pc":{"r":390,"t":190},"movement":"c"},
            {"name":"RHEL 5", "pc":{"r":370,"t":195},"movement":"c"}

        ]
    },
    { "quadrant": "Languages & Frameworks",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'CDI', pc: { r: 60, t: 290 },  movement: 'c' },
            { name: 'Jersey', pc: { r: 60, t: 310 },  movement: 'c' },

            { name: 'Guice', pc: { r: 60, t: 278 },  movement: 'c' },
            { name: 'RxJava', pc: { r: 150, t: 298 },              movement: 'c',  domain: 'template' },          

            {"name":"Java 8", "pc":{"r":130,"t":355},"movement":"c"},   
            {"name":"Groovy ^", "pc":{"r":190,"t":280},"movement":"c"},

            {"name":"Swift", "pc":{"r":280,"t":300},"movement":"c"},
            {"name":"Scala - the good parts ^", "pc":{"r":290,"t":320},"movement":"c"},   
            {"name":"Serverside Javascript", "pc":{"r":220,"t":275},"movement":"c"},   
            {"name":"Coffeescript", "pc":{"r":270,"t":282},"movement":"c"},
            {"name":"Functional Reactive Programming", "pc":{"r":285,"t":330},"movement":"c"},   
            {"name":"Clojure", "pc":{"r":280,"t":310},"movement":"c"},
            { name: 'RxJs',              pc: { r: 250, t: 338 },              movement: 'c',              domain: 'template' },
            { name: 'Web Components', pc: { r: 260, t: 330 },  movement: 'c' },

            { name: 'Mustache/Handlebars template',   pc: { r: 50, t: 298 },              movement: 'c',              domain: 'template' },
            { name: 'Spring ^', pc: { r: 360, t: 330 },  movement: 'c' },
            {"name":"Web Objects", "pc":{"r":390,"t":290},"movement":"c"},
            {"name":"ASP Classic", "pc":{"r":375,"t":330},"movement":"c"},
            {"name":"Java 6 and earlier", "pc":{"r":390,"t":350},"movement":"c"}
        ]
    }
];
