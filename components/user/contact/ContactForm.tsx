"use client";
import CustomInput from "@/components/common/CommonInput";
import { contactSchema } from "@/schemas/contactSechema";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
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

  const formRef = React.useRef<HTMLFormElement>(null);
  const onSubmit = async (data: any) => {
    try {
      if (!formRef.current) return;
      await emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
          formRef.current,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!,
          },
        )
        .then(
          () => {
            console.log("sucess");
            toast.success("Form submitted successfully!");
            reset();
          },
          (error) => {
            toast.error("Something went wrong");
            console.log("here", error);
          },
        );
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={formRef}
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
