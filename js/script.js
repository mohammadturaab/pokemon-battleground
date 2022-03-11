/*
What I need
I need an object:
    In the object is going to be 6 pokemon
    Each pokemons with have a set HP, Attack, Heal, Defend, and Special Power(Attack)
Use an event listener to see if the user wants to play that game
    if yes = true - start game function
    else - say come again soon
if the user selects yes
    Player selection:
        -selects character or random selection
        -make selection == playersSelection
        -click next
    CPU selection:
        -player select character or random selection
        -make selection == cpuSelection
        -click Let's battle
Once all the characters are selected it ready to battle
    Battle:
        -Player always goes first
            -if player attacks - CPU loses HP
            -if player defends && if CPU attacks - CPU attack will not count AKA Attack Missed
            -if player heals - players HP will go up number of heal points cannot go over 100HP
            -SpecialPower{
                specialpower will be double the attack amount
                will be available after 3 turns
                special power can only be used once
        -CPU goes next
                CPU will randomly select between 1 to 3 to select its attack, heal, or defend
                after 3 turns cpus special ability is available.
    if playerHealth and cpuHealth != 0{
        continue
    }
    eles if (playerHealth === 0 || cpuHealth === 0){
        endgame function
    }
    endgame function
    Whoever HP <= 0: they lose for opposite player wins
    After battles is over:
        Have a rematch button to return to match
        or restart button to select characters again
        }
    Question:
    Is it better to make multiple pages of the screens or how I am doing it?
    Also if I do it this why and have to use my object how to connect the selection to the object? Would it be by the name like if object === 'eevee' {playerselection === character[eevee]}
*/
const character = [
    eevee = {
        characterName: "Eevee",
        hp: 50,
        attack: 20,
        heal: 20,
        defend: true,
        specialPower: 20,
        image: '/assests/eevee.png',
    },
    bulbasaur = {
        characterName: "Bulbasaur",
        hp: 50,
        attack: 16,
        heal: 17,
        defend: true,
        specialPower: 25,
        image: '/assests/bulbasaur.png',
    },
    charmander = {
        characterName: "Charmander",
        hp: 50,
        attack: 17,
        heal: 16,
        defend: true,
        specialPower: 28,
        image: '/assests/charmander.png',
    },
    geodude = {
        characterName: "Geodude",
        hp: 50,
        attack: 19,
        heal: 12,
        defend: true,
        specialPower: 23,
        image: '/assests/geodude.png',
    },
    pikachu = {
        characterName: "Pikachu",
        hp: 50,
        attack: 14,
        heal: 15,
        defend: true,
        specialPower: 30,
        image: '/assests/pikachu.png',
    },
    squirtle = {
        characterName: "Squirtle",
        hp: 50,
        attack: 13,
        heal: 12,
        defend: true,
        specialPower: 21,
        image: '/assests/squirtle.png',
    },
]



let playerSelection = {};
let cpuSelection = {};
let playerMove = "";
let cpuMove = "";

const startScreen = () => {
$(".yes_square").on('click', function (e) {
    e.preventDefault();
    $(".title").html("Select Character");
    $(".yes_square").remove();
    $(".no_square").remove();
    $(".rule_list").remove();
    $(".question").remove();
    const $characters = $('<div class="character-grid"></div>');
    $characters.prepend('<img id="Eevee" src="/assests/eevee.png">');
    $characters.prepend('<img id="Bulbasaur" src="/assests/bulbasaur.png">');
    $characters.prepend('<img id="Charmander" src="/assests/charmander.png">');
    $characters.prepend('<img id="Geodude" src="/assests/geodude.png">');
    $characters.prepend('<img id="Pikachu" src="/assests/pikachu.png">');
    $characters.prepend('<img id="Squirtle" src="/assests/squirtle.png">');
    $characters.insertAfter($('.title'));
    playerSelecting();
});
}

startScreen();

