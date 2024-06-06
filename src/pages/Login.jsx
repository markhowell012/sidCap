import React, { useEffect, useState } from "react";
import { Button, Modal } from "../components";
import { BiSolidHome, BiUserCircle } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";
import { message } from "antd";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);


  const [open, setOpen] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  useEffect(() => {
    const pathnameWithoutLeadingSlash = location.pathname.replace(/^\/+/, "");
    document.title = `Sidwell Capital ${pathnameWithoutLeadingSlash}`;
  }, [location]); 

  const forgotPassHandler = () => {
    message.success("A reset link has been sent to you email.");
    setForgotPassword(false);
  };

  const handleLogin = () => {
    // Simulate a login error for demonstration purposes.
    setLoginError(true);
  };

  return (
    <div className=" w-screen h-screen flex">
      <div className="bg-background h-full lg:w-[65%] p-5 sm:p-16 md:p-24 flex flex-col justify-center lg:justify-start gap-16 overflow-y-auto hideScrollbar">
        <div className="flex flex-col gap-5">
          <div
            onClick={() => navigate("/")}
            className="paragraph2 text-xs lg:hidden flex items-center gap-2"
          >
            <BiSolidHome />
            <p>GO BACK TO HOME</p>
          </div>
          <h3 className="heading3 !text-primary font-medium">
            I have been here before.
          </h3>
          <p className="font-bold text-light">PORTAL LOGIN</p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Username or Email"
              className={`w-full px-4 py-2 min-h-[55px] bg-[#F8F8F8] rounded-md focus:outline-none text-secondary placeholder:text-slate-400 font-semibold placeholder:font-semibold`}
            />
            <input
              type="password"
              placeholder="Password"
              className={`w-full px-4 py-2 min-h-[55px] bg-[#F8F8F8] rounded-md focus:outline-none text-secondary placeholder:text-slate-400 font-semibold placeholder:font-semibold`}
            />
          </div>
          {loginError && (
          <p className="text-red-500 incorrect-username">Incorrect username or password</p>
        )}

          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              className="custom_checkbox flex h-5 w-5 items-center  form-check-input"
            />
            <p className="paragraph1">Remember Me</p>
          </div>
          <div>
            <Button title="Log In" onClick={handleLogin}/>
          </div>
          <p
            className="paragraph1 !text-primary cursor-pointer"
            onClick={() => setForgotPassword(true)}
          >
            Forgot password?{" "}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="heading3 !text-primary font-medium">
            I’m new here – how do I get started?
          </h3>
          <p className="font-bold text-light">REGISTER PORTAL ACCOUNT</p>

          <p className="paragraph1">
            If it is your first time here and you do not have an Sidwell Capital's
            portal account please click below to register your account.
          </p>
          <div>
            <Button onClick={() => setOpen(true)} title="Register" />
          </div>
        </div>
      </div>
      {/* RIGHTSIDE */}
      <div className="hidden bg-[#927DFF] h-full w-[35%] p-10 lg:flex flex-col gap-10">
        <img src="/assets/images/Login-Media.gif" alt="loginmediagif" />
        <p className="paragraph1 text-center text-white">
          Please contact Sidwell Capital at info@sidwellcapital.com
        </p>
        <div className="self-center">
          <Button
            onClick={() => navigate("/")}
            backgroundColor="bg-primary"
            variant={2}
            title="GO BACK TO HOME"
            icon={<BiSolidHome />}
          />
        </div>
      </div>

      {open && (
        <Modal isOpen={open} onClose={() => setOpen(false)}>
          <div className="mt-2 w-[310px] md:w-[450px] flex flex-col gap-8">
            <div className="paragraph2 flex items-center gap-2 pb-4 border-b border-slate-200">
              <BiUserCircle color="gray" />
              <p className="text-gray"> User Registration</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="space-y-2">
                <p className="paragraph1">First Name</p>
                <input
                  type="text"
                  placeholder="Jhon"
                  className={`w-full px-4 py-2 min-h-[30px] bg-[#F8F8F8] rounded-md focus:outline-none text-secondary placeholder:text-slate-400 `}
                />
              </div>
              <div className="space-y-2">
                <p className="paragraph1">Last Name</p>
                <input
                  type="text"
                  placeholder="Doe"
                  className={`w-full px-4 py-2 min-h-[30px] bg-[#F8F8F8] rounded-md focus:outline-none text-secondary placeholder:text-slate-400 `}
                />
              </div>
              <div className="space-y-2">
                <p className="paragraph1">Email</p>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className={`w-full px-4 py-2 min-h-[30px] bg-[#F8F8F8] rounded-md focus:outline-none text-secondary placeholder:text-slate-400 `}
                />
              </div>
              <div className="space-y-2">
                <p className="paragraph1">Password</p>
                <input
                  type="password"
                  placeholder="Enter Password"
                  className={`w-full px-4 py-2 min-h-[30px] bg-[#F8F8F8] rounded-md focus:outline-none text-secondary placeholder:text-slate-400 `}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <Button title="Register Your Account" />
              </div>
              <p
                onClick={() => {
                  setOpen(false);
                  setForgotPassword(true);
                }}
                className="paragraph1 !text-primary cursor-pointer"
              >
                Forgot password?{" "}
              </p>
            </div>
          </div>
        </Modal>
      )}

      {forgotPassword && (
        <Modal isOpen={forgotPassword} onClose={() => setForgotPassword(false)}>
          <div className="mt-2 w-[310px] md:w-[450px] flex flex-col gap-8">
            <div className="paragraph2 flex items-center gap-2 pb-4 border-b border-slate-200">
              <BiUserCircle color="gray" />
              <p className="text-gray"> Forgot Password</p>
            </div>
            <div className="space-y-2 ">
              <p className="paragraph1">Email</p>
              <input
                type="email"
                placeholder="example@email.com"
                className={`w-full px-4 py-2 min-h-[30px] bg-[#F8F8F8] rounded-md focus:outline-none text-secondary placeholder:text-slate-400 `}
              />
            </div>
          </div>
          <div className="mt-6">
            <Button title="Get New Password" onClick={forgotPassHandler} />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Login;
