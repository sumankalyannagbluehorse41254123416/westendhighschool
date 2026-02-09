import Image from "next/image";

export default function GeneralBanner() {
  return (
    <div id="banner" role="banner">
      <div className="flexslider">
        <div className="banner_wrap">
          <ul className="banner_slide slick-initialized slick-slider">
            <div
              className="slick-list draggable"
              style={{ height: "732px" }}
            >
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
                      <Image
                        src="/images/DSCN1198.jpg"
                        alt=""
                        width={690}
                        height={732}
                        style={{ width: "100%" }}
                        draggable={false}
                      />

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

        <ol className="flex-control-nav flex-control-paging">
          <li>
            <a className="">1</a>
          </li>
          <li>
            <a className="">2</a>
          </li>
          <li>
            <a className="flex-active">3</a>
          </li>
          <li>
            <a className="">4</a>
          </li>
        </ol>

        <ul className="flex-direction-nav">
          <li>
            <a className="flex-prev" href="#"></a>
          </li>
          <li>
            <a className="flex-next" href="#"></a>
          </li>
        </ul>
      </div>
    </div>
  );
}
