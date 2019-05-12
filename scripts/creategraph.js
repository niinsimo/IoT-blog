$( document ).ready(function() {
    var canvas1 = document.getElementById("graphdiv1")
     g3 = new Dygraph(canvas1, "../data/test.csv", 
    {showRangeSelector: true,
    colors: ["cyan", "fuchsia"]
    }); 
    
    g1 = new Dygraph(document.getElementById("graphdiv2"), "../data/test.csv", {
        showRangeSelector:true,
        drawPoints: true,
        strokeWidth: 0,
        pointSize: 5
    });
    g2 = new Dygraph(document.getElementById("graphdiv3"), "../data/valgus.csv", {
        showRangeSelector:true,
        plotter:barChartPlotter
    });
    g4 = new Dygraph(document.getElementById("graphdiv4"), "../data/test.csv", {
        series: {
            "tase": {
              strokeWidth: 2
            },
            "niiskus": {
              plotter: barChartPlotter
            }
          }
    });
});

function barChartPlotter(e){
    var ctx = e.drawingContext;
    var points = e.points;
    var y_bottom = e.dygraph.toDomYCoord(0);


    var min_sep = Infinity;
    for (var i = 1; i < points.length; i++) {
      var sep = points[i].canvasx - points[i - 1].canvasx;
      if (sep < min_sep) min_sep = sep;
    }
    var bar_width = Math.floor(2.0 / 3 * min_sep);

    for (var i = 0; i < points.length; i++) {
      var p = points[i];
      var center_x = p.canvasx;

      ctx.fillRect(center_x - bar_width / 2, p.canvasy,
          bar_width, y_bottom - p.canvasy);

      ctx.strokeRect(center_x - bar_width / 2, p.canvasy,
          bar_width, y_bottom - p.canvasy);
    }
}

$("#getimage1").click(function() {
    var canvas = $( "canvas" )[0]
    
    var photo = canvas.toDataURL('image/jpeg');                
    $.ajax({
      method: 'POST',
      url: 'photo_upload.php',
      data: {
        photo: photo
      }
    });
    
});

$("#getimage2").click(function() {
    console.log($( "canvas" ))
    var canvas = $( "canvas" )[4]
    
    var photo = canvas.toDataURL('image/jpeg');                
    $.ajax({
      method: 'POST',
      url: 'photo_upload.php',
      data: {
        photo: photo
      }
    });
    
});
$("#getimage3").click(function() {
    var canvas = $( "canvas" )[9]
    console.log(canvas);
    
    var photo = canvas.toDataURL('image/jpeg');                
    $.ajax({
      method: 'POST',
      url: 'photo_upload.php',
      data: {
        photo: photo
      }
    });
    
});
$("#getimage4").click(function() {
    var canvas = $( "canvas" )[12]
    console.log(canvas);
    
    var photo = canvas.toDataURL('image/jpeg');                
    $.ajax({
      method: 'POST',
      url: 'photo_upload.php',
      data: {
        photo: photo
      }
    });
    
});
