"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
      email: "",
      day: "",
      month: "",
      year: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("E-posta adresini girmen gerekiyor."),
      password: Yup.string()
        .min(6, "Şifreniz en az 6 karakter olmalıdır.")
        .required("Şifrenizi girmen gerekiyor."),
      day: Yup.string().required("Günü seçmen gerekiyor."),
      month: Yup.string().required("Ayı seçmen gerekiyor."),
      year: Yup.string().required("Yılı seçmen gerekiyor."),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form
      className="w-full flex flex-col justify-center items-start"
      onSubmit={formik.handleSubmit}
    >
      <h2 className="mx-auto w-full">E-posta adresinle kaydol</h2>

      {/* Email  */}

      <label className="text-sm text-black" htmlFor="email">
        What is your e-mail address?
      </label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="w-full border-2 border-black rounded-md text-black"
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="text-red-600">{formik.errors.email}</div>
      ) : null}

      {/* Password  */}

      <label className="text-sm text-black" htmlFor="email">
        Create password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className="w-full border-2 border-black rounded-md text-black"
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="text-red-600">{formik.errors.password}</div>
      ) : null}

      {/* Firstname  */}

      <label className="text-sm text-black" htmlFor="firstName">
        What name should we call you by?
      </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.firstName}
        className="w-full border-2 border-black rounded-md text-black"
      />
      {formik.touched.firstName && formik.errors.firstName ? (
        <div className="text-red-600">{formik.errors.firstName}</div>
      ) : null}

      <div className="w-full flex justify-between items-center">
        {/* Day  */}

        <div className="flex w-[20%] flex-col justify-center items-center">
          <label className="text-sm text-black text-left w-full" htmlFor="day">
            Day
          </label>
          <input
            id="day"
            name="day"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.day}
            className="w-full border-2 border-black rounded-md text-black"
          />
          {formik.touched.day && formik.errors.day ? (
            <div className="text-red-600">{formik.errors.day}</div>
          ) : null}
        </div>

        {/* Month  */}
        <div className="flex w-[40%] flex-col justify-center items-center">
          <label
            className="text-sm text-black text-left w-full"
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
            className="w-full border-2 border-black rounded-md text-black"
          >
            <option className="text-black" value="" label="Month" />
            <option className="text-black" value="january" label="January" />
            <option className="text-black" value="february" label="February" />
            <option className="text-black" value="march" label="March" />
            <option className="text-black" value="april" label="April" />
            <option className="text-black" value="may" label="May" />
            <option className="text-black" value="june" label="June" />
            <option className="text-black" value="july" label="July" />
            <option className="text-black" value="august" label="August" />
            <option
              className="text-black"
              value="september"
              label="September"
            />
            <option className="text-black" value="october" label="October" />
            <option className="text-black" value="november" label="November" />
            <option className="text-black" value="december" label="December" />
          </select>

          {formik.touched.month && formik.errors.month ? (
            <div className="text-red-600">{formik.errors.month}</div>
          ) : null}
        </div>

        {/* Year  */}
        <div className="flex w-[20%] flex-col justify-center items-center">
          <label className="text-sm text-black text-left w-full" htmlFor="year">
            Year
          </label>
          <input
            id="year"
            name="year"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
            className="w-full border-2 border-black rounded-md text-black"
          />
          {formik.touched.year && formik.errors.year ? (
            <div className="text-red-600">{formik.errors.year}</div>
          ) : null}
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;
