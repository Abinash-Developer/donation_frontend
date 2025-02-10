const Signin = () => {
  return (
    <>
      <section className="login-sec">
        <div className="container">
          <div className="login-wrapper">
            <h3>Sign in</h3>
            <form>
              <div className="apply-btn">
                <div className="btn-play">
                  <a href="">
                    <img src="img/google.png" alt="" />
                    Continue with Google
                  </a>
                </div>
                <div className="btn-play">
                  <a href="">
                    <img src="img/fb.png" alt="" />
                    Continue with Facebook
                  </a>
                </div>
                <div className="btn-play">
                  <a href="">
                    <img src="img/apple.png" alt="" />
                    Continue with Apple
                  </a>
                </div>
                <div className="checkbox_box">
                   <input type="checkbox" id="html" />
                   <label htmlFor="html">Check , If you want to sign in as a Charity Owner</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Signin;
