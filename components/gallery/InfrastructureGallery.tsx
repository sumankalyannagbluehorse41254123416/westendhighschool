import Image from "next/image";

/* ---------------- Types ---------------- */

interface SubSection {
  image?: string;
  title?: string;
}

interface Section {
  subsections?: SubSection[];
}

interface Props {
  section?: Section;
}

export default function InfrastructureGallery({ section }: Props) {
  const imageStyle = {
    float: "left" as const,
    padding: "1%",
    border: "1px solid #ccc",
    margin: ".5%",
    boxShadow: "3px 3px 9px 0px #ccc",
    width: "100%",
    objectFit: "cover" as const,
  };

  if (!section?.subsections) return null;

  return (
    <div
      className="inner_con gallery_box"
      style={{ marginBottom: "1%", display: "grid" }}
    >
      {section.subsections.map((item, index) =>
        item.image ? (
          <div className="flickr_badge_image" key={index}>
            <a href={item.image} target="_blank">
              <Image
                src={item.image}
                alt={item.title || `gallery-${index + 1}`}
                width={175}
                height={150}
                style={imageStyle}
              />
            </a>
          </div>
        ) : null
      )}

      <div className="clear"></div>
    </div>
  );
}
