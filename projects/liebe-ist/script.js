
const characterCards = document.querySelectorAll(".character-card");

const characterInfo = document.getElementById("character-info");

const characters = [

{
    name: "Amrei",
    text: "Crazy about travelling and a lost soul. Passionate about all kinds of art. Loves to play the bass guitar and the piano."
},

{
    name: "Nahyun",
    text: "Style icon. Always tired. Makes all the funny jokes. A confident girl."
},

{
    name: "Katja",
    text: "Hopeless romantic. Looks like she lives in Brooklyn, New York. Loves to read. Always one step ahead of everybody regarding university."
},

{
    name: "Sara",
    text: "Great aesthetic and artistic eye and vision. Passionate barista who works all the time. 25 years old."
},

{
    name: "Franziska",
    text: "A sucker for tattoos and Japanese art. Works several jobs at the same time. Amazing taste in fashion."
}

];

characterCards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        characterInfo.innerHTML = `

        <h3>${characters[index].name}</h3>

        <p>${characters[index].text}</p>

        `;

    });

});


const castCards = document.querySelectorAll(".cast-card");

const castInfo = document.getElementById("cast-info");

const team = [

{
    name: "Amrei Neumaier",
    text: `
    <strong>Age:</strong> 22 years old <br><br>

    <strong>Place of Birth:</strong> Kelheim <br><br>

    <strong>Fun Fact:</strong> I don't like the way sneakers look, so I only wear sandals.
    `
},

{
    name: "Nahyun Kwon",
    text: `
    <strong>Age:</strong> 19 years old <br><br>

    <strong>Place of Birth:</strong> Bonn <br><br>

    <strong>Fun Fact:</strong> I have 10 birthmarks on my face.
    `
},

{
    name: "Katja Kammerer",
    text: `
    <strong>Age:</strong> 21 years old <br><br>

    <strong>Place of Birth:</strong> Stuttgart <br><br>

    <strong>Fun Fact:</strong> I like eating sardines with lemonade.
    `
},

{
    name: "Sara Fallscheer",
    text: `
    <strong>Age:</strong> 25 years old <br><br>

    <strong>Place of Birth:</strong> Bad Aibling <br><br>

    <strong>Fun Fact:</strong> I have never flown in my life.
    `
},

{
    name: "Franziska Winkler",
    text: `
    <strong>Age:</strong> 21 years old <br><br>

    <strong>Place of Birth:</strong> Munich <br><br>

    <strong>Fun Fact:</strong> I am a tattoo artist.
    `
}

];

castCards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        castInfo.innerHTML = `

        <h3>${team[index].name}</h3>

        <p>${team[index].text}</p>

        `;

    });

});