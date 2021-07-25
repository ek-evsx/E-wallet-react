const config = {
  apiHost: {
		hostName: 'localhost',
		protocol: 'http',
		port: 9000,
		getApiUrl() {
			return `${this.protocol}://${this.hostName}:${this.port}`;
		},
    getGQLApiUrl() {
			return `${this.protocol}://${this.hostName}:${this.port}/graphql`;
		},
	},
};

export default config;
