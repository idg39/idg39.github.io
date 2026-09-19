// user_name = window.prompt("Please enter your name", "Type your name here");
// document.write(user_name);

function welcome() {
  let a = "Please enter your name.";
  let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page
  user_name = window.prompt(a, b);
  message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
  return message
}

var webmaps =
[
  ["Zillow", "https://www.zillow.com/", "Zillow is an example of web mapping. It is made with the primary purpose of giving data about homes and apartments to potential buyers and renters. Its strengths are that it is easy to access and as it is the arguably the most popular version of a home browsing website on the market it has almost all available deals."],
  ["ArcGIS Online", "https://www.arcgis.com/index.html", "ArcGIS Online is an example of web mapping. It was made with the primary purpose of acting as a depository of GIS data for use by anybody. Its strengths are that the it has been that largest depository for a while now and thus serves as aa majorly large and helpful source of data."]
];

function webmap_table() {
    document.write('<table width="100%">');
    for (var row = 0; row < webmaps.length; row++) {
        if (row % 2 == 0) {
            document.write('<tr>');
            document.write('<td>' + webmaps[row] + '</td>');
            document.write('<td align="right">' + webmaps[row] + '</td>');
            document.write('</tr>');
        } else {
            document.write('<tr>');
            document.write('<td>' + webmaps[row] + '</td>');
            document.write('<td align="right">' + webmaps[row] + '</td>');
            document.write('</tr>');
        }
    }
    document.write('</table>');
    return;
}
