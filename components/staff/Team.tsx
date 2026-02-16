import Image from "next/image";
import Link from "next/link";

export default function Team() {
  return (
    <div className="team" style={{ marginBottom: "1%" }}>
      <ul className="team">
        <li>
          <Link href="/staffdetails/14">
            <Image
              src="/images/Sir-PA-1.jpg"
              alt="Pranabananda Barik"
              width={150}
              height={180}
              style={{
                float: "left",
                padding: "1%",
                border: "1px solid #ccc",
                margin: ".5%",
                boxShadow: "3px 3px 9px 0px #ccc",
              }}
            />
          </Link>

          <br />
          <b>Pranabananda Barik</b>
          <p></p>
          <p>Secretary</p>
          <p></p>
        </li>
      </ul>

      <div className="clear"></div>
    </div>
    
  );
}
