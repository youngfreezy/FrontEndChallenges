// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f() {
    log.history = log.history || [];
    log.history.push(arguments);
    if (this.console) {
        var args = arguments,
            newarr;
        args.callee = args.callee.caller;
        newarr = [].slice.call(args);
        if (typeof console.log === 'object') log.apply.call(console.log, console, newarr);
        else console.log.apply(console, newarr);
    }
};

// make it safe to use console.log always
(function(a) {
    function b() {}
    for (var c = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), d; !!(d = c.pop());) {
        a[d] = a[d] || b;
    }
})
(function() {
    try {
        console.log();
        return window.console;
    } catch (a) {
        return (window.console = {});
    }
}());


// place any jQuery/helper plugins in here, instead of separate, slower script files.

(function($) {

    $.fn.fizzBuzz = function() {
        var output;
        var firstRow = $('tr:first ');
        var tableRows = this.find('tbody tr');
        // console.log(tableRows);
        // add status column:
        firstRow.append("<td class='TableHeading'><b>Status</b></td>");


        tableRows.each(function() {
            output = "";
            var val = $(this).find('td').text();
            // console.log(val);
            if (val % 3 === 0) {
                output += "Fizz";
            }
            if (val % 5 === 0) {
                output += "Buzz";
            }
            if (output === '') {
                output = 'Uncool';
            }

            $(this).append("<td class='secondCol'>" + output + "</td>");

        });


    };

}(jQuery));