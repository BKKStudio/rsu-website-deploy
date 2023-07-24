import Link from "next/link";
import Image from "next/image";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  return (
    <nav>
      <div className={styles.containernav}>
        <div className={styles.itemnav}>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">
                <Image
                  src={"/Logo_universe/Rsu_logo.png"}
                  alt=""
                  width={200}
                  height={70}
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    สมัครเรียน
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="/bachelorpage">
                        ปริญญาตรี2566
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/registerpage">
                        ปริญญาโท-เอก 2566
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        International Program
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    วิทยาลัย/คณะ
                  </Link>
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
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    นักศึกษา
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        นักศึกษาปัจจุบัน
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        Intranet
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        International Students
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        ชมรมนักศึกษา
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        ปฎิทินการศึกษา
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    แผนที่ ม.รังสิต
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        เส้นทางมา ม.รังสิต
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        แผนที่ใน ม.รังสิต
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    เกี่ยวกับ ม.รังสิต
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" href="#">
                        ต้อนรับสู่ ม.รังสิต
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        ปรัชญา
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        ชุดนักศึกษา
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        โรงเรียนสาธิต ม.รังสิต
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="#">
                        โรงเรียนนานาชาติบริติช
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="loginpage">
                        กลุ่มบริษัท RSU
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="dropdown-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    href="#"
                  >
                    ติดต่อเรา
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
}
