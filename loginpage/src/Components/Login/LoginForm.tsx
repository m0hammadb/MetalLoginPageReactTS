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
    </div>;
}

export default LoginForm;