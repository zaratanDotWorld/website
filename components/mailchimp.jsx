export default function ({ text, placeholder, tags }) {
    return (
      <div id="mc_embed_signup">
        <form
          action="https://world.us18.list-manage.com/subscribe/post?u=7176b8b238db3ff30396bf211&amp;id=f82230a866"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <input
              type="email"
              defaultValue=""
              name="EMAIL"
              className="email"
              id="mce-EMAIL"
              placeholder={placeholder}
              style={{textAlign: "center"}}
              required>
            </input>
            <div style={{display: "none"}}>
                <input type="hidden" name="tags" value={tags}></input>
            </div>
            <br></br>
            <br></br>
            {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
            <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
              <input type="text" name="b_7176b8b238db3ff30396bf211_f82230a866" tabIndex="-1" defaultValue=""></input>
            </div>
            <div className="clear">
              <input type="submit" value={text} name="subscribe" id="mc-embedded-subscribe" className="button"></input>
            </div>
          </div>
        </form>
      </div>
    )
}
