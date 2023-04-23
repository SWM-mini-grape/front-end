import { useCallback, useState } from "react";

const useInput=(init)=>{
    const [value, setValue]=useState(init);
    const handler=useCallback((e)=>{
        setValue(e.target.value);
    },[]);
    return [value, handler, setValue];
};

export default useInput;