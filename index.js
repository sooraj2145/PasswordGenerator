const alphabets =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

    

     function generatePassword(length,includeSymbols,includeNumbers) {
        let characters = alphabets
        if (includeSymbols) {
            characters = characters.concat(symbols);
        }
        if (includeNumbers) {
            characters = characters.concat(numbers);
        }
         let password = "";
         for (let i = 0; i < length; i++) {
             password += characters[Math.floor(Math.random() * characters.length)];
         }
         return password;
     }
     
     function displayPasswords() {
        const length = parseInt(document.getElementById('password-length').value, 10) || 15;
        const includeSymbols = document.getElementById('include-symbols').checked;
        const includeNumbers = document.getElementById('include-numbers').checked;
         const passwordLength = 15;
         document.getElementById('password-box1').textContent = generatePassword(length,includeSymbols,includeNumbers);
         document.getElementById('password-box2').textContent = generatePassword(length,includeSymbols,includeNumbers); 
     }
     

     function copyPassword(id){
        const passwordEl = document.getElementById(id).textContent
        navigator.clipboard.writeText(passwordEl)
        .then( () => alert('Copied to clipboard'));
     }