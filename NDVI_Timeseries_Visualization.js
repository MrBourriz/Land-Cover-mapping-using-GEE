// Mohamed Bourriz 2023

// You can view both the code and its output by following this link: https://code.earthengine.google.com/44dde53d8effe2220ae07bd0c808f142

//------------------------------------------------------------------------------------------//

// Define the ROI, Emprise, Label, Gradient bar, mask_geom and Author

var Berkane = ee.FeatureCollection("users/bourrizmohamed/Berkane"),
    Emprise = 
    /* color: #98ff00 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-3.0641010008912595, 35.35792203157539],
          [-3.0641010008912595, 34.39807342611826],
          [-1.6303851805787595, 34.39807342611826],
          [-1.6303851805787595, 35.35792203157539]]], null, false),
    label = /* color: #d63000 */ee.Geometry.Point([-2.6012191985945488, 35.24352962249369]),
    GradientBar = 
    /* color: #ffeb00 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-2.1713791107039238, 34.68758264901792],
          [-2.1713791107039238, 34.6288427831603],
          [-2.0175705169539238, 34.6288427831603],
          [-2.0175705169539238, 34.68758264901792]]], null, false),
    mask_geom = /* color: #0b4a8b */ee.Geometry.Polygon(
        [[[-2.3413791345639923, 35.11527527860506],
          [-2.3472558957117484, 35.109494184101536],
          [-2.3609888058679984, 35.09938271578643],
          [-2.386394689657061, 35.08027985363837],
          [-2.389141271688311, 35.074098557944964],
          [-2.3966943722742484, 35.06173456180213],
          [-2.402874181844561, 35.05330349067006],
          [-2.406994054891436, 35.04374722437461],
          [-2.416607092000811, 35.035314296265106],
          [-2.424846838094561, 35.02350673480719],
          [-2.4296533566492484, 35.02069515925489],
          [-2.4420129757898734, 35.00663583130968],
          [-2.439953039266436, 34.99707410788632],
          [-2.4351465207117484, 34.98244813444286],
          [-2.4941980343836234, 34.94193180290252],
          [-2.5381433468836234, 34.927295982805504],
          [-2.612987707235186, 34.91378367736781],
          [-2.645946691610186, 34.87323341527658],
          [-2.6782190304773734, 34.85858534681387],
          [-2.691265295125811, 34.84900635297191],
          [-2.740703771688311, 34.82195376276437],
          [-2.762676427938311, 34.79207286992613],
          [-2.7784692746179984, 34.76105294393491],
          [-2.7963220578211234, 34.75089843555077],
          [-2.801128576375811, 34.74074267848922],
          [-2.7798425656336234, 34.736228607917326],
          [-2.7661096554773734, 34.72719972697286],
          [-2.724224279500811, 34.7283283910318],
          [-2.677532384969561, 34.72155617551774],
          [-2.6411401730554984, 34.72437799940288],
          [-2.599019306458372, 34.723105545544584],
          [-2.575330036438841, 34.73100626163008],
          [-2.5694935496224347, 34.73805983427963],
          [-2.5598805125130597, 34.74313803378407],
          [-2.5488941843880597, 34.74539491115048],
          [-2.530011432923216, 34.745959120857975],
          [-2.5173084910286847, 34.745112804851615],
          [-2.492932575501341, 34.732699173972485],
          [-2.4730198557747785, 34.73975260212848],
          [-2.4706165964974347, 34.73298132265817],
          [-2.442120807923216, 34.69008367014122],
          [-2.4785130198372785, 34.6093080613603],
          [-2.464093464173216, 34.604786821950775],
          [-2.4620335276497785, 34.59856971580182],
          [-2.447613971985716, 34.601960922306205],
          [-2.4125950510872785, 34.6093080613603],
          [-2.3933689768685285, 34.59800450125578],
          [-2.3672764475716535, 34.61608945885704],
          [-2.351483600891966, 34.60761262543176],
          [-2.347363727845091, 34.59687406062518],
          [-2.340497272766966, 34.595743604609986],
          [-2.336377399720091, 34.58896054545599],
          [-2.324017780579466, 34.59800450125578],
          [-2.2381870921029035, 34.61213371097203],
          [-2.2313206370247785, 34.614394161417025],
          [-2.2340672190560285, 34.6189148776476],
          [-2.2587864573372785, 34.645469112430376],
          [-2.2807591135872785, 34.703068202137835],
          [-2.275952595032591, 34.76006311102125],
          [-2.255353229798216, 34.78826386389888],
          [-2.270459430970091, 34.80968998934656],
          [-2.293805378235716, 34.81532751782098],
          [-2.2354405100716535, 34.88689056442404],
          [-2.1502964671029035, 34.83731019308208],
          [-2.124890583313841, 34.85477941548032],
          [-2.111157673157591, 34.8959019658199],
          [-2.076825397766966, 34.9088541235553],
          [-2.058972614563841, 34.91054338482979],
          [-2.0747654612435285, 34.92293023876836],
          [-2.058972614563841, 34.93700393990319],
          [-2.100171345032591, 34.96120505758208],
          [-2.123517292298216, 34.9792105544921],
          [-2.135876911438841, 34.99496211746517],
          [-2.1667759592904035, 35.00452408767732],
          [-2.2066013987435285, 35.03601443853824],
          [-2.219990986145872, 35.051192952377264],
          [-2.214497822083372, 35.08463194281666],
          [-2.274922626770872, 35.100644085028875],
          [-2.3003285105599347, 35.11272133962215],
          [-2.341870563782591, 35.123392772607346]]]),
    Auteur = /* color: #0712d6 */ee.Geometry.Point([-2.9514084075789238, 34.53499870521849]);


