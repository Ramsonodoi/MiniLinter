let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');
//console.log(storyWords.length)
const betterWords = storyWords.filter(function(word){
 return  !unnecessaryWords.includes(word)
})

//console.log( betterWords)

function countOverused(a, b) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                count = count + 1;
            }
        }
    } 
    return count;
}

// count how many sentences are in the paragraph.

function sentenceCount(arr) {
    let sentences = 0;
    arr.forEach(word => {
        if (word[word.length-1] === '.' || word[word.length-1] === '!') {
            sentences += 1;
        }
    });
    return sentences;
}

// Word count

let wordCount = betterWords.length;



function storyStats() {
    return `There are now ${wordCount} words, ${sentenceCount(betterWords)} sentences, and ${countOverused(betterWords, overusedWords)} overused words in the revised story.`
}

console.log(storyStats());

//  betterWords array to the console as single string

console.log(betterWords.join(' '));
