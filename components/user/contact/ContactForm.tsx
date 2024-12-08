"use client";

import CustomInput from "@/components/common/CommonInput";
import { contactSchema } from "@/schemas/contactSechema";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const {
    formState: { errors },
    register,
    reset,
    handleSubmit,
  } = useForm({
    resolver: yupResolver(contactSchema),
    mode: "all",
  });

  const onSubmit = async (data: any) => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const res = await fetch(`${apiUrl}/contactus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 201) {
        toast.success("Form submitted successfully!");
        reset();
      } else {
        toast.error("Something went wrong");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-4 rounded-2xl bg-white p-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.1)] xl:w-[541px]   "
    >
      <CustomInput
        errors={errors}
        id="fullName"
        placeholder="Full Name"
        register={register}
      />
      <CustomInput
        errors={errors}
        id="email"
        placeholder="Email"
        register={register}
      />
      <CustomInput
        errors={errors}
        id="number"
        placeholder="Mobile Number"
        register={register}
      />
      <div>
        <textarea
          id="message"
          className="w-full  outline-none border h-[150px] text-black px-2 py-1 text-sm  mt-2  rounded-lg"
          placeholder="Message"
          {...register("message")}
        ></textarea>
        {errors[`message`] && (
          <p className="input-error-text text-bluesh text-xs leading-5 text-red-500">
            {errors[`message`].message}
          </p>
        )}
      </div>
      <button className="bg-accent text-[#222222] w-[120px] hover:bg-accent/80 duration-150 delay-75 font-bold py-2 px-4 rounded">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
