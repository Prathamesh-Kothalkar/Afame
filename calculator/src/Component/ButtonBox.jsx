import { useContext } from "react";
import Button from "./Button";
import { CalContext } from "../Context/CalContext";

export default function ButtonBox() {
    
    return (
        <>
            <div className=" grid grid-cols-4 w-full h-auto m-2 p-2">
                <Button value="AC" />
                <Button value="<-" />
                <Button value="%" />
                <Button value="/" />
                <Button value="7" />
                <Button value="8" />
                <Button value="9" />
                <Button value="*" />
                <Button value="4" />
                <Button value="5" />
                <Button value="6" />
                <Button value="-" />
                <Button value="1" />
                <Button value="2" />
                <Button value="3" />
                <Button value="+" />
                <Button value="0" />
                <Button value="00" />
                <Button value="." />
                <Button value="=" />
            </div>
        </>
    )
}