  document.title = "MoJ DS's Technology Radar (August 16)";

  var radar_arcs = [
  {
    "r": 200,
    "name": "Adopt"
  },
  {
    "r": 300,
    "name": "Trial"
  },
  {
    "r": 400,
    "name": "Assess"
  },
  {
    "r": 500,
    "name": "Hold"
  }
];

  var h = 1000;
  var w = 1200;

  var radar_data = [
  {
    "left": 1030,
    "top": 18,
    "color": "#587486",
    "quadrant": "Languages & Frameworks",
    "items": [
      {
        "name": "Ruby",
        "pc": {
          "r": 151.47777360931124,
          "t": 10
        },
        "movement": null
      },
      {
        "name": "Rails",
        "pc": {
          "r": 146.4216807047184,
          "t": 15
        },
        "movement": null
      },
      {
        "name": "Sinatra",
        "pc": {
          "r": 141.00762351905033,
          "t": 20
        },
        "movement": null
      },
      {
        "name": "Python",
        "pc": {
          "r": 159.67780267660862,
          "t": 25
        },
        "movement": null
      },
      {
        "name": "Django",
        "pc": {
          "r": 140.86648160839377,
          "t": 30
        },
        "movement": null
      },
      {
        "name": "Javascript (vanilla)",
        "pc": {
          "r": 158.14211092732438,
          "t": 35
        },
        "movement": null
      },
      {
        "name": "SASS",
        "pc": {
          "r": 150.61559035570428,
          "t": 40
        },
        "movement": null
      },
      {
        "name": "LESS",
        "pc": {
          "r": 159.1059548539649,
          "t": 45
        },
        "movement": null
      },
      {
        "name": "Universal",
        "pc": {
          "r": 351.3047432968941,
          "t": 50
        },
        "movement": null
      },
      {
        "name": "Angular",
        "pc": {
          "r": 452.7380710673252,
          "t": 55
        },
        "movement": null
      },
      {
        "name": "Java",
        "pc": {
          "r": 455.97766273551184,
          "t": 60
        },
        "movement": null
      },
      {
        "name": "Node",
        "pc": {
          "r": 250.083806147326,
          "t": 65
        },
        "movement": null
      }
    ]
  },
  {
    "color": "#B70062",
    "left": 34,
    "top": 18,
    "quadrant": "Platforms",
    "items": [
      {
        "name": "DS Cloud Platform",
        "pc": {
          "r": 157.91060066081099,
          "t": 100
        },
        "movement": null
      },
      {
        "name": "AWS",
        "pc": {
          "r": 152.0100020627191,
          "t": 107
        },
        "movement": null
      },
      {
        "name": "Google cloud",
        "pc": {
          "r": 356.06559905263333,
          "t": 114
        },
        "movement": null
      },
      {
        "name": "Dais",
        "pc": {
          "r": 349.30674060966857,
          "t": 121
        },
        "movement": null
      },
      {
        "name": "Private cloud",
        "pc": {
          "r": 442.3351884039256,
          "t": 128
        },
        "movement": null
      },
      {
        "name": "Azure ",
        "pc": {
          "r": 257.47765835175585,
          "t": 135
        },
        "movement": null
      },
      {
        "name": "Kubernetes",
        "pc": {
          "r": 245.6195221485471,
          "t": 142
        },
        "movement": null
      },
      {
        "name": "Terraform",
        "pc": {
          "r": 249.0903408334844,
          "t": 149
        },
        "movement": null
      },
      {
        "name": "Heroku",
        "pc": {
          "r": 253.84623592674535,
          "t": 156
        },
        "movement": null
      }
    ]
  },
  {
    "left": 45,
    "top": 518,
    "color": "#DC6F1D",
    "quadrant": "Techniques",
    "items": [
      {
        "name": "Progressive Enhancement",
        "pc": {
          "r": 156.74147057099916,
          "t": 190
        },
        "movement": null
      },
      {
        "name": "Emergent architecture",
        "pc": {
          "r": 149.48588815680284,
          "t": 193
        },
        "movement": null
      },
      {
        "name": "Agile development",
        "pc": {
          "r": 153.6277570729377,
          "t": 196
        },
        "movement": null
      },
      {
        "name": "Microservices",
        "pc": {
          "r": 150.05878700832434,
          "t": 199
        },
        "movement": null
      },
      {
        "name": "Monolith-first",
        "pc": {
          "r": 148.60812847307284,
          "t": 202
        },
        "movement": null
      },
      {
        "name": "Shared sign on",
        "pc": {
          "r": 142.87249506191296,
          "t": 205
        },
        "movement": null
      },
      {
        "name": "BDD",
        "pc": {
          "r": 146.063788156041,
          "t": 208
        },
        "movement": null
      },
      {
        "name": "Agile security",
        "pc": {
          "r": 157.2437734378632,
          "t": 211
        },
        "movement": null
      },
      {
        "name": "Coding in the Open",
        "pc": {
          "r": 156.42240400277214,
          "t": 214
        },
        "movement": null
      },
      {
        "name": "Github Flow",
        "pc": {
          "r": 157.68322470971094,
          "t": 217
        },
        "movement": null
      },
      {
        "name": "Responsive Design",
        "pc": {
          "r": 149.747580356998,
          "t": 220
        },
        "movement": null
      },
      {
        "name": "Fuzz testing",
        "pc": {
          "r": 344.0103486593193,
          "t": 223
        },
        "movement": null
      },
      {
        "name": "Websocket connections into secure networks",
        "pc": {
          "r": 357.0611288014381,
          "t": 226
        },
        "movement": null
      },
      {
        "name": "Serverless infrastructure",
        "pc": {
          "r": 349.2431765082226,
          "t": 229
        },
        "movement": null
      },
      {
        "name": "Single-Page Apps",
        "pc": {
          "r": 440.73383089053686,
          "t": 232
        },
        "movement": null
      },
      {
        "name": "Federated Active Directory auth",
        "pc": {
          "r": 246.57597739408607,
          "t": 235
        },
        "movement": null
      },
      {
        "name": "Exploratory manual testing",
        "pc": {
          "r": 255.58626856077834,
          "t": 238
        },
        "movement": null
      },
      {
        "name": "Continuous service review",
        "pc": {
          "r": 253.0332628101911,
          "t": 241
        },
        "movement": null
      }
    ]
  },
  {
    "color": "#B70062",
    "left": 1030,
    "top": 518,
    "quadrant": "Tools",
    "items": [
      {
        "name": "Docker",
        "pc": {
          "r": 152.43634272726106,
          "t": 280
        },
        "movement": null
      },
      {
        "name": "Gov_uk_elements gem",
        "pc": {
          "r": 140.57549668709947,
          "t": 291
        },
        "movement": null
      },
      {
        "name": "Kontena",
        "pc": {
          "r": 359.6127314624904,
          "t": 302
        },
        "movement": null
      },
      {
        "name": "ITIL",
        "pc": {
          "r": 441.2070827315497,
          "t": 313
        },
        "movement": null
      },
      {
        "name": "Vault",
        "pc": {
          "r": 254.30473911032828,
          "t": 324
        },
        "movement": null
      },
      {
        "name": "Lets Encrypt",
        "pc": {
          "r": 245.27562176309186,
          "t": 335
        },
        "movement": null
      }
    ]
  }
];
