import { OK, MULTIPLE_CHOICES } from 'constants/httpStatusCode';

const ApiCallSingleton = (() => {
  let instance;

  // eslint-disable-next-line consistent-return
  const _handleResponse = response => {
    if (response.status >= OK && response.status < MULTIPLE_CHOICES) {
      return Promise.resolve(response);
    } else {
      return response.json().then(body => {
        const error = new Error(body.message);
        error.status = body.status;
        return Promise.reject(error);
      });
    }
  };

  function ApiCall() {
    if (instance) return instance;
    instance = this;
  }

  ApiCall.prototype.get = (url) => {
    return fetch(url, {
      method: 'GET',
    }).then(res => _handleResponse(res).then(resData => resData.json()));
  };

  ApiCall.prototype.post = (url, data) => (
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(data)
    }).then(_handleResponse).then(resData => resData.json())
  );

  ApiCall.prototype.postPlain = (url, data) => (
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: data
    }).then(res => _handleResponse(res).then(resData => resData.json()))
  );

  ApiCall.prototype.put = (url, data) => (
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    }).then(res => _handleResponse(res)).then(resData => resData.json())
  );

  ApiCall.prototype.delete = (url) => (
    fetch(url, {
      method: 'DELETE',
    }).then(res => _handleResponse(res))
  );

  ApiCall.prototype.download = (url) => (
    fetch(url, {
      method: 'GET',
    }).then(res => _handleResponse(res))
  );

  return ApiCall;
})();

export default new ApiCallSingleton();