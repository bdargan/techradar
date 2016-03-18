Build Your Own Technology Radar.

Inspired by the ThoughtWorks Tech Radar: http://www.thoughtworks.com/radar/.

I love the ThoughtWorks Radar. But it is for all clients, averaged out across industries, organisational maturity and risk adverseness.

![Technology Radar Sample](/techradar_example.png?raw=true)

It is a powerful talking point, but I need it to be customised for particular circumstances.

This Technology Radar has pretty simple functionality, uses json data source and renders SVG within html.

The data currently is provided in a radial format. I chose this and SVG, for the scalable properties. In practice, a table based structure, that automatically lays out the points could be more useful.

Eg. {name:'Cool Tech', r:50, t:30}
Appears in the Top Right Quadrant, in the inner most "Adopt" Sector.

Eg. {name:'Bright Shiny Toy 5', r:390, t:30}
Appears in the Top Right Quadrant, in the outer most "Hold" Sector.

Appears in the Lower Left Quadrant, in the second "Trial" Sector.

Where r = radius, and t = theta; the degrees in radians. with 0/360 degrees being the typical right hand x line rotating in an anti-clockwise direction.

See http://en.wikipedia.org/wiki/Polar_coordinates for more details.

## Similar Projects

[andyw8/techradar](https://github.com/andyw8/techradar) (the Rails app behind [techradar.io](http://techradar.io).
