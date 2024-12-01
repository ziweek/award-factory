# award-factory

<img src="./src/banner_notion.png"/>

<p align="center">
  <!--
  <strong>🏆 2023 제주특별자치도 도지사상 수상 작품 🏆</strong>
  -->
  
  <br/>
  <br/>
  <a href='https://github.com/ziweek/desirable-sea/blob/main/README.md'>
    KOREAN
  </a>
  &nbsp;|&nbsp;
  <a href='https://github.com/ziweek/desirable-sea/blob/main/README_EN.md'>
    ENGLISH
  </a>
  <br/>
  <br/>
  <strong>상장 공장. 내 손으로 빚어내는 나만의 상장</strong>
  <br/>
  <br/>

  <a href='https://paperswithcode.com/paper/gemma-open-models-based-on-gemini-research'>
    <img src="https://img.shields.io/badge/Paperswithcode-Gemma:%20Open%20Models%20Based on%20Gemini%20Research%20and%20Technology-25c2a0?style=flat-square"/>
  </a>
  <br/>
  <br/>

  <br/>
  <img src="https://img.shields.io/badge/Gemma-4285F4?style=flat-square&logo=google&logoColor=white"/>
  <img src="https://img.shields.io/badge/Transformer-4285F4?style=flat-square&logo=google&logoColor=white"/>
  <img src="https://img.shields.io/badge/Ollama-000000?style=flat-square&logo=ollama&logoColor=white"/>
  <br/>
  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white"/> 
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white"/>
  <br/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=Docker&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jenkins-D24939?style=flat-square&logo=jenkins&logoColor=white"/>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonwebservices&logoColor=white"/>
</p>
<br/>
<br/>
  
<p align="center">  
  <strong>아래의 뱃지에서 프로토타입을 확인해보세요.<strong>
  <br/>
  <br/>
  <a href='https://award-factory.vercel.app'>
    <img src="https://img.shields.io/badge/Website-Vercel-000000?style=flat-square&logo=vercel&logoColor=white"/>
  </a>
  <a href='https://huggingface.co/ziweek/gemma-2b-it-award-factory'>
      <img src="https://img.shields.io/badge/Model-Hugging%20Face-FFD21E?style=flat-square&logo=huggingface&logoColor=white"/>
  </a>
  <a href='https://huggingface.co/datasets/ziweek/award-factory-citation'>
      <img src="https://img.shields.io/badge/Dataset-Hugging%20Face-FFD21E?style=flat-square&logo=huggingface&logoColor=white"/>
  </a>
</p>

<br/>
<br/>

# 1. 개요

> [!NOTE]
>
> - 본 아이디어는, 누구나 간편하게 3분 안에 상장을 제작하여 순식간에 누군가를 칭찬할 수 있는 서비스를 개발하는 것입니다.
> - '상장 공장'은 사람들에게 행복을 전달하기 위해 고안된 프로젝트로, 부모님께 특별한 상장을 드리자는 아이디어에서 시작되었습니다. 프로젝트의 지속 가능성을 고려해 프론트엔드만으로 구성되었으며, Google Gemme:2b 모델을 파인튜닝하여 사용자에게 맞춤형 상장 문구를 제공하는 기능을 구현했습니다. 비록 서버 운영 비용 문제로 서비스가 활성화되지는 않았지만, 데모는 Huggingface에서 확인할 수 있습니다.

https://github.com/user-attachments/assets/2def17e0-46ea-4561-8b50-fc78d595b88b

<table>
  <tr>
     <td>
      <p align='center'>
       상장 만들기 
      </p>
    </td>
    <td>
      <p align='center'>
        다른 서비스에 공유하기 
      </p>
    </td>
    <td>
      <p align='center'>
       명예의 전당
      </p>
    </td>
  </tr>
   <tr>
    <td style="width:1/3;">
      <img src="./src/readme/preview-super-image-resolution.png"/>
    </td>
    <td style="width:1/3;">
      <img src="./src/readme/preview-small-object-detection.png"/>
    </td>
    <td style="width:1/3;">
      <img src="./src/readme/preview-product-webpage.png"/>
    </td>
  </tr>
</table>
<br/>

<br/>
<br/>


# Implementation

<table>
  <tr>
    <td style="width:1/2;">
      <img src="./src/diagram.png"/>
    </td>
  </tr>
</table>

<details open>
 <summary><b>Google Gemma:2B Finetuning</b></summary>
HireMePleaseGPT utilizes the Google Gemini API to embed text from resumes and generate responses. It employs “model/text-embedding-004” and “Gemini-1.5-flash,” both available under the free plan, offering sufficient computational performance for a RAG architecture tailored to processing single or double-page PDF documents, such as resumes and cover letters.
</details>
<br/>


<details open>
 <summary><b>llama-cpp Quantization</b></summary>
HireMePleaseGPT is build as a RAG architecture, powered by LangChain, Google Gemini API, and FAISS vector database. Text from resume or cover letter is ingested to the FAISS vector database as soon as Google Gemini API embedded it into words or subwords. LangChain 

<br/>

```
$ python ./llama.cpp/convert_hf_to_gguf.py ./gemma-2b-it-award-factory-v2 --outfile ./gemma-2b-it-award-factory-v2.gguf


INFO:gguf.vocab:Setting special token type eot to 107
INFO:hf-to-gguf:Set model quantization version
INFO:gguf.gguf_writer:Writing the following files:
INFO:gguf.gguf_writer:gemma-2b-it-award-factory-v2.gguf: n_tensors = 164, total_size = 5.0G
Writing: 100%|██████████████████████████████████████████████████████████████████| 5.01G/5.01G [02:02<00:00, 40.9Mbyte/s]
INFO:hf-to-gguf:Model successfully exported to gemma-2b-it-award-factory-v2.gguf
```

```
$ llama.cpp/llama-quantize gguf_model/gemma-2b-it-award-factory-v2.gguf gguf_model/gemma-2b-it-award-factory-v2.gguf-Q5_K_M.gguf Q5_K_M

...
llama_model_quantize_internal: model size  =  4780.29 MB
llama_model_quantize_internal: quant size  =  1748.67 MB

main: quantize time = 17999.81 ms
main:    total time = 17999.81 ms
```

```
$ ollama list

NAME                    ID              SIZE      MODIFIED
award-factory:q5        8df06172b64b    1.8 GB    19 seconds ago
award-factory:latest    ae186115cc83    5.0 GB    28 minutes ago
```
  
</details>
<br/>



<details open>
  <summary><b>Docker-compose</b></summary>
HireMePleaseGPT is deployed on the Streamlit.io platform. Steamlit framework provided well-built user-friendly UIUX blocks 
</details>
<br/>




# Contribution

-->

<a href="https://github.com/ziweek/award-factory/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ziweek/award-factory" />
</a>
