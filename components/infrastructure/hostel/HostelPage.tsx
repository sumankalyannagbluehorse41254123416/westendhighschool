
import Image from "next/image";

export default function HostelContent() {
  return (
    <div>
      <table border={0} cellSpacing={0} cellPadding={0}>
        <tbody>
          <tr>
            <td className="para_textcont" align="left" valign="top">
              WestEnd High School aims to provide the best possible environment
              for students who needs to board away from home. Hostel facility
              are offered to ensure the Megacity holistic educational advantage
              is available to students staying beyond Kolkata. Boarding
              facilities are exclusively provided for bonafied students of
              WestEnd High School Only.
            </td>
          </tr>

          <tr>
            <td></td>
          </tr>
          

          <tr>
            <td className="paratext_header" align="left" valign="top">
              Facilities at WestEnd High School Hostel
            </td>
          </tr>

          <tr>
            <td></td>
          </tr>

          <tr>
            <td align="left" valign="top">
              <table border={0} cellSpacing={0} cellPadding={0}>
                <tbody>
                  {[
                    "Enriching academic, sporting and cultural opportunities",
                    "24 X 7 supervision by experienced and caring staff",
                    "Nutritious well balanced meals prepared and served in hygienic condition",
                    "Pollution free environment in the midst of nature",
                    "Comfortable, safe and secure air conditioned accommodation",
                    "Centrally air conditioned dormitories with house masters for continuous supervision",
                    "Teacher in-charge stationed at each floor to ensure personal discipline and care",
                    "Air conditioned dining hall, recreation room, gymnasium and barber shop",
                    "Multimedia room and infirmary",
                  ].map((item, index) => (
                    <tr key={index}>
                      <td align="left" valign="middle" width="20">
                        <Image
                          src="/wp-content/uploads/2018/02/bulet_round.gif"
                          alt=""
                          width="20"
                          height="5"
                        />
                      </td>
                      <td
                        className="para_textcont"
                        align="left"
                        valign="top"
                      >
                        {item}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>

          <tr>
            <td></td>
          </tr>

          <tr>
            <td className="para_textcont" align="left" valign="top">
              The hostel will cater to 300 boarders – from class 3 onwards. The
              hostel also contains a modern laundry room and a fully equipped
              kitchen.
              <br />
              <br />
              Genuine care and concern is ensures for the well being of all the
              students through experienced staff used to dealing with young
              ones.
              <br />
              <br />
              Hostel superintendent is the overall in-charge for boarding
              facilities.
              <br />
              <br />
              For Fee structure and others pls. refer our Admission Link .
              <br />
              <br />
              <span className="para_textcontbold">
                For further details you can send your query at
              </span>
              <br />
              <span className="para_textcontbold">
                Contact Numbers :
              </span>{" "}
              <strong>(03221) 255191/255642</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
