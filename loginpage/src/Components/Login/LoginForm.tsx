import { useState } from "react";
import "./Login.css";




const LoginForm = () => {
    return <div className="login-form pt-[70px] overflow-hidden">
        <div className="header flex justify-center relative">
            <div className="white-shadow absolute top-[-79px] w-[110%] h-[195px]">
                <img src={require("./boxwhite.png")} className="w-full h-full" alt="boxwhite" />
            </div>
            <div className="avatar">
                <img className="w-full" src={require("./avatar.png")} alt="avatar" />
            </div>
            <div className="header-line absolute top-[46%]">

            </div>

            
        </div>

        <div className="w-full inputs px-10 pt-10 flex flex-col gap-5">
            <input type="text" className="w-full input-text text-center" placeholder="نام کاربری" />
            <input type="password" className="w-full input-text text-center" placeholder="کلمه عبور" />
        </div>

        <div className="flex justify-between items-center px-10 py-5 pb-10">
            <div className="flex gap-2">
                <CustomSwitch />
                <span className="text-[18px] font-bold">ذخیره</span>
            </div>

            <button className="btn-login" type="button">ورود</button>
        </div>
    </div>;
}


const CustomSwitch = () => {

    const [selected, setSelected] = useState(false);

    return <div className="custom-switch">
        <div className={"switch-container relative " + (selected && "switch-selected")}>
            <div onClick={() => setSelected(x => !x)} className="slider duration-500 absolute right-[-8px] top-[-6px] cursor-pointer">
                <img src={require("./metal slider.png") } className="w-[45px]" alt="slider" />
            </div>
        </div>
    </div>
}
export default LoginForm;