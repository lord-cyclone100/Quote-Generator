obj = [{
    quote: "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
    speaker: "~ Nelson Mandela"
},{
    quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    speaker: "~ Oprah Winfrey"
},{
    quote: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
    speaker: "~ Barack Obama"
},{
    quote: "Your brain is the most important organ in your body, and what happens in it determines what you think and feel, say and do.",
    speaker: "~ Rick Hanson"
},{
    quote: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
    speaker: "~ John Quincy Adams",
},{
    quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.",  
    speaker: "~ Aristotle",
},{
    quote: "Only those who will risk going too far can possibly find out how far one can go.", 
    speaker: "~ T. S. Eliot",
},{
    quote:  "Only those who play to win. Only those who risk to win. History favors risk-takers. Forgets the timid. Everything else is commentary.",
    speaker: "~ Iveta Cherneva",
},{
    quote: "If you don’t build your dream, someone else will hire you to help them build theirs.", 
    speaker: "~ Dhirubhai Ambani",
}
]

console.log(obj[0].speaker);

let nextButton = document.querySelector('button');
let quote = document.querySelector('.quote');
let speaker = document.querySelector('.speaker')

let n = 0
nextButton.addEventListener('click', function(){
    let num = Math.round(Math.random()*obj.length);
    if (num != n){
        quote.innerText = (obj[num].quote);
        speaker.innerText = (obj[num].speaker);
    }
    else{
        num ++;
        quote.innerText = (obj[num].quote);
        speaker.innerText = (obj[num].speaker);
    }
    n = num;
})
