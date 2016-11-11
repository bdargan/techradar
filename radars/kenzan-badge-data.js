document.title = "Kenzan's Technology Radar (December 2016)";


//This is the concentic circles that want on your radar
var radar_arcs = [
  {'r':100,'name':'Not Yet Tested'}
  ,{'r':200,'name':'Beginner'}
  ,{'r':300,'name':'Intermediate'}
  ,{'r':400,'name':'Expert'}
  ,{'r':500,'name':'Mentor'}
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
      { name: 'REST Webservices', pc: { r: 230, t: 133 }, movement: 'c' },
      {"name":"Object Oriented Development", "pc":{"r":250,"t":165},"movement":"c"},
      {"name":"Top Down Designing", "pc":{"r":225,"t":120},"movement":"c"},
      {"name":"Structural Programming", "pc":{"r":280,"t":110},"movement":"c"},
      {"name":"Procedural Programming", "pc":{"r":230,"t":110},"movement":"c"},
      { name: 'TCP', pc: { r: 280, t: 133 }, movement: 'c' },
      {"name":"Long Polling", "pc":{"r":170,"t":150},"movement":"c"},
      {"name":"Web Sockets", "pc":{"r":130,"t":170},"movement":"c"},
      {"name":"SOAP Webservices", "pc":{"r":170,"t":110},"movement":"c"},
      {"name":"Modular Design", "pc":{"r":150,"t":95},"movement":"c", "url":"http://www.google.com"},
      {"name":"Bottom Up Designing", "pc":{"r":180,"t":105},"movement":"c"},
      {"name":"Video Streaming and DRM", "pc":{"r":180,"t":100},"movement":"c"},
      {"name":"PCI Compliance", "pc":{"r":130,"t":110},"movement":"c"},
      {"name":"Polling", "pc":{"r":180,"t":170},"movement":"c"},
      { name: 'Server Sent Events (SSE)', pc: { r: 180, t: 133 }, movement: 'c' },

    ]
  },
  { "quadrant": "Tools",
    "left": w-200+30,
    "top" : 18,
    "color" : "#587486",
    "items" : [

      { name: 'npm', pc: { r: 170, t: 19 }, movement: 't' },
      { name: 'Swagger',    pc: { r: 150, t: 69 },    movement: 'c' },
      { name: 'Node.js',    pc: { r: 110, t: 70 },    movement: 'c',    domain: 'mobile, front-end' },
      { name: 'Yeoman',    pc: { r: 180, t: 66 },    movement: 'c',    domain: 'mobile, dev' },
      { name: 'Git',    pc: { r: 150, t: 14 },    movement: 'c' },
      { name: 'Grunt',    pc: { r: 180, t: 55 },    movement: 'c',    domain: '' },
      { name: 'Gulp',    pc: { r: 120, t: 14 },    movement: 'c',    domain: '' },
      { name: 'Edda',    pc: { r: 160, t: 60 },    movement: 'c',    domain: 'front-end' },
      { name: 'JW Player',    pc: { r: 180, t: 5 },    movement: 'c',    domain: 'mobile' },
      { name: 'Cassandra',    pc: { r: 170, t: 29 },    movement: 't' },
      { name: 'PhantomJS',    pc: { r: 180, t: 82 },    movement: 'c' },
      { name: 'MongoDB',    pc: { r: 180, t: 46 },    movement: 'c' },
      { name: 'Drupal',    pc: { r: 170, t: 84 },    movement: 'c',    domain: 'back-end' },
      { name: 'RxJS',    pc: { r: 180, t: 77 },    movement: 'c' },
      { name: 'JaxB',    pc: { r: 160, t: 82 },    movement: 'c' },
      { name: 'Falcor',    pc: { r: 150, t: 36 },    movement: 'c' },
      { name: 'KSS Styleguide',    pc: { r: 130, t: 73 },    movement: 'c' },
      { name: 'SC5 Styleguide',    pc: { r: 280, t: 74 },    movement: 'c' },
      { name: 'AsciiDoc',    pc: { r: 280, t: 78 },    movement: 'c' },
      { name: 'Istanbul',    pc: { r: 260, t: 75 },    movement: 'c' },
      { name: 'Splunk',    pc: { r: 260, t: 48 },    movement: 'c' },
      { name: 'Jasmine', pc: { r: 280, t: 51 }, movement: 'c' },
      { name: 'JUnit',    pc: { r: 280, t: 25 },    movement: 'c' },
      { name: 'Karma',    pc: { r: 210, t: 31 },    movement: 'c' },
      { name: 'Mocha / Chai',    pc: { r: 80, t: 56 },    movement: 'c' },
      { name: 'Sinon',    pc: { r: 12, t: 25 },    movement: 'c',    domain: 'back-end' },
      { name: 'Modernizr',    pc: { r: 30, t: 72 },    movement: 'c',    domain: 'back-end' },
      { name: 'Kubernetes',    pc: { r: 80, t: 76 },    movement: 'c' },
      { name: 'WebPack',    pc: { r: 80, t: 46 },    movement: 'c' },
      { name: 'JSPM',    pc: { r: 360, t: 82 },    movement: 'c' },
      { name: 'Browserify',    pc: { r: 380, t: 56 },    movement: 'c' },
      { name: 'jQuery',    pc: { r: 330, t: 5 },    movement: 'c' },
      { name: 'Lodash',    pc: { r: 330, t: 18 },    movement: 'c' },
      { name: 'Pug (formally Jade)',    pc: { r: 330, t: 18 },    movement: 'c' },
      { name: 'Mustache',    pc: { r: 330, t: 18 },    movement: 'c' },
      { name: 'Chromecast',    pc: { r: 330, t: 18 },    movement: 'c' },
      { name: 'Bourbon',    pc: { r: 330, t: 18 },    movement: 'c' },
      { name: 'Browsersync',    pc: { r: 330, t: 18 },    movement: 'c' },
      { name: 'Susy Grid System',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Compass',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Bootstrap',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Material Design',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Angular Material',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Omniture',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Springboot',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Akka',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Protractor',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Hive',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Hadoop',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Storm',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Graylog',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'ElasticSearch',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Logstash',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Kibana',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Postman',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Newman',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'JMeter',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Selenium',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Terraform',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Grafana',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'InfluxDB',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Consul',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'CloudFormation',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Zookeeper',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Spark',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Spock',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Ansible',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Locust',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Gatling',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'AppDynamics',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Redis',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'etcd',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'EVCache',    pc: { r: 330, t: 18 },    movement: 'c'},
      { name: 'Memcache',    pc: { r: 330, t: 18 },    movement: 'c'}
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
