import { useRef, useEffect } from "react";
const _ = require('lodash')

export default function useDeepEffect(fn: Function, deps: any[]) {
    const isFirst = useRef(true);
    const prevDeps = useRef(deps);

    useEffect(() => {
      const isFirstEffect = isFirst.current;
      const isSame = prevDeps.current.every((obj, index) =>
        _.isEqual(obj, deps[index])
      );
  
      isFirst.current = false;
      prevDeps.current = deps;
  
      // if they arent the same
      if (isFirstEffect || !isSame) {
        return fn();   
      }
    }, deps);
  } 