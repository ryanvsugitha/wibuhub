"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/assets/wibuhub_logo.svg";
import { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type Response = {
  status: boolean;
  title: string;
  message: string;
};

export default function Register() {
  const passwordWarning = [
    "Password cannot be empty!",
    "Password doesn't match!",
  ];

  const [alertTitle, setAlertTitle] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputRePassword, setInputRePassword] = useState("");

  const [inputUsernameWarning, setInputUsernameWarning] = useState(false);
  const [inputEmailWarning, setInputEmailWarning] = useState(false);
  const [inputPasswordWarning, setInputPasswordWarning] = useState(false);
  const [inputRePasswordWarning, setInputRePasswordWarning] = useState(false);

  const [currentPasswordWarning, setCurrentPasswordWarning] = useState(0);

  const [isLoginChecking, setIsLoginChecking] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);

  function resetForm() {
    setInputUsername("");
    setInputEmail("");
    setInputPassword("");
    setInputRePassword("");
  }

  function validateForm() {
    if (inputUsername == "") {
      setInputUsernameWarning(true);
    } else {
      setInputUsernameWarning(false);
    }
    if (inputEmail == "") {
      setInputEmailWarning(true);
    } else {
      setInputEmailWarning(false);
    }
    if (inputPassword == "") {
      setInputPasswordWarning(true);
      setCurrentPasswordWarning(0);
    } else {
      setInputPasswordWarning(false);
    }
    if (inputRePassword == "") {
      setInputRePasswordWarning(true);
      setCurrentPasswordWarning(0);
    } else {
      setInputRePasswordWarning(false);
    }
    if (
      inputPassword != inputRePassword &&
      inputPassword != "" &&
      inputRePassword != ""
    ) {
      setInputPasswordWarning(true);
      setInputRePasswordWarning(true);
      setCurrentPasswordWarning(1);
    } else if (
      inputPassword == inputRePassword &&
      inputPassword != "" &&
      inputRePassword != ""
    ) {
      setInputPasswordWarning(false);
      setInputRePasswordWarning(false);
    }

    if (
      inputUsername != "" &&
      inputEmail != "" &&
      inputPassword != "" &&
      inputRePassword != "" &&
      inputPassword == inputRePassword
    ) {
      getRegisterData();
    }
  }

  async function getRegisterData() {
    setInputUsernameWarning(false);
    setInputPasswordWarning(false);
    setIsLoginChecking(true);

    try {
      const response = await fetch("/api/user_register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: inputUsername,
          email: inputEmail,
          password: inputPassword,
        }),
      });
      const data: Response = await response.json();
      if (data.status) {
        setAlertTitle(data.title);
        setAlertMessage(data.message);
        resetForm();
        setOpenAlert(true);
      } else {
        setAlertTitle(data.title);
        setAlertMessage(data.message);
        setOpenAlert(true);
      }
      setIsLoginChecking(false);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setIsLoginChecking(false);
    } finally {
      setIsLoginChecking(false);
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="p-5 sm:p-0 sm:w-[400px]">
        <Card className="">
          <CardHeader>
            <CardTitle className="flex justify-center">
              <Image
                className="object-contain"
                src={Logo}
                width={200}
                height={100}
                alt=""
              />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <CardTitle>Register</CardTitle>
            <div className="flex flex-col gap-5">
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="name">Username</Label>
                    <Input
                      placeholder="Username"
                      value={inputUsername}
                      onChange={(e) => setInputUsername(e.target.value)}
                      className={inputUsernameWarning ? "border-red-500" : ""}
                    />
                    <Label
                      htmlFor="usernameWarning"
                      className={`text-red-500 ${
                        inputUsernameWarning ? "flex" : "hidden"
                      }`}
                    >
                      Username cannot be empty!
                    </Label>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      placeholder="Email"
                      value={inputEmail}
                      onChange={(e) => setInputEmail(e.target.value)}
                      className={inputEmailWarning ? "border-red-500" : ""}
                    />
                    <Label
                      htmlFor="emailWarning"
                      className={`text-red-500 ${
                        inputEmailWarning ? "flex" : "hidden"
                      }`}
                    >
                      Email cannot be empty!
                    </Label>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      placeholder="Password"
                      type="password"
                      value={inputPassword}
                      onChange={(e) => setInputPassword(e.target.value)}
                      className={inputPasswordWarning ? "border-red-500" : ""}
                    />
                    <Label
                      htmlFor="usernameWarning"
                      className={`text-red-500 ${
                        inputPasswordWarning ? "flex" : "hidden"
                      }`}
                    >
                      {passwordWarning[currentPasswordWarning]}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="reenterpassword">Reenter Password</Label>
                    <Input
                      placeholder="Reenter Password"
                      type="password"
                      value={inputRePassword}
                      onChange={(e) => setInputRePassword(e.target.value)}
                      className={inputRePasswordWarning ? "border-red-500" : ""}
                    />
                    <Label
                      htmlFor="usernameWarning"
                      className={`text-red-500 ${
                        inputRePasswordWarning ? "flex" : "hidden"
                      }`}
                    >
                      {passwordWarning[currentPasswordWarning]}
                    </Label>
                  </div>
                </div>
              </form>
              <Link
                href={"/login"}
                className="text-sm hover:underline underline-offset-2"
              >
                Already have an account? Login here
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button
              onClick={getRegisterData}
              disabled={isLoginChecking}
              className="flex flex-row gap-1 items-center justify-center"
            >
              <LoaderCircle
                className={`w-4 h-4 animate-spin ${
                  isLoginChecking ? "block" : "hidden"
                }`}
              />
              <p>{isLoginChecking ? "Loading" : "Register"}</p>
            </Button>
          </CardFooter>
        </Card>
      </div>
      <AlertDialog open={openAlert}>
        <AlertDialogContent className="flex flex-col items-center">
          <AlertDialogTitle>{alertTitle}</AlertDialogTitle>
          <AlertDialogDescription>{alertMessage}</AlertDialogDescription>
          <div>
            <AlertDialogAction onClick={() => setOpenAlert(false)}>
              Close
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
