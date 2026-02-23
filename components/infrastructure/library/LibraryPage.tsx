import Image from "next/image";

/* ---------------- Types ---------------- */

interface Section {
  title?: string;
  shortDescription?: string;
  image?: string;
}

interface Props {
  section?: Section;
}

export default function LibraryPage({ section }: Props) {
  if (!section) return null;

  return (
    <div className="side_padding">
      <div className="inner_con">
        {section.shortDescription && (
          <p>
            <span
              style={{
                fontSize: "large",
                fontFamily: "andale mono, times",
                color: "#000",
              }}
              dangerouslySetInnerHTML={{
                __html: section.shortDescription,
              }}
            />
          </p>
        )}

        {section.image && (
          <div style={{ margin: "10px 0" }}>
            <Image
              src={section.image}
              alt={section.title || "Library Image"}
              width={500}
              height={375}
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
