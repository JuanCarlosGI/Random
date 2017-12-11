class SequenceGenerator<T> {
    public ItemGenerator: ItemGenerator<T>; 
    public GenerateSequence(amount: number): T[] {
        var sequence = new Array<T>(amount);
        for (var i = 0; i < amount; i++) {
            sequence[i] = this.ItemGenerator.GenerateItem();
        } 
        return sequence;
    }
}

interface ItemGenerator<T> {
    GenerateItem(): T;
}

class RandomIntegerGenerator implements ItemGenerator<number> {
    private range: number;

    constructor(private min: number, max: number) {
        this.range = max - min + 1; // Inclusive ranges
    }

    GenerateItem(): number {
        return Math.floor(Math.random() * this.range + this.min);
    }
}

function GenerateIntegerSet() {
    var min = parseInt((document.getElementById("intSetMin") as HTMLInputElement).value);
    var max = parseInt((document.getElementById("intSetMax") as HTMLInputElement).value);
    var amount = parseInt((document.getElementById("intSetAmount") as HTMLInputElement).value);
    var result = document.getElementById("intSetResult") as HTMLParagraphElement;

    if (isNaN(min) || isNaN(max) || isNaN(amount)) {
        result.innerText = "Invalid inputs";
        return;
    }

    result.innerText = GenerateSequence(new RandomIntegerGenerator(min, max), amount, ", ");
}

function GenerateSequence(generator: ItemGenerator<any>, amount: number, separator: string): string {
    var sequenceGenerator = new SequenceGenerator<any>();
    sequenceGenerator.ItemGenerator = generator;

    var set = sequenceGenerator.GenerateSequence(amount);
    return set.join(separator);
}