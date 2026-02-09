import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="container">
      <div className="top clears top_header">
        {/* <div className="wlcm">
          <Image
            src="/images/logo.jfif"
            width={85}
            height={105}
            alt=""
            style={{
              height: "105px",
              width: "85px",
            }}
          />
        </div> */}

        <div
          id="mylogo"
          style={{
            fontSize: "50px",
            paddingTop: "16px",
            color: "#8b0000",
            textTransform: "uppercase",
          }}
        >
          West End High School
        </div>
      </div>
    </div>
  );
};

export default Header;
