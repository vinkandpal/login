import axios from "axios";

const instance = axios.create({
	timeout: 60000
});

const BaseService = () => {
	let makecall = _options => {
		try {
			let _requestOptions = {
				method: _options.method || "POST",
				data: _options.data
			};

			_options.headers = {
				"Content-Type": "application/json"
			};

			if (_options.headers) {
				Object.assign(instance.defaults.headers.common, _options.headers);
			}

			_options.nodeserviceUrl = 'http://localhost:8080' + _options.url;

			return instance.request(_options.nodeserviceUrl, _requestOptions)
		} catch (e) {
			console.log(e);
		}
	};

	return {
		makecall
	}
};

export default BaseService();
