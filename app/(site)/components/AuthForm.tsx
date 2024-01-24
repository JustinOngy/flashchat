"use client";

import React, { useCallback, useState } from "react";
import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { BsGithub, BsGoogle } from "react-icons/bs";
import axios from "axios";

type Variant = "LOGIN" | "REGISTER";

const AuthForm: React.FC = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const toggleVariant = useCallback(() => {
    setVariant(variant === "LOGIN" ? "REGISTER" : "LOGIN");
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      if (variant === "REGISTER") {
        // Example API call for registration
        await axios.post("/api/register", data);
      } else {
        // Example API call for login
        // await axios.post("/api/login", data);
      }
    } catch (error) {
      console.error("Error during authentication:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const socialAction = (action: string) => {
    console.log(`${action} login action`);
    // Implement social login functionality here
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <Input
              id="name"
              label="Name"
              register={register}
              errors={errors}
              disabled={isLoading}
              required
            />
          )}
          <Input
            id="email"
            label="Email address"
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
          />
          <Input
            id="password"
            label="Password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
            required
            showPasswordToggle
          />
          <Button disabled={isLoading} fullWidth type="submit">
            {variant === "LOGIN" ? "Sign In" : "Register"}
          </Button>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <AuthSocialButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
            />
            <AuthSocialButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center text-sm text-gray-500">
          <span
            onClick={toggleVariant}
            className="font-medium text-orange-600 hover:text-orange-500 cursor-pointer">
            {variant === "LOGIN"
              ? "Need an account? Register"
              : "Have an account? Sign In"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
