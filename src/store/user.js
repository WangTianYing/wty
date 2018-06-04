// @flow
import localforage from 'localforage';

type Profile = {
  // User ID
  user_id: string,
  // User 名称
  user_name: string,
  // User 状态
  status: string,
  // User 创建时间，为UTC时间，格式可参见 ISO8601.
  create_time: Object,
  // 用户付费模式：prepaid - 预付费， postpaid - 后付费。 区别在于后付费用户在余额不足时，不会暂停资源，而只是余额变成负数。 默认值是预付费。
  paid_mode: string,
  // 账号登录邮箱
  email: string,
  // 账号通知邮箱，用于接收系统通知
  notify_email: string,
  // 账号角色: partner,user
  role: string,
  // 账号权限级别
  privilege: number,
  // 账号手机号
  phone: string,
  // 账号本金余额
  balance: number | string,
  // 账号赠送金余额
  bonus: number | string,
  // 备注信息
  remark: string,
  // 账号可访问的区域
  zone_info: Object,
}

export type User = {
  role: ?string,
  token: ?string,
  profile: ?Profile,
}

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

export const login = (payload: User, persist?: boolean = true) => ({
  type: LOGIN,
  payload,
  persist,
});

export const logout = () => ({
  type: LOGOUT,
});

const initialState: User = {
  role: undefined,
  token: undefined,
  profile: undefined,
};

const reducer = (state: User = initialState, action: any) => {
  switch (action.type) {
    case LOGIN:
      if (action.persist) {
        localforage.setItem('user', action.payload);
      }
      return Object.assign({}, state, action.payload);
    case LOGOUT:
      localforage.removeItem('user');
      return initialState;
    default:
      return state;
  }
};

export default reducer;
