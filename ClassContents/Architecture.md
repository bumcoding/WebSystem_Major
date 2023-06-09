# Model과 View 간의 의존성을 약화시키고, 약하게 결합시키기 위한 아키텍처 패턴

## MVC (Model View Controller)

- Controller의 역할은 Action을 전달 받아 처리
- Controller와 View는 1:N 관계로, Controller는 다수의 View를 관리
- View는 Controller를 모름

### 동작

1. Action이 Controller로 전달
2. Controller는 Action을 확인하고, Model을 업데이트
3. Controller는 Model을 표현할 View를 선택

### View가 업데이트 되는 방법

- 선택된 View가 Model에 직접 접근
- Model이 View에게 Notify
- View가 Polling으로 주기적으로 Model의 변경을 감지

### 단점

- View와 Model 간의 의존성이 높음


## MVP (Model View Presenter)

- Presenter의 역할은 View와 Model 간의 매개체
- Presenter와 View는 1:1 or N:1 관계

### 동작

1. Action이 View로 전달
2. View는 Presenter에 데이터를 요청
3. Presenter는 Model에 데이터를 요청
4. Model은 Presenter에 데이터를 응답
5. Presenter는 View에 데이터를 응답

### 장점

- View와 Model 간의 의존성이 없음

### 단점

- View와 Presenter 간의 의존성이 높음


## MVVM (Model View ViewModel)

- ViewModel과 View는 1:N 관계

### 동작

1. Action이 View로 전달
2. View는 Command pattern으로 ViewModel에 Action을 전달
3. ViewModel은 Model에게 데이터를 요청
4. Model은 ViewModel에게 데이터를 응답
5. ViewModel은 Observer pattern으로 View에 데이터를 전달

### 장점

- View와 Model 간의 의존성이 없음
- ViewModel과 View 간의 의존성이 없음
