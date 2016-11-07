#SFW's Technology Radar.

Inspired by the ThoughtWorks Tech Radar: http://www.thoughtworks.com/radar/. Forked from @bdargan's implementation, after reading the post here http://nealford.com/memeagora/2013/05/28/build_your_own_technology_radar.html

The latest radar can be found at http://sfwtechradar.azurewebsites.net/

This Technology Radar has pretty simple functionality, uses json data source and renders SVG within html.

The data currently is provided in a radial format. I chose this and SVG, for the scalable properties. In practice, a table based structure, that automatically lays out the points could be more useful.

Eg. {name:'Cool Tech', r:50, t:30}
Appears in the Top Right Quadrant, in the inner most "Adopt" Sector.

Eg. {name:'Bright Shiny Toy 5', r:390, t:30}
Appears in the Top Right Quadrant, in the outer most "Hold" Sector.

Appears in the Lower Left Quadrant, in the second "Trial" Sector.

Where r = radius, and t = theta; the degrees in radians. with 0/360 degrees being the typical right hand x line rotating in an anti-clockwise direction.

See http://en.wikipedia.org/wiki/Polar_coordinates for more details.
