document.title = "Kenzan's Technology Radar (December 2016)";

//This is the concentic circles that want on your radar
var radar_arcs = [
  { 'r': 100, 'name': 'Not Yet Tested' },
  { 'r': 200, 'name': 'Beginner' },
  { 'r': 300, 'name': 'Intermediate' },
  { 'r': 400, 'name': 'Expert' }
  //, {'r':500,'name':'Mentor'}
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

var h = 2000;
var w = 1200;

var radar_data = [
  {
    quadrant: 'Techniques',
    left: 45,
    top: 18,
    color: '#8FA227',
    items: [
      { name: 'REST Webservices', pc: { r: 0, t: 133 }, movement: 'c' },
      { name: 'Object Oriented Development', pc: { r: 0, t: 165 }, movement: 'c' },
      { name: 'Top Down Designing', pc: { r: 0, t: 120 }, movement: 'c' },
      { name: 'Structural Programming', 'pc': { r: 0, 'c': 110 }, 'movement': 'c' },
      { name: 'Procedural Programming', 'pc': { r: 0, 'c': 110 }, 'movement': 'c' },
      { name: 'TCP', pc: { r: 0, t: 133 }, movement: 'c' },
      { name: 'Long Polling', 'pc': { r: 0, 'c': 150 }, movement: 'c' },
      { name: 'Web Sockets', 'pc': { r: 0, 'c': 170 }, movement: 'c' },
      { name: 'SOAP Webservices', 'pc': { r: 0, 'c': 110 }, movement: 'c' },
      { name: 'Modular Design', 'pc': { r: 0, 'c': 95 }, movement: 'c', 'url': 'http://www.google.com' },
      { name: 'Bottom Up Designing', 'pc': { r: 0, 'c': 105 }, movement: 'c' },
      { name: 'Video Streaming and DRM', 'pc': { r: 0, 'c': 100 }, movement: 'c' },
      { name: 'PCI Compliance', 'pc': { r: 0, 'c': 0 }, movement: 'c' },
      { name: 'Polling', 'pc': { r: 0, 'c': 170 }, movement: 'c' },
      { name: 'Server Sent Events (SSE)', pc: { r: 0, t: 133 }, movement: 'c' }
    ]
  },

  {
    quadrant: 'Tools',
    left: w - 200 + 30,
    top: 18,
    color: '#587486',
    items: [
      { name: 'npm', pc: { r: 0, t: 19 }, movement: 'c' },
      { name: 'Swagger', pc: { r: 0, t: 69 }, movement: 'c' },
      { name: 'Node.js', pc: { r: 0, t: 70 }, movement: 'c', domain: 'mobile, front-end' },
      { name: 'Yeoman', pc: { r: 0, t: 66 }, movement: 'c', domain: 'mobile, dev' },
      { name: 'Git', pc: { r: 0, t: 14 }, movement: 'c' },
      { name: 'Grunt', pc: { r: 0, t: 55 }, movement: 'c', domain: '' },
      { name: 'Gulp', pc: { r: 0, t: 14 }, movement: 'c', domain: '' },
      { name: 'Edda', pc: { r: 0, t: 60 }, movement: 'c', domain: 'front-end' },
      { name: 'JW Player', pc: { r: 0, t: 5 }, movement: 'c', domain: 'mobile' },
      { name: 'Cassandra', pc: { r: 0, t: 29 }, movement: 't' },
      { name: 'PhantomJS', pc: { r: 0, t: 82 }, movement: 'c' },
      { name: 'MongoDB', pc: { r: 0, t: 46 }, movement: 'c' },
      { name: 'Drupal', pc: { r: 0, t: 84 }, movement: 'c', domain: 'back-end' },
      { name: 'RxJS', pc: { r: 0, t: 77 }, movement: 'c' },
      { name: 'JaxB', pc: { r: 0, t: 82 }, movement: 'c' },
      { name: 'Falcor', pc: { r: 0, t: 36 }, movement: 'c' },
      { name: 'KSS Styleguide', pc: { r: 0, t: 73 }, movement: 'c' },
      { name: 'SC5 Styleguide', pc: { r: 0, t: 74 }, movement: 'c' },
      { name: 'AsciiDoc', pc: { r: 0, t: 78 }, movement: 'c' },
      { name: 'Istanbul', pc: { r: 0, t: 75 }, movement: 'c' },
      { name: 'Splunk', pc: { r: 0, t: 48 }, movement: 'c' },
      { name: 'Jasmine', pc: { r: 0, t: 51 }, movement: 'c' },
      { name: 'JUnit', pc: { r: 0, t: 25 }, movement: 'c' },
      { name: 'Karma', pc: { r: 0, t: 31 }, movement: 'c' },
      { name: 'Mocha / Chai', pc: { r: 0, t: 56 }, movement: 'c' },
      { name: 'Sinon', pc: { r: 0, t: 25 }, movement: 'c', domain: 'back-end' },
      { name: 'Modernizr', pc: { r: 0, t: 72 }, movement: 'c', domain: 'back-end' },
      { name: 'Kubernetes', pc: { r: 0, t: 76 }, movement: 'c' },
      { name: 'WebPack', pc: { r: 0, t: 46 }, movement: 'c' },
      { name: 'JSPM', pc: { r: 0, t: 82 }, movement: 'c' },
      { name: 'Browserify', pc: { r: 0, t: 56 }, movement: 'c' },
      { name: 'jQuery', pc: { r: 0, t: 5 }, movement: 'c' },
      { name: 'Lodash', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Pug / Jade', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Mustache', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Chromecast', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Bourbon', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Browsersync', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Susy Grid System', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Compass', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Bootstrap', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Material Design', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Angular Material', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Omniture', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Springboot', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Akka', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Protractor', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Hive', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Hadoop', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Storm', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Graylog', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'ElasticSearch', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Logstash', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Kibana', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Postman', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Newman', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'JMeter', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Selenium', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Terraform', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Grafana', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'InfluxDB', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Consul', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'CloudFormation', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Zookeeper', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Spark', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Spock', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Ansible', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Locust', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Gatling', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'AppDynamics', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Redis', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'etcd', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'EVCache', pc: { r: 0, t: 18 }, movement: 'c' },
      { name: 'Memcache', pc: { r: 0, t: 18 }, movement: 'c' }
    ]
  },

  {
    quadrant: "Platforms",
    left: 45,
    top: (h / 2 + 18),
    color: "#DC6F1D",
    items: [
      { name: 'Docker', pc: { r: 0, t: 260 }, movement: 'c' },
      { name: 'Maven', pc: { r: 0, t: 230 }, movement: 'c' },
      { name: 'Asgard', pc: { r: 0, t: 190 }, movement: 'c' },
      { name: 'Eureka', pc: { 'r': 0, 'c': 215 }, movement: 'c' },
      { name: 'Zuul', pc: { 'r': 0, 'c': 260 }, movement: 'c' },
      { name: 'Bower', pc: { 'r': 0, 'c': 260 }, movement: 'c' },
      { name: 'Gradle', pc: { r: 0, t: 255 }, movement: 'c' },
      { name: 'Nexus', pc: { 'r': 0, 'c': 195 }, movement: 'c' },
      { name: 'Vagrant', pc: { 'r': 0, 'c': 265 }, movement: 'c' },
      { name: 'Homebrew', pc: { r: 0, t: 265 }, movement: 'c' },
      { name: 'Jenkins', pc: { r: 0, t: 268 }, movement: 'c' },
      { name: 'Spinnaker', pc: { r: 0, t: 236 }, movement: 'c' },
      { name: 'Varnish', pc: { 'r': 0, 'c': 255 }, movement: 'c' },
      { name: 'ElastiCache', pc: { 'r': 0, 'c': 200 }, movement: 'c' }
    ]
  },

  {
    quadrant: 'Languages & Frameworks',
    color: '#B70062',
    left: (w - 200 + 30),
    top: (h / 2 + 18),
    items: [
      { name: 'Redux', pc: { r: 0, t: 260 }, movement: 'c' },
      { name: 'React.js', pc: { r: 0, t: 230 }, movement: 'c' },
      { name: 'HTML5', pc: { r: 0, t: 190 }, movement: 'c' },
      { name: 'Angular 2.0', pc: { r: 0, 'c': 215 }, movement: 'c' },
      { name: 'JS ES5', pc: { r: 0, 'c': 260 }, movement: 'c' },
      { name: 'Express.js', pc: { r: 0, 'c': 260 }, movement: 'c' },
      { name: 'Actionscript', pc: { r: 0, t: 255 }, movement: 'c' },
      { name: 'Dart', pc: { r: 0, 'c': 195 }, movement: 'c' },
      { name: 'Objective C', pc: { r: 0, 'c': 265 }, movement: 'c' },
      { name: 'Android', pc: { r: 0, t: 265 }, movement: 'c' },
      { name: 'Ionic', pc: { r: 0, t: 268 }, movement: 'c' },
      { name: 'Linux Shell', pc: { r: 0, t: 236 }, movement: 'c' },
      { name: 'Python', pc: { r: 0, 'c': 255 }, movement: 'c' },
      { name: 'PHP', pc: { r: 0, 'c': 200 }, movement: 'c' },
      { name: 'Java', pc: { r: 0, t: 290 }, movement: 'c' },
      { name: 'Ribbon', pc: { r: 0, t: 310 }, movement: 'c' },
      { name: 'Hystrix', pc: { r: 0, t: 278 }, movement: 'c' },
      { name: 'CQL', pc: { r: 0, t: 298 }, movement: 'c', domain: 'template' },
      { name: 'SQL', pc: { r: 0, 'c': 355 }, movement: 'c' },
      { name: 'ARIA', pc: { r: 0, 'c': 280 }, movement: 'c' },
      { name: 'Archaius', pc: { r: 0, 'c': 300 }, movement: 'c' },
      { name: 'XSLT', pc: { r: 0, 'c': 320 }, movement: 'c' },
      { name: 'Grails', pc: { r: 0, 'c': 275 }, movement: 'c' },
      { name: 'CSS', pc: { r: 0, 'c': 282 }, movement: 'c' },
      { name: 'Sass', pc: { r: 0, 'c': 330 }, movement: 'c' },
      { name: 'LESS', pc: { r: 0, 'c': 310 }, movement: 'c' },
      { name: 'JS ES6', pc: { r: 0, t: 338 }, movement: 'c', domain: 'template' },
      { name: 'TypeScript', pc: { r: 0, t: 330 }, movement: 'c' },
      { name: 'Angular 1.x', pc: { r: 0, t: 298 }, movement: 'c', domain: 'template' },
      { name: 'GWT', pc: { r: 0, t: 330 }, movement: 'c' },
      { name: 'Groovy', pc: { r: 0, 'c': 290 }, movement: 'c' },
      { name: 'Scala', pc: { r: 0, 'c': 350 }, movement: 'c' }
    ]
  }
];
