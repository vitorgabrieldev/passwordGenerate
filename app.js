function ValuesChange() {
    document.querySelector('.numberQtd').innerHTML = document.querySelector('.numberCharacters').value;
};
function generatePassword() {
    let qtdPass = document.querySelector('.numberCharacters').value;
    if(qtdPass != 0) {
        let pass;
        switch(verifyOption()) {
            case 1:
                pass = generate(qtdPass,1); // Numbers
                break;
            case 2:
                pass = generate(qtdPass,2); // Letters
                break;
            case 3:
                pass = generate(qtdPass,3); // Numbers and Letters
                break;
            default:
                console.log('Error')
        };
        document.querySelector('.titleRes').innerHTML = pass;
    } else {
        alert('The value must be greater than zero!');
    };
};
const arrayLetters = [
    'a','b','c','d','e','f',
    'g','h','i','j','k','l',
    'm','n','o','p','q','r',
    's','t','u','v','w','x',
    'y','z','A','B','C','D',
    'E','F','G','H','I','J',
    'K','L','M','N','O','P',
    'Q','R','S','T','U','V',
    'W','X','Y','Z'
];
const arrayLettersAndNumbers = [
    'a','b','c','d','e','f',
    'g','h','i','j','k','l',
    'm','n','o','p','q','r',
    's','t','u','v','w','x',
    'y','z','A','B','C','D',
    'E','F','G','H','I','J',
    'K','L','M','N','O','P',
    'Q','R','S','T','U','V',
    'W','X','Y','Z','1','2',
    '3','4','5','6','7','8',
    '9','0',
];
function generate(token2,sequence) {
    let password = '';
    let token = parseInt(token2)
    switch(sequence) {
        case 1:
            for(i = 0; i < token; i ++) {
                let pass = Math.floor(Math.random() * 10);        
                password = `${password}${pass.toString()}`;
            };
            break;
        case 2:
            for(i = 0; i < token; i ++) {
                let pass = arrayLetters[Math.floor(Math.random() * 52)];        
                password = `${password}${pass}`;
            };
            break;
        case 3:
            let res = token % 2 == 0 ? 0 : 1;
            if(res == 0) {
                for(i = 0; i < token / 2; i ++) {
                    let passNumbers = Math.floor(Math.random() * 10);
                    let passLetters = arrayLetters[Math.floor(Math.random() * 52)];    
                    password = `${password}${passNumbers.toString()}${passLetters}`;
                };
            } else {
                for(i = 0; i < token; i ++) {
                    let passNumbers = Math.floor(Math.random() * 10);
                    let passLetters = arrayLettersAndNumbers[Math.floor(Math.random() * 62)];
                    password = `${password}${passNumbers.toString()}${passLetters}`;
                };
            };
            break;
    };
    return password;
};
function verifyOption() {
    let optionNumber = document.querySelector('#numberInput');
    let optionLetter = document.querySelector('#letterInput');
    let tokenPass = 0;
    if(optionNumber.checked || optionLetter.checked) {
        if(optionNumber.checked) {
            tokenPass = 1;
        };
        if(optionLetter.checked) {
            tokenPass = 2;
        };
        if(optionLetter.checked && optionNumber.checked) {
            tokenPass = 3;
        };
    } else {
        alert('Choose at least one of the options (number or letters)');
        document.querySelector('.titleRes').innerHTML = '';
    };
    return tokenPass;
};