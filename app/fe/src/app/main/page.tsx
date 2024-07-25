"use client";

import Header from "@/component/header";
import { useIsMobile } from "@/hook/useMediaQuery";
import {
  Tabs,
  Tab,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  DatePicker,
  Tooltip,
  Input,
  Card,
} from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import html2canvas from "html2canvas";
import { IconComment, IconGithub, IconLike } from "@/component/common/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/component/footer";

export default function Home() {
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>("부가 기능");
  const [inputOption, setInputOption] = useState<any>({
    inputValues: {
      title: "밤샘의 챔피언상",
      winner: "김야근",
      description:
        "별이 빛나는 밤에도 일을 놓지 않는 당신의 열정에 감사를 담아 이 상을 드립니다.",
      publisher: "야근 근절 위원회",
      date: "2024년 7월 24일",
    },
    inputContent: [
      {
        key: "title",
        label: "상장 제목",
        placeholder: "밤샘의 챔피언상",
        max: 12,
        isValid: true,
      },
      {
        key: "winner",
        label: "수상자 이름",
        placeholder: "김야근",
        max: 10,
        isValid: true,
      },
      {
        key: "description",
        label: "상장 내용",
        placeholder:
          "별이 빛나는 밤에도 일을 놓지 않는 당신의 열정에 감사를 담아 이 상을 드립니다.",
        max: 120,
        isValid: true,
      },
      {
        key: "publisher",
        label: "발행자 이름",
        placeholder: "야근 근절 위원회",
        max: 12,
        isValid: true,
      },
    ],
  });
  const [modalOption, setModalOption] = useState({
    isTutorialOpen: true,
    tutorialContentIndex: 0,
    tutorialContent: [
      {
        title: "튜토리얼 시작",
        desription: (
          <div className="space-y-4 leading-loose">
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
            </p>
          </div>
        ),
        image: "",
      },
      {
        title: "도청 방지 모델!",
        desription: (
          <div className="space-y-4 leading-loose">
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
            </p>
          </div>
        ),
        image: "",
      },
      {
        title: "부가 기능!",
        desription: (
          <div className="space-y-4 leading-loose">
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
            </p>
          </div>
        ),
        image: "",
      },
      {
        title: "통계 요약!",
        desription: (
          <div className="space-y-4 leading-loose">
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
            </p>
          </div>
        ),
        image: "",
      },
      {
        title: "튜토리얼 종료",
        desription: (
          <div className="space-y-4 leading-loose">
            <p>
              자동 음성 인식(ASR, Automatic Speech Recognition)은 음성을
              텍스트로 변환하는 기술입니다. 이 기술은 마이크로폰으로 수집된 음성
            </p>
          </div>
        ),
        image: "",
      },
    ],
    isModalOpen: false,
    buttonSelected: "",
  });

  const queryinputOption = useQuery<any>({
    queryKey: ["inputOption"],
    queryFn: () => inputOption,
    refetchOnMount: true,
  });

  useEffect(() => {
    // toast(
    //   "👏 안녕하세요!\n\n본 데모 버전에서는 아이디와 비밀번호 없이 로그인하실 수 있습니다.",
    //   {
    //     className: "leading-relaxed text-center font-bold",
    //   }
    // );
    AOS.init({ once: true, mirror: false });
    const checkResize = () => {
      if (isMobile) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    checkResize();
  }, [isMobile]);

  return (
    <>
      <section className="h-full min-h-screen w-full select-none flex-col justify-start items-center">
        <div
          className={`flex h-full w-full flex-col items-center justify-start gap-2 pb-6 pt-2 px-4 max-w-[600px] mx-auto space-y-4`}
        >
          <Header></Header>
          <div className="w-full h-full flex flex-col gap-y-8">
            <div className="h-fit w-full">
              <Tabs
                variant={"bordered"}
                aria-label="Options"
                fullWidth
                color={"default"}
                size={"lg"}
                selectedKey={selected}
                onSelectionChange={(key) => setSelected(key)}
                radius={"none"}
                classNames={{ cursor: "bg-[#E6E6E7]" }}
              >
                <Tab
                  key="상장 만들기"
                  title={
                    <Tooltip
                      content={"상장 만들기입니다."}
                      showArrow
                      isOpen={
                        modalOption.isTutorialOpen &&
                        modalOption.tutorialContentIndex == 2
                      }
                      placement={"bottom"}
                      color={"primary"}
                      size={"lg"}
                      className="max-w-[150px]"
                    >
                      <p>상장 만들기</p>
                    </Tooltip>
                  }
                >
                  <div>
                    <div className="flex flex-col gap-8 w-full items-center overflow-y-scroll pt-4">
                      <div
                        data-aos="fade-up"
                        data-aos-duration={300}
                        id="award"
                        className="relative w-[300px] aspect-[5/7] flex flex-col justify-center items-center p-8 py-10 h-[420px]"
                      >
                        <div
                          className="relative grid grid-cols-3 grid-rows-4 h-full gap-4 content-between z-10"
                          style={{
                            gridTemplateRows: "auto auto 1fr auto",
                          }}
                        >
                          <p className="col-span-3 w-full text-center text-xl font-light">
                            {inputOption.inputValues.title}
                          </p>
                          <p className="col-span-3 w-full text-right text-md font-light">
                            {inputOption.inputValues.winner}
                          </p>
                          <p className="col-span-3 w-full text-center self-center text-lg font-light">
                            {inputOption.inputValues.description}
                          </p>
                          <div className="flex flex-col w-full items-center col-span-3">
                            <p className="w-full text-center text-md font-light">
                              {inputOption.inputValues.publisher}
                            </p>
                            <p className="w-full text-center text-md font-light">
                              {inputOption.inputValues.date}
                            </p>
                          </div>
                        </div>
                        <div
                          className="absolute w-[200%] scale-50 z-0 aspect-[5/7] bg-contain flex flex-col justify-center items-center p-8 py-10 border-2 drop-shadow-sm"
                          style={{
                            backgroundImage: `url(/images/award-template-1.png)`,
                          }}
                        ></div>
                      </div>
                      {inputOption.inputContent.map((e: any, i: number) => {
                        return (
                          <Input
                            label={e.label}
                            placeholder={e.placeholder}
                            labelPlacement={"outside"}
                            key={i}
                            isClearable
                            radius={"none"}
                            variant={"faded"}
                            className="text-sm w-full"
                            fullWidth
                            size={"lg"}
                            description={`${e.label}은 ${e.max}글자까지 입력이 가능합니다.`}
                            onChange={(i: any) => {
                              if (i.target.value.length <= [e.max]) {
                                setInputOption({
                                  ...inputOption,
                                  inputValues: {
                                    ...inputOption.inputValues,
                                    [e.key]: i.target.value,
                                  },
                                });
                              }
                            }}
                          >
                            <div className="w-full h-full flex flex-row justify-between items-center font-bold">
                              <div>{e.icon}</div>
                              {e.text}
                              <div className="opacity-0">{e.icon}</div>
                            </div>
                          </Input>
                        );
                      })}
                      <DatePicker
                        label={"발행 일자"}
                        labelPlacement={"outside"}
                        radius={"none"}
                        variant={"faded"}
                        className="text-sm w-full"
                        fullWidth
                        size={"lg"}
                        defaultValue={today(getLocalTimeZone()).subtract({
                          days: 1,
                        })}
                        onChange={(e: any) => {
                          console.log(e.day);
                          setInputOption({
                            ...inputOption,
                            inputValues: {
                              ...inputOption.inputValues,
                              date: `${e.year}년 ${e.month}월 ${e.day}일`,
                            },
                          });
                        }}
                      ></DatePicker>

                      <div className="flex flex-col space-y-4 w-full py-4">
                        <Button
                          radius={"none"}
                          variant={"faded"}
                          className="h-[60px] w-full bg-black text-white font-bold border-0"
                          fullWidth
                          size={"lg"}
                          onPress={() => {
                            const target = document.getElementById("award");
                            if (!target) {
                              return alert("저장에 실패");
                            }
                            html2canvas(target, {
                              //   width: 2480,
                              //   height: 3508,
                              scale: 3,
                            }).then((canvas) => {
                              const link = document.createElement("a");
                              document.body.appendChild(link);
                              link.href = canvas.toDataURL("image/png");
                              link.download = "award.png"; // 다운로드 이미지 파일 이름
                              link.click();
                              document.body.removeChild(link);
                            });
                          }}
                        >
                          <p>이미지로 저장하기</p>
                        </Button>
                        <Button
                          radius={"none"}
                          variant={"faded"}
                          className="h-[60px] w-full bg-orange-400 text-[#ffffff] font-bold border-0"
                          fullWidth
                          size={"lg"}
                          isDisabled
                        >
                          <p>명예의 전당에 등록하기</p>
                        </Button>
                        <Button
                          radius={"none"}
                          variant={"faded"}
                          className="h-[60px] w-full bg-[#FEE500] text-[#000000] font-bold border-0"
                          fullWidth
                          size={"lg"}
                          isDisabled
                        >
                          <p>카카오톡으로 전송하기</p>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab
                  key="명예의 전당"
                  title={
                    <Tooltip
                      content={"명예의 전당입니다."}
                      showArrow
                      isOpen={
                        modalOption.isTutorialOpen &&
                        modalOption.tutorialContentIndex == 3
                      }
                      placement={"bottom"}
                      color={"primary"}
                      size={"lg"}
                      className="max-w-[150px]"
                    >
                      <p>명예의 전당</p>
                    </Tooltip>
                  }
                >
                  <div className="flex flex-col items-center space-y-12 pt-4 pb-8">
                    {[
                      {
                        title: "커피 애호가상",
                        winner: "이카페",
                        description:
                          "매일 아침 당신의 책상 위에서 빛나는 커피잔에게 이 상을 드립니다.",
                        publisher: "카페인 중독자 협회",
                        date: "2024년 7월 24일",
                      },
                      {
                        title: "점심시간 장인상",
                        winner: "박점심",
                        description:
                          "점심시간마다 최고의 맛집을 찾아내는 당신의 능력에 감사를 담아 이 상을 드립니다.",
                        publisher: "맛집 탐방 위원회",
                        date: "2024년 7월 24일",
                      },
                      {
                        title: "회의의 달인상",
                        winner: "정회의",
                        description:
                          "끝없는 회의에도 굴하지 않는 당신의 인내심에 감사를 담아 이 상을 드립니다.",
                        publisher: "회의 혁신 위원회",
                        date: "2024년 7월 24일",
                      },
                      {
                        title: "지각왕상",
                        winner: "최지각",
                        description:
                          "항상 독특한 이유로 지각하는 당신의 창의력에 감사를 담아 이 상을 드립니다.",
                        publisher: "시간 관리 위원회",
                        date: "2024년 7월 24일",
                      },
                      {
                        title: "야근의 신상",
                        winner: "신야근",
                        description:
                          "야근을 예술의 경지로 끌어올린 당신의 열정에 감사를 담아 이 상을 드립니다.",
                        publisher: "야근 근절 위원회",
                        date: "2024년 7월 24일",
                      },
                      {
                        title: "휴가의 달인상",
                        winner: "강휴가",
                        description:
                          "휴가 계획을 세우는 당신의 철저한 준비성에 감사를 담아 이 상을 드립니다.",
                        publisher: "휴가 장려 위원회",
                        date: "2024년 7월 24일",
                      },
                    ].map((e, i) => {
                      return (
                        <div
                          key={i}
                          data-aos="fade-up"
                          data-aos-duration={300 * (i + 1)}
                          className="flex flex-col items-center space-y-2"
                        >
                          <div
                            id="award"
                            className="relative w-[300px] aspect-[5/7] flex flex-col justify-center items-center p-8 py-10 h-[420px]"
                          >
                            <div
                              className="relative grid grid-cols-3 grid-rows-4 h-full gap-4 content-between z-10"
                              style={{
                                gridTemplateRows: "auto auto 1fr auto",
                              }}
                            >
                              <p className="col-span-3 w-full text-center text-xl font-light">
                                {e.title}
                              </p>
                              <p className="col-span-3 w-full text-right text-md font-light">
                                {e.winner}
                              </p>
                              <p className="col-span-3 w-full text-center self-center text-lg font-light">
                                {e.description}
                              </p>
                              <div className="flex flex-col w-full items-center col-span-3">
                                <p className="w-full text-center text-md font-light">
                                  {e.publisher}
                                </p>
                                <p className="w-full text-center text-md font-light">
                                  {e.date}
                                </p>
                              </div>
                            </div>
                            <div
                              className="absolute w-[200%] scale-50 z-0 aspect-[5/7] bg-contain flex flex-col justify-center items-center p-8 py-10 border-2 drop-shadow-sm"
                              style={{
                                backgroundImage: `url(/images/award-template-1.png)`,
                              }}
                            ></div>
                          </div>
                          {/* <div className="flex flex-row space-x-4 w-full">
                            <Button
                              isIconOnly
                              variant={"light"}
                              color={"primary"}
                              size={"sm"}
                              // onPress={() => {
                              //   window.open(
                              //     "https://www.linkedin.com/in/jiuk-kim-42248325a/"
                              //   );
                              // }}
                            >
                              <IconLike width={30} fill="#000"></IconLike>
                            </Button>
                            <Button
                              isIconOnly
                              variant={"light"}
                              color={"primary"}
                              size={"sm"}
                              // onPress={() => {
                              //   window.open(
                              //     "https://www.linkedin.com/in/jiuk-kim-42248325a/"
                              //   );
                              // }}
                            >
                              <IconComment width={30} fill="#000"></IconComment>
                            </Button>
                          </div> */}
                        </div>
                      );
                    })}
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
        <Footer
          title={"상장 제조기"}
          subtitle={"저와 소통하실 분은 아래에서 만나요!"}
        ></Footer>
      </section>
      {/* <Toaster></Toaster> */}
      {/* <Modal
        isOpen={modalOption.isModalOpen}
        size={mobile ? "full" : "2xl"}
        placement={"bottom"}
        scrollBehavior={"inside"}
      >
        <ModalContent className="pb-6">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modalOption.buttonSelected}
              </ModalHeader>
              <ModalBody>{inputOption.inputContent[0].desription}</ModalBody>
              <ModalFooter className="w-full flex flex-row items-stretch justify-center">
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    setModalOption({ ...modalOption, isModalOpen: false });
                  }}
                  size={"sm"}
                >
                  돌아가기
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
      {/* <Modal isOpen={modalOption.isTutorialOpen} placement={"bottom"}>
        <ModalContent className="pb-6">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {
                  modalOption.tutorialContent[modalOption.tutorialContentIndex]
                    .title
                }
              </ModalHeader>
              <ModalBody>
                {
                  modalOption.tutorialContent[modalOption.tutorialContentIndex]
                    .desription
                }
              </ModalBody>
              <ModalFooter className="w-full flex flex-row items-stretch justify-center">
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    if (modalOption.tutorialContentIndex != 0) {
                      setModalOption({
                        ...modalOption,
                        tutorialContentIndex:
                          modalOption.tutorialContentIndex - 1,
                      });
                    }
                  }}
                  disabled={modalOption.tutorialContentIndex == 0}
                  size={"sm"}
                >
                  이전으로
                </Button>
                <Button
                  color={"default"}
                  variant="light"
                  onPress={() => {
                    setModalOption({ ...modalOption, isTutorialOpen: false });
                  }}
                  size={"sm"}
                >
                  넘어가기
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    if (
                      modalOption.tutorialContentIndex !=
                      modalOption.tutorialContent.length - 1
                    ) {
                      setModalOption({
                        ...modalOption,
                        tutorialContentIndex:
                          modalOption.tutorialContentIndex + 1,
                      });
                    } else {
                      setModalOption({
                        ...modalOption,
                        isTutorialOpen: false,
                      });
                    }
                  }}
                  disabled={
                    modalOption.tutorialContentIndex ==
                    modalOption.tutorialContent.length - 1
                  }
                  size={"sm"}
                  variant={"light"}
                >
                  {modalOption.tutorialContentIndex !=
                  modalOption.tutorialContent.length - 1
                    ? "다음으로"
                    : "시작하기"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </>
  );
}
