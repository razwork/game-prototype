import React, { Component } from "react";
import { Card, CardContent, Profile, Username } from "../../components/Card";
import { ModalCongrats, Modal } from "../../components/Modal/Modal";
import Editor from "../../assets/editor.png";

export class Question extends Component {
  state = {
    show: false,
    id: "Mark as helpful"
  };
  toggleModal = e => {
    this.setState({
      show: !this.state.show
    });
  };
  toggleCongrats = e => {
    this.setState({
      congrats: !this.state.congrats
    });
  };
  toggleReply = e => {
    this.setState({
      reply: !this.state.reply
    });
    document.getElementById("6").classList.toggle("hidden");
  };
  toggleAll = e => {
    this.setState({
      congrats: !this.state.congrats,
      show: !this.state.show,
      buttonChange: !this.state.disappear,
      buttonText: "Most helpful answer 👏"
    });
    document.getElementById("1").innerText = "Most helpful answer 👏";
    document.getElementById("1").classList.add("no-outline");
    document.getElementById("1").setAttribute("disabled", true);
    document.getElementById("2").innerText = "";
    document.getElementById("2").setAttribute("disabled", true);
    document.getElementById("2").classList.add("no-outline");
  };
  render(props) {
    return (
      <div id="question">
        <p className="offset">
          Logged in as <strong>Fiona Anderson</strong>
        </p>
        <h3 className="offset">Volunteer Managers for mentoring</h3>
        <Card question>
          <CardContent addClass="-left small">
            <Profile
              profile="https://pbs.twimg.com/profile_images/936639677121081344/_e5l_DEG.jpg"
              description="Shrek"
            />
          </CardContent>
          <CardContent addClass="-right">
            <Username name="Fiona Anderson" />
            <CardContent addClass="-content">
              <p>Hi all</p>
              <p>
                I am looking to connect with some Volunteer Managers to provide
                some informal mentoring/advice sessions to my four direct
                reports. Each of them runs a project location (London, Brighton,
                IoW and Bournemouth), and the roles are broad. Can anyone help?
              </p>
              <p>
                Many thanks
                <span role="img" aria-label="happy">
                  🙂
                </span>
              </p>

              <CardContent addClass="-footer">
                <small>Posted today</small>
                <button
                  id="0"
                  className="btn btn-primary push-right"
                  onClick={e => this.toggleReply()}
                >
                  Reply
                </button>
              </CardContent>
            </CardContent>
          </CardContent>
        </Card>

        <div id="6" className="hidden">
          <CardContent addClass=" flex-column overflow-hidden">
            <img
              src={Editor}
              alt="controls"
              width="100%"
              style={{ marginTop: "10px" }}
            />
            <textarea
              style={{
                margin: "10px 20px",
                border: "1px solid #d5d5d5",
                borderRadius: "8px",
                maxWidth: "540px",
                height: "300px",
                padding: "10px",
                fontSize: "18px"
              }}
            >
              Compose your reply like an artist!
            </textarea>
            <CardContent addClass="-content">
              <CardContent addClass="-footer flex-column">
                <button id="5" className="btn push-right">
                  Post
                </button>
              </CardContent>
            </CardContent>
          </CardContent>
        </div>

        <CardContent addClass=" flex-column">
          <CardContent addClass="-header vertical-align">
            <Username name="John Smith" />
            <button
              id="1"
              className="btn push-right"
              onClick={e => this.toggleModal()}
            >
              Mark as helpful
            </button>
          </CardContent>
          <CardContent addClass="-content">
            <p>Hi Sarah</p>
            <p>
              I can definitely help you with this and more than happy to provide
              some mentoring for your team.
            </p>
            <CardContent addClass="-footer">
              <small>Replied today</small>
            </CardContent>
          </CardContent>
        </CardContent>

        <CardContent addClass=" flex-column">
          <CardContent addClass="-header vertical-align">
            <Username name="Donald Trumpet" />
            <button
              id="2"
              className="btn push-right"
              onClick={e => this.toggleModal()}
            >
              Mark as helpful
            </button>
          </CardContent>
          <CardContent addClass="-content">
            <p>
              The Association of Volunteer Managers hosted a seminar at our
              Annual Conference this year - I will put a call out to their
              members to see if anyone is interested in being a mentor for you.
            </p>
            <CardContent addClass="-footer">
              <small>Replied today</small>
            </CardContent>
          </CardContent>
        </CardContent>

        <Modal show={this.state.show} onClose={this.toggleModal}>
          <h4>
            Are you sure you want to mark this as the most helpful answer?
          </h4>
          <p>
            Let your CC companion know they helped you. Helpful answers cannot
            be reverted. If you are unsure, you can wait for more replies to
            trickle in. Blah blah blah.
          </p>
          <button
            type="button"
            className="btn"
            onClick={e => this.toggleModal()}
          >
            Cancel
          </button>
          <button
            type="button "
            className="btn btn-primary"
            onClick={e => this.toggleCongrats()}
          >
            Yes, mark as most helpful!
          </button>
        </Modal>
        <ModalCongrats
          image="https://i.pinimg.com/originals/17/44/07/174407e82fabcd61f257ef2e52a6b48a.jpg"
          alt="Helpful answer"
          congrats={this.state.congrats}
          onClose={this.toggleModal}
        >
          <h3>
            <span role="img" aria-label="congrats">
              🙌
            </span>
            You've given John Smith the most helpful answer!!!!!!
          </h3>
          <button
            type="button "
            className="btn btn-primary"
            onClick={e => this.toggleAll()}
          >
            Done
          </button>
        </ModalCongrats>
      </div>
    );
  }
}
