interface Section {
  title?: string;
  shortDescription?: string;
  description?: string;
  subsections?: Section[];
}

interface Props {
  mainSection?: Section;
  bottomSection?: Section;
}

export default function HostelContent({
  mainSection,
  bottomSection,
}: Props) {

  const cleanText = (text?: string) => {
    if (!text) return "";

    return text
      .replace(/<\/?p>/g, "")
      .replace(/<\/?ul>/g, "")
      .replace(/<\/?li>/g, "")
      .replace(/<br\s*\/?>/g, "")
      .replace(/&nbsp;/g, " ")
      .trim();
  };

  return (
    <div className="inner_con">
      <div
        style={{
          textAlign: "justify",
          fontSize: "large",
          fontFamily: '"Book Antiqua", Palatino, serif',
        }}
      >
        {mainSection?.shortDescription && (
          <p>{cleanText(mainSection.shortDescription)}</p>
        )}

        {mainSection?.title && (
          <p>
            <strong>{cleanText(mainSection.title)}</strong>
          </p>
        )}

        {mainSection?.subsections?.length ? (
          <ul style={{ paddingLeft: "40px", listStyleType: "disc" }}>
            {mainSection.subsections.map((item, index) =>
              item.description ? (
                <li key={index}>
                  {cleanText(item.description)}
                </li>
              ) : null
            )}
          </ul>
        ) : null}

        {bottomSection?.subsections?.map((item, index) =>
          item.description ? (
            <p key={index}>
              {cleanText(item.description)}
            </p>
          ) : null
        )}
      </div>
    </div>
  );
}
