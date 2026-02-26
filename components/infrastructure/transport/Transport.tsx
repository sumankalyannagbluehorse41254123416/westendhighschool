interface Section {
  title?: string;
  description?: string;
  subsections?: Section[];
}

interface Props {
  section?: Section;
}

export default function Transport({ section }: Props) {
  // 🔥 Clean unwanted tags if CMS sends <p> <br> &nbsp;
  const cleanText = (text?: string) => {
    if (!text) return "";

    return text
      .replace(/<\/?p>/g, "")
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
        {/* Main Ordered List */}
        <ol style={{ paddingLeft: "20px" }}>
          {section?.subsections?.map((rule, index) => (
            <li key={index}>
              {cleanText(rule.description)}

              {/* ✅ Nested UL if sub-subsections exist */}
              {rule.subsections && rule.subsections.length > 0 && (
                <ul
                  style={{
                    paddingLeft: "20px",
                    listStyleType: "disc",
                  }}
                >
                  {rule.subsections.map((subRule, subIndex) => (
                    <li key={subIndex}>
                      {cleanText(subRule.description)}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
