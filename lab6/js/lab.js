//
//Author: Ayokemi Popoola <apopoola@csumb.edu>
// Created: September 20th


// Define Variables
myTransport = [" Volkswagon", " legs "];

myMainRide = {
  make: "Volkswagon",
  model: "Tiguan",
  color: "Black",
  year: 2013,
}

// output
document.writeln("My myTransportation: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
document.writeln("The age of my ",myMainRide.model, " is ", myMainRide.age(),"year.");
