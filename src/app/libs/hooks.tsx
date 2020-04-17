import {useCallback, useEffect, useRef, useState} from "react";

/**
 @Example:

 const prevSideBar = usePrevious(sideBar);
 if (prevSideBar !== sideBar) {
      localStorage.setItem('sideBar', sideBar);
 }

 */


export const usePrevious = <T extends any>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};

/**
 @Example:

 function MeasureExample() {
    const [rect, ref] = useClientRect();
    return (<>
       <h1 ref={ref}>Hello, world!</h1>
       { rect !== null &&
        <h2>Height: {Math.round(rect.height)} px</h2>
       }
    </>);
  }

 */

export const useClientRect = () => {
    const [rect, setRect] = useState(null);
    const ref = useCallback(node => {
        (node !== null) && setRect(node.getBoundingClientRect());
    }, []);

    return [rect, ref];
};

