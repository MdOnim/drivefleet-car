"use client";

import React, { useState } from "react";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { Eye, EyeOff } from "lucide-react";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    console.log(data, error);

    if (data) {
      redirect("/");
    }

    if (error) {
      alert(error.message);
    }
  };



//   google singup
  const handleGoogleSingUp = async ()=>{
          await authClient.signIn.social({
              provider: 'google'
          })
  
      }











  return (
    <div className="min-h-screen bg-[#0d1520] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl bg-[#0b1119] border border-gray-800 rounded-3xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-2">
        <div className="relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
            alt="Car"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-[#0d1520]/60 backdrop-blur-[2px]"></div>

          <div className="absolute bottom-10 left-10 z-10">
            <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent uppercase tracking-wider">
              DriveFleet
            </h1>

            <p className="text-zinc-300 mt-2 font-medium">
              Premium Car Rental Platform
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center p-8 md:p-14">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-teal-200 bg-clip-text text-transparent uppercase tracking-wide mb-2">
              Login
            </h1>

            <p className="text-zinc-400 mb-8 text-sm">
             Login to your account
            </p>

            <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
             
              <TextField
                isRequired
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email";
                  }

                  return null;
                }}
              >
                <Label className="text-zinc-300 mb-1.5 text-sm font-medium block">
                  Email
                </Label>

                <Input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#0d1520] text-white rounded-xl border border-gray-800 focus-within:border-cyan-400 transition duration-300 h-11"
                />

                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>

              <TextField
                isRequired
                validate={(value) => {
                  if (value.length < 8) {
                    return "Password must be at least 8 characters";
                  }

                  return null;
                }}
              >
                <Label className="text-zinc-300 mb-1.5 text-sm font-medium block">
                  Password
                </Label>

                <div className="relative">
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="bg-[#0d1520] text-white rounded-xl border border-gray-800 focus-within:border-cyan-400 transition duration-300 pr-12 h-11 w-full"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-cyan-400 transition-colors z-10"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <FieldError className="text-red-400 text-xs mt-1" />
              </TextField>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 font-bold h-12 rounded-xl mt-2 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:opacity-90 transition-all duration-300 active:scale-[0.99]"
              >
                Login
              </Button>

              <div className="flex items-center gap-4 my-1">
                <div className="flex-1 h-px bg-gray-800"></div>

                <span className="text-zinc-500 text-xs uppercase tracking-wider">
                  or continue with
                </span>

                <div className="flex-1 h-px bg-gray-800"></div>
              </div>

              <Button
                onClick={handleGoogleSingUp}
                variant="bordered"
                className="w-full h-12 border-gray-800 text-zinc-300 bg-[#0d1520]/40 rounded-xl hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300 font-medium"
                >
                <FcGoogle size={24} />
                Continue with Google
                </Button>
            </Form>

                        <p className="text-center text-zinc-400 mt-6 text-sm">
            Don&apos;t have an account{" "}
            <Link href="/register" className="text-cyan-400 font-medium hover:underline cursor-pointer transition-colors">
                Register 
            </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
