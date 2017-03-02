//This is the title for your window tab, and your Radar
document.title = "Customer Domain Technology Radar";


//This is the concentic circles that want on your radar
var radar_arcs = [
    { 'r': 200, 'name': 'Adopt' }
    , { 'r': 300, 'name': 'Trial' }
    , { 'r': 360, 'name': 'Assess' }
    , { 'r': 400, 'name': 'Hold' }
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

var h = 1100;
var w = 1200;

var radar_data = [
    {
        "quadrant": "Techniques",
        "left": 45,
        "top": 18,
        "color": "#8FA227",
        "items": [
            { "name": "Git flow", "pc": { "r": 160, "t": 100 }, "movement": "c" },
            { "name": "RESTful Web Services", "pc": { "r": 140, "t": 150 }, "movement": "c" },
            { "name": "Feature Toggle", "pc": { "r": 160, "t": 130 }, "movement": "c" },
            { "name": "JMS", "pc": { "r": 180, "t": 150 }, "movement": "c" },
            { "name": "JPA", "pc": { "r": 180, "t": 170 }, "movement": "c" },
            { "name": "Test Driven Development", "pc": { "r": 100, "t": 140 }, "movement": "c" },
            { "name": "Behavior Driven Development", "pc": { "r": 100, "t": 160 }, "movement": "c" },
            { "name": "Pair Programming", "pc": { "r": 100, "t": 110 }, "movement": "c" },

            { "name": "NoSQL", "pc": { "r": 270, "t": 150 }, "movement": "c" },
            { "name": "DevOps", "pc": { "r": 250, "t": 170 }, "movement": "c" },

            { name: 'Contract Testing', pc: { r: 340, t: 133 }, movement: 'c' },

            { name: 'SOAP', pc: { r: 390, t: 133 }, movement: 'c' }

        ]
    },
    {
        "quadrant": "Tools",
        "left": w - 200 + 30,
        "top": 18,
        "color": "#587486",
        "items": [
            { name: 'Go CD', pc: { r: 40, t: 76 }, movement: 'c' },
            { name: 'Ansible', pc: { r: 90, t: 8 }, movement: 'c' },
            { name: 'Git', pc: { r: 80, t: 46 }, movement: 'c' },
            { name: 'Squirrel', pc: { r: 160, t: 33 }, movement: 'c' },
            { name: 'HornetQ', pc: { r: 110, t: 46 }, movement: 'c' },
            { name: 'Bitronix', pc: { r: 180, t: 70 }, movement: 'c' },
            { name: 'Hystrix', pc: { r: 186, t: 83 }, movement: 'c' },
            { name: 'Ensighten', pc: { r: 180, t: 10 }, movement: 'c' },
            { name: 'Gradle', pc: { r: 60, t: 6 }, movement: 'c' },
            { name: 'Swagger', pc: { r: 168, t: 58 }, movement: 'c' },
            { name: 'Splunk', pc: { r: 140, t: 60 }, movement: 'c' },
            { name: 'SOAP UI', pc: { r: 146, t: 84 }, movement: 'c' },
            { name: 'Hermes', pc: { r: 120, t: 65 }, movement: 'c' },
            { name: 'Postman', pc: { r: 140, t: 73 }, movement: 'c' },
            { name: 'Gatlin', pc: { r: 120, t: 11 }, movement: 'c' },
            { name: 'Easy Mock', pc: { r: 148, t: 17 }, movement: 'c' },
            { name: 'JUnit', pc: { r: 120, t: 30 }, movement: 'c' },
            { name: 'JBehave', pc: { r: 24, t: 25 }, movement: 'c', domain: 'back-end' },
            { name: 'Selenium Web Driver', pc: { r: 60, t: 72 }, movement: 'c', domain: 'back-end' },

            { name: 'RxJava', pc: { r: 260, t: 14 }, movement: 'c' },
            { name: 'jQuery', pc: { r: 285, t: 19 }, movement: 'c' },
            { name: 'LiquiBase', pc: { r: 270, t: 60 }, movement: 'c', domain: 'front-end' },
            { name: 'JMeter', pc: { r: 290, t: 55 }, movement: 'c', domain: '' },
            { name: 'Spock', pc: { r: 230, t: 14 }, movement: 'c', domain: '' },
            { name: 'Velocity', pc: { r: 290, t: 5 }, movement: 'c', domain: 'mobile' },
            { name: 'Cucumber', pc: { r: 260, t: 69 }, movement: 'c' },
            { name: 'Mockito', pc: { r: 220, t: 70 }, movement: 'c', domain: 'mobile, front-end' },
            { name: 'Moco', pc: { r: 290, t: 66 }, movement: 'c', domain: 'mobile, dev' },

            { name: 'Node', pc: { r: 340, t: 15 }, movement: 'c' },
            { name: 'Flyway', pc: { r: 340, t: 78 }, movement: 'c' },
            { name: 'Eclipse', pc: { r: 330, t: 44 }, movement: 'c' },

            { name: 'iBatis', pc: { r: 380, t: 82 }, movement: 'c' },
            { name: 'Subversion', pc: { r: 380, t: 56 }, movement: 'c' },
            { name: 'Maven', pc: { r: 370, t: 5 }, movement: 'c' }  
        ]
    },
    {
        "quadrant": "Platforms",
        "left": 45,
        "top": (h / 2 + 18),
        "color": "#DC6F1D",
        "items": [
            { "name": "AWS", "pc": { "r": 60, "t": 225 }, "movement": "c" },
            { "name": "JVM as platform", "pc": { "r": 73, "t": 200 }, "movement": "c" },
            { "name": "Tomcat", "pc": { "r": 180, "t": 250 }, "movement": "c" },
            { "name": 'PostgreSQL', "pc": { r: 100, t: 257 }, "movement": 'c' },

            { "name": "Redis", "pc": { "r": 260, "t": 240 }, "movement": "c" },

            { "name": "WebSphere", "pc": { "r": 340, "t": 245 }, "movement": "c" },
            { "name": "Oracle", "pc": { "r": 350, "t": 210 }, "movement": "c" },

            { "name": "DB2", "pc": { "r": 390, "t": 185 }, "movement": "c" },
            { "name": "JBoss AS", "pc": { "r": 390, "t": 215 }, "movement": "c" },

        ]
    },
    {
        "quadrant": "Lang & Frameworks",
        "color": "#B70062",
        "left": (w - 200 + 30),
        "top": (h / 2 + 18),
        "items": [
            { name: 'Java 8', pc: { r: 120, t: 290 }, movement: 'c' },
            { name: 'Groovy', pc: { r: 120, t: 310 }, movement: 'c' },
            { name: 'PL/SQL', pc: { r: 120, t: 278 }, movement: 'c' },
            { name: 'Spring Boot', pc: { r: 40, t: 320 }, movement: 'c', domain: 'template' },
            { name: 'Spring Batch', pc: { r: 160, t: 320 }, movement: 'c', domain: 'template' },
            { name: 'JavaScript', pc: { r: 160, t: 298 }, movement: 'c', domain: 'template' },
            { name: 'Bootstrap', pc: { r: 100, t: 335 }, movement: 'c', domain: 'template' },
            { name: 'StyleGuide', pc: { r: 70, t: 335 }, movement: 'c', domain: 'template' },
            { name: 'YAML', pc: { r: 100, t: 298 }, movement: 'c', domain: 'template' },

            { "name": "Scala", "pc": { "r": 240, "t": 355 }, "movement": "c" },
            { "name": "Shell Script", "pc": { "r": 300, "t": 280 }, "movement": "c" },

            { "name": "AngularJS", "pc": { "r": 340, "t": 300 }, "movement": "c" },

            { name: 'Spring MVC', pc: { r: 390, t: 280 }, movement: 'c' },
            { "name": "JSP", "pc": { "r": 380, "t": 315 }, "movement": "c" },
        ]
    }
];
