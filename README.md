# award-factory

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

  <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white"/> 
  <br/>
  <img src="https://img.shields.io/badge/Gemma-4285F4?style=flat-square&logo=google&logoColor=white"/>
  <img src="https://img.shields.io/badge/Transformer-4285F4?style=flat-square&logo=google&logoColor=white"/>
  <img src="https://img.shields.io/badge/Ollama-000000?style=flat-square&logo=ollama&logoColor=white"/>
</p>
<br/>
<br/>
  
<p align="center">  
  <strong>아래의 뱃지에서 프로토타입을 확인해보세요.<strong>
  <br/>
  <br/>
  <a href='https://vercel.com/ziweeks-projects/award-factory'>
    <img src="https://img.shields.io/badge/Website-Vercel-000000?style=flat-square&logo=vercel&logoColor=white"/>
  </a>
    <a href='https://huggingface.co/ziweek/gemma-2b-it-award-factory-ko-v1'>
      <img src="https://img.shields.io/badge/Model-Hugging%20Face-FFD21E?style=flat-square&logo=huggingface&logoColor=white"/>
  </a>
</p>

<br/>
<br/>

# 1. 개요

> [!NOTE]
>
> - 본 아이디어는, 누구나 간편하게 3분 안에 상장을 제작하여 순식간에 누군가를 칭찬할 수 있는 서비스를 개발하는 것입니다.
> - '상장 공장'은 사람들에게 행복을 전달하기 위해 고안된 프로젝트로, 부모님께 특별한 상장을 드리자는 아이디어에서 시작되었습니다. 프로젝트의 지속 가능성을 고려해 프론트엔드만으로 구성되었으며, Google Gemme:2b 모델을 파인튜닝하여 사용자에게 맞춤형 상장 문구를 제공하는 기능을 구현했습니다. 비록 서버 운영 비용 문제로 서비스가 활성화되지는 않았지만, 데모는 Huggingface에서 확인할 수 있습니다.

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

# 2. 프로덕트

> [!IMPORTANT]
>
> <details> <summary><b>프로젝트 진행 현황</b></summary>
> <br/>
>
> - [x] 기획안 작성 완료 :ok_hand:
> - [x] 프론트엔드 개발 완료 :ok_hand:
> - [x] 소개자료 및 시연영상 제작 완료 :ok_hand:
> </details>

> [!tip]
>
> <details><summary><b>PWA 설치 방법</b></summary>
> <br/>
>
> iOS에서 설치하는 방법:
>
> 1.  iOS 기기에서 Safari를 열고 [PWA가 호스팅된 URL](https://desirable-sea.vercel.app/)로 이동합니다.
> 2.  화면 하단에 있는 공유 아이콘을 탭합니다.
> 3.  화면을 아래로 스크롤하여 "홈 화면에 추가"를 탭합니다.
> 4.  우측 상단의 "추가"를 탭합니다.
>
> Android에서 설치하는 방법:
>
> 1.  Android 기기에서 Chrome 브라우저를 열고 [PWA가 호스팅된 URL](https://desirable-sea.vercel.app/)로 이동합니다.
> 2.  화면 우측 상단의 세 점 메뉴를 탭합니다.
> 3.  "홈 화면에 추가"를 탭합니다.
> 4.  우측 상단의 "추가"를 탭합니다.
> </details>

<details>
 <summary><b>핵심기능</b></summary><br/>
  
 <table>
  <tr>
     <td colspan=2>
      <p align="center">1.1 초고해상도 이미지 개선 딥러닝 모델</p>
    </td>
  </tr>
   <tr>
     <td>
      <img src="./src/readme/demo1.png" width="100%">
    </td>
  </tr>
   <tr>
    <td>
     <p align="left">소형 객체 탐지 모델의 성능을 개선하기 위해 전처리 모델로 XPixelGroup의 HAT라는 초고해상도 개선 모델을 도입하였습니다. 이를 통해 대회 측에서 제공한 위성이미지 데이터의 해상도를 4배 이상 개선할 수 있었습니다.</p>
    </td>
  </tr>
</table>
<br/>
<table>
  <tr>
     <td colspan=2>
      <p align="center">1.2 초고해상도 이미지 개선 딥러닝 모델</p>
    </td>
  </tr>
  <tr>
   <td align="center">

https://github.com/ziweek/desirable-sea/assets/99459331/2212ce20-bb1b-42f8-a97c-bebd22ce3fb3

</td>
    </tr>
      <tr>
     <td>
      <p align="left">초고해상도 개선 모델로 전처리된 데이터을 라벨링하였습니다. 이때, 사전 학습된 모델을 사용하여 자동으로 차량을 식별하게 하였습니다. 위의 영상은 사전 학습 모델이 식별하지 못한 예외적인 경우에 수작업으로 라벨링을 진행한 것입니다.</p>
    </td>
    </tr>
</table>

<br/>
<br/>

</details>

<details >
  <summary><b>아키텍처</b></summary><br/>

### 프로덕트 아키텍처

 <table>
   <tr>
     <td>
      <img width="100%" src="./src/readme/service-architecture.png">
    </td>
   </tr>
  <tr>
    <td>
     <p align="left">본 프로젝트의 서비스 아키텍처는 크게 4가지로 나눠서 살펴볼 수 있습니다.</p>
     <p> 1. 데이터 전처리 수행 서버</p>
     <ul>
      <li align="left">초고해상도 이미지 개선 딥러닝 모델</li>
      <li align="left">핵심 기능 수행 서버(소형 객체 식별 딥러닝 모델)</li>
      <li align="left">웹 어플리케이션(프론트엔드와 벡엔드 및 데이터베이스)</li>
     </ul>
     <p> 2. 핵심 기능 수행 서버</p>
     <ul>
      <li align="left">소형 객체 식별 딥러닝 모델</li>
      <li align="left">핵심 기능 수행 서버(소형 객체 식별 딥러닝 모델)</li>
      <li align="left">웹 어플리케이션(프론트엔드와 벡엔드 및 데이터베이스)</li>
     </ul>
     <p> 3. 웹 어플리케이션</p>
     <ul>
      <li align="left">프론트엔드</li>
      <li align="left">벡엔드</li>
      <li align="left">데이터베이스</li>
     </ul>
     <p> 4. 컨테이너화 및 배포 운영</p>
     <ul>
      <li align="left">프론트엔드</li>
      <li align="left">벡엔드</li>
      <li align="left">데이터베이스</li>
     </ul>
    </td>
  </tr>
</table>
</details>

<br/>
<br/>


# 3. 기여자

<!--
https://contrib.rocks/preview?repo=angular%2Fangular-ja
-->

<a href="https://github.com/ziweek/award-factory/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ziweek/award-factory" />
</a>
