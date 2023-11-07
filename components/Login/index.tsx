import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "../Modal";
import useLoginAdminAPI from "@/hook/services/login.service";
import { toast } from "react-toastify";

export const Login = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginAdminAPI = useLoginAdminAPI();
  const handleOnClick = async () => {
    const result = await loginAdminAPI.mutateAsync({
      email: email,
      password: password,
    });

    toast.success("Đăng nhập thành công!");
    await localStorage.setItem("token", result.token);

    setOpen(false);
  };
  return (
    <Modal
      buttonName="Đăng nhập"
      loading={loginAdminAPI.isLoading}
      handleOnClick={handleOnClick}
      open={open}
      setOpen={setOpen}
      title="Đăng nhập"
    >
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg shadow-sm px-3 py-1.5 ml-4 outline-0"
          />
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="password">Mật khẩu</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg shadow-sm px-3 py-1.5 ml-4 outline-0"
          />
        </div>
      </div>
    </Modal>
  );
};