const playerSelecting = () => {
    $('body').on('click', function (e) {
        if (e.target.tagName != 'IMG') {
            return;
        };
        //once event is clicked the bottom code will run to show pokemon attributes
        for (let i = 0; i < character.length; i++) {
            if (character[i].characterName === e.target.id) {
                $('body').unbind();
                const $characterSelected = $('<div class="character-info"></div>');
                $characterSelected.append(`<p class="p-info">Name: ${character[i].characterName}`);
                $characterSelected.append(`<p class="p-info">HP: ${character[i].hp}`);
                $characterSelected.append(`<p class="p-info">Attack: ${character[i].attack}`);
                $characterSelected.append(`<p class="p-info">Heal: ${character[i].heal}`);

                $characterSelected.insertAfter($('.character-grid'));
                const $useCharacter = $('<div class="use-character"></div');
                $useCharacter.append('<button id="yes-use-character">USE</button>');
                $('body').on('click', '#yes-use-character', function () {
                    playerSelection = character[i];
                    $characterSelected.remove();
                    $useCharacter.remove();
                    $('body').unbind();
                    cpuSelector();
                    $(".title").html("Select CPU Character");
                })
                $useCharacter.append('<button id="no-use-character">SWITCH</button>');
                $("body").on('click', '#no-use-character', function () {
                    $characterSelected.remove();
                    $useCharacter.remove();
                    $('body').bind('click', playerSelecting());
                })
                $useCharacter.insertAfter($('.character-info'));
            }
    }
});
    
}
const cpuSelector = () => {
    $('body').on('click', function (e) {
        if (e.target.tagName != 'IMG') {
            return;
        };

        for (let i = 0; i < character.length; i++) {
            if (character[i].characterName === e.target.id) {
                $('body').unbind();
                const $characterSelected = $('<div class="character-info"></div>');
                $characterSelected.append(`<p class="p-info">Name: ${character[i].characterName}`);
                $characterSelected.append(`<p class="p-info">HP: ${character[i].hp}`);
                $characterSelected.append(`<p class="p-info">Attack: ${character[i].attack}`);
                $characterSelected.append(`<p class="p-info">Heal: ${character[i].heal}`);

                $characterSelected.insertAfter($('.character-grid'));
                const $useCharacter = $('<div class="use-character"></div');
                $useCharacter.append('<button id="yes-use-character">USE</button>');
                $('body').on('click', '#yes-use-character', function () {
                    cpuSelection = character[i];
                    $characterSelected.remove();
                    $useCharacter.remove();
                    game();

                })
                $useCharacter.append('<button id="no-use-character">SWITCH</button>');
                $("body").on('click', '#no-use-character', function () {
                    $characterSelected.remove();
                    $useCharacter.remove();
                    $('body').bind('click', playerSelecting());
                })
                $useCharacter.insertAfter($('.character-info'));
            }
        }
    });
}
const game = () => {
    $('.character-grid').remove();
    $(".title").html("Battle");
    $('.selection_screen').attr("src", "assests/battlefield.jpeg");
    const $playerBattleStation = $('<div class="playerStation"></div>');
    $playerBattleStation.append(`<img id="player-charc-img" src=${playerSelection.image}>`);
    $playerBattleStation.append(`<p class="playerHP">HP: ${playerSelection.hp}</p>`);
    $playerBattleStation.append(`<p class="player">Player</p>`);
    $playerBattleStation.append(`<p class="characterName"> ${playerSelection.characterName}`);
    $playerBattleStation.appendTo($('.main_screen'));

    const $cpuBattleStation = $('<div class="cpuStation"></div>');
    $cpuBattleStation.append(`<img id="cpu-charc-img" src=${cpuSelection.image}>`);
    $cpuBattleStation.append(`<p class="cpuHP">HP: ${cpuSelection.hp}</p>`);
    $cpuBattleStation.append(`<p class="player">CPU</p>`);
    $cpuBattleStation.append(`<p class="characterName"> ${cpuSelection.characterName}`);
    $cpuBattleStation.appendTo($('.main_screen'));

    const $playerMove = $('<div class="player-move"></div>');
    $playerMove.append('<button id = "attack">ATTACK</button>');
    $playerMove.append('<button id = "defend">DEFEND</button>');
    $playerMove.append('<button id = "heal">HEAL</button>');
    $playerMove.appendTo($('.main_screen'));
    playerTurn();
}

