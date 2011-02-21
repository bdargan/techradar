
function polar_to_cartesian(r,t) {  
  var x = r * Math.cos((t*3.14/180));
  var y = r * Math.sin((t*3.14/180));
  return [x,y];
}

function cartesian_to_raster(x,y) {
  var rx = w/2 + x;
  var ry = h/2 + y;
  return [rx,ry];
}

function raster_to_cartesian(rx,ry) {
  var x = rx - w/2;
  var y = ry - h/2;
  return [x,y];
}

function polar_to_raster(r,t) {
  var xy= polar_to_cartesian(r,t);
  return cartesian_to_raster(xy[0], xy[1]);
}

