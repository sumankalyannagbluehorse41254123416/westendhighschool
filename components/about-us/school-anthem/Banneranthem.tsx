import Image from "next/image";

const Banneranthem = () => {
  return (
    <div className="banner_wrap">
      <ul className="banner_slide slick-initialized slick-slider">
        <div className="slick-list draggable" style={{ height: "732px" }}>
          <div
            className="slick-track"
            style={{
              opacity: 1,
              width: "690px",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <div
              className="slick-slide slick-current slick-active"
              data-slick-index="0"
              aria-hidden="false"
              style={{ width: "690px" }}
            >
              <div>
                <li
                  className="clone"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                    float: "left",
                    display: "inline-block",
                  }}
                >
                  {/* Image container (required for next/image) */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "732px",
                    }}
                  >
                    <Image
                      src="/images/DSCN1198.jpg"
                      alt=""
                      fill
                      draggable={false}
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </div>

                  <div className="banner_caption">
                    <h2>LEARN TO LIVE</h2>
                    <h3>LEARN TO GIVE</h3>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Banneranthem;
