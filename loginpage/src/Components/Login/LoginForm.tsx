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

        <div className="flex justify-between px-10 py-5 pb-10">
            <p>Check</p>

            <button className="btn-login" type="button">ورود</button>
        </div>
    </div>;
}

export default LoginForm;