import React, { useState } from "react";
import Logo from "@/assets/download.png";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Switch from "@/components/ui/Switch";
import { LogIn } from "lucide-react";

import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
    username: z.string().min(3, "username must be at least 3 characters"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginInputProps = z.infer<typeof loginSchema>
const Login = () => {
    const [isChecked, setisChecked] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    })

    const handleRememberMe = () => {
        setisChecked((prev) => !prev);
    };

    const onSubmit = (data: LoginInputProps) => {
        console.log(data, errors)
    }
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="mx-2 w-full border border-gray-300 pb-10 shadow-md sm:w-90">
                <div className="flex flex-col items-center bg-linear-to-b from-sky-950 to-sky-900">
                    <div className="flex flex-col items-center px-8 py-4">
                        {/* logo */}
                        <div className="mb-4 size-10">
                            <img
                                className="h-full w-full rounded-full object-cover"
                                src={Logo}
                            />
                        </div>
                        {/* heading */}
                        <h1 className="text-lg font-medium tracking-tight text-gray-100">
                            Let's Get Started
                        </h1>
                        {/* text */}
                        <p className="pt-2 text-sm text-gray-400">
                            Sign in to continue to CRM
                        </p>
                    </div>
                </div>
                <form className="flex flex-col gap-2 px-4 pt-2" onSubmit={handleSubmit(onSubmit)}>
                    {/* username */}
                    <div className="flex w-full flex-col gap-2 px-2">
                        <label className="pt-2 text-sm text-gray-400" htmlFor="username">
                            Username
                        </label>
                        <Input
                            id="username"
                            placeholder="Enter username"
                            {...register("username")}
                        />
                        {errors.username && errors.username.type === "required" && (
                            <span className="text-xs text-red-600">This is required</span>
                        )}
                        {errors.username && errors.username.type === "maxLength" && (
                            <span className="text-xs text-red-600">Max length exceeded</span>
                        )}
                    </div>
                    {/* password */}
                    <div className="flex w-full flex-col gap-2 px-2">
                        <label className="pt-2 text-sm text-gray-400" htmlFor="password">
                            Password
                        </label>
                        <Input
                            id="password"
                            placeholder="Enter Password"
                            {...register("password", { required: true, maxLength: 30, })}
                        />
                        {errors.password && errors.password.type === 'minLength' && (
                            <span className="text-xs text-red-600">minimum 6 characters required</span>
                        )}
                        {errors.password && errors.password.type === "required" && (
                            <span className="text-xs text-red-600">This is required</span>
                        )}
                        {errors.password && errors.password.type === "maxLength" && (
                            <span className="text-xs text-red-600">Max length exceeded</span>
                        )}
                    </div>
                    {/* remember me */}
                    <div className="flex h-5 items-center gap-3 pt-2">
                        <div>
                            <Switch
                                checked={isChecked}
                                onChange={handleRememberMe}
                                id="rememberMe"
                            />
                        </div>
                        <label
                            className="pt-1 text-xs text-gray-700"
                            onClick={handleRememberMe}
                            htmlFor="rememberMe"
                        >
                            Remember me
                        </label>
                    </div>
                    <p className="cursor-pointer pt-1 text-right text-xs font-normal text-gray-400">
                        Forgot password?
                    </p>
                    {/* login button */}
                    <Button type="submit">
                        <span>Login</span>
                        <LogIn className="ml-0.5 inline size-3.5 font-bold" />
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
