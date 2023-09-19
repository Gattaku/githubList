exports.getUser = (user) => {
    return new Promise((resolve, reject) => {
        const url = `https://api.github.com/users/${user}`;
        fetch(url).then(res => res.json())
            .then(json => {
                return resolve(json);
            }).catch(error => {
                return reject(null);
            })
    })

}