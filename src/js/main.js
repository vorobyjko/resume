/**
 * Created by kostiantyn.bogapov on 12/14/2015.
 */


var a = 1;

function getFunc() {
    var a = 2;

    var func = function() { alert(a); };

    return func;
}
