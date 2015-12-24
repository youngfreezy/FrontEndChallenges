
For this exercise, create a jQuery plugin that consumes an HTML table and adds
a "Status" column that marks numbers as "Fizz," "Buzz," "FizzBuzz," or
"Uncool." Then, use that plugin to transform the provided table in index.html.

Numbers that are multiples of three are have a status of "Fizz." Numbers that
are multiples of five have a status of "Buzz." Numbers that are multiples of
both three and five have a status of "FizzBuzz." Numbers that do not match any
of the above conditions have a status of "Uncool."

Although only one table is provided, we should be able to transform multiple
tables if we select them. For this exercise, you can assume all tables will
conform in structure to the one provided: they will have a single column full
of numbers.

Assume this plugin will be used by frontend developers who have a basic
knowledge of how to select items with jQuery and run a plugin against them; the
plugin should be delivered in a way that these developers are able to
understand how to use it immediately. Please place the plugin code in
js/plugins.js and your code to call the plugin in js/scripts.js. Any
dependencies should be placed in js/libs. Any other work product can be placed
in the folder with this readme.