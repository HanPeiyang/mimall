let baseUrl;

switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl='http://dev-mall-pre.springboot.cn/api';
        break;
    case 'production':
        baseUrl='http://mall-pre.springboot.cn/api';
        break;
    default:
        baseUrl='http://mall-pre.springboot.cn/api';
        break;
}

module.exports={
    baseUrl
}