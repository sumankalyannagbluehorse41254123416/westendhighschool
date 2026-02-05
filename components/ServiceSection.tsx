import Image from "next/image";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <div className="service_section03">
      <div className="row">
        {/* LEFT SIDE */}
        <div className="col-lg-7 col-md-7">
          <div className="row">
            {/* Transport */}
            <div className="col-lg-6 col-md-6">
              <Link href="/infrastructure/transport">
                <div className="service_box">
                  <div className="icon_img">
                    <Image
                      src="/images/bus02.png"
                      alt="Transport Icon"
                      width={60}
                      height={60}
                    />
                  </div>

                  <h3>Transport</h3>

                  <div className="serv_img">
                    <Image
                      src="/images/transport_thmb1.jpg"
                      alt="Transport"
                      width={300}
                      height={200}
                    />
                  </div>

                  <p>
                    Students can avail the school transport subject to the
                    availability of seats....
                  </p>
                </div>
              </Link>
            </div>

            {/* Hostel */}
            <div className="col-lg-6 col-md-6">
              <Link href="/infrastructure/hostel">
                <div className="service_box">
                  <div className="icon_img">
                    <Image
                      src="/images/service_img02.png"
                      alt="Hostel Icon"
                      width={60}
                      height={60}
                    />
                  </div>

                  <h3>Hostel Facilities</h3>

                  <div className="serv_img">
                    <Image
                      src="/images/hostel_thmb1.jpg"
                      alt="Hostel"
                      width={300}
                      height={200}
                    />
                  </div>

                  <p>
                    WestEnd High School aims to provide the best possible
                    environment for students who need to board away from
                    home....
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-5 col-md-5">
          <div className="news_box">
            <h3>NEWS TODAY</h3>
            <ul>
              <li>
                <Link
                  href="/news_today/admission-is-going-on-2018-2019/"
                  style={{ color: "#333333" }}
                >
                  Admission is going on 2020 -2021
                </Link>
              </li>

              <li>
                <Link
                  href="/news_today/post-for-assistant-teachers/"
                  style={{ color: "#333333" }}
                >
                  Post for Assistant Teachers
                </Link>
              </li>

              <li>
                <Link
                  href="/news_today/admission-is-going-on-for-nursery-to-class-11/"
                  style={{ color: "#333333" }}
                >
                  Admission is going on for Nursery to class-11
                </Link>
              </li>

              <li>
                <Link
                  href="/news_today/time-table-for-annual-examination-2015-16/"
                  style={{ color: "#333333" }}
                >
                  Time Table for Annual Examination 2015-16
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
