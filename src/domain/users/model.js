let users = [{ id: '1', username: 'Test username' }];

module.exports = {
	getAllUsers: () => {
		return users;
	},
	createUser: ({ username }) => {
		const newUser = {
			username,
			id: String(Date.now()),
		};

		if (!users.find((user) => user.username === users)) {
			users.push(newUser);
		} else {
			throw new Error('This user is already exists');
		}

		return newUser;
	},
	deleteUser: ({ id }) => {
		const userIndex = users.findIndex((user) => user.id === String(id));

		if (userIndex === -1) {
			throw new Error('This user doesn`t exist');
		}

		users.splice(userIndex, 1);

		return id;
	},
};
