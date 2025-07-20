# 📜 cy-combobox

코드잇 중급 프로젝트용 ComboBox 라이브러리 패키지입니다.
Headless UI 패턴을 기반으로 자유롭게 디자인 적용이 가능합니다.

<br></br>

## ✨ Features

- **Headless UI**: 자유로운 스타일링을 위한 구조 제공
- **React 기반 컴포넌트**: 작고 가벼운 커스텀 UI 설계 가능
- **Controlled Component 지원**: 외부에서 상태 관리 가능

<br></br>

## 💡 Install

```bash
npm install cy-combobox
```

<br></br>

## 🔨 Usage

```tsx
import { useState } from 'react';
import {
  ComboBox,
  ComboContainer,
  ComboButton,
  ComboList,
  ComboListItem,
} from 'cy-combobox';

const ComboBoxExample = () => {
  const [blockType, setBlockType] = useState('paragraph');

  return (
    <ComboBox>
      <ComboContainer>
        <ComboButton value={blockType}>
          <span>▼</span>
        </ComboButton>
        <ComboList>
          <ComboListItem value="heading" onClick={() => setBlockType('heading')}>
            제목
          </ComboListItem>
          <ComboListItem value="paragraph" onClick={() => setBlockType('paragraph')}>
            본문
          </ComboListItem>
          <ComboListItem value="blockquote" onClick={() => setBlockType('blockquote')}>
            인용구
          </ComboListItem>
        </ComboList>
      </ComboContainer>
    </ComboBox>
  );
};

```

## ⚙️ Controlled 방식 안내
cy-combobox는 내부적으로 선택된 값을 기억하며, 외부 변수에 의해 선택값을 변경하는 기능도 지원합니다.

ComboButton에 value를 전달하고, 각 ComboListItem에서 onClick을 통해 외부에서 상태를 변경하는 완전한 Controlled Component 방식으로도 동작합니다.

```tsx
<ComboButton value={blockType}>
```
이처럼 외부 상태 (blockType)를 기준으로 현재 선택된 항목이 표시되며,

onClick={() => setBlockType('...')} 로 상태를 직접 제어할 수 있습니다.

## 🧩 구성 요소
| 컴포넌트             | 설명                                     |
| ---------------- | -------------------------------------- |
| `ComboBox`       | Context Provider 역할을 하며 전체를 감쌈         |
| `ComboContainer` | 드롭다운을 감싸는 컨테이너 (닫힘/열림 이벤트 바깥 클릭 처리 포함) |
| `ComboButton`    | 현재 선택된 항목을 표시하고 드롭다운 토글                |
| `ComboList`      | 드롭다운 리스트를 렌더링                          |
| `ComboListItem`  | 각각의 선택 항목 (외부에서 onClick으로 상태 변경 필요)    |
