import Image from "next/image";

export default function LibraryPage() {
  return (
    <div className="inner_con">
      <p>
        <span style={{ fontSize: "large", fontFamily: "andale mono, times" }}>
          The school has a llbrary with more than 6000 volumes of text and
          reference books and also a Reading Room-foi teachers and students. A
          goo-d number of leading periodlcals , magazines and news paper are
          subscribed by school the library is open to all students of the school
          during school hours.The Library issues one book at a time for seven
          days. The loan of books may be renewed at the discreation of the
          librarian.For books which are lost, damaged or disfigured fines are to
          be paid or replacement is made by the borrower.
        </span>

        <Image
          style={{
            verticalAlign: "bottom",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src="/images/library.jpeg"
          alt=""
          width="500"
          height="375"
        />
      </p>
    </div>
  );
}
