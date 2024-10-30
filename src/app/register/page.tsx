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
  message: string;
};

export default function Register() {
  const [alertMessage, setAlertMessage] = useState("");

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputRePassword, setInputRePassword] = useState("");

  const [inputUsernameWarning, setInputUsernameWarning] = useState(false);
  const [inputPasswordWarning, setInputPasswordWarning] = useState(false);
  const [inputRePasswordWarning, setInputRePasswordWarning] = useState(false);

  const [isLoginChecking, setIsLoginChecking] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {}, []);

  async function getRegisterData() {
    if (inputUsername == "") {
      setInputUsernameWarning(true);
    }
    if (inputPassword == "") {
      setInputPasswordWarning(true);
    }
    if (inputRePassword == "") {
      setInputRePasswordWarning(true);
    }
    if (inputRePassword == inputRePassword) {
      setInputRePasswordWarning(true);
    }
    if (inputUsername != "" || inputPassword != "" || inputPassword != "") {
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
            username: inputUsername,
            password: inputPassword,
          }),
        });
        const data: Response = await response.json();
        if (data.status) {
        } else {
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
                    <Label htmlFor="password">Password</Label>
                    <Input
                      placeholder="Password"
                      type="password"
                      onChange={(e) => setInputPassword(e.target.value)}
                      className={inputPasswordWarning ? "border-red-500" : ""}
                    />
                    <Label
                      htmlFor="usernameWarning"
                      className={`text-red-500 ${
                        inputPasswordWarning ? "flex" : "hidden"
                      }`}
                    >
                      Password cannot be empty!
                    </Label>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Label htmlFor="reenterpassword">Reenter Password</Label>
                    <Input
                      placeholder="Reenter Password"
                      type="password"
                      onChange={(e) => setInputPassword(e.target.value)}
                      className={inputRePasswordWarning ? "border-red-500" : ""}
                    />
                    <Label
                      htmlFor="usernameWarning"
                      className={`text-red-500 ${
                        inputRePasswordWarning ? "flex" : "hidden"
                      }`}
                    >
                      Password cannot be empty!
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
          <AlertDialogTitle>Failed to Register</AlertDialogTitle>
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
