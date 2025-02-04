import React from "react";
import "../../Components/Register/Signup.css";
import ButtonGoogle from "../../Components/Button/ButtonGoogle";
import { useNavigate } from "react-router-dom";
import { selectIsLoading } from "../../redux/slice/screenLoadingSlice";
import { useSelector } from "react-redux";
import LoadingAnimation from "../../Components/LoadingAnimation/LoadingAnimation";
import { MdKey } from "react-icons/md";

function SignupPage({ type }) {
  const navigate = useNavigate(); // Replacing useHistory with useNavigate

  const loading = useSelector(selectIsLoading);

  if (loading) {
    return (
      <div className="signup-container">
        <LoadingAnimation />
      </div>
    );
  }

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="left-section-signup" style={{ height: "100vh" }}>
        <div className="logo">
        <svg
            width="157"
            height="48"
            viewBox="0 0 157 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.8205 47.0335C45.7977 47.0276 45.7749 47.0158 45.7521 47.0099C45.2443 46.8155 44.8906 46.3266 44.8335 45.7729L43.6125 34.2752H28.476C27.4205 34.2752 26.3878 34.5756 25.4863 35.1352L4.98093 47.9288C4.9524 47.9464 4.92387 47.9582 4.88964 47.9641L4.76412 47.9818C2.65311 48.2527 1.59189 45.4313 3.32635 44.159L22.5994 30.0107C23.6206 29.2626 24.2711 28.0905 24.3795 26.8064C24.5563 24.6211 24.4822 20.9928 22.8561 16.9815C22.8561 16.9815 22.7078 15.4795 20.4541 15.4029H13.3052C12.5407 15.4029 11.7875 15.2439 11.0858 14.9376L1.00423 10.5494C-0.159683 10.0428 -0.37649 8.34645 0.696135 7.6514C0.724662 7.63373 0.758895 7.61017 0.787422 7.5925C1.11834 7.40401 1.52343 7.37456 1.88287 7.50415L11.3539 10.944C11.7818 11.0972 12.2326 11.1738 12.689 11.1561L31.7395 10.573C31.7395 10.573 44.6338 7.33922 52.0623 7.33922C52.0623 7.33922 53.5172 8.54083 52.4275 10.1194L33.3427 14.5547C33.3427 14.5547 35.1628 21.4699 34.1415 28.8444L45.501 28.9976C45.501 28.9976 47.6121 28.921 48.0514 31.6305L48.8102 44.6185C48.9129 46.2913 47.3439 47.5871 45.8205 47.0335Z"
              fill="white"
            />
            <path
              d="M27.3349 9.58929C29.8998 9.58929 31.9791 7.44265 31.9791 4.79464C31.9791 2.14664 29.8998 0 27.3349 0C24.7699 0 22.6907 2.14664 22.6907 4.79464C22.6907 7.44265 24.7699 9.58929 27.3349 9.58929Z"
              fill="white"
            />
            <path
              d="M69.0104 23.8152H73.8645V30.6582C73.1597 30.905 72.4334 31.0917 71.6857 31.2182C70.9379 31.3447 70.0983 31.408 69.1667 31.408C67.7816 31.408 66.614 31.1233 65.664 30.5538C64.714 29.9844 63.9908 29.1681 63.4944 28.1051C63.0041 27.0421 62.7589 25.764 62.7589 24.2707C62.7589 22.8344 63.0317 21.5816 63.5771 20.5123C64.1226 19.4429 64.9163 18.614 65.9582 18.0256C67.0001 17.4371 68.2565 17.1429 69.7275 17.1429C70.463 17.1429 71.1678 17.2157 71.842 17.3612C72.5223 17.5067 73.1474 17.7092 73.7174 17.9686L73.0371 19.6106C72.559 19.3891 72.0289 19.2025 71.4466 19.0506C70.8705 18.8924 70.273 18.8133 69.6539 18.8133C68.6243 18.8133 67.7387 19.038 66.9971 19.4872C66.2616 19.9365 65.6947 20.5692 65.2963 21.3854C64.904 22.2017 64.7079 23.1698 64.7079 24.2897C64.7079 25.3843 64.8734 26.3398 65.2044 27.156C65.5353 27.9722 66.0532 28.6082 66.758 29.0637C67.4629 29.5193 68.3699 29.7471 69.4793 29.7471C70.037 29.7471 70.512 29.7154 70.9042 29.6522C71.3026 29.5889 71.6673 29.513 71.9982 29.4244V25.5141H69.0104V23.8152Z"
              fill="white"
            />
            <path
              d="M80.7503 20.5787C82.0006 20.5787 82.9353 20.8666 83.5543 21.4424C84.1733 22.0118 84.4828 22.9135 84.4828 24.1473V31.2182H83.159L82.8004 29.6996H82.7269C82.445 30.0793 82.1508 30.3956 81.8443 30.6487C81.5379 30.9018 81.1824 31.0917 80.7779 31.2182C80.3795 31.3447 79.8923 31.408 79.3162 31.408C78.7033 31.408 78.1578 31.2941 77.6797 31.0663C77.2017 30.8386 76.8248 30.4969 76.549 30.0413C76.2793 29.5794 76.1444 28.9941 76.1444 28.2855C76.1444 27.2225 76.5398 26.4157 77.3304 25.8652C78.121 25.3147 79.3192 25.0142 80.925 24.9636L82.6717 24.8876V24.2992C82.6717 23.483 82.494 22.9072 82.1385 22.5718C81.7892 22.2365 81.2988 22.0688 80.6676 22.0688C80.1466 22.0688 79.6471 22.1479 79.1691 22.3061C78.691 22.4579 78.2313 22.6414 77.7901 22.8566L77.2017 21.4709C77.6797 21.2178 78.2221 21.0058 78.8289 20.8349C79.4418 20.6641 80.0823 20.5787 80.7503 20.5787ZM82.6533 26.1405L81.2376 26.2069C80.0669 26.2512 79.2426 26.4537 78.7645 26.8143C78.2926 27.1687 78.0567 27.6654 78.0567 28.3044C78.0567 28.8612 78.2191 29.2694 78.5439 29.5288C78.8687 29.7882 79.2978 29.9179 79.831 29.9179C80.6523 29.9179 81.3264 29.6806 81.8535 29.2061C82.3867 28.7252 82.6533 28.0165 82.6533 27.0801V26.1405Z"
              fill="white"
            />
            <path
              d="M91.102 29.861C91.3656 29.861 91.6322 29.8388 91.9019 29.7945C92.1715 29.7439 92.4044 29.6806 92.6005 29.6047V31.0663C92.3922 31.1613 92.1133 31.2403 91.7639 31.3036C91.4207 31.3732 91.0683 31.408 90.7067 31.408C90.1551 31.408 89.6556 31.3099 89.2082 31.1138C88.7608 30.9176 88.4022 30.5823 88.1326 30.1077C87.869 29.6332 87.7373 28.9751 87.7373 28.1336V22.2301H86.3307V21.3475L87.8016 20.6451L88.4543 18.3862H89.5943V20.759H92.527V22.2301H89.5943V28.1051C89.5943 28.6936 89.7292 29.1333 89.9988 29.4244C90.2746 29.7154 90.6424 29.861 91.102 29.861Z"
              fill="white"
            />
            <path
              d="M98.6222 20.5692C99.5048 20.5692 100.262 20.7653 100.893 21.1576C101.524 21.5436 102.008 22.0909 102.346 22.7996C102.683 23.5083 102.851 24.3435 102.851 25.3053V26.3872H95.9745C95.9929 27.5072 96.2718 28.3677 96.8111 28.9688C97.3504 29.5636 98.1074 29.861 99.0819 29.861C99.7254 29.861 100.298 29.7977 100.801 29.6712C101.304 29.5446 101.825 29.3579 102.364 29.1112V30.7152C101.855 30.9556 101.343 31.1296 100.829 31.2372C100.32 31.3511 99.7101 31.408 98.9991 31.408C98.0185 31.408 97.1574 31.2055 96.4158 30.8006C95.6803 30.3956 95.1073 29.7977 94.6966 29.0068C94.286 28.2095 94.0807 27.2288 94.0807 26.0645C94.0807 24.913 94.2676 23.929 94.6415 23.1128C95.0153 22.2902 95.5424 21.6607 96.2227 21.2241C96.903 20.7875 97.7029 20.5692 98.6222 20.5692ZM98.613 22.0498C97.8653 22.0498 97.2646 22.3029 96.8111 22.8091C96.3576 23.309 96.091 24.0271 96.0113 24.9636H100.994C100.988 24.3878 100.899 23.8816 100.727 23.445C100.556 23.0084 100.295 22.6667 99.946 22.42C99.6028 22.1732 99.1585 22.0498 98.613 22.0498Z"
              fill="white"
            />
            <path
              d="M110.353 20.5692C111.585 20.5692 112.569 21.0216 113.304 21.9264C114.046 22.8249 114.416 24.1695 114.416 25.9601C114.416 27.1497 114.245 28.1494 113.902 28.9593C113.564 29.7629 113.086 30.3735 112.467 30.7911C111.854 31.2024 111.134 31.408 110.307 31.408C109.786 31.408 109.329 31.3384 108.937 31.1992C108.545 31.0537 108.208 30.8639 107.926 30.6298C107.65 30.3893 107.417 30.1331 107.227 29.861H107.108C107.132 30.1077 107.157 30.3956 107.181 30.7247C107.212 31.0474 107.227 31.3384 107.227 31.5978V35.8688H105.37V20.759H106.887L107.135 22.2586H107.227C107.417 21.9486 107.65 21.667 107.926 21.4139C108.208 21.1545 108.548 20.9488 108.946 20.797C109.345 20.6451 109.814 20.5692 110.353 20.5692ZM109.93 22.1447C109.28 22.1447 108.759 22.2776 108.367 22.5433C107.981 22.8028 107.696 23.1919 107.512 23.7107C107.334 24.2296 107.239 24.8813 107.227 25.6659V25.9696C107.227 26.8048 107.313 27.5103 107.485 28.0861C107.656 28.6556 107.941 29.0922 108.34 29.3959C108.738 29.6933 109.274 29.842 109.948 29.842C110.525 29.842 111.003 29.6806 111.383 29.3579C111.769 29.0353 112.054 28.5797 112.238 27.9912C112.428 27.4028 112.523 26.7194 112.523 25.9412C112.523 24.7579 112.311 23.831 111.888 23.1603C111.465 22.4832 110.813 22.1447 109.93 22.1447Z"
              fill="white"
            />
            <path
              d="M120.87 20.5787C122.12 20.5787 123.055 20.8666 123.674 21.4424C124.293 22.0118 124.603 22.9135 124.603 24.1473V31.2182H123.279L122.92 29.6996H122.847C122.565 30.0793 122.271 30.3956 121.964 30.6487C121.658 30.9018 121.302 31.0917 120.898 31.2182C120.499 31.3447 120.012 31.408 119.436 31.408C118.823 31.408 118.278 31.2941 117.8 31.0663C117.321 30.8386 116.945 30.4969 116.669 30.0413C116.399 29.5794 116.264 28.9941 116.264 28.2855C116.264 27.2225 116.66 26.4157 117.45 25.8652C118.241 25.3147 119.439 25.0142 121.045 24.9636L122.792 24.8876V24.2992C122.792 23.483 122.614 22.9072 122.258 22.5718C121.909 22.2365 121.419 22.0688 120.787 22.0688C120.266 22.0688 119.767 22.1479 119.289 22.3061C118.811 22.4579 118.351 22.6414 117.91 22.8566L117.321 21.4709C117.8 21.2178 118.342 21.0058 118.949 20.8349C119.562 20.6641 120.202 20.5787 120.87 20.5787ZM122.773 26.1405L121.357 26.2069C120.187 26.2512 119.362 26.4537 118.884 26.8143C118.412 27.1687 118.176 27.6654 118.176 28.3044C118.176 28.8612 118.339 29.2694 118.664 29.5288C118.989 29.7882 119.418 29.9179 119.951 29.9179C120.772 29.9179 121.446 29.6806 121.973 29.2061C122.507 28.7252 122.773 28.0165 122.773 27.0801V26.1405Z"
              fill="white"
            />
            <path
              d="M130.018 25.8652L126.579 20.759H128.684L131.176 24.6124L133.667 20.759H135.754L132.307 25.8652L135.938 31.2182H133.833L131.176 27.1275L128.501 31.2182H126.414L130.018 25.8652Z"
              fill="white"
            />
            <path
              d="M151.309 31.2182L149.82 27.0896H144.552L143.081 31.2182H141.123L146.253 17.2853H148.184L153.286 31.2182H151.309ZM149.296 25.4002L147.88 21.3095C147.837 21.1703 147.77 20.9615 147.678 20.6831C147.592 20.4047 147.503 20.1168 147.411 19.8194C147.326 19.522 147.255 19.2752 147.2 19.0791C147.139 19.3385 147.068 19.6138 146.988 19.9048C146.909 20.1896 146.829 20.4585 146.749 20.7116C146.676 20.9583 146.615 21.1576 146.566 21.3095L145.131 25.4002H149.296Z"
              fill="white"
            />
            <path
              d="M155.115 31.2182V17.3422H157V31.2182H155.115Z"
              fill="white"
            />
          </svg>
        </div>
        <h1 className="headline">
          Smarter Emails. Happier Team. Happier Customers.
        </h1>
        <p className="subheadline" style={{ textAlign: "center" }}>
          Let AI Handle Your Email Overload.
        </p>
        <div className="centered-content">
          <div className="features">
            <div className="feature">
              <p className="logos">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
                </svg>
              </p>
              <p className="text">AI-Powered Drafting</p>
            </div>
            <div className="feature">
              <p className="logos">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
                </svg>
              </p>
              <p className="text">Data-Driven Accuracy</p>
            </div>
            <div className="feature">
              <p className="logos">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="white" />
                </svg>
              </p>
              <p className="text">Continuous Learning</p>
            </div>
            <div className="feature">
              <p className="logos">
                <svg
                  width="25"
                  height="27"
                  viewBox="0 0 25 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.48716 4.17315C9.21093 2.05511 12.1375 1.99096 12.9956 3.98072L13.0682 4.17437L14.0449 7.0307C14.2688 7.68576 14.6305 8.2852 15.1057 8.78858C15.5809 9.29197 16.1585 9.68759 16.7996 9.94876L17.0622 10.0468L19.9186 11.0223C22.0366 11.7461 22.1007 14.6726 20.1122 15.5307L19.9186 15.6033L17.0622 16.5801C16.4069 16.8037 15.8073 17.1654 15.3037 17.6406C14.8001 18.1158 14.4043 18.6935 14.143 19.3347L14.0449 19.5962L13.0694 22.4537C12.3456 24.5717 9.4191 24.6359 8.5622 22.6474L8.48716 22.4537L7.51165 19.5974C7.28796 18.9421 6.92631 18.3424 6.45111 17.8388C5.9759 17.3352 5.3982 16.9394 4.75698 16.6781L4.49556 16.5801L1.63922 15.6045C-0.480037 14.8808 -0.544183 11.9542 1.44557 11.0973L1.63922 11.0223L4.49556 10.0468C5.15062 9.82296 5.75006 9.46124 6.25344 8.98604C6.75682 8.51085 7.15245 7.93322 7.41362 7.29213L7.51165 7.0307L8.48716 4.17315ZM20.4608 2.18688e-07C20.6872 -2.856e-07 20.9091 0.0635151 21.1012 0.183328C21.2933 0.30314 21.448 0.474445 21.5476 0.677775L21.6057 0.819381L22.0293 2.06116L23.2723 2.48477C23.4992 2.56186 23.6982 2.70458 23.8439 2.89484C23.9896 3.0851 24.0755 3.31434 24.0908 3.5535C24.1061 3.79266 24.0501 4.03098 23.9298 4.23825C23.8095 4.44553 23.6304 4.61242 23.4151 4.71779L23.2723 4.77589L22.0306 5.1995L21.6069 6.44249C21.5297 6.66934 21.3869 6.86815 21.1966 7.01375C21.0062 7.15934 20.777 7.24516 20.5378 7.26032C20.2987 7.27549 20.0604 7.21932 19.8532 7.09894C19.646 6.97855 19.4792 6.79937 19.3739 6.5841L19.3158 6.44249L18.8922 5.20071L17.6492 4.7771C17.4223 4.70001 17.2234 4.55729 17.0777 4.36703C16.932 4.17677 16.846 3.94753 16.8307 3.70837C16.8154 3.46921 16.8715 3.23089 16.9918 3.02362C17.112 2.81634 17.2912 2.64945 17.5064 2.54408L17.6492 2.48598L18.891 2.06237L19.3146 0.819381C19.3962 0.580254 19.5506 0.372665 19.7562 0.225722C19.9617 0.078778 20.2081 -0.00015163 20.4608 2.18688e-07Z"
                    fill="black"
                  />
                </svg>
              </p>
              <div className="text">Enhanced Customer Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="right-box">
          <h2 style={{ textAlign: "center" }}>
            {type === "signup" ? <>Sign Up</> : <>Welcome Back</>}
          </h2>

          <ButtonGoogle />

          <button className="social-button microsoft-button">
            <img
              src="https://ik.imagekit.io/i3divn77k/Gatepax/png-transparent-microsoft-logo-icon-microsoft-icon-angle-text-rectangle-thumbnail-removebg-preview%201.png?updatedAt=1733298301043"
              alt=""
              srcset=""
            />
            Continue with Microsoft
          </button>
          <button className="social-button microsoft-button">
            <MdKey />
            Continue with SSO
          </button>
          <hr className="divider" />
          <form className="signup-form">
            <input type="email" placeholder="Email ID" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="signup-button">
              {type === "signup" ? <>Signup</> : <>Login</>}
            </button>
          </form>
          {type === "signup" && (
            <p className="terms">
              <div>
                By signing up, you agree to the{" "}
                <a href="/terms">Terms and Conditions</a> and{" "}
                <a href="/privacy">Privacy Policy</a>.
              </div>
            </p>
          )}
          <p className="login-link">
            {type === "signup" ? (
              <div style={{ textAlign: "center" }}>
                Already have an account ?{" "}
                <span
                  style={{
                    color: "#1a73e8",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/login"); // Using navigate instead of history.push
                  }}
                >
                  Login
                </span>
              </div>
            ) : (
              <>
                Dont have an account ?{" "}
                <span
                  style={{
                    color: "#1a73e8",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/signup"); // Using navigate instead of history.push
                  }}
                >
                  Sign up
                </span>
              </>
            )}
          </p>
          {type === "signup" && (
            <p className="terms">
              This site is protected by reCAPTCHA and the Google Privacy
              Policy and Terms of ServiceOpens a new window apply.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
