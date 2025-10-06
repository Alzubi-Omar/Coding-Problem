// Count letters in string, Ignore case. Ignore non-letter characters.

function countLetters(str){
    let result = {};
    for(let i = 0; i < str.length; i++){
        const char = str[i];
        const code  = char.charCodeAt(0);

        if(!(code >=65 && code <=90) && !(code >=97 && code <=122) ){
            continue; // skip non-letters
        }

        // Normalize to lowercase
        let lowerChar;
        if(code >=65 && code <=90) {
            lowerChar = String.fromCharCode(code + 32);

        } else {
            lowerChar = char;
        }

        // Count the letter
        if(result[lowerChar]){
            result[lowerChar]++;
        } else {
            result[lowerChar] = 1;
        }

    }
    return result;
}

console.log(countLetters("Hello, World!")); // { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }


// ....


// Modern JS Version
function countLettersModern(str){
    const result = {};  

    const normlized = str.toLowerCase().replace(/[^a-z]/g, '');

    for(const char of normlized){
        result[char] = (result[char] || 0) + 1;
    }

    return result;
}

console.log(countLettersModern("Hello, Developer! 123"));
