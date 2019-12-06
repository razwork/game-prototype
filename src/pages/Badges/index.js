import React from "react";
import { Card, CardContent, Profile } from "../../components/Card";
import { Badges } from "../../components/Badges";

export function DisplayBadges(props) {
  return (
    <div className="profile-page">
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "300px",
          background: "#d00086",
          top: "0",
          left: "0",
          zIndex: "0"
        }}
      ></div>

      <Card question>
        <CardContent addClass="-left small">
          <Profile
            profile="https://www.biography.com/.image/t_share/MTIwNjA4NjMzOTc0MTk1NzI0/john-smith-9486928-1-402.jpg"
            description="John Smith"
          />
        </CardContent>
        <CardContent addClass="-right">
          <div style={{ display: "flex" }}>
            <span>
              <h3 style={{ marginBottom: "4px" }}>John Smith</h3>
              <p>
                <small>Board Chair at Freegle</small>
                <br />
                <small>London, UK</small>
              </p>
            </span>
            <a href="/badges" className="btn btn-primary push-right">
              Message
            </a>
          </div>
          <CardContent addClass="-">
            <p style={{ fontSize: "16px", color: "#777" }}>
              I'm an experienced CEO and chair, with particular expertise in
              leadership, strategy, managing change, business planning, finance,
              income generation, HR and governance. I hold an MSc in Corporate
              Management and qualifications in finance &amp; accounting, and
              fundraising, and am an experienced facilitator and leadership
              coach
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                textAlign: "center"
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "2em"
                  }}
                >
                  13
                </span>
                <br />
                <span>Comments</span>
              </div>
              <div>
                <span
                  style={{
                    fontSize: "2em"
                  }}
                >
                  2
                </span>
                <br />
                <span>Posts</span>
              </div>
              <div
                style={{
                  flexBasis: "50%"
                }}
              >
                <Badges />
                <br />
                <span>Badges</span>
              </div>
            </div>
          </CardContent>
        </CardContent>
      </Card>
      <h4 className="text-center">Recent Activity</h4>
      <hr style={{ borderTop: "1px solid #e2e2e2", marginBottom: "20px" }} />
      <p className="text-center">
        <small>Replied to</small>
      </p>
      <CardContent addClass=" flex-column">
        <CardContent addClass="-header vertical-align">
          <h4 style={{ marginBottom: "-16px" }}>
            Volunteer Managers for mentoring
          </h4>
        </CardContent>
        <CardContent addClass="-content">
          <p>
            The Association of Volunteer Managers hosted a seminar at our Annual
            Conference this year - I will put a call out to their members to see
            if anyone is interested in being a mentor for you.
          </p>
          <CardContent addClass="-footer">
            <small>19 hours ago</small>
          </CardContent>
        </CardContent>
      </CardContent>
      <hr style={{ borderTop: "1px solid #e2e2e2", marginBottom: "20px" }} />
      <p className="text-center">
        <small>Replied to</small>
      </p>
      <CardContent addClass=" flex-column">
        <CardContent addClass="-header vertical-align">
          <h4 style={{ marginBottom: "-16px" }}>
            Help/advice greatly appreciated
          </h4>
        </CardContent>
        <CardContent addClass="-content">
          <p>
            Hi Emma, Spend most time on the objects, as the Charity Commission
            gets quite excited about these
          </p>
          <CardContent addClass="-footer">
            <small>1 day ago</small>
          </CardContent>
        </CardContent>
      </CardContent>
    </div>
  );
}
