function init(w,h) {
 var radar = new pv.Panel()
      .width(w)
      .height(h)
      .canvas('radar')
     .add(pv.Dot)
         .data(radar_data)
         .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];   console.log("name:" + d.name + ", x:" + x); return x;})
         .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1]; console.log("name:" + d.name + ", y:" + y); return y;})
         .title(function(d) { return d.name;})
         .shape("circle")
         .fillStyle("#aec7e8")
         .anchor("top").add(pv.Label)
             .text(function(d) {return this.index + 1 + ".";}) 
             .textBaseline("left");

//awwma ro ocwel6.
function draw_legend(quad, left, top) {

  radar.add(pv.Label)
       .left(qleft)
       .top(qtop -18)
       .anchor("left")
       .add(pv.Label)
             .text(quad.name)
             .font('24pt');
  var t = radar_data.slice(quad.start,quad.end);
  
  radar.add(pv.Dot) 
      .data(t) 
      .left(qleft) 
      .top(function() {return (qtop + (this.index * 18));}) 
      .size(8) 
      .strokeStyle(null) 
      .fillStyle("#aec7e8") 
    .anchor("right")
          .add(pv.Label)
          .text(function(d) {return (quad.start + 1 + this.index) + ". " + d.name;} );
}
/*
//race conditions?
for (var i = 0; i < radar_quadrants.length; i++) {
  var qleft = 5 + (1020 * ((i+1) % 2));
  var qtop = 36 + (500 * (i > 1 ? 1: 0));
  var quad = radar_quadrants[i];
  radar.add(pv.Dot)
      .strokeStyle(null)
      .left(5)
  
  draw_legend(quad, qleft, qtop);
  
} */            

    radar.add(pv.Label)
         .left(45)
         .top(18)
         .fillStyle("#aec7e8") 
         .text("Technique")
         .font("18px sans-serif");
  
    radar.add(pv.Dot) 
        .data(radar_data.slice(0,17)) 
        .left(5) 
        .top(function() {return (36 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .fillStyle("#aec7e8") 
      .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + ". " + d.name;} );

    radar.anchor("left").add(pv.Label)
         .left(5)
         .top(h/2 + 18)
         .fillStyle("#aec7e8") 
         .text("Platforms")
         .font("18px sans-serif");


    radar.add(pv.Dot) 
        .data(radar_data.slice(46,71)) 
        .left(5) 
        .top(function() {return (536 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .fillStyle("#aec7e8") 
      .anchor("right").add(pv.Label).text(function(d) {return this.index + 47 + ". " + d.name;} );


  radar.anchor("left").add(pv.Label)
       .left(w-200+30)  
       .top(18)
       .text("Tools")
       .font("18px sans-serif");
      

  radar.add(pv.Dot) 
        .data(radar_data.slice(17,35)) 
        .left(w-200+30) 
        .top(function() {return (36 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .fillStyle("#aec7e8") 
        .anchor("right").add(pv.Label).text(function(d) {return this.index + 18 + ". " + d.name;} );

  radar.anchor("left").add(pv.Label)
       .left(w-200+30)
       .top(h/2 + 18)
       .fillStyle("#aec7e8") 
       .text("Languages")
       .font("18px sans-serif");

    radar.add(pv.Dot) 
        .data(radar_data.slice(35,46)) 
        .left(w-200+30) 
        .top(function() {return (536 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .fillStyle("#aec7e8") 
        .anchor("right").add(pv.Label).text(function(d) {return this.index + 36 + ". " + d.name;} );

radar.add(pv.Dot)
       .data(radar_arcs)
       .left(w/2)
       .bottom(h/2)
       .radius(function(d){return d.s;})
       .strokeStyle("#ccc")
       .anchor("top")       
       .add(pv.Label).text(function(d) { return d.name;});

radar.add(pv.Line)
        .data([100,h-100])
        .lineWidth(1)
        .left(w/2)        
        .bottom(function(d) {return d;})       
        .strokeStyle("#bbb");

radar.add(pv.Line)
                .data([200,w-200])
                .lineWidth(1)
                .bottom(h/2)
                .left(function(d) {return d;})       
                .strokeStyle("#bbb");
       
 radar.anchor('radar');
 radar.render();
     
  };