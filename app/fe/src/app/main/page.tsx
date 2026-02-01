"use client";

import Header from "@/component/header";
import { useIsMobile } from "@/hook/useMediaQuery";
import {
  Tabs,
  Tab,
  Button,
  DatePicker,
  Tooltip,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  SharedSelection,
  Accordion,
  AccordionItem,
  Textarea,
} from "@nextui-org/react";
import { getLocalTimeZone, today } from "@internationalized/date";
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import { IconFire } from "@/component/common/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/component/footer";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import axios from "axios";

export default function Home() {
  const isMobile = useIsMobile();
  const [mobile, setMobile] = useState<boolean>(false);
  const [selected, setSelected] = useState<any>("부가 기능");
  const [gemmaPrompt, setGemmaPrompt] = useState<string>("");
  const t = useTranslations("Main");
  const th = useTranslations("Home");
  const tf = useTranslations("Footer");
  const locale = useLocale();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [awardOption, setAwardOption] = useState<any>({
    awardValues: {
      cornerShape: t("example-template"),
      title: t("example-title"),
      winner: t("example-winner"),
      description: t("example-description"),
      publisher: t("example-publisher"),
      date:
        locale == "ko"
          ? `${today(getLocalTimeZone()).year}년 ${
              today(getLocalTimeZone()).month
            }월 ${today(getLocalTimeZone()).day}일`
          : `${today(getLocalTimeZone()).day} ${new Date(
              today(getLocalTimeZone()).toString()
            ).toLocaleString("default", { month: "short" })} ${
              today(getLocalTimeZone()).year
            }`,
    },
    awardContent: [
      {
        key: "title",
        label: t("input-label-2"),
        placeholder: t("example-title"),
        max: 20,
        isValid: true,
      },
      {
        key: "winner",
        label: t("input-label-3"),
        placeholder: t("example-winner"),
        max: 10,
        isValid: true,
      },
      {
        key: "description",
        label: t("input-label-4"),
        placeholder: t("example-description"),
        max: 120,
        isValid: true,
      },
      {
        key: "publisher",
        label: t("input-label-5"),
        placeholder: t("example-publisher"),
        max: 12,
        isValid: true,
      },
    ],
    cornerShapeContent: [
      {
        key: t("input-label-1-template-1"),
        src: `url(/images/award-template-1.png)`,
      },
      {
        key: t("input-label-1-template-2"),
        src: `url(/images/award-template-2.png)`,
      },
      {
        key: t("input-label-1-template-3"),
        src: `url(/images/award-template-3.png)`,
      },
      { key: t("input-label-1-template-4"), src: `` },
    ],
  });
  const [hallOfFame, setHallOfFame] = useState([
    {
      title: "커피 애호가상",
      winner: "이카페",
      description:
        "매일 아침 당신의 책상 위에서 빛나는 커피잔에게 이 상을 드립니다.",
      publisher: "카페인 중독자 협회",
      date: "2024년 7월 24일",
      ranking: 1,
      isLiked: true,
      countOfLike: 102,
      isCommented: true,
      season: "2024년 상반기",
    },
    {
      title: "점심시간 장인상",
      winner: "박점심",
      description:
        "점심시간마다 최고의 맛집을 찾아내는 당신의 능력에 감사를 담아 이 상을 드립니다.",
      publisher: "맛집 탐방 위원회",
      date: "2024년 7월 24일",
      ranking: 2,
      isLiked: true,
      countOfLike: 85,
      isCommented: false,
      season: "2024년 상반기",
    },
    {
      title: "회의의 달인상",
      winner: "정회의",
      description:
        "끝없는 회의에도 굴하지 않는 당신의 인내심에 감사를 담아 이 상을 드립니다.",
      publisher: "회의 혁신 위원회",
      date: "2024년 7월 24일",
      ranking: 3,
      isLiked: true,
      countOfLike: 42,
      isCommented: true,
      season: "2024년 상반기",
    },
  ]);

  useEffect(() => {
    AOS.init({ once: true, mirror: false });
    const checkResize = () => {
      if (isMobile) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    checkResize();
  }, [isMobile, awardOption]);

  return (
    <>
      <section className="h-full min-h-screen w-full select-none flex-col justify-start items-center">
        <div
          className={`flex h-full w-full flex-col items-center justify-start gap-2 pb-6 pt-2 px-4 max-w-[500px] mx-auto`}
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
                {/* <>상장 만들기</> */}
                <Tab
                  key="상장 만들기"
                  title={
                    <Tooltip
                      content={"상장 만들기 탭"}
                      showArrow
                      placement={"bottom"}
                      color={"primary"}
                      size={"lg"}
                      className="max-w-[150px]"
                    >
                      <p>{t("tab-title-1")}</p>
                    </Tooltip>
                  }
                >
                  <div>
                    <div className="flex flex-col gap-8 w-full items-center pt-4">
                      <div className="bg-gradient-to-br from-[#0081FF] to-[#50B1FF] p-1 w-fit h-fit rounded-xl w-full">
                        <Tooltip
                          content={"AI 생성 상장 탭"}
                          showArrow
                          placement={"bottom"}
                          color={"primary"}
                          size={"lg"}
                          className="max-w-[150px]"
                        >
                          <Accordion
                            variant={"light"}
                            className="bg-white rounded-lg w-full"
                            fullWidth
                          >
                            <AccordionItem
                              key="1"
                              aria-label="Gemma 모델 활용하기"
                              startContent={
                                <Image
                                  src={"/logo/logo-gemma.png"}
                                  width={100}
                                  height={100}
                                  alt="logo-gemma.png"
                                  className="w-[60px]"
                                ></Image>
                              }
                              title="Gemma 모델 활용하기"
                              subtitle="Google Gemma와 함께 상장을 만들어볼까요?"
                              classNames={{
                                subtitle: "break-keep",
                              }}
                            >
                              <div className="flex space-y-4 flex-col w-full h-fit py-1">
                                <Textarea
                                  radius={"sm"}
                                  // minRows={3}
                                  // maxRows={3}
                                  placeholder={
                                    "매일 야근하는 김야근 씨의 헌신적인 업무 자세를 칭찬하기 위한 상장을 만들고 싶어!"
                                  }
                                  variant={"flat"}
                                  size={"lg"}
                                  classNames={{
                                    inputWrapper:
                                      "bg-gradient-to-br from-[#0081FF10] to-[#50B1FF10]",
                                  }}
                                  value={gemmaPrompt}
                                  onValueChange={setGemmaPrompt}
                                ></Textarea>
                                <p className="text-center w-full text-xs">
                                  🚧 본 서비스는 제한적으로 지원될테야!
                                </p>
                                <Button
                                  radius={"sm"}
                                  variant={"faded"}
                                  className="h-[60px] w-full bg-gradient-to-br from-[#0081FF] to-[#50B1FF] text-white font-bold border-0"
                                  fullWidth
                                  size={"lg"}
                                  isLoading={isLoading}
                                  onPress={async () => {
                                    var context_parsed: any = "";
                                    await setIsLoading(true);
                                    await axios
                                      .post("http://localhost:8080/prompt", {
                                        prompt: gemmaPrompt,
                                      })
                                      .then(async function (response: any) {
                                        // console.log(response);
                                        const context =
                                          response["data"]["choices"][0][
                                            "message"
                                          ]["content"];
                                        context_parsed = JSON.parse(context);
                                        // console.log(context_parsed);
                                      })
                                      .catch(function (error) {
                                        console.log(error);
                                      });
                                    await setAwardOption({
                                      ...awardOption,
                                      awardValues: {
                                        cornerShape: t("example-template"),
                                        title: context_parsed["title"],
                                        winner: context_parsed["winner"],
                                        description:
                                          context_parsed["description"],
                                        publisher: context_parsed["publisher"],
                                        date:
                                          locale == "ko"
                                            ? `${
                                                today(getLocalTimeZone()).year
                                              }년 ${
                                                today(getLocalTimeZone()).month
                                              }월 ${
                                                today(getLocalTimeZone()).day
                                              }일`
                                            : `${
                                                today(getLocalTimeZone()).day
                                              } ${new Date(
                                                today(
                                                  getLocalTimeZone()
                                                ).toString()
                                              ).toLocaleString("default", {
                                                month: "short",
                                              })} ${
                                                today(getLocalTimeZone()).year
                                              }`,
                                      },
                                    });
                                    await setIsLoading(false);
                                    await console.log(awardOption);
                                  }}
                                >
                                  <p>Gemma, 상장을 만들어줘!</p>
                                </Button>
                              </div>
                            </AccordionItem>
                          </Accordion>
                        </Tooltip>
                      </div>
                      {/*  */}
                      <AwardVertical awardOption={awardOption}></AwardVertical>
                      {/*  */}
                      <div className="w-full space-y-2 h-fit">
                        <p>{t("input-label-1")}</p>
                        <Dropdown>
                          <DropdownTrigger>
                            <Button
                              radius={"none"}
                              variant={"faded"}
                              className="text-sm w-full"
                              fullWidth
                              size={"lg"}
                            >
                              {awardOption.awardValues.cornerShape}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                            aria-label="Static Actions"
                            selectionMode={"single"}
                            disallowEmptySelection
                            selectedKeys={[awardOption.awardValues.cornerShape]}
                            onSelectionChange={(keys: SharedSelection) => {
                              setAwardOption({
                                ...awardOption,
                                awardValues: {
                                  ...awardOption.awardValues,
                                  cornerShape: keys.currentKey,
                                },
                              });
                            }}
                            className="w-full"
                          >
                            {awardOption.cornerShapeContent.map(
                              (e: any, i: number) => {
                                return (
                                  <DropdownItem key={e.key}>
                                    {e.key}
                                  </DropdownItem>
                                );
                              }
                            )}
                          </DropdownMenu>
                        </Dropdown>
                      </div>
                      {awardOption.awardContent.map((e: any, i: number) => {
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
                                setAwardOption({
                                  ...awardOption,
                                  awardValues: {
                                    ...awardOption.awardValues,
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
                      <div className="w-full space-y-2 h-fit">
                        <p>{t("input-label-6")}</p>
                        <DatePicker
                          // label={t("input-label-6")}
                          // labelPlacement={"outside"}
                          radius={"none"}
                          variant={"faded"}
                          className="text-sm w-full"
                          fullWidth
                          size={"lg"}
                          defaultValue={today(getLocalTimeZone())}
                          onChange={(e: any) => {
                            setAwardOption({
                              ...awardOption,
                              awardValues: {
                                ...awardOption.awardValues,
                                date: `${e.year}년 ${e.month}월 ${e.day}일`,
                              },
                            });
                          }}
                        ></DatePicker>
                      </div>

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
                          <p>{t("button-bottom-1")}</p>
                        </Button>
                        <Button
                          radius={"none"}
                          variant={"faded"}
                          className="h-[60px] w-full bg-[#FEE500] text-[#000000] font-bold border-0"
                          fullWidth
                          size={"lg"}
                          isLoading={false}
                          // isDisabled
                          onPress={() => {
                            const target = document.getElementById("award");
                            if (!target) {
                              return alert("저장에 실패");
                            }
                            html2canvas(target, {
                              //   width: 2480,
                              //   height: 3508,
                              scale: 3,
                            }).then(async (canvas) => {
                              var imgDataUrl = canvas.toDataURL("image/png");

                              var blobBin = atob(imgDataUrl.split(",")[1]); // base64 데이터 디코딩
                              var array = [];
                              for (var i = 0; i < blobBin.length; i++) {
                                array.push(blobBin.charCodeAt(i));
                              }
                              var file = await new File(
                                [new Uint8Array(array)],
                                "award.png",
                                { type: "image/png" }
                              );
                              await navigator
                                .share?.({
                                  title:
                                    "🏭 상장 공장에서 당신의 상장이 도착했어요!",
                                  text: "내 손으로 빚은 나만의 상장",
                                  files: [file],
                                })
                                .catch(console.error);
                            });
                            // Optionally virbrate slightly.
                            navigator.vibrate?.([30, 20, 10]);
                          }}
                        >
                          <p>{t("button-bottom-2")}</p>
                        </Button>
                        <Button
                          radius={"none"}
                          variant={"faded"}
                          className="h-[60px] w-full bg-orange-600 text-[#ffffff] font-bold border-0"
                          fullWidth
                          isDisabled
                          size={"lg"}
                        >
                          <p>{t("button-bottom-3")}</p>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Tab>
                {/* <>명예의 전당</> */}
                <Tab
                  key="명예의 전당"
                  title={
                    <Tooltip
                      content={"명예의 전당 탭"}
                      showArrow
                      placement={"bottom"}
                      color={"primary"}
                      size={"lg"}
                      className="max-w-[150px]"
                    >
                      <p>{t("tab-title-2")}</p>
                    </Tooltip>
                  }
                >
                  <div className="flex flex-col items-center space-y-12 pt-4 pb-8">
                    {hallOfFame.map((e, i) => {
                      return (
                        <div
                          key={i}
                          data-aos="fade-up"
                          data-aos-duration={300 * (i + 1)}
                          className="flex flex-col items-center space-y-2"
                        >
                          <div className="flex flex-col items-center">
                            <p className="font-light">{e.season}</p>
                            <p className="font-light text-2xl">
                              {e.ranking == 1
                                ? "대상"
                                : e.ranking == 2
                                ? "우수상"
                                : "장려상"}
                            </p>
                          </div>
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
                                backgroundImage:
                                  awardOption.cornerShapeContent.filter(
                                    (c: any) =>
                                      c.key ==
                                      awardOption.awardValues.cornerShape
                                  )[0]?.src,
                              }}
                            ></div>
                          </div>
                          <div className="flex flex-row space-x-2 w-full items-center justify-center">
                            <Button
                              variant={"light"}
                              color={"default"}
                              size={"md"}
                            >
                              <div className="flex flex-row space-x-2 items-center justify-center">
                                <IconFire
                                  width={30}
                                  fill="#000"
                                  isActivated={e.isLiked}
                                ></IconFire>
                                <p className="text-xl font-light">
                                  {e.countOfLike}
                                </p>
                              </div>
                            </Button>
                          </div>
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
          title={th("title")}
          subtitle={tf("footer-description")}
        ></Footer>
      </section>
    </>
  );
}

function AwardHorizontal(props: any) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={300}
      id="award"
      className="relative w-[250px] aspect-[7/5] flex flex-col justify-center items-center py-4"
    >
      <div
        className="relative grid grid-cols-3 grid-rows-4 h-fit gap-4 content-between z-10"
        style={{
          gridTemplateRows: "auto auto auto auto",
        }}
      >
        <p className="col-span-3 w-full text-center text-xl font-light">
          {props.awardOption.awardValues.title}
        </p>
        <p className="col-span-3 w-full text-right text-md font-light">
          {props.awardOption.awardValues.winner}
        </p>
        <p className="col-span-3 w-full text-center self-center text-lg font-light">
          {props.awardOption.awardValues.description}
        </p>
        <div className="flex flex-col w-full items-center col-span-3">
          <p className="w-full text-center text-md font-light">
            {props.awardOption.awardValues.publisher}
          </p>
          <p className="w-full text-center text-md font-light">
            {props.awardOption.awardValues.date}
          </p>
        </div>
      </div>
      <div
        className="absolute w-[200%] scale-50 z-0 aspect-[5/7] bg-contain flex flex-col justify-center items-center p-8 py-10 border-2 drop-shadow-sm rotate-90"
        style={{
          backgroundImage: props.awardOption.cornerShapeContent.filter(
            (c: any) => c.key == props.awardOption.awardValues.cornerShape
          )[0]?.src,
        }}
      ></div>
    </div>
  );
}
function AwardVertical(props: any) {
  return (
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
          {props.awardOption.awardValues.title}
        </p>
        <p className="col-span-3 w-full text-right text-md font-light">
          {props.awardOption.awardValues.winner}
        </p>
        <p className="col-span-3 w-full text-center self-center text-lg font-light">
          {props.awardOption.awardValues.description}
        </p>
        <div className="flex flex-col w-full items-center col-span-3">
          <p className="w-full text-center text-md font-light">
            {props.awardOption.awardValues.publisher}
          </p>
          <p className="w-full text-center text-md font-light">
            {props.awardOption.awardValues.date}
          </p>
        </div>
      </div>
      <div
        className="absolute w-[200%] scale-50 z-0 aspect-[5/7] bg-contain flex flex-col justify-center items-center p-8 py-10 border-2 drop-shadow-sm"
        style={{
          backgroundImage: props.awardOption.cornerShapeContent.filter(
            (c: any) => c.key == props.awardOption.awardValues.cornerShape
          )[0]?.src,
        }}
      ></div>
    </div>
  );
}
