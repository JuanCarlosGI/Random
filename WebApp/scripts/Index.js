var IntegerSetGenerator = /** @class */ (function () {
    function IntegerSetGenerator() {
    }
    IntegerSetGenerator.prototype.GenerateSequence = function (minValue, maxValue, amount) {
        var result = [];
        var min = Math.floor(minValue);
        var max = Math.floor(maxValue);
        var interval = max - min;
        for (var i = 0; i < amount; i++) {
            result.push(Math.floor(Math.random() * interval + min));
        }
        return result;
    };
    return IntegerSetGenerator;
}());
var integerGenerator = new IntegerSetGenerator();
function GenerateIntegerSet() {
    var min = parseFloat(document.getElementById("intSetMin").value);
    var max = parseFloat(document.getElementById("intSetMax").value);
    var amount = parseInt(document.getElementById("intSetAmount").value);
    var result = document.getElementById("intSetResult");
    GenerateNumberSet(min, max, amount, integerGenerator, function (s) {
        result.innerText = s;
    });
}
function GenerateNumberSet(min, max, amount, generator, callback) {
    var set = generator.GenerateSequence(min, max, amount);
    callback(set.join(", "));
}
//# sourceMappingURL=Index.js.map