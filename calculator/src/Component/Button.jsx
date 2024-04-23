import { useContext, useState } from "react"
import { CalContext } from "../Context/CalContext";

export default function Button({ value }) {
    const { dvalue, setDValue } = useContext(CalContext);

    function handleClick() {

        if (value == "=") {
            setDValue(evaluate(dvalue))
            return
        }

        if (value == "AC") {
            setDValue("")
            return
        }

        if(value == "<-"){
            setDValue(removeLast(dvalue));
            return   
        }

        if (dvalue.length <= 16) {
            setDValue(prev => prev + value)
        }
        else {
            console.log(dvalue.length)
            alert("Somehgkh")
        }



    }

    function evaluate(exp) {
        const res = eval(exp);
        return String(res);
    }

    function removeLast(exp){
        const size=exp.length;
        let str=exp.slice(0,size-1);
        return str;

    }
    return (
        <>
            <button onClick={() => handleClick()} className="rounded-md h-14 w-14 m-1 p-1 bg-orange-400 cursor-pointer active:bg-yellow-700">
                <div className="text-center text-xlg text-slate-50 p-2">
                    {value}
                </div>
            </button>
        </>
    )
}