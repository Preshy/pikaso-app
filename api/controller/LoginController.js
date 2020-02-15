exports.post = async function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    validate(res, {username, password});

    // Proceed with login

    if ( username == 'john' && password == 'doe') {
        res.status(200).json( { message: 'success', data: {
            username: 'John'
        }});
    } else {
        res.status(404).json( { message: 'User credentials are invalid.' })
    }
}

function validate(res, value) {
    let errors = [];

    Object.keys(value).forEach((key) => {
        if ( value[key] == '' || value[key] == null ) errors.push(key)
    });

    if ( errors.length > 0) {

        let data = errors.map(error => {
            return { [error]: `${error} is required` };
        });
        
        return res.status(400).json({ message: data });
    }
}