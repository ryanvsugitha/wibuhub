"use client";

import {
  Card,
  CardContent,
  CardDescription,
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

export default function Login() {
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
          <CardContent>
            <div className="flex flex-col gap-5">
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Username</Label>
                    <Input id="username" placeholder="Username" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      placeholder="Password"
                      type="password"
                    />
                  </div>
                </div>
              </form>
              <Link
                href={"/register"}
                className="text-sm hover:underline underline-offset-2"
              >
                Doesn't have an account? register here
              </Link>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Login</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
