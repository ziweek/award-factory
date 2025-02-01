"use client";

import {
  CreateMLCEngine,
  InitProgressCallback,
  InitProgressReport,
  MLCEngine,
  ChatCompletionRequestStreaming,
} from "@mlc-ai/web-llm";

import { prebuiltAppConfig } from "@mlc-ai/web-llm";
import { useEffect, useState } from "react";

// const modelLibURLPrefix =
//   "https://raw.githubusercontent.com/ziweek/award-factory/main/app/llm/models/webllm/";

// export default {
//   useIndexedDBCache: false,
//   model_list: [
//     {
//       model:
//         "https://huggingface.co/ziweek/award-factory-v2-mlc",
//       model_id: "ziweek/award-factory-v2-mlc",
//       model_lib:
//         modelLibURLPrefix +
//         "/gemma-2b-it-award-factory-webgpu.wasm",
//       vram_required_MB: 6108.76,
//       overrides: {
//         context_window_size: 1024,
//       },
//       low_resource_required: true,
//     },
//   ],
//   use_web_worker: true,
// };

const selectedModel = "Phi-3-mini-4k-instruct-q4f16_1-MLC";
const SYSTEM_PROMPT = `You are a friendly chatbot who always responds in the style of a pirate. 
    Always be concise and do not digress.`;

export default function LLM(props: any) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState([
    { role: "system", content: SYSTEM_PROMPT },
]);
const [currentMessage, setCurrentMessage] = useState("");
  const [progress, setProgress] = useState<InitProgressReport>({
    progress: 0,
    timeElapsed: 0,
    text: "",
});
const [engine, setEngine] = useState<MLCEngine>();

  const initProgressCallback: InitProgressCallback = async (initProgress) => {
    console.log(initProgress);
    setProgress(initProgress);
};
  useEffect(() => {
    (async () => {
        CreateMLCEngine("award-factory-v2-mlc", {
            initProgressCallback,
        })
            .then((e) => {
                setIsModelLoading(false);
                setEngine(e);
            })
            .catch((error) => {
                setError(error.message);
            });
    })();

    return () => {
        engine?.unload();
    };
}, []);

  return (
    <div className="flex flex-col">

      {/* <Button
        radius={"none"}
        variant={"faded"}
        className="h-[60px] w-full bg-black text-white font-bold border-0"
        fullWidth
        size={"lg"}
        // onPress={async () => {
        //   for (let index = 0; index < dataset.length; index++) {
        //     const target = await document.getElementById(`award-${index}`);
        //     if (!target) {
        //       return alert("저장에 실패");
        //     }
        //     await html2canvas(target, {
        //       //   width: 2480,
        //       //   height: 3508,
        //       scale: 3,
        //     }).then(async (canvas) => {
        //       const link = await document.createElement("a");
        //       document.body.appendChild(link);
        //       link.href = await canvas.toDataURL("image/png");
        //       link.download = "award.png"; // 다운로드 이미지 파일 이름
        //       await link.click();
        //       await document.body.removeChild(link);
        //     });
        //   }
        // }}
      >
        <p>이미지로 저장하기</p>
      </Button>
      {dataset.map((e: any, i: number) => {
        return (
          <AwardVertical
            key={i}
            index={i}
            awardOption={{ awardValues: e }}
          ></AwardVertical>
        );
      })} */}
    </div>
  );
}

function AwardVertical(props: any) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={300}
      id={`award-${props.index}`}
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
          backgroundImage: `url(/images/award-template-1.png)`,
        }}
      ></div>
    </div>
  );
}
