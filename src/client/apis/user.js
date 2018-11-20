import httpUtils from '../utils/http.utils'

const urls = {
  login: '/api/users/login'
};

export default {
  login: (userName, userPwd) => {
    // console.log({userName, userPwd});
    return httpUtils.post({
      url: urls.login,
      data: {userName, userPwd}
    })
  }

}
