import Image from "next/image";

export default function InfrastructureGallery() {
  const imageStyle = {
    float: "left" as const,
    padding: "1%",
    border: "1px solid #ccc",
    margin: ".5%",
    boxShadow: "3px 3px 9px 0px #ccc",
    width:"100%",
    objectFit: "cover" as const,
  };

  return (
    <div className="inner_con gallery_box" style={{ marginBottom: "1%", display:"grid" }}>
      <div className="flickr_badge_image">
        <a href="/images/305-DSCN0706.jpg" target="_blank">
          <Image
            src="/images/305-DSCN0706.jpg"
            alt="gallery-1"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a href="/images/309-DSCN2925.jpg" target="_blank">
          <Image
            src="/images/309-DSCN2925.jpg"
            alt="gallery-2"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a href="/images/310-DSCN3243.jpg" target="_blank">
          <Image
            src="/images/310-DSCN3243.jpg"
            alt="gallery-3"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/311-DSCN4774.jpg"
          target="_blank"
        >
          <Image
            src="/images/311-DSCN4774.jpg"
            alt="4"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/312-DSCN4758.jpg"
          target="_blank"
        >
          <Image
            src="/images/312-DSCN4758.jpg"
            alt="5"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/313-DSCN5881.jpg"
          target="_blank"
        >
          <Image
            src="/images/313-DSCN5881.jpg"
            alt="6"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/317-DSCN4481.jpg"
          target="_blank"
        >
          <Image
            src="/images/317-DSCN4481.jpg"
            alt="7"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/321-DSCN4388.jpg"
          target="_blank"
        >
          <Image
            src="/images/321-DSCN4388.jpg"
            alt="8"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/322-IMG_20160126_082905.jpg"
          target="_blank"
        >
          <Image
            src="/images/322-IMG_20160126_082905.jpg"
            alt="9"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/323-DSCN0528.jpg"
          target="_blank"
        >
          <Image
            src="/images/323-DSCN0528.jpg"
            alt="10"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/324-DSCN1410.jpg"
          target="_blank"
        >
          <Image
            src="/images/324-DSCN1410.jpg"
            alt="11"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/325-DSCN0867.jpg"
          target="_blank"
        >
          <Image
            src="/images/325-DSCN0867.jpg"
            alt="12"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/326-DSCN0731.jpg"
          target="_blank"
        >
          <Image
            src="/images/326-DSCN0731.jpg"
            alt="13"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/328-DSCN3270.jpg"
          target="_blank"
        >
          <Image
            src="/images/328-DSCN3270.jpg"
            alt="14"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/IMG_3606-min.jpg"
          target="_blank"
        >
          <Image
            src="/images/IMG_3606-min.jpg"
            alt="15"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/IMG_3440-min.jpg"
          target="_blank"
        >
          <Image
            src="/images/IMG_3440-min.jpg"
            alt="16"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/IMG_3318-min.jpg"
          target="_blank"
        >
          <Image
            src="/images/IMG_3318-min.jpg"
            alt="17"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/IMG_3184-min.jpg"
          target="_blank"
        >
          <Image
            src="/images/IMG_3184-min.jpg"
            alt="18"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/IMG_3168-min.jpg"
          target="_blank"
        >
          <Image
            src="/images/IMG_3168-min.jpg"
            alt="19"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      <div className="flickr_badge_image">
        <a
          href="/images/111-min.jpg"
          target="_blank"
        >
          <Image
            src="/images/111-min.jpg"
            alt="20"
            width={175}
            height={150}
            style={imageStyle}
          />
        </a>
      </div>

      {/* Continue same pattern for all remaining images */}

      <div className="clear"></div>
    </div>
  );
}
