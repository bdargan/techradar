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
// var total_index=1;
// for (var i = 0; i < radar_data.length; i++) {
//     radar.add(pv.Dot)       
//     .def("active", false)
//     .data(radar_data[i].items)
//     .size( function(d) { return ( d.blipSize !== undefined ? d.blipSize : 70 ); })
//     .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
//                         //console.log("name:" + d.name + ", x:" + x); 
//                         return x;})
//     .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];                                 
//                           //console.log("name:" + d.name + ", y:" + y); 
//                           return y;})
//     .title(function(d) { return d.name;})		 
//     .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
//     .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
//     .angle(Math.PI)  // 180 degrees in radians !
//     .strokeStyle(radar_data[i].color)
//     .fillStyle(radar_data[i].color)
//     .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})         
//     .anchor("center")
//         .add(pv.Label)
//         .text(function(d) {return total_index++;}) 
//         .textBaseline("middle")
//         .textStyle("white");            
// }


//Quadrant Ledgends
var radar_quadrant_ctr=1;
var quadrantFontSize = 18;
var headingFontSize = 14;
var stageHeadingCount = 0;
var lastRadius = 0;
var lastQuadrant='';
var spacer = 6;
var fontSize = 10;
var total_index = 1;

//TODO: Super fragile: re-order the items, by radius, in order to logically group by the rings.
for (var i = 0; i < radar_data.length; i++) {
    //adjust top by the number of headings.
    if (lastQuadrant != radar_data[i].quadrant) {
        radar.add(pv.Label)         
            .left( radar_data[i].left )         
            .top( radar_data[i].top )  
            .text(  radar_data[i].quadrant )		 
            .strokeStyle( radar_data[i].color )
            .fillStyle( radar_data[i].color )                    
            .font(quadrantFontSize + "px sans-serif");
         
        lastQuadrant = radar_data[i].quadrant;

    }

    // group items by stage based on how far they are from each arc
    var itemsByStage = _.groupBy(radar_data[i].items, function(item) {
      for(var arc_i = 0; arc_i < radar_arcs.length; arc_i++) {
        if (item.pc.r < radar_arcs[arc_i].r)
        {
          return arc_i;
        }
      }
      return 0;
    });
    
    var offsetIndex = 0;
    for (var stageIdx in _(itemsByStage).keys()) {

        if (stageIdx > 0) {
            offsetIndex = offsetIndex + itemsByStage[stageIdx-1].length + 1; 
            console.log("offsetIndex = " + itemsByStage[stageIdx-1].length, offsetIndex );
        }

        radar.add(pv.Label)         
            .left( radar_data[i].left + headingFontSize )
            .top( radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + (offsetIndex * fontSize) )
            .text( radar_arcs[stageIdx].name)
            .strokeStyle( '#cccccc' )
            .fillStyle( '#cccccc')                    
            .font(headingFontSize + "px Courier New");

    radar.add(pv.Label)             
        .left( radar_data[i].left )         
        .top( radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + (offsetIndex * fontSize) )
        .strokeStyle( radar_data[i].color )
        .fillStyle( radar_data[i].color )                    
        .add( pv.Dot )            
            .def("i", radar_data[i].top + quadrantFontSize + spacer + (stageIdx * headingFontSize) + spacer  + (offsetIndex * fontSize) )
            .data(itemsByStage[stageIdx])            
            .top( function() { return ( this.i() + (this.index * fontSize) );} )   
            .shape( function(d) {return (d.movement === 't' ? "triangle" : "circle");})                 
            .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
            .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
            .size(fontSize) 
            .angle(45)            
            .anchor("right")                
                .add(pv.Label)                
                .text(function(d) {return radar_quadrant_ctr++ + ". " + d.name;} );

    radar.add(pv.Dot)       
      .def("active", false)
      .data(itemsByStage[stageIdx])
      .size( function(d) { return ( d.blipSize !== undefined ? d.blipSize : 70 ); })
      .left(function(d) { var x = polar_to_raster(d.pc.r, d.pc.t)[0];
                          //console.log("name:" + d.name + ", x:" + x); 
                          return x;})
      .bottom(function(d) { var y = polar_to_raster(d.pc.r, d.pc.t)[1];                                 
                            //console.log("name:" + d.name + ", y:" + y); 
                            return y;})
      .title(function(d) { return d.name;})		 
      .cursor( function(d) { return ( d.url !== undefined ? "pointer" : "auto" ); })                                                            
      .event("click", function(d) { if ( d.url !== undefined ){self.location =  d.url}}) 
      .angle(Math.PI)  // 180 degrees in radians !
      .strokeStyle(radar_data[i].color)
      .fillStyle(radar_data[i].color)
      .shape(function(d) {return (d.movement === 't' ? "triangle" : "circle");})         
      .anchor("center")
          .add(pv.Label)
          .text(function(d) {return total_index++;}) 
          .textBaseline("middle")
          .textStyle("white");            


    }
}      
       
 radar.anchor('radar');
 radar.render();
     
  };