//------------------------------------------------------------------------------------------------------//

// Import the data and select the NDVI band

var col = ee.ImageCollection('MODIS/006/MOD13A2').select('NDVI');
Map.centerObject(Berkane,9);
Map.addLayer(Berkane);
// Define a mask to clip the NDVI data by.
var mask =mask_geom

// Define the regional bounds of animation frames.
var region = Emprise;

col = col.map(function(img) {
  var doy = ee.Date(img.get('system:time_start')).getRelative('day', 'year');
  return img.set('doy', doy);
});

var distinctDOY = col.filterDate('2020-01-01', '2023-01-01');
// Define a filter that identifies which images from the complete collection
// match the DOY from the distinct DOY collection.
var filter = ee.Filter.equals({leftField: 'doy', rightField: 'doy'});

// Define a join.
var join = ee.Join.saveAll('doy_matches');

// Apply the join and convert the resulting FeatureCollection to an
// ImageCollection.
var joinCol = ee.ImageCollection(join.apply(distinctDOY, col, filter));
// Apply median reduction among matching DOY collections.
var comp = joinCol.map(function(img) {
  var doyCol = ee.ImageCollection.fromImages(
    img.get('doy_matches')
  );
  return doyCol.reduce(ee.Reducer.median());
});

//RGB visualization parameters.
var visParams = {
  min: 0.0,
  max: 9000.0,
  palette: [
    'FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
    '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
    '012E01', '011D01', '011301'
  ],
};

//color gradient bar with a label.
var style = require('users/gena/packages:style');
var utils = require('users/gena/packages:utils');
var text = require('users/gena/packages:text');


//RGB visualization images for use as animation frames.
var rgbVis = comp.map(function(img) {
var textVis={fontSize: 12, textColor:'ffffff',
             outlineColor:'000000', outlineWidth:1,
             outlineOpacity:0.6};
  //Titre
  var label_title='NDVI Variation';
  var scale=1000;
  Map.addLayer(label);
  var title_text=text.draw(label_title,label,scale,{fontSize: 12});
  
  //Auteur
  var label_name_title="Auteur:Bourriz Mohamed";
  var scale2=550;
  Map.addLayer(Auteur);
  var label_name_text=text.draw(label_name_title,Auteur,scale2,{fontSize: 10});
  
  //Date
  
  var scale1=900;
  var locate= text.getLocation(Emprise,'left','25%','5%');
  var date_label=text.draw(img.get('system:index'),locate,scale1,textVis);
  
  //GradientBar
  Map.addLayer(GradientBar);
   var labels=ee.List.sequence(-1,1);
   var gradientBar=style.GradientBar.draw(GradientBar,{
     min:-1, max:1, palette: visParams.palette, labels: labels,
     format:'%.0f',text:{fontSize:10} });
     
  
  
return img.visualize(visParams).clip(mask).blend(title_text).blend(date_label).blend(gradientBar).blend(label_name_text);
});

// GIF visualization parameters.
var gifParams = {
  'region': region,
  'dimensions': 600,
  'crs': 'EPSG:3857',
  'framesPerSecond': 5
};

//GIF URL to the console.
print(rgbVis.getVideoThumbURL(gifParams));

// GIF animation in the console.
print(ui.Thumbnail(rgbVis, gifParams));
