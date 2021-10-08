userName = prompt('Enter name');
userName = !userName ? 'not valid Name, ' : userName.trim();
console.log(userName);

userSurname = prompt('Enter surname');
userSurname = !userSurname || userSurname==='null' ? 'not valid Surname' : userSurname.trim(); 
console.log(userSurname);

userEmail = prompt('Enter email');
userEmail = !userEmail ? '' : userEmail.replaceAll().toLowerCase();

if(userEmail.startsWith('@')){
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in first place)`;
}else if(userEmail.endsWith('@')){
    userEmail = `not valid email <b>${userEmail}</b> (symbol @ find in last place)`;
}else if(!userEmail.includes('@')){
    userEmail = 'Email is not valid, not include @';
}

console.log(userEmail);

// какие есть еще варианты переписать yearOfBirth ? 
yearOfBirth = prompt('Enter your year of birth');
age = '';

yearOfBirth = !yearOfBirth || yearOfBirth.length <= 3 ? 'Age is not valid' : yearOfBirth.trim();
age = yearOfBirth;

if(!isNaN(yearOfBirth)){
    age = new Date().getFullYear()-yearOfBirth;
}
console.log(age)

document.write(`
    <ul>
        <li>Full name: ${userName} ${userSurname}</li>
        <li>Email: ${userEmail}</li>
        <li>Age: ${age}</li>
    </ul>
`);