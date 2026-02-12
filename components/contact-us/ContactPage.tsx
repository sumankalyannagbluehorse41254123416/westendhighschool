import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="innermiddle">
      <div className="clear"></div>

      <div
        id="kausik"
        style={{ marginTop: "13px", color: "#ff0000", marginLeft: "450px" }}
      ></div>

      {/* Header Section */}
      <div className="header_img">
        {/* Removed empty src image because it causes error */}
        <p className="wlcm_txt">Contact Us</p>
      </div>

      <div className="inner_con">
        <div className="lib_tb">
          <div id="googleMap map-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.625561459744!2d86.99450721457958!3d22.4431148852495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1d7a33e282b543%3A0xed0d6a62de7a133!2sWest+End+High+School!5e0!3m2!1sen!2sin!4v1519257954706"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <br />
          <br />
          <h3 className="con_add"></h3>
        </div>

        <div className="con_form">
          <div className="enquiry">
            {/* FIXED: Added width & height */}
            <Image
              src="/images/head.png"
              alt="head"
              width={300}
              height={80}
            />

            <div className="inner_enq">
              <p className="addmi">Contact Enquiry</p>

              <form
                className="addmission"
                id="contact"
                method="post"
                action=""
              >
                {/* Name */}
                <div className="name">
                  <div className="label_name">
                    <label className="sname">Name*</label>
                  </div>
                  <div className="input_area">
                    <input type="text" id="name" name="name" />
                    <span id="name_error" style={{ color: "#DD0000" }}></span>
                  </div>
                  <div className="clear"></div>
                </div>

                {/* Mobile */}
                <div className="mobile">
                  <div className="label_name">
                    <label className="mno">Mobile No*</label>
                  </div>
                  <div className="input_area">
                    <input type="text" id="mobile" name="mobile" />
                    <span id="mobile_error" style={{ color: "#DD0000" }}></span>
                  </div>
                  <div className="clear"></div>
                </div>

                {/* Email */}
                <div className="label_name">
                  <label className="mno">Email*</label>
                </div>
                <div className="input_area">
                  <input type="text" id="email" name="email" />
                  <span id="email_error" style={{ color: "#DD0000" }}></span>
                </div>

                <div className="clear"></div>

                {/* Address */}
                <div className="mobile">
                  <div className="label_name">
                    <label className="mno321">Address</label>
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      cols={20}
                      name="addr"
                      id="addr"
                    ></textarea>
                    <span
                      id="address_error"
                      style={{ color: "#DD0000" }}
                    ></span>
                  </div>
                  <div className="clear"></div>
                </div>

                {/* Comments */}
                <div className="mobile">
                  <div className="label_name">
                    <label className="mno321">Comments</label>
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      cols={20}
                      name="comment"
                      id="comment"
                    ></textarea>
                    <span
                      id="comment_error"
                      style={{ color: "#DD0000" }}
                    ></span>
                  </div>

                  <div className="mobile cap">
                    <div id="RecaptchaField1"></div>
                  </div>

                  <div className="clear"></div>
                </div>

                {/* Buttons */}
                <div className="al_btn">
                  <button
                    id="btn_enq"
                    type="submit"
                    value="contact"
                    name="contact"
                  >
                    Enquiry
                  </button>

                  <input type="reset" id="btn_rst" value="Reset" />
                </div>
              </form>
            </div>

            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
