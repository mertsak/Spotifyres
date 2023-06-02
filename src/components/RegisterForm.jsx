"use client";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const notify = (values) => {
    if (
      values.shareInfo === "" ||
      values.shareInfo === false ||
      values.firstName === ""
    ) {
      toast.error("Please fill in all fields.");
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      day: "",
      month: "",
      year: "",
      gender: "",
      shareInfo: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, "Must be 6 characters or more.")
        .max(15, "Must be 15 characters or less.")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("You need to enter your e-mail address."),
      password: Yup.string()
        .required("You need to enter a password.")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character."
        ),
      day: Yup.string().required("Enter a valid day of the month."),
      month: Yup.string().required("Choose the month you were born."),
      year: Yup.string().required("Enter a valid year."),
      gender: Yup.string().required("You need to choose your gender."),
      shareInfo: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      try {
        let res = await axios({
          method: "POST",
          url: "http://localhost:3000/api/user",
          data: values,
        });
        if (res.status === 200) {
          toast.success("You are redirected to the login page.");
          router.push("/login");
        }
      } catch (error) {
        if (error.response.status === 500) {
          toast.error("Account already exists at this email address.");
        }
      }
    },
  });

  return (
    <form
      className="w-full flex flex-col gap-6 justify-center items-start text-black"
      onSubmit={formik.handleSubmit}
    >
      <ToastContainer />

      {/* Email  */}
      <div className="flex flex-col justify-center items-start w-full">
        <label className="text-sm mb-1" htmlFor="email">
          What is your e-mail address?
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full border border-sidebar_text placeholder:text-gray-900 rounded-md py-3 pl-2 font-sans text-sm"
          placeholder="Enter your email address"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
        ) : null}
      </div>

      {/* Password  */}
      <div className="flex flex-col justify-center items-start w-full">
        <label className="text-sm mb-1" htmlFor="email">
          Create password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          placeholder="Create password"
          className="w-full border border-sidebar_text placeholder:text-gray-900 rounded-md py-3 pl-2 font-sans text-sm"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-xs text-left mt-1">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      {/* Firstname  */}
      <div className="flex flex-col justify-center items-start w-full">
        <label className="text-sm mb-1" htmlFor="name">
          What name should we call you by?
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          placeholder="Enter profile name"
          className="w-full border border-sidebar_text placeholder:text-gray-900 rounded-md py-3 pl-2 font-sans text-sm"
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
        ) : null}
      </div>

      {/* Birthday  */}
      <div className="flex flex-col justify-center items-start w-full">
        <p className="mb-1 text-sm">When is your birthday?</p>

        <div className="w-full flex justify-between items-center">
          {/* Day  */}
          <div className="flex w-[25%] flex-col justify-center items-center">
            <label
              className="text-sm text-left w-full mb-1 text-gray-900 font-sans"
              htmlFor="day"
            >
              Day
            </label>
            <input
              id="day"
              name="day"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.day}
              placeholder="GG"
              className="w-full border border-sidebar_text placeholder:text-gray-900 rounded-md py-3 pl-2 font-sans text-sm"
            />
          </div>

          {/* Month  */}
          <div className="flex w-[40%] flex-col justify-center items-center">
            <label
              className="text-sm  text-left w-full mb-1 text-gray-900 font-sans"
              htmlFor="month"
            >
              Month
            </label>
            <select
              id="month"
              name="month"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.month}
              className="w-full border border-sidebar_text placeholder:text-gray-900 rounded-md py-3 pl-2 font-sans text-sm"
            >
              <option value="" label="Month" />
              <option value="january" label="January" />
              <option value="february" label="February" />
              <option value="march" label="March" />
              <option value="april" label="April" />
              <option value="may" label="May" />
              <option value="june" label="June" />
              <option value="july" label="July" />
              <option value="august" label="August" />
              <option value="september" label="September" />
              <option value="october" label="October" />
              <option value="november" label="November" />
              <option value="december" label="December" />
            </select>
          </div>

          {/* Year  */}
          <div className="flex w-[25%] flex-col justify-center items-center">
            <label
              className="text-sm text-left w-full mb-1 text-gray-900 font-sans"
              htmlFor="year"
            >
              Year
            </label>
            <input
              id="year"
              name="year"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.year}
              placeholder="YYYY"
              className="w-full border border-sidebar_text placeholder:text-gray-900 rounded-md py-3 pl-2 font-sans text-sm"
            />
          </div>
        </div>

        {/* Error  */}
        <div className="flex flex-col justify-center items-start w-full mt-3">
          {formik.touched.day && formik.errors.day ? (
            <div className="text-red-500 text-xs">{formik.errors.day}</div>
          ) : null}

          {formik.touched.month && formik.errors.month ? (
            <div className="text-red-500 text-xs">{formik.errors.month}</div>
          ) : null}

          {formik.touched.year && formik.errors.year ? (
            <div className="text-red-500 text-xs">{formik.errors.year}</div>
          ) : null}
        </div>
      </div>

      {/* gender  */}
      <div className="flex flex-col justify-center items-start w-full">
        <p className="text-sm mb-1">What is your gender?</p>

        <div className="flex justify-start gap-4 items-center w-full">
          <label className="flex justify-center items-center gap-1 text-gray-900 font-sans text-sm">
            <input
              id="male"
              name="gender"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="two"
              className="w-full border border-sidebar_text  rounded-md py-3 pl-2"
            />
            Male
          </label>
          <label className="flex justify-center items-center gap-1 text-gray-900 font-sans text-sm">
            <input
              id="famale"
              name="gender"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="one"
              className="w-full border border-sidebar_text rounded-md py-3 pl-2 "
            />
            Famale
          </label>
          <label className="flex justify-center items-center gap-1 text-gray-900 font-sans text-sm">
            <input
              id="other"
              name="gender"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="other"
              className="w-full border border-sidebar_text rounded-md py-3 pl-2"
            />
            Other
          </label>
        </div>

        {formik.touched.gender && formik.errors.gender ? (
          <div className="text-red-500 text-xs">{formik.errors.gender}</div>
        ) : null}
      </div>

      {/* share info  */}
      <div className="flex flex-col justify-center items-start w-full">
        <div className="flex justify-center items-start mb-1 gap-2">
          <input
            id="shareInfo"
            name="shareInfo"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.shareInfo}
            className="mt-1"
          />
          <label className="text-xs text-left text-gray-900">
            Share my registration data with LYRIKS's content providers for
            marketing purposes. Note that your data may be transferred to a
            country outside of the EEA as outlined in our privacy policy.
          </label>
        </div>

        {formik.touched.shareInfo && formik.errors.shareInfo ? (
          <div className="text-red-500 text-xs">{formik.errors.shareInfo}</div>
        ) : null}
      </div>

      {/* register button  */}
      <div className="flex justify-center items-center w-full">
        <button
          onClick={() => notify(formik.values)}
          className="bg-spotify_green flex justify-center items-center px-12 py-3 rounded-full hover:scale-105 duration-300"
          type="submit"
        >
          Register
        </button>
      </div>

      {/* have account  */}
      <div className="flex justify-center items-center w-full">
        <span className="flex justify-center items-center gap-2 text-sm">
          Do you have an account?
          <Link href="login" className="text-spotify_green underline">
            Sign in.
          </Link>
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;
