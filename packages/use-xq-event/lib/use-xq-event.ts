import React, { useEffect } from "react";

interface XqEventHandler {
  event: 'xq:click',
  handler: (e: any) => void
}
function useXqEvent(
  ref: React.RefObject<HTMLElement>,
  eventHandlers: XqEventHandler[] = []
) {
  useEffect(() => {
    eventHandlers.forEach(eventHandler => {
      ref.current.addEventListener(eventHandler.event, eventHandler.handler)
    })
    return () => {
      eventHandlers.forEach(eventHandler => {
        ref.current.removeEventListener(eventHandler.event, eventHandler.handler)
      })
    };
  }, [ref])
}

export default useXqEvent;
