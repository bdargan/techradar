function init(h,w) {

 document.getElementById('title').text = radar_title;

  
 var radar = new pv.Panel()
      .width(w)
      .height(h)
      .canvas('radar')
      // .add(pv.Panel)
     .add(pv.Dot)
       .def("active", false)
       .data(radar_data)
       .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
              console.log("name:" + d.name + ", x:" + x); return x;})
         .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];                                 
                  console.log("name:" + d.name + ", y:" + y); return y;})
         .title(function(d) { return d.name;})
         .angle(45)
         .fillStyle("#aec7e8")
         .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})
         // .event("mouseover", function() {this.fillStyle("orange");})
         // .event("mouseout", function() {this.fillStyle("#aec7e8");})         
         .anchor("top").add(pv.Label)
             .text(function(d) {return this.index + 1 + ".";}) 
             .textBaseline("left");

             // .fillStyle("#aec7e8")

             // .add(pv.Panel)
             //   .def("active", false)
             // .fillStyle(function() {this.parent.active() ? "orange" : "#aec7e8";})
             //   .event("mouseover", function() {this.parent.active(true);})
             //   .event("mouseout", function() {this.parent.active(false);})         

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
         .text(radar_quadrants[0].name)
         .font("18px sans-serif");
  
    radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[0].start,radar_quadrants[0].end)) 
        .left(5) 
        .top(function() {return (36 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})        
        .fillStyle("#aec7e8") 
      .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + ". " + d.name;} );

    radar.anchor("left").add(pv.Label)
         .left(5)
         .top(h/2 + 18)
         .fillStyle("#aec7e8") 
         .text(radar_quadrants[2].name)
         .font("18px sans-serif");

    radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[2].start,radar_quadrants[2].end)) 
        .left(5) 
        .top(function() {return ((h/2) + 36 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})        
        .fillStyle("#aec7e8") 
      .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + radar_quadrants[2].start + ". " + d.name;} );


  radar.anchor("left").add(pv.Label)
       .left(w-200+30)  
       .top(18)
       .text(radar_quadrants[1].name)
       .font("18px sans-serif");
      

  radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[1].start,radar_quadrants[1].end)) 
        .left(w-200+30) 
        .top(function() {return (36 + this.index * 18);}) 
        .size(8)
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})         
        .strokeStyle(null) 
        .fillStyle("#aec7e8")         
        .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + radar_quadrants[1].start + ". " + d.name;} );

  radar.anchor("left").add(pv.Label)
       .left(w-200+30)
       .top(h/2 + 18)
       .fillStyle("#aec7e8") 
       .text(radar_quadrants[3].name)
       .font("18px sans-serif");

    radar.add(pv.Dot) 
        .data(radar_data.slice(radar_quadrants[3].start,radar_quadrants[3].end)) 
        .left(w-200+30) 
        .top(function() {return ((h/2) + 36 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})        
        .fillStyle("#aec7e8") 
        .anchor("right").add(pv.Label).text(function(d) {return this.index + 1 + radar_quadrants[3].start + ". " + d.name;} );

//arcs
radar.add(pv.Dot)
       .data(radar_arcs)
       .left(w/2)
       .bottom(h/2)
       .radius(function(d){return d.r;})
       .strokeStyle("#ccc")
       .anchor("top")       
       .add(pv.Label).text(function(d) { return d.name;});


//quadrant lines
radar.add(pv.Line)
        .data([(h/2-radar_arcs[3].r),h-(h/2-radar_arcs[3].r)])
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