"use client";

import { Button } from "@nextui-org/react";
import { IconLogo, IconSetting } from "./common/icons";
import { useQuery } from "@tanstack/react-query";

export default function Header(props: any) {
  const queryButtonOption = useQuery<any>({
    queryKey: ["buttonOption"],
    queryFn: () => {},
    refetchOnMount: true,
  });

  return (
    <section
      className={`top-0 z-50 h-[40px] w-full ${props.isFixed ? "" : ""} py-2`}
    >
      <div className="flex h-[40px] w-full select-none flex-row gap-1 justify-between items-center">
        <div className="flex flex-row items-end">
          {/* <div
            className={`h-[40px] w-[30px] flex flex-col justify-center overflow-x-clip`}
          >
            {queryButtonOption.data?.isModelActivated ? (
              <LottieSecurityCheck
                width={40}
                height={40}
                color="blue"
                play
                loop
              ></LottieSecurityCheck>
            ) : (
              <LottieSecurityCheck
                width={40}
                height={40}
                color="red"
              ></LottieSecurityCheck>
            )}
          </div> */}
          <div className="flex flex-row space-x-2 items-end">
            <IconLogo fill="#000" width={30}></IconLogo>
            <p className="font-light text-xl">상장 공장</p>
          </div>
        </div>
        <div className="flex h-fit flex-row gap-2">
          {/* <Button
            isIconOnly
            color={"primary"}
            variant={"light"}
            size={"sm"}
            onPress={() => {
              window.open("https://github.com/ziweek");
            }}
          >
            <IconGithub fill="#000" width={"20px"}></IconGithub>
          </Button>
          <Button
            isIconOnly
            variant={"light"}
            color={"primary"}
            size={"sm"}
            onPress={() => {
              window.open("https://www.linkedin.com/in/jiuk-kim-42248325a/");
            }}
          >
            <IconLinkedIn fill="#000" width={"20px"}></IconLinkedIn>
          </Button> */}
          <Button
            isIconOnly
            variant={"light"}
            color={"primary"}
            size={"sm"}
            // onPress={() => {
            //   window.open("https://www.linkedin.com/in/jiuk-kim-42248325a/");
            // }}
          >
            <IconSetting fill="#000" width={"30px"}></IconSetting>
          </Button>
        </div>
      </div>
    </section>
  );
}
