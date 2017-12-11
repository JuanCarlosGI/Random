var SequenceGenerator = /** @class */ (function () {
    function SequenceGenerator() {
    }
    SequenceGenerator.prototype.GenerateSequence = function (amount) {
        var sequence = new Array(amount);
        for (var i = 0; i < amount; i++) {
            sequence[i] = this.ItemGenerator.GenerateItem();
        }
        return sequence;
    };
    return SequenceGenerator;
}());
var RandomIntegerGenerator = /** @class */ (function () {
    function RandomIntegerGenerator(min, max) {
        this.min = min;
        this.range = max - min + 1; // Inclusive ranges
    }
    RandomIntegerGenerator.prototype.GenerateItem = function () {
        return Math.floor(Math.random() * this.range + this.min);
    };
    return RandomIntegerGenerator;
}());
function GenerateIntegerSet() {
    var min = parseInt(document.getElementById("intSetMin").value);
    var max = parseInt(document.getElementById("intSetMax").value);
    var amount = parseInt(document.getElementById("intSetAmount").value);
    var result = document.getElementById("intSetResult");
    if (isNaN(min) || isNaN(max) || isNaN(amount)) {
        result.innerText = "Invalid inputs";
        return;
    }
    result.innerText = GenerateSequence(new RandomIntegerGenerator(min, max), amount, ", ");
}
function GenerateSequence(generator, amount, separator) {
    var sequenceGenerator = new SequenceGenerator();
    sequenceGenerator.ItemGenerator = generator;
    var set = sequenceGenerator.GenerateSequence(amount);
    return set.join(separator);
}
//# sourceMappingURL=Index.js.map