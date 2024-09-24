import torch
from datasets import Dataset, load_dataset
from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig, pipeline, TrainingArguments
from peft import LoraConfig, PeftModel
from trl import SFTTrainer
# import huggingface_hub
import time

from fastapi import FastAPI

app = FastAPI()
# huggingface_hub.login('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', True)

@app.get("/")
def read_root():
    start_time = time.time()
    
    BASE_MODEL = "google/gemma-2b-it"
    FINETUNE_MODEL = "gemma-2b-it-award-factory-ko-v1"

    # model = AutoModelForCausalLM.from_pretrained(BASE_MODEL, cache_dir="cache")
    # model = AutoModelForCausalLM.from_pretrained("./gemma-2b", local_files_only=True)
    finetune_model = AutoModelForCausalLM.from_pretrained(FINETUNE_MODEL, ignore_mismatched_sizes=True, device_map={"":"mps"})
    print(finetune_model.hf_device_map)
    tokenizer = AutoTokenizer.from_pretrained(BASE_MODEL, add_special_tokens=True)
    pipe_finetuned = pipeline("text-generation", model=finetune_model, tokenizer=tokenizer, max_new_tokens=512)

    prompt = '<bos><start_of_turn>user\n다음 요청을 고려해서 아래의 예시처럼 상장 문구를 작성해주세요:\n한국어 단어만 사용할 것. 영어를 사용하면 안돼.\n[요청]\n항상 새로운 소프트웨어를 개발하는 개발자에게 상을 주고 싶어<end_of_turn>\n<start_of_turn>model\n'
    print(prompt)

    outputs = pipe_finetuned(
        prompt,
        do_sample=True,
        temperature=0.2,
        top_k=50,
        top_p=0.95,
        add_special_tokens=True
    )

    result = outputs[0]["generated_text"][len(prompt):]
    print(result)
    
    end_time = time.time()
    time_dif = end_time - start_time
    print(time_dif)
    
    response = {"prompt": prompt, "outputs" : result}
    return response