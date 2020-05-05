import {
    DependencyList,
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store";


export const usePrevious = <T extends any>(value: T): T | undefined => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });

    return ref.current;
};

export const useClientRect = () => {
    const [rect, setRect] = useState(null);
    const ref = useCallback(node => {
        (node !== null) && setRect(node.getBoundingClientRect());
    }, []);

    return [rect, ref];
};


export const useAfterEffect: typeof useEffect = (effect, deps?) => {
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) effect();
        else didMountRef.current = true;
    }, [effect, deps]);
};


export const useEffectWithDebounce = (fn: () => void, ms = 3000, deps?: DependencyList) => {
    const timer = useRef<any>();

    useAfterEffect(() => {
        !!timer.current && clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            fn();
            return clearTimeout(timer.current);
        }, ms);

    }, [...deps]);
};


export const useAppDispatch = () => useDispatch<AppDispatch>();
