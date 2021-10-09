let name = prompt('Enter "Name"');
name = name && name.trim() || '"Name" is not valid, ';

let surname = prompt('Enter "Surname"');
surname = surname && surname.trim() || 'Surname" is not valid "';

let email = prompt('Enter "email"');
email = !email ? '' : email.replaceAll(' ', '').toLowerCase();

if (email.startsWith('@')) {
    email = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if (email.endsWith('@')) {
    email = `not valid email <b>${email}</b> (symbol @ find in last place)`;
} else if (!email.includes('@')) {
    email = '"Email" is not valid, not include @';
}

let yearOfBirth = prompt('Enter your year of birth');
yearOfBirth = !yearOfBirth || yearOfBirth.length <= 3 ? '"Age" is not valid' : yearOfBirth.replaceAll(' ', '');

let age = !isNaN(Number(yearOfBirth)) ? new Date().getFullYear() - yearOfBirth : '"Age" is not valid';

document.write(`
    <div class="profile">
        <div class="profile__header">User profile</div>
        <ul>
            <li>🙂 Full name: ${name} ${surname}</li>
            <li>📧 Email: ${email}</li>
            <li>📅 Age: ${age}</li>
        </ul>
    </div>    
`);