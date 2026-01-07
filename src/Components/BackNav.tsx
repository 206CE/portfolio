"use client"

import { Button } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function BackButton() {
  const router = useRouter();

  return (

      <Button onClick={() => router.back()} className={"btn mx-10 cursor-pointer"}>
        <IoIosArrowBack className="" />
      </Button>

  );
}
