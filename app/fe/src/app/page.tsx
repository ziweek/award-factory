"use client";

import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";

import { useIsMobile } from "@/hook/useMediaQuery";
import HorizontalSlider from "@/component/horizontal-slider";
import { IconLogo, IconBox } from "@/component/common/icons";
import { LottieArrowDown, LottieDotCircle } from "@/component/common/lotties";
import Footer from "@/component/footer";

export default function Home() {
  const router = useRouter();
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [indexOfPressedCard, setIndexOfPressedCard] = useState<
    number | undefined
  >(undefined);

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
    toast.success("아래로 스크롤하기", {
      className: "font-bold text-sm",
      duration: 5000,
    });
    AOS.init();
    return () => {};
  }, []);

  return (
    <>
      <section className="mx-auto h-full min-h-full w-screen select-none overflow-x-clip bg-white">
        {/* 1. 프로젝트 소개  */}
        <div className="mx-auto flex h-screen flex-col items-center justify-center bg-cover bg-center bg-[url('../../public/images/background-pattern.jpg')] bg-blend-darken bg-black/30">
          <div className="z-20 flex w-full flex-col items-center justify-center space-y-8">
            {/* 소개 텍스트 */}
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <IconLogo width={mobile ? 100 : 120} fill="#fff"></IconLogo>
              <p className="font-bold text-4xl text-white">상장 공장</p>
              <p
                className={`text-center font-bold text-white ${
                  mobile ? "text-md" : "text-lg"
                }`}
              >
                소중한 사람에게 감사한 마음을 {mobile && <br></br>}전달해보는
                것은 어떨까요?
              </p>
            </div>
            {/*  */}
            <div className="flex w-full flex-col items-center justify-center space-y-4">
              <div
                className={`${
                  mobile ? "h-[150px]" : "h-[200px]"
                } flex  flex-col justify-center overflow-y-clip`}
              >
                <LottieDotCircle
                  play
                  loop
                  width={mobile ? "200px" : "300px"}
                ></LottieDotCircle>
              </div>
              <div className="flex flex-row space-x-2">
                <Button
                  className={`font-bold text-white hover:-translate-y-1 ${
                    mobile ? "border-2" : "border-3"
                  }`}
                  size={mobile ? "md" : "lg"}
                  color={"default"}
                  variant={"bordered"}
                  aria-label="information"
                  onClick={() => {
                    window.open("https://github.com/ziweek/award-factory");
                  }}
                >
                  프로젝트 소개자료
                </Button>
                <Button
                  className={`font-bold text-white hover:-translate-y-1 ${
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
                  프로젝트 시작하기
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4">
            <LottieArrowDown
              play
              loop
              width={mobile ? 40 : 80}
            ></LottieArrowDown>
          </div>
          {/* <div className="absolute z-10 h-screen w-auto min-w-full max-w-none bg-black/75"></div> */}
          {/* <video
          controls={false}
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute z-0 h-screen w-screen max-w-none overflow-clip object-cover"
        >
          <source
            src={require("../../public/video/bg.mp4")}
            type="video/mp4"
            className="h-screen w-screen"
          />
          Your browser does not support the video tag.
        </video> */}
        </div>
        {/* 2. 예시 */}
        <div className="mx-auto flex h-fit max-w-[800px] flex-col items-center justify-center gap-8 pt-36">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center space-y-4"
          >
            <div className="flex flex-col items-center justify-center gap-1">
              <IconBox width={40}></IconBox>
              <p className="text-tiny">상장 샘플</p>
            </div>
            <p className="select-none text-center text-3xl font-bold leading-snug">
              격동하는 세계 속에서,<br></br>나아가는 대한민국 방산
            </p>
            <p className="select-none text-center">
              MiliPat은 대한민국 방위사업의 성장과 더불어<br></br>오늘날 시대적
              상황의 속에서 영감을 얻었습니다.
            </p>
            <p className="select-none text-center text-sm">
              * 아래 카드를 하나씩 탭하여 자세히 살펴보기
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex w-full flex-col gap-4 px-8"
            style={
              mobile
                ? { gap: "20px" }
                : {
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "1fr",
                    gap: "20px",
                  }
            }
          >
            {[
              {
                title:
                  "최근 발생한 군사분쟁의 사례에서 방산 분야의 새로운 기술이 폭발적으로 등장하고 있음.",
                tappedTitle:
                  "방산 특허의 AI 분석으로 기술 동향을 예측하여, 국내 방산 기업의 기술 대응 능력을 강화할 수 있음.",
                keword: "군사적 충돌",
                bgImg: "/image/background-pattern.jpg",
              },
              {
                title:
                  "독일, 노르웨이 등의 여러 국가가 최첨단 무기 도입 위해 국방예산을 증액하고 있음",
                tappedTitle:
                  "기확보한 방산 분야 지적재산권을 효과적으로 활용하여, 글로벌 방산 시장에서 수출 경쟁력을 획득할 수 있음.",
                keword: "방위비 증액",
                bgImg: "/image/background-pattern.jpg",
              },
              {
                title:
                  "독일, 노르웨이 등의 여러 국가가 최첨단 무기 도입 위해 국방예산을 증액하고 있음",
                tappedTitle:
                  "기확보한 방산 분야 지적재산권을 효과적으로 활용하여, 글로벌 방산 시장에서 수출 경쟁력을 획득할 수 있음.",
                keword: "방위비 증액",
                bgImg: "/image/background-pattern.jpg",
              },
            ].map((content, i) => {
              return (
                <Card
                  key={i}
                  data-aos={"fade-up"}
                  data-aos-duration="1000"
                  data-aos-id={`super-duper`}
                  data-aos-delay={mobile ? 0 : i * 200}
                  isPressable
                  onPressStart={(e) => {
                    setIndexOfPressedCard(i);
                  }}
                  onPressEnd={() => {
                    setIndexOfPressedCard(undefined);
                  }}
                  className={`${
                    mobile ? "h-[150px]" : "h-[300px]"
                  } w-full bg-cover bg-center p-2 bg-blend-darken`}
                  shadow={"sm"}
                  onPress={() => {
                    console.log(11);
                  }}
                  style={{
                    backgroundColor:
                      i == indexOfPressedCard ? "#00000099" : "#00000025",
                    backgroundImage:
                      i == indexOfPressedCard
                        ? `url('${content.bgImg}`
                        : `url('${content.bgImg}')`,
                  }}
                >
                  <CardBody
                    className={`text-balance ${"items-center"} flex w-full flex-col justify-center gap-4 break-keep leading-snug`}
                  >
                    {i == indexOfPressedCard ? (
                      <>
                        <div className="flex flex-col items-start gap-1">
                          <p
                            className={`w-fit whitespace-pre-line break-keep bg-teal-600 px-2 font-bold leading-relaxed text-white`}
                          >
                            서비스 개발 배경 {i + 1}
                          </p>
                          <p
                            className={`text-sm font-bold leading-relaxed text-white`}
                          >
                            {content.title}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <p
                            className={`w-fit whitespace-pre-line break-keep px-2 font-bold leading-relaxed text-white ${
                              i == indexOfPressedCard
                                ? "bg-teal-800"
                                : "bg-teal-600"
                            }`}
                          >
                            서비스 기대 효과 {i + 1}
                          </p>
                          <p
                            className={`text-sm font-bold leading-relaxed text-white ${
                              i == indexOfPressedCard ? "text-right" : ""
                            }`}
                          >
                            {content.tappedTitle}
                          </p>
                        </div>
                      </>
                    ) : (
                      <p className="bg-black/75 px-2 py-1 text-2xl font-bold text-white">
                        {content.keword}
                      </p>
                    )}
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </div>
        {/* 추가 기술 설명  */}
        <div className="mx-auto flex h-fit flex-col items-center justify-center gap-8 pt-36 max-w-[1000px]">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col items-center justify-center space-y-4"
          >
            <p className="select-none text-center text-2xl font-bold leading-snug">
              상장 공장에 숨겨놓은<br></br>또다른 놀라운 기술들
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex h-fit w-full flex-col gap-4"
          >
            <HorizontalSlider
              isPressable={false}
              textColor={"#000000"}
              width={300}
              height={200}
              backgroundColor="#fefefe"
              content={[
                {
                  title: "Ollama 프레임워크를 활용한 LLM 서버 구축",
                  text: "보안 문제를 해결하기 위해 Ollama 프레임워크를 활용하여 독립적인 서버를 구축했습니다. 이를 통해 Mistral 등의 다양한 LLM 모델을 효과적으로 운용할 수 있습니다.",
                },
                {
                  title: "Docker Compose를 활용한 컨테이너 간의 오케스트레이션",
                  text: "Docker Compose를 활용하여 여러 컨테이너 간의 오케스트레이션을 구현하였으며, blender 등의 소프트웨어로 작성된 3D 모델링 구조도를 통해 운용 장비의 파트에 직관적으로 접근할 수 있게 했습니다.",
                },
                {
                  title: "Qdrant를 활용한 Vector 데이터베이스 구축",
                  text: "LLM 특유의 '할루시네이션'(환각) 현상을 최소화하고, 경제적인 측면에서 최대한 효율적인 성능을 확보하기 위해 다수의 에이전트 모델 간의 상호작용을 시키는 앙상블 기법을 활용했습니다.",
                },
                {
                  title: "React-Query를 활용한 서버 동기화 및 전역상태 관리",
                  text: "React-Query를 활용하여 서버 동기화와 전역상태 관리를 구현했으며, 이를 통해 사용자 편의성을 높였습니다.",
                },
                {
                  title: "Three.js를 활용한 실시간 3D 렌더링 기법",
                  text: "Three.js를 활용하여 실시간 3D 렌더링을 구현하였으며, 이를 통해 사용자 경험을 개선했습니다.",
                },
                {
                  title: "React-pdf를 활용한 웹환경 실시간 PDF 랜더링",
                  text: "Docker Compose를 활용하여 여러 컨테이너 간의 오케스트레이션을 구현하였으며, blender 등의 소프트웨어로 작성된 3D 모델링 구조도를 통해 운용 장비의 파트에 직관적으로 접근할 수 있게 했습니다.",
                },
              ]}
            ></HorizontalSlider>
          </div>
        </div>
        {/* Footer */}
        <div className="mx-auto max-w-[600px] px-8 py-12 pt-12">
          <Accordion variant={"shadow"} className="bg-black/20" isDisabled>
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="데이터 출처 확인하기"
              classNames={{ title: "text-sm" }}
            >
              aa
            </AccordionItem>
          </Accordion>
        </div>
        <Footer
          isFixed
          title={"상장 공장"}
          subtitle={"행복 전염 프로젝트"}
        ></Footer>
      </section>
      <Toaster></Toaster>
    </>
  );
}
