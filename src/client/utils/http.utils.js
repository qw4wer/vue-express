import axios from 'axios'


const get = (options) => {
  const {url, parameter, header} = options;

  return axios({
    method: 'get',
    url: url,
    header: Object.assign({}, header),
    data: parameter
  })


}

const post = (options) => {
  const {url, data, header} = options;
  return axios({
    method: 'post',
    url: url,
    header: Object.assign({}, header),
    data: data
  })
}

export default {
  get,
  post
}
