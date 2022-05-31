const userService = require ('../services/userService')

class UserController{
    async register(req,res){
        try {
            const username = req.body.username;
            const email = req.body.email;
            const password = req.body.password;
            console.log(username, email, password)
            // const {username, email, password} = req.body;
            const userData = await userService.registration(username,email,password);
            res.status(200).redirect('/login');
        }catch (e) {
            console.log(e);
        }
    }

    async login(req,res){
        try {
            const email = req.body.email;
            const password = req.body.password;
            await userService.login(email,password);
            res.status(200).redirect('/profile');

        }catch (e) {
            console.log(e);
        }
    }

}

module.exports = new UserController()