import styles from "../styles/IndexPage.module.css";
import Link  from "next/link";
import Image from "next/image";
export default function Post() {
    return(
        <>
         <Link href={``} className={styles.itemshowcase}>
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
        </>
    )
}