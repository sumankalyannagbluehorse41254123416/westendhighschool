import Image from "next/image";

/* ---------------- Types ---------------- */

interface Section {
  shortDescription?: string;
  image?: string;
  title?: string;
}

interface Props {
  section?: Section;
}

export default function SportsPage({ section }: Props) {
  if (!section) return null;

  return (
    <div className="inner_con">
      {section.shortDescription && (
        <p>
          <span
            style={{
              fontFamily: "andale mono, times",
              fontSize: "large",
            }}
            dangerouslySetInnerHTML={{
              __html: section.shortDescription,
            }}
          />
        </p>
      )}

      {section.image && (
        <div>
          <Image
            className="alignnone size-medium wp-image-185"
            style={{
              verticalAlign: "baseline",
              display: "flex",
              margin: "10px auto",
              width: "auto",
            }}
            src={section.image}
            alt={section.title || "Sports Image"}
            width={500}
            height={325}
          />
        </div>
      )}
    </div>
  );
}
