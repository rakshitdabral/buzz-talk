import Registerbox from "../../components/registerbox/Registerbox"
import { styles } from "../../styles"


function Register() {
  return (
    <div className={`${styles.paddingX} min-h-[100vh]  loading="eager" bg-center sm:bg-login-pattern bg-[#1e293b] bg-cover bg-no-repeat w-full`}>
        <Registerbox/>
    </div>
  )
}

export default Register