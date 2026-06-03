"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Button, Card, Alert } from "@heroui/react"; 

import { Eye, EyeSlash, Envelope, Lock, Person } from "@gravity-ui/icons";
import { signUp } from "@/lib/auth-client";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const { data, error } = await signUp.email({
        email,
        password,
        name,
      });

      if (error) {
        setErrorMessage(error.message || "Something went wrong. Please try again.");
      } else {
        setSuccessMessage("Account created successfully! Redirecting to sign in...");
        setName("");
        setEmail("");
        setPassword("");

        callbackURL:"/"
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <Card.Content className="space-y-6 p-8">
          
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-bold tracking-tight">Create an account</h1>
            <p className="text-small text-default-500">
              Enter your details below to create your account
            </p>
          </div>

          {errorMessage && (
            <Alert color="danger" title="Error" description={errorMessage} />
          )}
          {successMessage && (
            <Alert color="success" title="Success" description={successMessage} />
          )}

          <form onSubmit={handleSignup} className="space-y-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-small font-medium text-default-700">Full Name</label>
              <Input
                isRequired
                type="text"
                placeholder="John Doe"
                variant="bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                startContent={<Person className="text-default-400 pointer-events-none text-xl" />}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-small font-medium text-default-700">Email Address</label>
              <Input
                isRequired
                type="email"
                placeholder="you@example.com"
                variant="bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                startContent={<Envelope className="text-default-400 pointer-events-none text-xl" />}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-small font-medium text-default-700">Password</label>
              <Input
                isRequired
                placeholder="••••••••"
                variant="bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                startContent={<Lock className="text-default-400 pointer-events-none text-xl" />}
                endContent={
                  <button
                    className="focus:outline-none flex items-center justify-center h-full"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? <EyeSlash className="text-default-400 text-xl" /> : <Eye className="text-default-400 text-xl" />}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />
            </div>

            <Button isLoading={isLoading} type="submit" color="primary" className="w-full mt-2 font-medium">
              Sign Up
            </Button>
          </form>

          <div className="text-center text-small pt-2 border-t border-divider">
            <p className="text-default-500">
              Already have an account?{" "}
              <Link href="/auth/signin" className="text-primary hover:underline font-semibold transition-colors">
                Sign In
              </Link>
            </p>
          </div>
        </Card.Content>
      </Card>
    </div>
  );
}