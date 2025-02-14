import { useGoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
const Signin = () => {
  const googleLogin = useGoogleLogin({
    onSuccess: tokenResponse => console.log(tokenResponse),
  });
  return (
    <>
      <section className="login-sec">
        <div className="container">
          <div className="login-wrapper">
            <h3>Sign in</h3>
            <form>
              <div className="apply-btn">
                <div className="btn-play">
                  <Link href="javascript:void(0)" onClick={()=>googleLogin()}>
                    <img src="img/google.png" alt="" />
                       Continue with Google
                  </Link>
                </div>
                <div className="btn-play">
                  <Link href="">
                    <img src="img/fb.png" alt="" />
                    Continue with Facebook
                  </Link>
                </div>
                <div className="btn-play">
                  <Link href="">
                    <img src="img/apple.png" alt="" />
                    Continue with Apple
                  </Link>
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
