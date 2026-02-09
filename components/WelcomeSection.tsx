interface Section {
  title?: string;
  shortDescription?: string;
}

interface WelcomeSectionProps {
  section?: Section;
}

// Helper: remove HTML tags
const stripHtml = (html?: string) =>
  html ? html.replace(/<[^>]*>/g, "").trim() : "";

const WelcomeSection = ({ section }: WelcomeSectionProps) => {
  if (!section) return null;

  const title = stripHtml(section.title);
  const description = stripHtml(section.shortDescription);

  return (
    <div className="mid_con">
      <div className="site_title">
        <h2>{title}</h2>
      </div>

      <div className="wel_info">
        <p></p>

        <p>{description}</p>

        <p></p>

        <div className="orange_line"></div>
      </div>
    </div>
  );
};

export default WelcomeSection;
