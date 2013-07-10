function init(h,w) {
  $('#title').text(document.title);  
	   
 var radar = new pv.Panel()
      .width(w)
      .height(h)
      .canvas('radar')

// arcs
radar.add(pv.Dot)
       .data(radar_arcs)
       .left(w/2)
       .bottom(h/2)
       .radius(function(d){return d.r;})
       .strokeStyle("#ccc")
       .anchor("top")       
       .add(pv.Label).text(function(d) { return d.name;});

//quadrant lines -- vertical
radar.add(pv.Line)
        .data([(h/2-radar_arcs[radar_arcs.length-1].r),h-(h/2-radar_arcs[radar_arcs.length-1].r)])
        .lineWidth(1)
        .left(w/2)        
        .bottom(function(d) {return d;})       
        .strokeStyle("#bbb");

//quadrant lines -- horizontal 
radar.add(pv.Line)
        .data([(w/2-radar_arcs[radar_arcs.length-1].r),w-(w/2-radar_arcs[radar_arcs.length-1].r)])
        .lineWidth(1)
        .bottom(h/2)
        .left(function(d) {return d;})       
        .strokeStyle("#bbb");


// blips
var total_index=1;
for (var i = 0; i < radar_data.length; i++) {
    radar.add(pv.Dot)       
    .def("active", false)
    .data(radar_data[i].items)
    .size( function(d) { return ( d.blipSize !== undefined ? d.blipSize : 70 ); })
    .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
                        console.log("name:" + d.name + ", x:" + x); 
                        return x;})
    .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];                                 
                          console.log("name:" + d.name + ", y:" + y); 
                          return y;})
    .title(function(d) { return d.name;})		 
    .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
    .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
    .angle(45)
    .strokeStyle(radar_data[i].color)
    .fillStyle(radar_data[i].color)
    .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})         
    .anchor("center").add(pv.Label)
        .text(function(d) {return total_index++;}) 
        .textBaseline("middle")
        .textStyle("white");            
}



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

var radar_quadrant_ctr=1;
    radar.add(pv.Label)
         .left(45)
         .top(18)
         .fillStyle("#aec7e8") 
         .text(radar_data[0].quadrant)		 
         .font("18px sans-serif");		 
  
    radar.add(pv.Dot) 
        .data(radar_data[0].items) 
        .left(5) 
        .top(function() {return (36 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})        
        .fillStyle("#aec7e8") 
        .anchor("right").add(pv.Label)						
			.text(function(d) {return radar_quadrant_ctr++ + ". " + d.name;} );

  radar.anchor("left").add(pv.Label)
       .left(w-200+30)  
       .top(18)
       .text(radar_data[1].quadrant)
       .font("18px sans-serif");
      

  radar.add(pv.Dot) 
        .data(radar_data[1].items) 
        .left(w-200+30) 
        .top(function() {return (36 + this.index * 18);}) 
        .size(8)
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})         
        .strokeStyle(null) 
        .fillStyle("#aec7e8")  				
        .anchor("right").add(pv.Label).text(function(d) {return radar_quadrant_ctr++ + ". " + d.name;} );

    radar.anchor("left").add(pv.Label)
         .left(5)
         .top(h/2 + 18)
         .fillStyle("#aec7e8") 
         .text(radar_data[2].quadrant)
         .font("18px sans-serif");

    radar.add(pv.Dot) 
        .data(radar_data[2].items) 
        .left(5) 
        .top(function() {return ((h/2) + 36 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})        
        .fillStyle("#aec7e8") 
      .anchor("right").add(pv.Label).text(function(d) {return radar_quadrant_ctr++ + ". " + d.name;} );

  radar.anchor("left").add(pv.Label)
       .left(w-200+30)
       .top(h/2 + 18)
       .fillStyle("#aec7e8") 
       .text(radar_data[3].quadrant)
       .font("18px sans-serif");

    radar.add(pv.Dot) 
        .data(radar_data[3].items) 
        .left(w-200+30) 
        .top(function() {return ((h/2) + 36 + this.index * 18);}) 
        .size(8) 
        .strokeStyle(null) 
        .angle(45)
        .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})        
        .fillStyle("#aec7e8") 
        .anchor("right").add(pv.Label).text(function(d) {return radar_quadrant_ctr++ + ". " + d.name;} );

       
 radar.anchor('radar');
 radar.render();
     
  };