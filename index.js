const readline = require('readline-sync');

function start() {
    const content = {};

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    function askAndReturnSearchTerm() {
        return readline.question('Type a wikipedia search term: ');
    }

    function askAndReturnPrefix(){
        const prefixes = ["Who is", "What is", "The histoy of"];
        const selectedPrefixIndexes = readline.keyInSelect(prefixes, "Choose an option: ");
        const selectedPrefixText = prefixes[selectedPrefixIndexes];
        
        return selectedPrefixText;
    }

    console.log(content);
}

start()