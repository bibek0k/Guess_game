const words = [
    'Apple', 'Ant', 'Axe', 'Arrow', 'Angel', 'Anchor', 'Almond', 'Apron', 'Airport', 'Art',
    'Banana', 'Ball', 'Bat', 'Bear', 'Boat', 'Book', 'Bottle', 'Bread', 'Butterfly', 'Bridge',
    'Cat', 'Car', 'Cake', 'Chair', 'Clock', 'Cloud', 'Cup', 'Coat', 'Camera', 'Crayon',
    'Dog', 'Duck', 'Drum', 'Door', 'Doll', 'Desk', 'Diamond', 'Dolphin', 'Dragon', 'Dress',
    'Elephant', 'Egg', 'Eagle', 'Ear', 'Engine', 'Envelope', 'Earth', 'Eye', 'Elbow', 'Eskimo',
    'Fish', 'Fan', 'Fork', 'Frog', 'Fox', 'Feather', 'Fire', 'Flower', 'Flag', 'Forest',
    'Goat', 'Giraffe', 'Guitar', 'Gold', 'Grass', 'Garden', 'Glove', 'Gate', 'Ghost', 'Gem',
    'Hat', 'Horse', 'House', 'Hammer', 'Hand', 'Helicopter', 'Heart', 'Hill', 'Honey', 'Hut',
    'Ice', 'Igloo', 'Iron', 'Insect', 'Island', 'Ink', 'Ivy', 'Instrument', 'Idea', 'Item',
    'Jacket', 'Jaguar', 'Jelly', 'Jeep', 'Jewel', 'Jar', 'Jet', 'Jigsaw', 'Juice', 'Jungle',
    'Kite', 'Key', 'Kangaroo', 'King', 'Kitchen', 'Knife', 'Kettle', 'Kiwi', 'Knee', 'Knot',
    'Lion', 'Lamp', 'Leaf', 'Lemon', 'Laptop', 'Ladder', 'Lake', 'Lace', 'Ladybug', 'Lava',
    'Monkey', 'Moon', 'Map', 'Mouse', 'Milk', 'Mountain', 'Magnet', 'Mirror', 'Mushroom', 'Mango',
    'Nest', 'Nail', 'Nose', 'Nut', 'Net', 'Notebook', 'Necklace', 'Needle', 'Night', 'Navy',
    'Owl', 'Orange', 'Oven', 'Octopus', 'Oyster', 'Olive', 'Orchid', 'Onion', 'Ox', 'Oil',
    'Pencil', 'Parrot', 'Piano', 'Pizza', 'Penguin', 'Pillow', 'Plant', 'Plate', 'Peach', 'Pear',
    'Queen', 'Quilt', 'Quail', 'Quartz', 'Quiver', 'Question', 'Quiet', 'Quick', 'Quench', 'Quote',
    'Rabbit', 'Rainbow', 'Ring', 'Rocket', 'Rose', 'River', 'Radio', 'Robot', 'Ruler', 'Road',
    'Sun', 'Star', 'Snake', 'Spoon', 'Socks', 'Sand', 'Shell', 'Ship', 'Seal', 'Sky',
    'Tiger', 'Tree', 'Train', 'Tomato', 'Turtle', 'Table', 'Truck', 'Towel', 'Tent', 'Teapot',
    'Umbrella', 'Unicorn', 'Uniform', 'Urn', 'Uncle', 'Ukulele', 'Unicycle', 'Universe', 'Utensil', 'Upgrade',
    'Vase', 'Violin', 'Vulture', 'Van', 'Violet', 'Village', 'Voice', 'Vehicle', 'Vegetable', 'Victory',
    'Whale', 'Wolf', 'Wagon', 'Wind', 'Water', 'Wheel', 'Window', 'Wood', 'Wrench', 'Wire',
    'Xylophone', 'Xray', 'Xerox', 'Xmas', 'Xenon', 'Xylem', 'Xenophobia', 'Xenolith', 'Xenial', 'Xanthic',
    'Yak', 'Yarn', 'Yacht', 'Yam', 'Yellow', 'Yawn', 'Yogurt', 'Yoke', 'Year', 'Yard',
    'Zebra', 'Zoo', 'Zipper', 'Zucchini', 'Zone', 'Zap', 'Zephyr', 'Zinc', 'Zombie', 'Zigzag', 'Nigger'
];


const startbutton = document.getElementById("start-button")
const endbutton = document.getElementById("end-button")
const start = document.querySelector(".start")
const end = document.querySelector(".end")
const game = document.querySelector(".game")
const word = document.getElementById("word")
const instruction = document.getElementById("in")
const Top = document.getElementById("top")
let hearts = 3;
let score = 0;
let currenWord = "";

startbutton.addEventListener("click", () => {
    game.classList.remove("hidden")
    start.classList.add("hidden")
    instruction.classList.add("hidden")
    Top.classList.remove("hidden")
    console.log(Math.floor(Math.random() *200))
    currenWord = words[Math.floor(Math.random() *200)] 
    word.textContent = currenWord.split('').sort (() => Math.random() - 0.5).join('')
})

endbutton.addEventListener("click", () => {
    game.classList.remove("hidden")
    end.classList.add("hidden")
    console.log(Math.floor(Math.random() *200))
    currenWord = words[Math.floor(Math.random() *200)] 
    word.textContent = currenWord.split('').sort (() => Math.random() - 0.5).join('')
})


const guess_btn = document.getElementById("guess-button");
const guess = document.getElementById("guess");
const heartsContainer = document.getElementById("hearts-container");
const Score = document.getElementById("score");

function updateHearts() {
    heartsContainer.textContent = "❤️".repeat(hearts); 
}


function updateScore() {
    Score.textContent = `Score: ${score}`;
}

guess_btn.addEventListener("click", () => {
    if (guess.value == currenWord) {
        alert("Right choice");
        score += 1;
        updateScore(); 
        currenWord = words[Math.floor(Math.random() * 200)];
        word.textContent = currenWord.split('').sort(() => Math.random() - 0.5).join('');
    } else if (hearts == 0) {
        alert("Game Over");
        game.classList.add("hidden");
        end.classList.remove("hidden");
    } else {
        hearts -= 1; 
        updateHearts();
        alert("Wrong Choice");
        currenWord = words[Math.floor(Math.random() * 200)];
        word.textContent = currenWord.split('').sort(() => Math.random() - 0.5).join('');
    }
});