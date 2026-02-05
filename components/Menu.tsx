import Link from "next/link";

export default function Menu() {
  return (
    
      <div className="menu_bar">
        <div className="sb_menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about-us/">
                About Us
              </Link>
              <ul>
                <li>
                  <Link href="/about-us/school-anthem/">
                    School Anthem
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/about-mission/">
                    About Mission
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/general-info/">
                    General Info
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/why-choose-us/">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/about-society/">
                    About Society
                  </Link>
                </li>
                <li>
                  <Link href="/about-us/principal-message/">
                    Principal Message
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/academics/">
                Academics
              </Link>
              <ul>
                <li>
                  <Link href="/academics/syllabus/">
                    Syllabus
                  </Link>
                </li>
                <li>
                  <Link href="/academics/exam-schedule/">
                    Exam Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/academics/subject/">
                    Subject
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/activities/">
                Activities
              </Link>
              <ul>
                <li>
                  <Link href="/activities/art/">
                    Art
                  </Link>
                </li>
                <li>
                  <Link href="/activities/sports/">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link href="/activities/clay-modelling/">
                    Clay Modelling
                  </Link>
                </li>
                <li>
                  <Link href="/activities/yoga-classes/">
                    Yoga Classes
                  </Link>
                </li>
                <li>
                  <Link href="/activities/dramatics/">
                    Dramatics
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/infrastructure/">
                Infrastructure
              </Link>
              <ul>
                <li>
                  <Link href="/infrastructure/library/">
                    Library
                  </Link>
                </li>
                <li>
                  <Link href="/infrastructure/play-ground/">
                    Play Ground
                  </Link>
                </li>
                <li>
                  <Link href="/infrastructure/labs/">
                    Labs
                  </Link>
                </li>
                <li>
                  <Link href="/infrastructure/hostel/">
                    Hostel
                  </Link>
                </li>
                <li>
                  <Link href="/infrastructure/transport/">
                    Transport
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/gallery/">
                Gallery
              </Link>
            </li>

            <li>
              <Link href="/staff/">
                Our Team
              </Link>
            </li>

            <li>
              <Link href="/contact-us/">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="clear"></div>
        </div>
      </div>
    
  );
}
