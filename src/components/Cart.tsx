import "./Cart.css";

function Cart({
  bankName,
  firstName,
  lastName,
  card,
}: {
  bankName: string;
  firstName: string;
  lastName: string;
  card: string;
}) {
  return (
    <div className="cart">
      <div className="cart-left">
        <h3>{bankName}</h3>
        <div className="cart-name">
          <span>
            {firstName}{' '}
            {lastName}
          </span>
          <span>01/26</span>
        </div>
        <p>{card}</p>
      </div>
      <div className="cart-right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
        >
          <g clipPath="url(#clip0_3316_34535)">
            <path
              d="M15.143 1.28572C17.0237 4.54328 18.0139 8.23851 18.0139 12C18.0139 15.7615 17.0237 19.4567 15.143 22.7143M10.4287 3.64286C11.8957 6.18376 12.668 9.06604 12.668 12C12.668 14.934 11.8957 17.8163 10.4287 20.3571M5.92871 5.80715C6.98945 7.66396 7.54789 9.77024 7.54789 11.9143C7.54789 14.0583 6.98945 16.1646 5.92871 18.0214M1.42871 8.14286C2.19318 9.29984 2.59847 10.6362 2.59847 12C2.59847 13.3638 2.19318 14.7002 1.42871 15.8571"
              stroke="white"
              strokeWidth="2.57143"
              strokeLinecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3316_34535">
              <rect width="20" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="32"
          viewBox="0 0 45 32"
          fill="none"
        >
          <rect
            x="0.702637"
            y="0.708862"
            width="43.3249"
            height="30.5823"
            rx="3.82278"
            fill="white"
            fillOpacity="0.1"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M28.1979 24.1935C32.9699 24.1935 36.8383 20.3711 36.8383 15.6559C36.8383 10.9408 32.9699 7.11836 28.1979 7.11836C26.0592 7.11836 24.102 7.88615 22.5932 9.15799C21.0844 7.88615 19.1272 7.11836 16.9885 7.11836C12.2166 7.11836 8.34814 10.9408 8.34814 15.6559C8.34814 20.3711 12.2166 24.1935 16.9885 24.1935C19.1272 24.1935 21.0844 23.4257 22.5932 22.1538C24.102 23.4257 26.0592 24.1935 28.1979 24.1935Z"
            fill="#ED0006"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.5933 22.1541C24.4511 20.5881 25.6292 18.258 25.6292 15.6559C25.6292 13.0539 24.4511 10.7237 22.5933 9.15777C24.102 7.88606 26.0591 7.11836 28.1977 7.11836C32.9697 7.11836 36.8381 10.9408 36.8381 15.6559C36.8381 20.3711 32.9697 24.1935 28.1977 24.1935C26.0591 24.1935 24.102 23.4258 22.5933 22.1541Z"
            fill="#F9A000"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.5933 22.1538C24.451 20.5879 25.629 18.2578 25.629 15.6559C25.629 13.0539 24.451 10.7239 22.5933 9.15791C20.7356 10.7239 19.5576 13.0539 19.5576 15.6559C19.5576 18.2578 20.7356 20.5879 22.5933 22.1538Z"
            fill="#FF5E00"
          />
        </svg>
      </div>
    </div>
  );
}

export default Cart;
