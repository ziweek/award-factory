"use client";

import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Link,
  Input,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useIsMobile } from "@/hook/useMediaQuery";
import { IconLogo } from "@/component/common/icons";
import Footer from "@/component/footer";
import { useTranslations } from "next-intl";

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const {
    isOpen: isAuthOpen,
    onOpen: onAuthOpen,
    onOpenChange: onAuthOpenChange,
  } = useDisclosure();
  const [isSignup, setIsSignup] = useState(false);
  const t = useTranslations("Home");
  const tf = useTranslations("Footer");

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

  const AuthModal = () => (
    <Modal isOpen={isAuthOpen} onOpenChange={onAuthOpenChange} size={"md"}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              {isSignup ? "회원가입" : "로그인"}
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col space-y-4">
                {isSignup && (
                  <Input
                    type="text"
                    size={"lg"}
                    placeholder="이름"
                    // className="w-full p-2 border rounded-md"
                  />
                )}
                <Input
                  type="email"
                  size={"lg"}
                  placeholder="이메일"
                  // className="w-full p-2 border rounded-md"
                />
                <Input
                  type="password"
                  size={"lg"}
                  placeholder="비밀번호"
                  // className="w-full p-2 border rounded-md"
                />
                {isSignup && (
                  <Input
                    type="password"
                    size={"lg"}
                    placeholder="비밀번호 확인"
                    // className="w-full p-2 border rounded-md"
                  />
                )}
                <Button
                  color="primary"
                  size={"lg"}
                  onClick={() => {
                    /* 로그인/회원가입 로직 추가 */
                    router.push("/main");
                  }}
                >
                  {isSignup ? "회원가입" : "로그인"}
                </Button>

                {!isSignup ? (
                  <div className="text-center mt-4 space-y-4">
                    <Link
                      color="primary"
                      onClick={() => setIsSignup(true)}
                      className="cursor-pointer"
                    >
                      회원가입
                    </Link>
                    <p className="text-gray-500 mt-1">
                      또는{" "}
                      <Link
                        className="cursor-pointer text-gray-500 underline"
                        onClick={() => {
                          router.push("/main");
                        }}
                      >
                        계정 없이 시작하기
                      </Link>
                      를 통해 <br></br>제한된 기능을 이용할 수 있습니다.
                    </p>
                  </div>
                ) : (
                  <div className="text-center mt-4 space-y-4">
                    <Link
                      color="primary"
                      onClick={() => setIsSignup(false)}
                      className="cursor-pointer"
                    >
                      로그인
                    </Link>
                    <p className="text-gray-500 mt-1">
                      또는{" "}
                      <Link
                        className="cursor-pointer text-gray-500 underline"
                        onClick={() => {
                          router.push("/main");
                        }}
                      >
                        계정 없이 시작하기
                      </Link>
                      를 통해 <br></br>제한된 기능을 이용할 수 있습니다.
                    </p>
                  </div>
                )}
              </div>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );

  return (
    <>
      <section
        className={`${
          mobile ? "" : "grid grid-cols-2"
        } mx-auto h-full min-h-full w-screen select-none overflow-x-clip`}
        style={{ gridTemplateColumns: `1fr minmax(400px, 500px)` }}
      >
        {!mobile && (
          <div
            className="flex flex-col items-center justify-center w-full h-full bg-cover bg-center bg-blend-lighten bg-white/60"
            style={{ backgroundImage: `url(/images/background-award.png)` }}
          ></div>
        )}
        {/* 1. 프로젝트 소개  */}
        <div
          className={`${
            mobile ? "bg-center bg-cover bg-blend-lighten bg-white/85" : ""
          } mx-auto flex h-screen flex-col items-center justify-center min-w-[300px]`}
          style={{
            backgroundImage: mobile
              ? `url('/images/background-award.png')`
              : "",
          }}
        >
          <div className="z-20 flex w-full flex-col items-center justify-center space-y-8">
            {/* 소개 텍스트 */}
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <IconLogo width={mobile ? 100 : 120} fill="#000"></IconLogo>
              <p className="font-light text-4xl">{t("title")}</p>
              <p
                className={`text-center font-bold ${
                  mobile ? "text-md" : "text-lg"
                }`}
              >
                {t("subtitle-part-1")}
                {mobile && <br></br>} {t("subtitle-part-2")}
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
                  {t("button-left")}
                </Button>
                <Button
                  className={`font-bold border-black hover:-translate-y-1 ${
                    mobile ? "border-2" : "border-3"
                  }`}
                  size={mobile ? "md" : "lg"}
                  color={"default"}
                  variant={"bordered"}
                  aria-label="product"
                  onClick={onAuthOpen}
                >
                  {t("button-right")}
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0">
            <Footer
              isFixed
              title={t("title")}
              subtitle={tf("footer-description")}
            ></Footer>
          </div>
        </div>
      </section>

      {/* Authentication Modal */}
      <AuthModal />
    </>
  );
}
