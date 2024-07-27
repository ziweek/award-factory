"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useIsMobile } from "@/hook/useMediaQuery";
import { IconLogo } from "@/component/common/icons";
import Footer from "@/component/footer";

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkResize = () => {
      if (isMobile) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };

    checkResize();
  }, [isMobile]);

  useEffect(() => {
    AOS.init();
    return () => {};
  }, []);

  return (
    <>
      <section className="mx-auto h-full min-h-full w-screen select-none overflow-x-clip bg-white">
        {/* 1. 프로젝트 소개  */}
        <div
          className={`mx-auto flex h-screen flex-col items-center justify-center`}
          style={
            {
              // backgroundImage: `url('/images/background-pattern.jpg')`,
            }
          }
        >
          <div className="z-20 flex w-full flex-col items-center justify-center space-y-8">
            {/* 소개 텍스트 */}
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <IconLogo width={mobile ? 100 : 120} fill="#000"></IconLogo>
              <p className="font-light text-4xl">상장 공장</p>
              <p
                className={`text-center font-bold ${
                  mobile ? "text-md" : "text-lg"
                }`}
              >
                내 손으로 빚어낸 상장을{mobile && <br></br>} 전해보는 것은
                어떨까요?
              </p>
            </div>
            {/*  */}
            <div className="flex w-full flex-col items-center justify-center space-y-4">
              <div className="flex flex-row space-x-2">
                <Button
                  className={`font-bold border-black hover:-translate-y-1 ${
                    mobile ? "border-2" : "border-3"
                  }`}
                  size={mobile ? "md" : "lg"}
                  color={"default"}
                  variant={"bordered"}
                  aria-label="information"
                  onClick={() => {
                    window.open(
                      "https://amplified-purpose-11c.notion.site/3e486a3aa9cf4ba585ac1c92eecf0e4a?pvs=74"
                    );
                  }}
                >
                  서비스 소개자료
                </Button>
                <Button
                  className={`font-bold border-black hover:-translate-y-1 ${
                    mobile ? "border-2" : "border-3"
                  }`}
                  size={mobile ? "md" : "lg"}
                  color={"default"}
                  variant={"bordered"}
                  aria-label="product"
                  onClick={() => {
                    router.push("/main");
                  }}
                >
                  서비스 시작하기
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0">
            <Footer
              isFixed
              title={"상장 공장"}
              subtitle={"저와 소통하실 분은 아래에서 만나요!"}
            ></Footer>
          </div>
        </div>
      </section>
    </>
  );
}
