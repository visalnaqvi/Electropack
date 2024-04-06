import { useState } from "react";
import styles from "./login.module.css"
import { addUser, checkStorageForAdminToken, checkUser } from "@/services/auth";
import { useRouter } from "next/router";
const LoginComponent = () => {

    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(true);
    const router = useRouter();

    const onLogin = async () => {
        await checkUser(userId, password)
        if (!checkStorageForAdminToken()) {
            router.push("/")
        } else {
            router.push("/admin-panel")
        }
    }

    const onRegister = async () => {
        await addUser({ name: name, userId: userId, password: password, role: "customer" })
        if (!checkStorageForAdminToken()) {
            router.push("/")
        } else {
            router.push("/admin-panel")
        }

    }
    return (
        <div className={`margin ${styles.margin}`}>
            <div className={`body-wrapper column`}>
                <div className={`${styles.wrapper}`}>
                    <div className="body-wrapper justify-between" style={{ marginBottom: "10px" }}>
                        <p className={styles.heading}>{isRegister ? "Request Call Back" : "Login"}</p>
                        {/* <Image width={130} height={50} alt="al azeem logo" src={logo}></Image> */}
                        </div>
                    <p className={styles.content}>Transform spaces with us. Experts in construction and interior design. From concept to completion, we bring visions to life. Request a callback today.</p>
                    <form>
                        {
                            isRegister &&
                            <div className={styles.formItem}>
                                <label className={styles.label} htmlFor="name">Full Name</label><br></br>
                                <input onChange={(e) => setName(e.target.value)} className={styles.input} type="text" id="name" name="name" placeholder="Enter your Full Name" />
                            </div>
                        }
                        <div className={styles.formItem}>
                            <label className={styles.label} htmlFor="userId">Phone Number</label><br></br>
                            <input onChange={(e) => setUserId(e.target.value)} className={styles.input} type="text" id="userId" name="userId" placeholder="Enter your userId" />
                        </div>
                        {/* <div className={styles.formItem}>
                            <div className="body-wrapper justify-between"><label className={styles.label} htmlFor="password">Password</label><p style={{ cursor: "pointer" }} onClick={() => setShowPass(!showPass)} className={styles.content}>Show Password</p></div>
                            <input onChange={(e) => setPassword(e.target.value)} className={styles.input} type={showPass ? "text" : "password"} id="password" name="password" placeholder="Enter your Password" />
                        </div> */}
                        <button onClick={(e) => {
                            e.preventDefault()
                            isRegister ? onRegister() : onLogin()
                        }} className="primary-btn blue">{isRegister ? "Submit" : "Login"}</button>
                    </form>
                </div>
                {/* {isRegister ? <p className={styles.boldContent}>Already have an account? <snap onClick={() => setIsRegister(false)} className={styles.link}>Login</snap></p> : <p className={styles.boldContent}>Dont&apos;t have an account? <snap onClick={() => setIsRegister(true)} className={styles.link}>Create an Account</snap></p>}
                <br></br>
                <p className={styles.boldContent}>Dont&apos;t remember you password? <snap className={styles.link}>Reset Password</snap></p> */}
                <br></br>
            </div>
        </div>
    )
}

export default LoginComponent;