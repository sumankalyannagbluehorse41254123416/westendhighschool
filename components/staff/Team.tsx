import Image from "next/image";
import Link from "next/link";

interface Section {
  title?: string;
  description?: string;
  image?: string;
}

interface Props {
  subsections: Section[];
}

/* ---------------- Helper Function ---------------- */

const cleanText = (html?: string) => {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")   // remove HTML tags
    .replace(/&nbsp;/g, " ")   // remove &nbsp;
    .replace(/\s+/g, " ")     // remove extra spaces
    .trim();                   // trim start/end
};

export default function Team({ subsections }: Props) {
  return (
    <div className="team" style={{ marginBottom: "1%" }}>
      <div className="inner_con">
        <ul
          className="team team_member"
          style={{ display: "grid" }}
        >
          {subsections.map((item, index) => (
            <li key={index}>
              <Link href={`/staffdetails/${index}`}>
                <Image
                  src={item.image || "/images/default.jpg"}
                  alt={item.title || "staff"}
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

                <br />
                <b>{item.title}</b>
                <p>{cleanText(item.description)}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="clear"></div>
    </div>
  );
}
