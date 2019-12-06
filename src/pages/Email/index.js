import React from "react";

export function Email() {
  return (
    <div style={{ background: "#fbfbfb", borderRadius: "8px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          height: "30px",
          width: "100%",
          background: "#d6d6d6",
          borderTopLeftRadius: "8px",
          borderTopRightRadius: "8px",
          paddingRight: "16px"
        }}
      >
        <span
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "tomato",
            marginLeft: "4px"
          }}
        ></span>
        <span
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "white",
            marginLeft: "4px"
          }}
        ></span>
        <span
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "50%",
            background: "yellow",
            marginLeft: "4px"
          }}
        ></span>
      </div>
      <div style={{ padding: "20px" }}>
        <p
          className="text-center"
          style={{
            marginTop: "16px",
            fontSize: "16px",
            textTransform: "uppercase",
            marginBottom: "10px"
          }}
        >
          John Smith's <strong>Gmail account</strong>
        </p>
        <p
          className="text-center"
          style={{
            marginTop: "16px",
            fontSize: "14px",
            textTransform: "uppercase",
            padding: "10px",
            color: "white",
            fontWeight: "700",
            borderRadius: "8px",
            background: "tomato"
          }}
        >
          1 new mail in your inbox!
        </p>

        <div
          className="box flex-column"
          style={{
            padding: "30px",
            textAlign: "center",
            alignItems: "center"
          }}
        >
          <h3 style={{ color: "navy" }}>Hi John!</h3>
          <p>
            Fiona has marked your response to her post as a Helpful Answer!
            Thanks so much for your support to Fiona and the whole community.
          </p>
          <p>
            We’re delighted to present you with a Helpful Answer badge to show
            off on your profile – you deserve it!
          </p>

          <span
            className="badge"
            role="img"
            aria-label="badge"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              border: "2px solid white",
              boxShadow: "0 0 2px 0 rgba(0,0,0, .5)",
              background: "navy",
              fontSize: "70px",
              marginBottom: "30px"
            }}
          >
            🤝
          </span>
          <h4>THE HELPERS BADGE</h4>
          <p>Thanks for being such a great member of our community.</p>
          <p>
            From the CharityConnect Team
            <br />
            P.S. Keep up the great work and earn even more badges!
          </p>
        </div>
      </div>
    </div>
  );
}
