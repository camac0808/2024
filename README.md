# Unity Project Journal

  <p>
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/camac0808/2024?color=56BEB8">
  <img alt="Github language count" src="https://img.shields.io/github/languages/count/camac0808/2024?color=56BEB8">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/camac0808/2024?color=56BEB8">
</p>

<!--프로젝트 대문 이미지-->
<img src="/project-journal.jpg" alt="Project Journal" width="400" />

<br>

<!--목차-->

# 🗓️ 목차

- 10월
  - [1. Unity Study - First Project](#1-dart-block-chain)
  - [2. Technologies](#2-technologies)

<br>

# 1. Unity Study - First Project

### ⛵ 프로젝트 개요

> 이것은 프로젝트 개요
> <br>

### :rocket: 개발 환경

- Unity
- Vscode
  <br>

### 👌 설치

```
Unity v6
```

<br>

### 📖 스터디 내용

```
- Typescript 프로젝트 적용 전에 간단하게 tsconfig 파일의 구성에 대해 정리
  1) target: ES6 // es6 버전으로 컴파일
  2) lib: ES6, DOM, DOM.Iterable // 코드를 어디서 실행할지 또는 declaration files 지정 (내장 API와 전역변수 범위를 설정하는거다)
   -> declaration files이란?: typescript가 d.ts파일들을 참조하여 코드 타입을 검사

즉 ES6의 타입과 DOM API를 사용할 수 있게 설정하는 것
```

<br>

### ⛳ 과정

1. 과정 -> 문제해결
2. 로직 관련 글
3. 기술 이슈에 대한 고찰
4. 학습한 내용을 정리
5. 트러블에 대한 생각
   <br>

### 😡 트러블 슈팅

1. 트러블 발생 이유와 해결점
<br>
a. Github에 새로운 리포지토리를 생성 후 유니티 프로젝트를 push할려고 했으나 용량 초과 오류 발생
<br> 
```
해결) github에 유니티 프로젝트를 올리기 위해서는 Unity.gitignore를 루트 프로젝트에 생성해야 올라간다. (안그러면 100mb 용량 초과 오류메세지) (https://github.com/github/gitignore/blob/main)
```
