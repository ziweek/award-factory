import torch
from datasets import Dataset, load_dataset
from transformers import AutoTokenizer, AutoModelForCausalLM, BitsAndBytesConfig, pipeline, TrainingArguments
from peft import LoraConfig, PeftModel
from trl import SFTTrainer



BASE_MODEL = "google/gemma-2b-it"
ADAPTER_MODEL = "qlora_adapter"
MODEL_SAVING_DIR = './models/finetuned/gemma-2b-it-award-factory-v2'

base_model = AutoModelForCausalLM.from_pretrained(
    BASE_MODEL,
    low_cpu_mem_usage=True,
    return_dict=True,
    device_map='cuda',
    torch_dtype=torch.float16
)
model = PeftModel.from_pretrained(
    base_model, 
    ADAPTER_MODEL, 
    low_cpu_mem_usage=True,
    device_map='cuda', 
    torch_dtype=torch.float16
    )

model = model.merge_and_unload()
model.save_pretrained(MODEL_SAVING_DIR)

tokenizer = AutoTokenizer.from_pretrained(BASE_MODEL)
tokenizer.save_pretrained(MODEL_SAVING_DIR)