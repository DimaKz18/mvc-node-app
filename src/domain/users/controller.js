const userModel = require('./model');

module.exports = {
	getAllUsers: (req, res) => {
		console.log('Users received')
		return res.render('users.hbs', {
			users: userModel.getAllUsers(),
		});
	},
	createUser: (req, res) => {
		try {
			const { username } = req.body;

			if (!username) {
				throw new Error('You didn`t enter username');
			}

			userModel.createUser({ username });

			console.log('User created')
			return res.redirect('/users');
		} catch (e) {
			return res.render('users-error.hbs', {
				message: e.message,
			});
		}
	},
	deleteUser: (req, res) => {
		try {
			const id = req.query.id;

			if (!id) {
				throw new Error('There isn`t any id');
			}

			userModel.deleteUser({ id });

			console.log('User deleted')
			res.render('users-view.hbs', {
				users: userModel.getAllUsers(),
			});
		} catch (e) {
			return res.render('users-error.hbs', {
				message: e.message,
			});
		}
	},
};
