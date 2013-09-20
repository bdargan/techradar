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

var numberOfQuadrants = radar_data.length;
var step = 360/radar_data.length;
var outerWidth = radar_arcs[radar_arcs.length-1].r;

for (var i=0;i<=numberOfQuadrants;++i) {
   radar.add(pv.Line)
     .data([0,step*i])
     .lineWidth(1)
     .top(function(d) { return d===0 ? h/2 : h/2 + Math.cos(pv.radians(d)) * outerWidth; })
     .left(function(d) { return d===0 ? w/2 : w/2 + Math.sin(pv.radians(d)) * outerWidth; })
     .strokeStyle("#bbb");
}

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
    .anchor("center")
        .add(pv.Label)
        .text(function(d) {return total_index++;}) 
        .textBaseline("middle")
        .textStyle("white");            
}


//Quadrant Ledgends
var radar_quadrant_ctr=1;
for (var i = 0; i < radar_data.length; i++) {        
    radar.add(pv.Label)         
         .left( radar_data[i].left )         
         .top( radar_data[i].top )  
         .text(  radar_data[i].quadrant )		 
         .strokeStyle( radar_data[i].color )
         .fillStyle( radar_data[i].color )                    
         .font("18px sans-serif")
            .add( pv.Dot )            
            .def("i", radar_data[i].top )
            .data(radar_data[i].items)            
            .top( function() { return ( this.i() + 18 + this.index * 18 );} )   
            .shape( function(d) {return (d.movement === 't' ? "triangle" : "circle");})                 
            .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
            .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
            .size(10) 
            .angle(45)            
            .anchor("right")                
                .add(pv.Label)                
                .text(function(d) {return radar_quadrant_ctr++ + ". " + d.name;} );
}      
       
 radar.anchor('radar');
 radar.render();
     
  };