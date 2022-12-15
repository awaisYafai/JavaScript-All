let role = 'guest';

switch (role) {
    case 'guest':
    console.log(' guest user');
    break;

    case 'moderator':
        console.log('moderator');
        break;
        default:
            console.log('unknown user');
}

// if (role === 'guest') console.log('guest');
// else if (role === 'moderators') console.log('moderators');
// else console.log('unknown user');
