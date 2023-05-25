import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import img from "../assets/others/authentication2.png";
import bg from "../assets/others/authentication.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

const LoginPage = () => {
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  
  const sdf = watch("captcha");
  console.log(sdf); // watch input value by passing the name of it

  return (
    <section
      style={{ backgroundImage: `url(${bg})` }}
      className="p-32 min-h-screen"
    >
      <div
        className="flex justify-between items-center max-w-full p-12 shadow-slate-600 shadow-xl"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <img className="w-1/2 mx-auto" src={img} alt="" />
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 p-12">
          <h1 className="text-center font-bold text-3xl">Login</h1>
          <div className="form-control my-4">
            <label htmlFor="">Email</label>
            <input
              {...register("email", { required: true })}
              className="input"
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="form-control my-4">
            <label htmlFor="">Password</label>
            <input
              {...register("password", { required: true })}
              className="input"
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>
          <div className="form-control my-4">
            <LoadCanvasTemplate />
            <input
              placeholder="Type captcha"
              {...register("captcha", { required: true })}
              className="input"
            />
            {errors.exampleRequired && <span>This field is required</span>}
          </div>

          <input
            type="submit"
            value="Login"
            className="btn btn-primary w-full"
          />
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
