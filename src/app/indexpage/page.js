import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import styles from "../styles/IndexPage.module.css";
import Footer from "../components/Footer";

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className={styles.manucontainer}>
        <div className={styles.manuitem}>
          <Link className={styles.icon} href="/registerpage">
            <div className={styles.circleicon}>
              <Image src={"/Manu/1.png"} alt="" width={110} height={90}></Image>
              <p>สมัครเรียน</p>
            </div>
          </Link>
          <Link className={styles.icon} href="">
            <div className={styles.circleicon}>
              <Image src={"/Manu/2.png"} alt="" width={110} height={90}></Image>
              <p>ค่าเรียน</p>
            </div>
          </Link>
          <Link className={styles.icon} href="">
            <div className={styles.circleicon}>
              <Image src={"/Manu/3.png"} alt="" width={110} height={90}></Image>
              <p>ทุนการศึกษา</p>
            </div>
          </Link>
          <Link className={styles.icon} href="">
            <div className={styles.circleicon}>
              <Image src={"/Manu/4.png"} alt="" width={110} height={90}></Image>
              <p>ปฎิทินการศึกษา</p>
            </div>
          </Link>
          <Link className={styles.icon} href="">
            <div className={styles.circleicon}>
              <Image src={"/Manu/5.png"} alt="" width={110} height={90}></Image>
              <p>เส้นทางมา ม.รังสิต</p>
            </div>
          </Link>
          <Link className={styles.icon} href="https://itsc.rsu.ac.th/">
            <div className={styles.circleicon}>
              <Image src={"/Manu/6.png"} alt="" width={110} height={90}></Image>
              <p>RSU-NET</p>
            </div>
          </Link>
          <Link
            className={styles.icon}
            href="https://itsc.rsu.ac.th/faccon/showfac.php"
          >
            <div className={styles.circleicon}>
              <Image src={"/Manu/7.png"} alt="" width={110} height={90}></Image>
              <p>ติดต่อคณะ</p>
            </div>
          </Link>
          <Link className={styles.icon} href="https://www.sbs.ac.th/">
            <div className={styles.circleicon}>
              <Image src={"/Manu/8.png"} alt="" width={110} height={90}></Image>
              <p>Satit Rangsit</p>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.item}>
          <div className={styles.textopenhouse}>
            <h1>OPENHOUSE</h1>
            <Link href={"registeropenhouse"}>ลงทะเบียน OPENHOUSE 2023</Link>
          </div>
          <div className={styles.lineshowcase}></div>
          <div className={styles.cardopenhouse}>
            <div className={styles.carditem}>
              <Link href={"http://info.rsu.ac.th/openhouse/artist.html"}>
                <Image
                  src={"/openhouse/artdesign.jpg"}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
              </Link>
            </div>
            <div className={styles.carditem}>
              <Link href={"http://info.rsu.ac.th/openhouse/business.html"}>
                <Image
                  src={"/openhouse/economybusiness.jpg"}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
              </Link>
            </div>
            <div className={styles.carditem}>
              <Link href={"http://info.rsu.ac.th/openhouse/hitech.html"}>
                <Image
                  src={"/openhouse/engineertech.jpg"}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
              </Link>
            </div>
            <div className={styles.carditem}>
              <Link href={"http://info.rsu.ac.th/openhouse/medical.html"}>
                <Image
                  src={"/openhouse/healthsciences.jpg"}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
              </Link>
            </div>
            <div className={styles.carditem}>
              <Link href={"http://info.rsu.ac.th/openhouse/social.html"}>
                <Image
                  src={"/openhouse/Humanities.jpg"}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
              </Link>
            </div>
            <div className={styles.carditem}>
              <Link href={"http://info.rsu.ac.th/openhouse/inter.html"}>
                <Image
                  src={"/openhouse/Online.jpg"}
                  alt=""
                  width={300}
                  height={300}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.item}>
          <div className={styles.textshowcase}>
            <Link href={""}>All Showcase</Link>
            <h1>SHOWCASE</h1>
          </div>
          <div className={styles.lineshowcase}></div>
          <div className={styles.cardshowcase}>
            <Link href={""} className={styles.itemshowcase}>
              <Image
                src={"/showcase/showcase1.jpg"}
                alt=""
                width={400}
                height={200}
              ></Image>
              <div className={styles.detailshowcase}>
                <span>
                  วิลาวัณย์ แดนสีแก้ว ศิษย์เก่าทุนกีฬา
                  คว้าเหรียญเงินการแข่งขันนักวอลเลย์บอลนั่งทีมชาติไทย
                  อาเซียนพาราเกมส์ (ครั้งที่ 12) ประเทศกัมพูชา
                </span>
                <h5>
                  ยิ่งใหญ่กว่าชัยชนะที่ได้มา คือ “ขนาดของหัวใจ” นักกีฬา
                  “วิลาวัณย์ แดนสีแก้ว” ศิษย์เก่าทุนกีฬามหาวิทยาลัยรังสิต
                  คว้าเหรียญเงินจากการแข่งขันนักวอลเลย์บอลนั่งทีมชาติไทย
                  (ทีมหญิง) มหกรรมกีฬาอาเซียนพาราเกมส์ (ครั้งที่ 12) ณ
                  ประเทศกัมพูชา โดยมีประเทศสมาชิกเข้าร่วมการแข่งขันรวม 11 ประเทศ
                </h5>
              </div>
            </Link>
            <Link href={""} className={styles.itemshowcase}>
              <Image
                src={"/showcase/showcase2.jpg"}
                alt=""
                width={400}
                height={200}
              ></Image>
              <div className={styles.detailshowcase}>
                <span>
                  โอปอ ธภัทรวัฒน์ นศ.ทุนกีฬา ม.รังสิต คว้าแชมป์โลก 2023 เจ็ตสกี
                  ทางไกล
                </span>
                <h5>
                  ยกนิ้วให้ไปเลยกับ โอปอ-ธภัทรวัฒน์ โจสรรค์นุสนธิ์
                  ที่คว้าแชมป์โลกในศึกดับเบิ้ลยูจีพี วัน เจ็ตสกี
                  ทางไกลนอกชายฝั่งหรือออฟชอร์ชิงแชมป์โลก 2023 (WGP#1 WATERJET
                  OFFSHORE WORLD CHAMPIONSHIP 2023) ใช้เส้นทางไปกลับ ลากูน่า บีช
                  ถึงแหลมพรหมเทพ รวม 120 กม.
                </h5>
              </div>
            </Link>
            <Link href={""} className={styles.itemshowcase}>
              <Image
                src={"/showcase/20032566110259_Success_Cover_LIBERAL_ARM.jpg"}
                alt=""
                width={400}
                height={200}
              ></Image>
              <div className={styles.detailshowcase}>
                <span>
                  “เรียนภาษา เล่นดนตรี และเล่นเกม
                  นิยามการใช้ชีวิตในรั้วมหาวิทยาลัย ” ณัฎฐพงษ์ ยงกำลัง
                  นักศึกษาวิทยาลัยศิลปศาสตร์ ม.รังสิต
                </span>
                <h5>
                  มุมมองการใช้ชีวิตของคนรุ่นใหม่ แตกต่างไปจากสมัยก่อนค่อนข้างมาก
                  เราจะเห็นได้ชัดว่าคนยุคนี้
                  สร้างรายได้จากสิ่งที่เราอาจเคยมองข้าม การได้ทำสิ่งเล่นๆ
                  เป็นเรื่องจริงจังขึ้นมา ไม่ว่าจะเป็นการสร้างอาชีพ
                  หรือสร้างตัวตนจากงานอดิเรก เช่นเดียวกับ นายณัฎฐพงษ์ ยงกำลัง
                  นักศึกษาชั้นปีที่ 4 สาขาวิชาภาษาอังกฤษ วิทยาลัยศิลปศาสตร์
                  มหาวิทยาลัยรังสิต เขาทุ่มเทให้กับทั้งการเรียน
                  และงานอดิเรกที่เขาสนใจ
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.item}>
          <div className={styles.textshowcase}>
            <h1>RSU Video</h1>
            <Link href={""}>All Video</Link>
          </div>
          <div className={styles.lineshowcase}></div>
          <div className={styles.cardvideo}>
            <Link
              href={"https://youtu.be/92_pI8iIit0"}
              className={styles.itemvideo1}
            >
              <div className={styles.previewvideo}>
                <div className={styles.textpreview}>
                  <span>เราขอให้คุณหยุดฝัน</span>
                </div>
              </div>
              <Image
                src={"/rsuvideo/rsuvideo1.jpg"}
                alt=""
                width={590}
                height={430}
              ></Image>
            </Link>
            <div className={styles.itemvideo2}>
              <Link
                href={"https://youtu.be/NYSGAwY0IaA"}
                className={styles.imgpreview}
              >
                <div className={styles.previewvideo2}>
                  <div className={styles.textpreview2}>
                    <span>[ รีวิว ] 5 สาขา DIIT ม.รังสิต</span>
                  </div>
                </div>
                <Image
                  src={"/rsuvideo/rsuvideo2.jpg"}
                  alt=""
                  width={280}
                  height={200}
                ></Image>
              </Link>
              <Link
                href={"https://youtu.be/5OT7e3r_LjM"}
                className={styles.imgpreview}
              >
                <div className={styles.previewvideo2}>
                  <div className={styles.textpreview2}>
                    <span>ไม่เรียนไม่รักนะ Sub Eng</span>
                  </div>
                </div>
                <Image
                  src={"/rsuvideo/rsuvideo3.jpg"}
                  alt=""
                  width={280}
                  height={200}
                ></Image>
              </Link>
              <Link
                href={"https://youtu.be/60XWRjxOQTc"}
                className={styles.imgpreview}
              >
                <div className={styles.previewvideo2}>
                  <div className={styles.textpreview2}>
                    <span>Q & A วิทยาลัยดนตรี ม.รังสิต</span>
                  </div>
                </div>
                <Image
                  src={"/rsuvideo/maxresdefault (4).jpg"}
                  alt=""
                  width={280}
                  height={200}
                ></Image>
              </Link>
              <Link
                href={"https://youtu.be/gTQ1D9aopAU"}
                className={styles.imgpreview}
              >
                <div className={styles.previewvideo2}>
                  <div className={styles.textpreview2}>
                    <span>How To .. สมัครเรียน ม.รังสิต</span>
                  </div>
                </div>
                <Image
                  src={"/rsuvideo/maxresdefault (4).jpg"}
                  alt=""
                  width={280}
                  height={200}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.item}>
          <div className={styles.textvideotiktok}>
            <div className={styles.itemtiktok}>
              <Link
                href="https://www.tiktok.com/@rangsituniversity?is_from_webapp=1&sender_device=pc"
                className={styles.logowraper}
                target="_blank"
              >
                <Image
                  src={"/Logo_universe/tiktok.png"}
                  width={400}
                  height={300}
                  alt=""
                ></Image>
              </Link>
              <div className={styles.allvideotiktokbtn}>
                <Link
                  href={
                    "https://www.tiktok.com/@rangsituniversity?is_from_webapp=1&sender_device=pc"
                  }
                  target="_blank"
                >
                  All Video Tiktok
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-right-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className={styles.videotiktokshow}>
              <Link
                href={
                  "https://www.tiktok.com/@rangsituniversity/video/7251533202668391686?is_from_webapp=1&sender_device=pc&web_id=7043781851769259521"
                }
                target="_blank"
              >
                <Image
                  src={"/rsuvideo/tt1.jpg"}
                  alt=""
                  width={200}
                  height={300}
                ></Image>
              </Link>
              <Link
                href={
                  "https://www.tiktok.com/@rangsituniversity/video/7247071415353019654?is_from_webapp=1&sender_device=pc&web_id=7043781851769259521"
                }
                target="_blank"
              >
                <Image
                  src={"/rsuvideo/tt2.jpg"}
                  alt=""
                  width={200}
                  height={300}
                ></Image>
              </Link>
              <Link
                href={
                  "https://www.tiktok.com/@rangsituniversity/video/7246744311650405638?is_from_webapp=1&sender_device=pc&web_id=7043781851769259521"
                }
                target="_blank"
              >
                <Image
                  src={"/rsuvideo/tt3.jpg"}
                  alt=""
                  width={200}
                  height={300}
                ></Image>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.item}>
          <div className={styles.textshowcase}>
            <h1>GOOD OLD DAY</h1>
            <Link href={""}>รังศิษย์ รังสิต</Link>
          </div>
          <div className={styles.lineshowcase}></div>
          <div className={styles.cardgoodoldday}>
            <Link href={""} className={styles.itemgoodoldday}>
              <Image
                src={"/goodoldday/03072566113952_Success_Cover.jpg"}
                alt=""
                width={300}
                height={170}
              ></Image>
              <div className={styles.detailgoodoldday}>
                <span>
                  ใครจะคิด! เด็กเกเรสุดขั้ว เปลี่ยนตัวเอง จนได้เป็น
                  “คุณหมอนักธุรกิจ”
                </span>
              </div>
            </Link>

            <Link href={""} className={styles.itemgoodoldday}>
              <Image
                src={
                  "/goodoldday/26062566091908_Success_Cover_SR-Online_Good-Old-Days-ศิษย์เก่า-ว.ศิลปศาสตร์-.jpg"
                }
                alt=""
                width={300}
                height={170}
              ></Image>
              <div className={styles.detailgoodoldday}>
                <span>
                  “สมยศ ปาทาน” ศิษย์เก่า ว.ศิลปศาสตร์ ม.รังสิต
                  ประธานวิสาหกิจชุมชนท่องเที่ยวย่านเมืองเก่าภูเก็ต
                </span>
              </div>
            </Link>
            <Link href={""} className={styles.itemgoodoldday}>
              <Image
                src={"/goodoldday/28062566093735_Success_Cover_music (2).jpg"}
                alt=""
                width={300}
                height={170}
              ></Image>
              <div className={styles.detailgoodoldday}>
                <span>
                  บูม อลงกรณ์ ศิลปินค่าย BATTERY MUSIC เจ้าของเพลงชมพู [HER]
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.item}>
          <div className={styles.textshowcase}>
            <Link href={""}>รอบรั้วรังสิต</Link>
            <h1>INTERVIEW</h1>
          </div>
          <div className={styles.lineshowcase}></div>
          <div className={styles.cardshowcase}>
            <Link href={""} className={styles.itemshowcase}>
              <Image
                src={"/Interview/03072566110948_Success_Cover.jpg"}
                alt=""
                width={400}
                height={200}
              ></Image>
              <div className={styles.detailshowcase}>
                <span>
                  กายภาพบำบัดฯ ม.รังสิต ร่วมกับ สถาบันสิรินธรฯ
                  มอบประกาศนียบัตรผู้อบรมหลักสูตร IMC
                </span>
                <h5>
                  คณะกายภาพบำบัดและเวชศาสตร์การกีฬา มหาวิทยาลัยรังสิต ร่วมกับ
                  สถาบันสิรินธรเพื่อการฟื้นฟูสมรรถภาพทางการแพทย์แห่งชาติ
                  กรมการแพทย์
                  มอบประกาศนียบัตรผู้เข้ารับการฝึกอบรมหลักสูตรกายภาพบำบัดเพื่อการฟื้นฟูสมรรถภาพระยะกลาง
                  Program of Physical Therapy (Rehabilitation in Intermediate
                  Care) หรือ IMC รุ่น 2
                </h5>
              </div>
            </Link>
            <Link href={""} className={styles.itemshowcase}>
              <Image
                src={"/Interview/22062566131912_Success_Cover.jpg"}
                alt=""
                width={400}
                height={200}
              ></Image>
              <div className={styles.detailshowcase}>
                <span>สถาบันภาษา ม.รังสิต จัดกิจกรรม IN LOVE WITH ENGLISH</span>
                <h5>
                  สถาบันภาษา มหาวิทยาลัยรังสิต จัดกิจกรรม In Love with English
                  2023
                  ส่งเสริมการเรียนรู้ภาษาอังกฤษนอกชั้นเรียนให้แก่นักศึกษาไทย
                  มหาวิทยาลัยรังสิตเล็งเห็นถึงความสำคัญของการใช้ภาษาอังกฤษในปัจจุบัน
                  ทั้งในการทำงาน การเข้าสังคม หรือการดำเนินชีวิตประจำวัน
                  การจะฝึกภาษาอังกฤษให้ได้ผลนั้นสิ่งจำเป็นที่ต้องมีคือทัศนคติที่ดีต่อการเรียน
                  นอกจากนี้
                  ผู้เรียนจะต้องมีความรู้สึกว่าภาษาอังกฤษเป็นสิ่งที่มีประโยชน์
                  และตนเองสามารถที่จะฝึกฝนและพัฒนาภาษาอังกฤษได้
                </h5>
              </div>
            </Link>
            <Link href={""} className={styles.itemshowcase}>
              <Image
                src={
                  "/Interview/23062566072747_Success_Cover_SR-Online_คอลัมน์-Interview-กิจกรรมของสถาบันภาษา.jpg"
                }
                alt=""
                width={400}
                height={200}
              ></Image>
              <div className={styles.detailshowcase}>
                <span>
                  เปิดมุมมองนักกายภาพบำบัด
                  กับการพัฒนาระบบบริการกายภาพบำบัดผู้ป่วยระยะกลาง
                </span>
                <h5>
                  คณะกายภาพบำบัดและเวชศาสตร์การกีฬา มหาวิทยาลัยรังสิต
                  จัดเสวนาวิชาการ
                  “หัวใจการพัฒนาระบบบริการกายภาพบำบัดผู้ป่วยระยะกลางสู่ความยั่งยืน”
                  พร้อมเปิดมุมมองนักกายภาพบำบัด
                  กับการพัฒนาระบบบริการกายภาพบำบัดผู้ป่วยระยะกลาง
                </h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.item}>
          <div className={styles.textshowcase}>
            <h1>LIFESTYLES</h1>
            <Link href={""}>ม.รังสิตสไตล์</Link>
          </div>
          <div className={styles.lineshowcase}></div>
          <div className={styles.cardgoodoldday}>
            <Link href={""} className={styles.itemgoodoldday}>
              <Image
                src={"/lifestyles/12052566155226_Success_CoverMass.jpg"}
                alt=""
                width={300}
                height={170}
              ></Image>
              <div className={styles.detailgoodoldday}>
                <span>
                  ม.รังสิต จับมือ มูลนิธิเพื่อผู้บริโภค จัดโครงการ
                  “การสร้างสรรค์สื่ออย่างมีส่วนร่วมเพื่อการพัฒนาชุมชน”
                </span>
              </div>
            </Link>

            <Link href={""} className={styles.itemgoodoldday}>
              <Image
                src={
                  "/lifestyles/12062566105015_Success_Cover_SR-Online_ศิลปศาสตร์-01.jpg"
                }
                alt=""
                width={300}
                height={170}
              ></Image>
              <div className={styles.detailgoodoldday}>
                <span>
                  “นอกจากความรู้ เรากอบโกยอะไรจากรั้วมหาวิทยาลัยได้บ้าง” มีน –
                  ปาณิสรา สมบูรณ์ นักศึกษาวิทยาลัยศิลปศาสตร์ ม.รังสิต
                </span>
              </div>
            </Link>
            <Link href={""} className={styles.itemgoodoldday}>
              <Image
                src={"/lifestyles/28042566200934_Success_TCCUxExhibition.jpg"}
                alt=""
                width={300}
                height={170}
              ></Image>
              <div className={styles.detailgoodoldday}>
                <span>
                  สภาผู้บริโภค จับมือ คนรุ่นใหม่ 10 สถาบันการศึกษา
                  สร้างสรรค์นวัตกรรมการสื่อสารเพื่อคุ้มครองผู้บริโภค
                  พร้อมจัดนิทรรศการ “คุณเสียหาย เพื่อนพร้อมชน”
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.article}>
        <div className={styles.item}>
          <div className={styles.textshowcase}>
            <Link href={""}>All Gallery</Link>
            <h1>RSU Gallery</h1>
          </div>
          <div className={styles.lineshowcase}></div>
          <div className={styles.gallerycon}>
            <div className={styles.galleryitem}>
              <Image
                src={
                  "/rsugallery/20023778_10155470158388232_864050363786922355_o.jpg"
                }
                alt=""
                width={700}
                height={300}
              ></Image>
            </div>
            <div className={styles.galleryitem}>
              <Image
                src={
                  "/rsugallery/20121144_10155470160573232_8850637686918538443_o.jpg"
                }
                alt=""
                width={300}
                height={300}
              ></Image>
            </div>
            <div className={styles.galleryitem}>
              <Image
                src={
                  "/rsugallery/20045501_10155470349713232_4002986338061541932_o.jpg"
                }
                alt=""
                width={1020}
                height={400}
              ></Image>
            </div>
            <div className={styles.galleryitem}>
              <Image
                src={
                  "/rsugallery/20045408_10155470159653232_3312826871455209029_o.jpg"
                }
                alt=""
                width={1020}
                height={400}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
