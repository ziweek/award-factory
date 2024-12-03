# award-factory

<img src="./src/banner_notion.png"/>

<p align="center">
  <br/>
  <strong>🎓 구글 머신러닝 부트캠프 출품 작품 🎓</strong>
  <br/>
  <br/>
  <a href='https://github.com/ziweek/award-factory/blob/main/README_KO.md'>
    KOREAN
  </a>
  &nbsp;|&nbsp;
  <a href='https://github.com/ziweek/award-factory/blob/main/README.md'>
    ENGLISH
  </a>
  <br/>
  <br/>
  <strong>상장 공장: 유쾌하게 재능 있는 생성형 AI가 당신을 위해 정성스럽게 만든 상장</strong>
  <br/>
  <br/>
  <a href='https://paperswithcode.com/paper/gemma-open-models-based-on-gemini-research'>
    <img src="https://img.shields.io/badge/Paperswithcode-Gemma:%20Open%20Models%20Based on%20Gemini%20Research%20and%20Technology-25c2a0?style=flat-square"/>
  </a>
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
> - 이 프로젝트는 누구나 간편하게 몇 분 안에 맞춤형 상장을 제작하여, 타인을 손쉽게 축하하고 격려할 수 있는 서비스를 개발하는 것을 목표로 합니다.
> - 상장 공장은 행복을 나누기 위해 기획된 프로젝트로, 부모님께 특별한 상장을 드리자는 아이디어에서 출발했습니다. 지속 가능성을 고려해 프론트엔드 중심으로 설계되었으며, Google Gemma:2b 모델을 파인튜닝하여 사용자 맞춤형 상장 문구를 제공하는 기능을 구현했습니다. 현재는 서버 운영 비용 문제로 서비스가 활성화되지 않았지만, 데모는 Huggingface에서 확인할 수 있습니다.
> - QLoRA 양자화 및 llama-cpp 최적화와 같은 최신 기술을 적용해 모델 크기를 줄이고 성능을 향상시켜, 향후 더 효율적인 사용자 경험을 제공할 수 있도록 준비했습니다.

https://github.com/user-attachments/assets/2def17e0-46ea-4561-8b50-fc78d595b88b

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
Implemented prompt engineering and QLoRA-based quantization fine-tuning using the Google/Gemma-2b-it model with PEFT techniques to optimize personalized award text generation tailored to user preferences.
</details>
<br/>

<details open>
 <summary><b>llama-cpp Quantization</b></summary>
Applied quantization with the Q5_K_M option in llama-cpp, achieving a 63.3% reduction in model size and an 83.4% decrease in inference time without compromising performance, enabling faster and more efficient service.

<br/>

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
Utilized Docker Compose to containerize the backend and frontend services, ensuring consistency in deployment environments and facilitating scalable and maintainable full-stack web application development.
</details>
<br/>

# Contribution

<a href="https://github.com/ziweek/award-factory/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ziweek/award-factory" />
</a>