// let currentPlayer = 0;
// const whoseTurn = () => {
//     if (currentPlayer == 0) {
//         currentPlayer = 1;
//         cpuTurn();
//     }
//     else{
//         currentPlayer = 0;
//         playerTurn();
//     }
// }
const playerTurn = () => {
    console.log('player going');
    $('.player-move').on('click', function (e) {
        if (playerSelection.hp <= 0) {
            let playerHP = 0;
            playerSelection.hp = playerHP;
            $('.playerHP').replaceWith(`<p class="playerHP">HP: ${playerSelection.hp}</p>`);
            winner();
        }
        if (e.target.id === 'attack' && cpuMove != 'defend') {
            playerMove = 'attack';
            let cpuHP = 0;
            cpuHP = cpuSelection.hp - playerSelection.attack;
            cpuSelection.hp = cpuHP;
            $('.cpuHP').replaceWith(`<p class="cpuHP">HP: ${cpuSelection.hp}</p>`);
            cpuTurn();
        } else if (e.target.id === 'defend') {
            playerMove = 'defend';
            cpuTurn();
        } else if (e.target.id === 'heal') {
            playerMove = 'heal';
            if (playerSelection.hp === 50 || playerSelection.hp > 50) {
                alert('You have full health');
                cpuTurn();
            } else {
                let playerHP = 0;
                playerHP = playerSelection.hp + playerSelection.heal;
                playerSelection.hp = playerHP;
                $('.playerHP').replaceWith(`<p class="playerHP">HP: ${playerSelection.hp}</p>`);
                cpuTurn();
            }
        } else {
            alert('Computer defended your attack!');
            cpuTurn();
        }
        // whoseTurn();
    })

}

const cpuTurn = () => {
    {
        const $moveMessage = $('<div class="move"></div>');
        $('.player-move').unbind();
        if (cpuSelection.hp <= 0) {
            let cpuHP = 0;
            cpuSelection.hp = cpuHP;
            $('.cpuHP').replaceWith(`<p class="cpuHP">HP: ${cpuSelection.hp}</p>`);
            winner();
        }
        let num = Math.floor(Math.random() * 3);

        if (num === 0 && playerMove != 'defend') {
            cpuMove = 'attack';
            let playerHP = 0;
            playerHP = playerSelection.hp - cpuSelection.attack;
            playerSelection.hp = playerHP;
            $('.playerHP').replaceWith(`<p class="playerHP">HP: ${playerSelection.hp}</p>`);
            $moveMessage.append('<p class="moveType">COMPUTER: ATTACK</p>');
            playerTurn();
            $moveMessage.remove();
        } else if (num === 1) {
            console.log('defend');
            cpuMove = 'defend';
            $moveMessage.append('<p class="moveType">COMPUTER: DEFEND</p>');
            playerTurn();
            $moveMessage.remove();
        } else if (num === 2) {
            if (cpuSelection.hp === 50 || cpuSelection.hp > 50) {
                cpuMove = 'heal';
                $moveMessage.append('<p class="moveType">COMPUTER: TRIED TO HEAL</p>');
                playerTurn();
                $moveMessage.remove();
                return;
            } else {
                cpuMove = 'heal'
                let cpuHP = 0;
                cpuHP = cpuSelection.hp + cpuSelection.heal;
                cpuSelection.hp = cpuHP;
                $('.cpuHP').replaceWith(`<p class="cpuHP">HP: ${cpuSelection.hp}</p>`);
                $moveMessage.append('<p class="moveType">COMPUTER: HEALED</p>');
                playerTurn();
                $moveMessage.remove();
            }
        } else {
            playerTurn();
            $moveMessage.remove();
        }
        $moveMessage.appendTo($('.main_screen'));
    }
}

const winner = () => {
    if (playerSelection.hp === 0) {
        $('.player-move').unbind();
        const $cpuWins = $('<h1 class="winner">CPU WINS!</h1>');
        $cpuWins.appendTo($('.main_screen'));
    } else {
        $('.player-move').unbind();
        const $playerWins = $('<h1 class="winner">You WIN!</h1>');
        $playerWins.appendTo($('.main_screen'));
    }
    restart();
}

const restart = () => {
    const $restartBTN = $('<button class= "restart">RESTART</button>');
    $restartBTN.appendTo($('.main_screen'));
    $('.restart').click( function () {
        location.reload();
    })
}

function buttonClick() {
    setTimeout('$("#btn").removeAttr("disabled")', 1500);
}