"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/wibuhub_logo.svg";

export default function Login() {
  return (
    <> 
      <div className="flex justify-center items-center min-h-screen w-full">
        {/* <Paper shadow="sm" withBorder p="xl" className="w-1/4">
          <div className="flex flex-col gap-3 items-center ">
            <Image
              className="object-contain"
              src={Logo}
              width={120}
              height={100}
              alt=""
            />
            <Text>Login</Text>
            <TextInput label="Username or email" error="" className="w-full"/>
            <PasswordInput label="Password" error="" className="w-full"/>
            <Link href={"../register"} className="w-full">
              <Text size="xs" c="red" ta="right">
                Don't have an account? Register instead
              </Text>
            </Link>
            <Button variant="filled" color="cyan">
              Login
            </Button>
          </div>
        </Paper> */}
      </div>
    </>
  );
}
