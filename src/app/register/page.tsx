"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/app/assets/wibuhub_logo.svg";

export default async function Register() {
  const username_error = ""

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
            <Text>Register Account</Text>
            <TextInput label="Username or email" withAsterisk error={username_error} className="w-full"/>
            <PasswordInput label="Password" withAsterisk error="" className="w-full"/>
            <PasswordInput label="Password Confirmation" withAsterisk error="" className="w-full"/>
            <Link href={"../login"} className="w-full">
              <Text size="xs" c="red" ta="right">
                Already have an account? Login instead
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
