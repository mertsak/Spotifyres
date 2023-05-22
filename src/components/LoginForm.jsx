"use client";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const notify = (values) => {
    if (values.password === "" || values.email === "") {
      toast.error("Please fill in all fields.");
    }
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("You need to enter your e-mail address."),
      password: Yup.string()
        .required("You need to enter a password.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character."
        ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      className="w-full flex flex-col gap-6 justify-center items-center text-white"
      onSubmit={formik.handleSubmit}
    >
      <ToastContainer />

      {/* Email  */}
      <div className="flex flex-col justify-center items-start w-[40%]">
        <label className="text-sm mb-1" htmlFor="email">
          E-posta adresi veya kullanıcı adı
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full border border-sidebar_text text-black placeholder:text-gray-900 rounded-md py-3 pl-2 font-sans text-sm"
          placeholder="Enter your email address"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      {/* Password  */}
      <div className="flex flex-col justify-center items-start w-[40%]">
        <label className="text-sm mb-1" htmlFor="email">
          Parola
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="w-full border border-sidebar_text text-black placeholder:text-gray-900 rounded-md py-3 pl-2 font-sans text-sm"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-xs text-left mt-1">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      {/* register button  */}
      <div className="flex justify-center items-center w-[40%]">
        <button
          onClick={() => notify(formik.values)}
          className="bg-spotify_green flex justify-center items-center px-12 py-3 rounded-full hover:scale-105 duration-300"
          type="submit"
        >
          Oturum Aç
        </button>
      </div>

      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-[65%] h-px my-4 bg-white border-0 opacity-30" />
      </div>

      {/* have account  */}
      <div className="flex justify-center items-center w-[40%]">
        <span className="flex justify-center items-center gap-2 text-sm">
          Hesabın yok mu?
          <Link href="register" className="text-spotify_green underline">
            Spotify için kaydol
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;