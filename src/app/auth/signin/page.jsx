"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input, Button, Card, Alert } from "@heroui/react"; 

import { Eye, EyeSlash, Envelope, Lock } from "@gravity-ui/icons";
import { signIn, signOut, useSession } from "@/lib/auth-client";

export default function SigninPage() {
  const router = useRouter();
  const { data: session, isPending: isSessionLoading } = useSession();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSignin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const { data, error } = await signIn.email({
        email,
        password,
        callbackURL: "/"
      });

      if (error) {
        setErrorMessage(error.message || "Invalid email or password. Please try again.");
      } else {
        setSuccessMessage("Logged in successfully! Redirecting...");
        setEmail("");
        setPassword("");
        
        setTimeout(() => {
          router.push("/");
        }, 1500);
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignout = async () => {
    setIsLoading(true);
    try {
      await signOut({
        callbackURL: "/auth/signin"
      });
      setSuccessMessage("Signed out successfully!");
    } catch (err) {
      setErrorMessage("Failed to sign out.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSessionLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Button isLoading variant="light">Loading...</Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <Card.Content className="space-y-6 p-8">
          
          {session ? (
            <div className="space-y-5 text-center">
              <div className="flex flex-col space-y-2">
                <h1 className="text-2xl font-bold tracking-tight">Already Signed In</h1>
                <p className="text-small text-default-500">
                  You are currently logged in as <span className="font-semibold text-default-700">{session.user?.email}</span>
                </p>
              </div>

              {successMessage && (
                <Alert color="success" title="Success" description={successMessage} />
              )}

              <div className="flex flex-col gap-3 pt-2">
                <Button as={Link} href="/" color="primary" className="w-full font-medium">
                  Go to Home
                </Button>
                <Button isLoading={isLoading} onClick={handleSignout} color="danger" variant="flat" className="w-full font-medium">
                  Sign Out
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-bold tracking-tight">Welcome Back</h1>
                <p className="text-small text-default-500">
                  Enter your credentials to sign in to your account
                </p>
              </div>

              {errorMessage && (
                <Alert color="danger" title="Error" description={errorMessage} />
              )}
              {successMessage && (
                <Alert color="success" title="Success" description={successMessage} />
              )}

              <form onSubmit={handleSignin} className="space-y-5">
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
                  <div className="flex items-center justify-between">
                    <label className="text-small font-medium text-default-700">Password</label>
                    <Link href="/auth/forgot-password" className="text-tiny text-primary hover:underline">
                      Forgot password?
                    </Link>
                  </div>
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
                  Sign In
                </Button>
              </form>

              <div className="text-center text-small pt-2 border-t border-divider">
                <p className="text-default-500">
                  Don't have an account?{" "}
                  <Link href="/auth/signup" className="text-primary hover:underline font-semibold transition-colors">
                    Sign Up
                  </Link>
                </p>
              </div>
            </>
          )}

        </Card.Content>
      </Card>
    </div>
  );
}