
from llama_cpp import Llama
from fastapi import FastAPI
app = FastAPI()

import time
from pprint import pprint


@app.post("/")
def return_llm_response(prompt: str):
    start_time = time.time()
    
    FINETUNE_MODEL = "./models/converted_into_gguf/gemma_2b_it_award_factory_v2.gguf"
    llm = Llama(model_path=FINETUNE_MODEL, chat_format="chatml")
    chat = llm.create_chat_completion(
        messages=[
            {
                "role": "system",
                "content": "친절한 챗봇으로서 상대방의 요청에 최대한 자세하고 친절하게 답하자. 모든 대답은 한국어(Korean)으로 대답해줘.",
            },
            {
                "role": "user", 
                "content": f"\n다음 요청을 고려해서 아래의 예시처럼 상장 문구를 작성해주세요:\n한국어 단어만 사용할 것. 영어를 사용하면 안돼.\n[요청]\n{prompt}"
            },
        ],
        response_format={
            "type": "json_object",
            "schema": {
                "type": "object",
                "properties": {
                    'title' : {"type": "string"}, 
                    'winner' : {"type": "string"},
                    'description' : {"type": "string"},
                    'publisher' : {"type": "string"}
                    },
                "required": ["title", "winner", "description", "publisher"],
            },
        },
    temperature=0.7,
    )
    pprint(chat)

    
    end_time = time.time()
    time_dif = end_time - start_time
    print(time_dif)
    
    response = chat
    return response


if __name__ == "__main__":
    print("Award Factory llm is running...")