import Image from "next/image";

export default function WelcomeAndServiceSection() {
  return (
    <div className="prime_section padd">
      {/* ===== Welcome Section ===== */}
      <div className="mid_con">
        <div className="site_title">
          <h2>Welcome</h2>
        </div>

        <div className="wel_info">
          <p>
            Apart from the Academic Excellence, West End High School bears the
            vision of inculcating in the students the right moral values so that
            they grow up to be able citizens of tomorrow. We make every effort
            to ensure that our students are global citizens with an Indian
            heart. As the medium of instruction is English, considerable care
            and caution is being taken to help the students develop the skills
            of learning English correctly in real life situations. Perfection
            is what we seek to import to our children who in their formative
            stage would feel encouraged to learn with a passion. In this era of
            careerism and cut throat competition in various professional
            spheres both communicative and creative English have a wider
            acceptability in modern times.
          </p>

          <div className="orange_line"></div>
        </div>
      </div>

      {/* ===== Service + News Section ===== */}
      <div className="service_section03">
        <div className="row">
          <div className="col-lg-7 col-md-7">
            <div className="row">

              {/* Transport */}
              <div className="col-lg-6 col-md-6">
                <a href="/infrastructure/transport">
                  <div className="service_box">
                    <div
                      className="icon_img"
                      style={{ position: "relative", width: "60px", height: "60px" }}
                    >
                      <Image
                        src="/images/bus02.png"
                        alt="Transport Icon"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    <h3>Transport</h3>

                    <div
                      className="serv_img"
                      style={{ position: "relative", width: "100%", height: "180px" }}
                    >
                      <Image
                        src="/images/transport_thmb1.jpg"
                        alt="Transport"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <p>
                      Students can avail the school transport subject to the
                      availability of seats....
                    </p>
                  </div>
                </a>
              </div>

              {/* Hostel */}
              <div className="col-lg-6 col-md-6">
                <a href="/infrastructure/hostel">
                  <div className="service_box">
                    <div
                      className="icon_img"
                      style={{ position: "relative", width: "60px", height: "60px" }}
                    >
                      <Image
                        src="/images/service_img02.png"
                        alt="Hostel Icon"
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>

                    <h3>Hostel Facilities</h3>

                    <div
                      className="serv_img"
                      style={{ position: "relative", width: "100%", height: "180px" }}
                    >
                      <Image
                        src="/images/hostel_thmb1.jpg"
                        alt="Hostel"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>

                    <p>
                      WestEnd High School aims to provide the best possible
                      environment for students who need to board away from
                      home....
                    </p>
                  </div>
                </a>
              </div>

            </div>
          </div>

          {/* News */}
          <div className="col-lg-5 col-md-5">
            <div className="news_box">
              <h3>NEWS TODAY</h3>
              <ul>
                <li>
                  <a href="/news_today/admission-is-going-on-2018-2019/" style={{ color: "#333" }}>
                    Admission is going on 2020 -2021
                  </a>
                </li>
                <li>
                  <a href="/news_today/post-for-assistant-teachers/" style={{ color: "#333" }}>
                    Post for Assistant Teachers
                  </a>
                </li>
                <li>
                  <a href="/news_today/admission-is-going-on-for-nursery-to-class-11/" style={{ color: "#333" }}>
                    Admission is going on for Nursery to class-11
                  </a>
                </li>
                <li>
                  <a href="/news_today/time-table-for-annual-examination-2015-16/" style={{ color: "#333" }}>
                    Time Table for Annual Examination 2015-16
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
