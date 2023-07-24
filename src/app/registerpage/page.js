import Image from "next/image";
import Navse from "../components/Navsecond";
import styles from "../styles/Register.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import'bootstrap/dist/css/bootstrap.css';


export default function RegisterPage() {
  return (
    <>
      <Navse />
      <header className={styles.container}>
        <div className={styles.itemcontent}>
          <div>
            <Link className="navbar-brand" href={"/index"}>
              <Image
                src={"/Logo_universe/Rsu_logo.png"}
                alt=""
                width={200}
                height={70}
              />
            </Link>
          </div>
          <div className={styles.dropdowregis}>
            <li class="nav-item dropdown">
              <button
                class="btn   dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                สมัครเรียน
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    ปริญญาตรี2566
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    ปริญญาโท-เอก 2566
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    International Program
                  </Link>
                </li>
              </ul>
              <button
                class="btn  dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                วิทยาลัย/คณะ
              </button>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="#">
                    วิทยาศาสตร์ - สุขภาพ
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    วิศวกรรมศาสตร์ - เทคโนโลยี
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    มนุษยศาสตร์ - สังคมศาสตร์
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    เศรษฐกิจ - ธุรกิจ
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    ศิลปะ - การออกแบบ
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    หลักสูตรออนไลน์ / นานาชาติ / ป.โท-เอก
                  </Link>
                </li>
              </ul>
              <button
                class="btn  dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                นักศึกษา
              </button>
              <ul class="dropdown-menu dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <div className={styles.contact}>
              <Link href={""}>สมัครเรียน</Link>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                  />
                </svg>
                02-791-6000
              </span>
            </div>
          </div>
          <div className={styles.applytext}>
              <span>APPLY NOW</span>
            </div>
        </div>
      </header>

      <section>
        <article className={styles.container}>
          <div className={styles.itemcontent}>
            <div className={styles.lineunder}></div>
          </div>
        </article>
        <article className={styles.containerinfo}>
          <div className={styles.itemcontent}></div>
        </article>
        <article className={styles.containerinfo}>
          <div className={styles.itemcontent}>
            <div className={styles.conregis}>
              <div className={styles.itemregis}>
                <div className={styles.textregis}>
                  <span>เริ่มแล้วสมัครเลย!!</span>
                </div>
                <Link href={"/bachelorpage"}>
                  <Image
                    src={"/Register/1.jpg"}
                    alt=""
                    width={292}
                    height={292}
                  />
                </Link>
              </div>
              <div className={styles.itemregis}>
                <div className={styles.textfree}></div>
                <Link href={"/masterpage"}>
                  <Image
                    src={"/Register/2.jpg"}
                    alt=""
                    width={292}
                    height={292}
                  />
                </Link>
              </div>
              <div className={styles.itemregis}>
                <div className={styles.textfree}></div>
                <Link href={"/doctorspage"}>
                  <Image
                    src={"/Register/3.jpg"}
                    alt=""
                    width={292}
                    height={292}
                  />
                </Link>
              </div>
              <div className={styles.itemregis}>
                <div className={styles.textfree}></div>
                <Link href={"/internationalpage"}>
                  <Image
                    src={"/Register/4.jpg"}
                    alt=""
                    width={292}
                    height={292}
                  />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>
      <Footer/>
    </>
  );
}
