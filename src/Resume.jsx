export function Resume(props) {
  return (
    <>
      <div className={props.resumeToggle ? "" : "modalToggledOff"}>
        <div className="resumeContainer" onClick={props.toggleResume}>
          <div className="resumeModal">
            Hello world! I am a 22 year old software engineering student at
            Saint Leo University with an interest in full stack development and
            embedded systems programming. I think the best thing you can do as a
            builder is making something functional that people have fun
            interacting with.
          </div>
        </div>
      </div>
    </>
  );
}
