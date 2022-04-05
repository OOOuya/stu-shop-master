/*后端交互使用的api*/
import {del, get, post, put} from "../utils/request";

/*列表页面的增删改查*/
export function listApi(page) {
    return get("/api/admin/products", page)
}

export function addOne(postParam) {
    return post("/api/admin/products", postParam)
}
export function modifyOne(postParam, id) {
    return put(`/api/admin/products/${id}`, postParam)
}

export function delOne(id) {
    return del(`/api/admin/products/${id}`)
}


