var quotes = ["You know Hobbes some days even my lucky rocketship underpants dont help ― Bill Watterson" ,
 "Even if we dont have the power to choose where we come from, we can still choose where we go from there —Stephen Chbosky",
 "And now that you don't have to be perfect, you can be good. -John Steinbeck", "Outside the windows the day was bright: golden sunshine, blue sky, pleasant wind... I wanted to punch the happy day in the face, grab it by the hair, and beat it until it told me what the hell it was so happy about. ―Ilona Andrews",
  "It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all - in which case, you fail by default. —J.K. Rowling", 
 "But I am very poorly today & very stupid & I hate everybody & everything. One lives only to make blunders. ―Charles Darwin", "We are cups, constantly and quietly being filled. The trick is knowing how to tip ourselves over and let the beautiful stuff out. —Ray Bradbury",
 "Life is never fair, and perhaps it is a good thing for most of us that it is not. —Oscar Wilde","Don't cry because it's over. Smile because it happened.—Dr. Seuss",
 "Everything is hard before it is easy. —Johann Wolfgang von Goethe", "Anyone who has never made a mistake has never tried anything new. —Albert Einstein",
 "Don't let your happiness depend on something you may lose. —C.S. Lewis","We are all broken, that's how the light gets in.—Ernest Hemingway",
 "Monsters are real, ghosts are real, too. They live inside us, and sometimes they win.—Stephen King",
 "It hurt because it mattered. —John Green",
 "Some of us think holding on makes us strong; but sometimes it is letting go.—Herman Hesse",
 "I want to taste and glory in each day, and never be afraid to experience pain. —Sylvia Plath",
 "Life's not fair; why should I be? —Margaret Atwood",
 "Never look back unless you are planning to go that way. —​ Henry David Thoreau", 
 "Sooner or later even the fastest runners have to stand and fight. —​ Stephen King",
 "We rise by lifting others. —Robert Ingersoll",
 "Life is a journey, not a destination. —Ralph Waldo Emerson",
 "believe it or not, whatever happens happens for a reason"
]



var btn = document.querySelector('#btn')
var quote = document.querySelector('#quote')

btn.addEventListener('click', function(){
    quote.innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
})
