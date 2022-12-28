import Image from "next/image";
import styles from "../styles/About.module.scss";

export default function about() {
  return (
    <div className={styles.about}>
      <h1>Sobre o Projeto</h1>
      <p>
        {" "}
        Incididunt enim ullamco aliqua eu qui elit culpa. Nostrud aute voluptate
        consequat eu culpa magna. Elit ex aute velit id sunt sunt proident.{" "}
      </p>
      <Image
        src="/images/blastoise.png"
        width="300"
        height="300"
        alt="Blastoise"
      />
    </div>
  );
}
