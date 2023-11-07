import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

const LOGIN_ADMIN_ENDPOINT = "/api/auth/admin/login";

export interface ILogin {
  email: string;
  password: string;
}

const useLoginAdminAPI = () => {
  const loginRes = useMutation({
    mutationKey: LOGIN_ADMIN_ENDPOINT,
    mutationFn: async (req: ILogin) => {
      const result = await axios.post(LOGIN_ADMIN_ENDPOINT, {
        email: req.email,
        password: req.password,
      });
      return result.data.data;
    },
    onError: (error) => {
      toast.error(
        "Có lỗi xảy ra với đăng nhập, vui lòng kiểm tra lại tài khoản hoặc mật khẩu!"
      );
    },
  });

  return loginRes;
};

export default useLoginAdminAPI;
