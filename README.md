An alternative Technology Radar inspired by the [ThoughtWorks Tech Radar](http://www.thoughtworks.com/radar/).

This Technology Radar has pretty simple functionality, uses json data source and renders SVG within html.

The data currently is provided in a radial format. I chose this and SVG, for the scalable properties. In practice, a table based structure, that automatically lays out the points could be more useful.

e.g. 

```js
{name: 'Cool Tech', r: 50, t: 30}
```

Appears in the Top Right Quadrant, in the inner most "Adopt" Sector.

e.g. 

```js
{name: 'Bright Shiny Toy 5', r: 390, t: 30}
```

Appears in the Top Right Quadrant, in the outer most "Hold" Sector.

Where r = radius, and t = theta; the degrees in radians. with 0/360 degrees being the typical right hand x line rotating in an anti-clockwise direction.

See http://en.wikipedia.org/wiki/Polar_coordinates for more details.
