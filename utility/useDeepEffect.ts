import { useRef, useEffect, useState } from "react";
const _ = require('lodash')

export default function useDeepEffect(fn: Function, deps: any[]) {
    const isFirst = useRef(true);
    const prevDeps = useRef(deps);
    const [numberOfTimesCalled, setNumberOfTimesCalled] = useState<number>(1)

    /**
     * after the initial time this function runs, isFirstEffect will be false, unless one of the dependencies change... it will be true
     * 
     * useEffect will only run if one of the original deps passed into the useDeepEffect func change... 
     * if this is the case, useEffect will run again... the isSame func will return false, causing the callback func to be executed 
     * 
     * so, if this hook is mounted to the DOM for the first time OR if any of the deps change, the callback function will be executed
     */
    useEffect(() => {
      const isFirstEffect = isFirst.current;
      const isSame = prevDeps.current.every((obj, index) =>
        _.isEqual(obj, deps[index])
      );
    

      // set the useRef values so that for the subsequent renders, callback func wont be invoked

      prevDeps.current = deps;
      isFirst.current = false;

      // if they arent the same
      if (isFirstEffect || !isSame) {
        return fn();    
      }
    }, [deps, numberOfTimesCalled]);
  } 