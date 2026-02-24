"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { handleSubmitForm } from "@/services/handleSubmitform";

/* ================= TYPES ================= */

interface FormField {
  id?: string;
  type?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  name: string;
}

interface Props {
  form?: { id?: string };
  fields?: FormField[];
}

/* ================= COMPONENT ================= */

export default function ContactPage({ form, fields = [] }: Props) {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState<"success" | "error">("success");
  
  // Create a ref for the form element
  const formRef = useRef<HTMLFormElement>(null);

  const formId = form?.id?.toString() || "199";

  // Function to handle phone input - only allow numbers
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    // Remove any non-digit characters
    input.value = input.value.replace(/\D/g, '');
    
    // Limit to 10 digits
    if (input.value.length > 10) {
      input.value = input.value.slice(0, 10);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setMsg("");
    setMsgType("success");

    const fd = new FormData(e.currentTarget);
    const payload: Record<string, string> = {};

    fd.forEach((v, k) => {
      payload[k] = String(v).trim();
    });

    // Log the form data to browser console
    console.log("📝 Form Submission Data:", {
      formId: formId,
      timestamp: new Date().toISOString(),
      payload: payload,
      fields: fields.map(f => ({ name: f.name, label: f.label, type: f.type }))
    });

    /* ===== REQUIRED VALIDATION ===== */
    for (const key in payload) {
      if (!payload[key]) {
        setMsg("All fields are required.");
        setMsgType("error");
        setLoading(false);
        console.log("❌ Validation Error: Missing required field", key);
        return;
      }
    }

    /* ===== EMAIL VALIDATION ===== */
    const emailKey = Object.keys(payload).find((k) =>
      k.toLowerCase().includes("email")
    );

    if (emailKey) {
      const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-zA-Z]{2,}$/;
      if (!gmailRegex.test(payload[emailKey])) {
        setMsg("Please enter a valid Gmail address.");
        setMsgType("error");
        setLoading(false);
        console.log("❌ Validation Error: Invalid Gmail address", payload[emailKey]);
        return;
      }
    }

    /* ===== PHONE VALIDATION ===== */
    const phoneKey = Object.keys(payload).find((k) =>
      k.toLowerCase().includes("phone")
    );

    if (phoneKey) {
      const phoneValue = payload[phoneKey];
      
      // Check if it contains only numbers
      if (!/^\d+$/.test(phoneValue)) {
        setMsg("Phone number must contain only digits (0-9).");
        setMsgType("error");
        setLoading(false);
        console.log("❌ Validation Error: Phone contains non-digits", phoneValue);
        return;
      }
      
      // Check if it's exactly 10 digits
      if (phoneValue.length !== 10) {
        setMsg("Please enter a valid 10-digit phone number.");
        setMsgType("error");
        setLoading(false);
        console.log("❌ Validation Error: Phone number must be exactly 10 digits", phoneValue);
        return;
      }
    }

    try {
      // Call the API
      console.log("🚀 Sending form data to API:", payload);
      const result = await handleSubmitForm(window.location.host, payload);
      
      // Log API response
      console.log("✅ API Response:", result);
      
      // If we get here, the API call was successful (no error thrown)
      setMsg("Form submitted successfully.");
      setMsgType("success");
      
      // Reset the form using the ref instead of e.currentTarget
      if (formRef.current) {
        formRef.current.reset();
        console.log("🔄 Form reset successfully");
      }
      
      // Optional: Clear success message after 5 seconds
      setTimeout(() => {
        setMsg("");
      }, 5000);
      
    } catch (err: any) {
      // Handle the error thrown by the API
      console.error("❌ Form submission error:", err);
      
      // Extract error message from the error object
      let errorMessage = "Form submission failed. Please try again.";
      
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
        console.log("📋 API Error Message:", err.response.data.message);
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setMsg(errorMessage);
      setMsgType("error");
    } finally {
      setLoading(false);
      console.log("🏁 Form submission completed");
    }
  };

  return (
    <div className="innermiddle">
      <div className="clear"></div>

      <div className="contact_header">
        <div className="header_img ">
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
          </div>

          {/* ================= FORM SECTION ================= */}

          <div className="con_form">
            <div className="enquiry">
              <Image
                src="/images/head.png"
                alt="head"
                width={300}
                height={80}
              />

              <div className="inner_enq">
                <p className="addmi">Contact Enquiry</p>

                <form
                  ref={formRef}
                  className="addmission"
                  id={`wpforms-form-${formId}`}
                  onSubmit={onSubmit}
                >
                  {/* DYNAMIC FIELDS */}
                  {fields.map((field, index) => (
                    <div key={index} className="mobile">
                      <div className="label_name">
                        <label>{field.label}</label>
                      </div>

                      <div className="input_area">
                        {field.type === "textarea" ? (
                          <textarea
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                            rows={4}
                          />
                        ) : field.type === "select" ? (
                          <select
                            name={field.name}
                            required={field.required}
                          >
                            <option value="">Select...</option>
                            {field.options?.map((opt, i) => (
                              <option key={i} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={field.type || "text"}
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                            {...(field.name.toLowerCase().includes("phone") && {
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                              onInput: handlePhoneInput,
                              maxLength: 10,
                              title: "Please enter exactly 10 digits"
                            })}
                          />
                        )}
                      </div>

                      <div className="clear"></div>
                    </div>
                  ))}

                  {/* BUTTON SECTION */}
                  <div className="al_btn">
                    <button
                      id="btn_enq"
                      type="submit"
                      disabled={loading}
                      style={{
                        opacity: loading ? 0.7 : 1,
                        cursor: loading ? "not-allowed" : "pointer"
                      }}
                    >
                      {loading ? "Submitting..." : "Enquiry"}
                    </button>

                    <input type="reset" id="btn_rst" value="Reset" />
                  </div>

                  {/* MESSAGE DISPLAY */}
                  {msg && (
                    <div 
                      style={{ 
                        marginTop: 15,
                        padding: "10px 15px",
                        borderRadius: "4px",
                        backgroundColor: msgType === "success" ? "#d4edda" : "#f8d7da",
                        color: msgType === "success" ? "#155724" : "#721c24",
                        border: `1px solid ${msgType === "success" ? "#c3e6cb" : "#f5c6cb"}`,
                        textAlign: "center"
                      }}
                    >
                      {msg}
                    </div>
                  )}
                </form>
              </div>

              <div className="clear"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}