import Loginbox from "../../components/loginbox/Loginbox"
import { styles } from "../../styles"

function Login() {
  return (
    <div className={`${styles.paddingX} min-h-[100vh]  loading="eager" bg-center sm:bg-login-pattern bg-[#1e293b] bg-cover bg-no-repeat w-full`}>
        <Loginbox/>
    </div>
  )
}

export default Login