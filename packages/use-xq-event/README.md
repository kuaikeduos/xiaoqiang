# `use-xq-event`

> A React Hook for xqui web component event system.

## Usage

```tsx
import React, { useState, useRef, useEffect } from "react";
import useXqEvent from '@xqui/use-xq-event'

function ReactXqButtonDemo() {
  const [theme, setTheme] = useState('default');
  const button = useRef();

  useXqEvent(button, [{
    event: 'xq:click',
    handler: function() {
      console.log('click button')
      setTheme('primary')
    }
  }])

  return (
    // @ts-ignore
    <xq-button ref={button} theme={theme}>hhh</xq-button>
  )
}

export default ReactXqButtonDemo;
```
