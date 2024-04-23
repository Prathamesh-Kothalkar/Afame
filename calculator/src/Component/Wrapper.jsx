import ButtonBox from "./ButtonBox";
import Screen from "./Screen";

export default function Wrapper() {
    return (
        <> <div className=" mt-16 flex justify-center">
            <div className="bg-gray-800 w-80 h-auto rounded-xl ">
                <div className="m-0 p-2">
                    <Screen />
                </div>
                <div className="buttons">
                    <ButtonBox />
                </div>
            </div>
        </div>

        </>
    )
}