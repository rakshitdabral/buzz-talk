import { styles } from "../../styles";
import { AiFillInstagram, AiFillLinkedin,AiFillYoutube } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div
        className={`${styles.paddingX} mt-[200px] bg-[#b564dcff] min-h-[40vh]`}
      >
        <div className="flex justify-evenly py-12 sm:flex-row flex-col items-start text-white">
          <div className="flex justify-center items-center mb-11 ">
            <div className="flex justify-center items-center gap-6 py-9">
              <AiFillInstagram className="h-[30px] w-[30px] cursor-pointer" />
              <AiFillLinkedin className="h-[30px] w-[30px] cursor-pointer"/>
              <AiFillYoutube className="h-[30px] w-[30px] cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-evenly gap-12 flex-wrap items-start">
            <div>
              <h3 className="text-[#77d8dfff] mb-6 ">Product</h3>
              <ul>
                <li className="mb-4 hover:underline cursor-pointer">
                  Download
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#77d8dfff] mb-6 ">Company</h3>
              <ul>
                <li className="mb-4 hover:underline cursor-pointer">About</li>
                <li className="mb-4 hover:underline cursor-pointer">Jobs</li>
                <li className="mb-4 hover:underline cursor-pointer">Brand</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#77d8dfff] mb-6 ">Resources</h3>
              <ul>
                <li className="mb-4 hover:underline cursor-pointer">Safety</li>
                <li className="mb-4 hover:underline cursor-pointer">
                  Developers
                </li>
                <li className="mb-4 hover:underline cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#77d8dfff] mb-6 ">Policies</h3>
              <ul>
                <li className="mb-4 hover:underline cursor-pointer">Terms</li>
                <li className="mb-4 hover:underline cursor-pointer">Privacy</li>
                <li className="mb-4 hover:underline cursor-pointer">
                  Cookies Setting
                </li>
                <li className="mb-4 hover:underline cursor-pointer">
                  Licences
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
