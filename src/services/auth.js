import {post} from "../utils/request";

/*后端用户登录的接口*/
/**
 *
 * @param user
 * @returns {Promise<AxiosResponse<any>>} code 代表是否成功 token：令牌 message：信息
 */
export function loginApi(user) {
    return post("/api/auth/manager_login", user)
}