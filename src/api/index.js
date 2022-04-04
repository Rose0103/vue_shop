// 当前的模块：API进行统一管理
import service from "./request";

// 三级联动分类接口
export const reqCategoryList = () => service({ url: '/product/getBaseCategoryList',method: 'GET'})
