/* Author:
Fareez Ahmed
*/





$(document).ready( function() {
	//this will select all tables on the page by default.
	//simply call the plugin on the selected table(s).  
    $('table').fizzBuzz();

    //if you want to filter tables before selecting:
    // $('table').filter( function() { ... } );
    //or:
    // $("table:has(td:first:contains('mytext'))")


});