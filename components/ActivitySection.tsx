import Image from "next/image";

export default function ActivitySection() {
  return (
    <div className="activity">
      <div className="site_title">
        <h2>Activity</h2>
      </div>

      <ul className="activity_slider slick-initialized slick-slider">
        <div className="slick-list draggable">
          <div
            className="slick-track"
            style={{
              opacity: 1,
              width: "210px",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          >
            <div
              className="slick-slide slick-current slick-active"
              data-slick-index="0"
              aria-hidden="false"
              style={{ width: "210px" }}
            >
              <div>
                <li style={{ width: "100%", display: "inline-block" }}>
                  <Image
                    src="/images/DSCN1198.jpg"
                    alt="Activity"
                    width={78}
                    height={81}
                  />
                </li>
              </div>
            </div>
          </div>
        </div>
      </ul>
    </div>
  );
}
