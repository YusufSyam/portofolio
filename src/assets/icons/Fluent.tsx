export interface IFluentProps {
  size?: number;
  color?: IconColorScheme | string;
  color2?: IconColorScheme | string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export enum IconColorScheme {
  primaryText = "#334155",
  secondaryText = "#808fa4",
  primary = "#5f5af7",
  secondary = "#deddf1",
  error = "#ff2c56",
  background = "#ffffff",
  divider = "#b5c2d1"
}
export function IconLogoutOutline({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 -960 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M206.78-100.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-546.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h277.74v106H206.78v546.44h277.74v106H206.78Zm425.87-152.09L559-328.39 657.61-427H355.48v-106h302.13L559-631.61l73.65-75.52L859.22-480 632.65-252.87Z"
        fill={color}
      />
    </svg>
  );
}

export function StickerInventory({
  size = 24,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      className="hidden lg:block"
    >
      <g>
        <rect
          width={272}
          height={376}
          x={144}
          y={56}
          fill="#ffffff"
          rx={24}
          opacity={1}
          data-original="#0093b9"
          className=""
        />
        <path
          fill="#e3e4e2"
          d="M176 88h208v312H176z"
          opacity={1}
          data-original="#e3e4e2"
          className=""
        />
        <path
          fill="#ffc100"
          d="M336 88H224V56h32l-8-32h64l-8 32h32z"
          opacity={1}
          data-original="#57c3c1"
          className=""
        />
        <path
          fill="#ffc100"
          d="M320 488H32V232h144v128h144z"
          opacity={1}
          data-original="#f8bc1e"
          className=""
        />
        <path
          fill="#f9da62"
          d="M224 360h48v48h-48z"
          opacity={1}
          data-original="#f9da62"
          className=""
        />
        <path
          fill="#f5a922"
          d="M320 368h-12a12 12 0 0 0-12 12v20.305A63.7 63.7 0 0 1 232.305 464H196a12 12 0 0 0-12 12v12h136z"
          opacity={1}
          data-original="#f5a922"
          className=""
        />
        <path
          fill="#f9da62"
          d="M80 360h48v48H80z"
          opacity={1}
          data-original="#f9da62"
          className=""
        />
        <path
          fill="#f5a922"
          d="M176 368h-12a12 12 0 0 0-12 12v20.305A63.7 63.7 0 0 1 88.305 464H52a12 12 0 0 0-12 12v12h136z"
          opacity={1}
          data-original="#f5a922"
          className=""
        />
        <path
          fill="#f9da62"
          d="M80 232h48v48H80z"
          opacity={1}
          data-original="#f9da62"
          className=""
        />
        <path
          fill="#f5a922"
          d="M176 240h-12a12 12 0 0 0-12 12v20.305A63.7 63.7 0 0 1 88.305 336H52a12 12 0 0 0-12 12v12h136z"
          opacity={1}
          data-original="#f5a922"
          className=""
        />
        <path
          fill="#ffc100"
          d="m465.844 261.948-214.6 64.208L216 320l26.071-24.5 214.6-64.208a16 16 0 0 1 19.915 10.742 16 16 0 0 1-10.742 19.914z"
          opacity={1}
          data-original="#f8bc1e"
          className=""
        />
        <path
          d="M484.25 239.741a24 24 0 0 0-29.871-16.114l-214.6 64.207a8.016 8.016 0 0 0-3.185 1.835l-26.072 24.5a8 8 0 0 0 4.1 13.711l35.243 6.156a8.019 8.019 0 0 0 3.67-.216l174.128-52.1.754 16.475-55.33 16.554 4.586 15.33 61.314-18.346a8 8 0 0 0 5.7-8.029L443.464 277l24.673-7.382a24 24 0 0 0 16.113-29.872zm-233.49 78.21-17.622-3.078 13.036-12.251 36.512-10.922 4.586 15.328zm51.84-15.511-4.586-15.328 128.142-38.341.754 16.476zm165.7-52.023a7.952 7.952 0 0 1-4.748 3.867l-20.841 6.235-.754-16.475 17.009-5.089a8 8 0 0 1 9.334 11.462z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
        <path
          d="M320 352H184V232a8 8 0 0 0-8-8H32a8 8 0 0 0-8 8v256a8 8 0 0 0 8 8h288a8 8 0 0 0 8-8V360a8 8 0 0 0-8-8zm-88 16h32v32h-32zM88 240h32v32H88zm-48 0h32v40a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-40h32v112H40zm48 128h32v32H88zm-48 0h32v40a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-40h32v112H40zm272 112H184V368h32v40a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-40h32z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
        <path
          d="M280 448h16v16h-16zM136 448h16v16h-16zM136 320h16v16h-16zM152 80a16.019 16.019 0 0 1 16-16h48v16h-40a8 8 0 0 0-8 8v120h16V96h192v128h16V88a8 8 0 0 0-8-8h-40V64h48a16.019 16.019 0 0 1 16 16v136h16V80a32.036 32.036 0 0 0-32-32h-77.754l5.515-22.06A8 8 0 0 0 312 16h-64a8 8 0 0 0-7.761 9.94L245.754 48H168a32.036 32.036 0 0 0-32 32v128h16zm80-16h24a8 8 0 0 0 7.761-9.94L258.246 32h43.508l-5.515 22.06A8 8 0 0 0 304 64h24v16h-96zM408 408a16.019 16.019 0 0 1-16 16h-48v16h48a32.036 32.036 0 0 0 32-32v-72h-16z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
        <path
          d="M392 400v-56h-16v48h-32v16h40a8 8 0 0 0 8-8zM248 120a8 8 0 0 0-8-8h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8zm-16 24h-16v-16h16zM240 184h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32h-16v-16h16zM264 112h16v16h-16zM264 144h96v16h-96zM296 112h64v16h-64zM264 184h16v16h-16zM264 216h96v16h-96zM296 184h64v16h-64z"
          fill="#000000"
          opacity={1}
          data-original="#000000"
          className=""
        />
      </g>
    </svg>
  );
}

export function SearchFilled({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"
        fill={color}
      />
    </svg>
  );
}

export function IconRightArrow({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 -960 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="m600-200-42-42 208-208H80v-60h686L558-718l42-42 280 280-280 280Z"
        fill={color}
      />
    </svg>
  );
}

export function IconRightArrowNoTail({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 -960 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="m517.847-480-184-184L376-706.153 602.153-480 376-253.847 333.847-296l184-184Z"
        fill={color}
      />
    </svg>
  );
}

export function IconEditFilled({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 -960 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M772-603 602-771l56-56q23-23 56.5-23t56.5 23l56 56q23 23 24 55.5T829-660l-57 57Zm-58 59L290-120H120v-170l424-424 170 170Z"
        fill={color}
      />
    </svg>
  );
}

export function IconTrashFilled({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 -960 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z"
        fill={color}
      />
    </svg>
  );
}

export function IconReportFilled({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 -960 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Z"
        fill={color}
      />
    </svg>
  );
}

export function IconReportOutlined({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 -960 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240ZM330-120 120-330v-300l210-210h300l210 210v300L630-120H330Zm34-80h232l164-164v-232L596-760H364L200-596v232l164 164Zm116-280Z"
        fill={color}
      />
    </svg>
  );
}

export function IconInformationCircleFilled({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 -960 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M431.521-271.521h96.958V-520h-96.958v248.479ZM480-588.695q21.805 0 36.555-14.75T531.305-640q0-21.805-14.75-36.555T480-691.305q-21.805 0-36.555 14.75T428.695-640q0 21.805 14.75 36.555T480-588.695Zm0 527.913q-87.522 0-163.906-32.96-76.385-32.96-132.888-89.464-56.504-56.503-89.464-132.888Q60.782-392.478 60.782-480t32.96-163.906q32.96-76.385 89.464-132.888 56.503-56.504 132.888-89.464 76.384-32.96 163.906-32.96t163.906 32.96q76.385 32.96 132.888 89.464 56.504 56.503 89.464 132.888 32.96 76.384 32.96 163.906t-32.96 163.906q-32.96 76.385-89.464 132.888-56.503 56.504-132.888 89.464Q567.522-60.782 480-60.782Z"
        fill={color}
      />
    </svg>
  );
}

export function IconQuestionMarkCircleFilled({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 -960 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M476.304-240q23.261 0 39.74-16.478 16.478-16.479 16.478-39.819 0-23.341-16.478-39.457-16.479-16.116-39.74-16.116-23.261 0-39.739 16.116-16.478 16.116-16.478 39.457 0 23.34 16.478 39.819Q453.043-240 476.304-240Zm-42.217-154h85.304q0-30.739 7.783-50.304 7.783-19.566 39.956-50.305 24.305-23.739 39.022-48.118 14.718-24.379 14.718-58.613 0-58.095-39.87-88.943-39.87-30.847-95.87-30.847-59.26 0-97.587 32.826-38.326 32.826-53.456 78.217l78.435 29.957q6.13-19.13 22.217-39.565t47.565-20.435q25.217 0 38.391 14.674t13.174 32.282q0 17.174-11.152 33.826t-25.196 28.261q-41.739 37.869-52.587 59.848-10.847 21.978-10.847 77.239ZM480-60.782q-87.522 0-163.906-32.96-76.385-32.96-132.888-89.464-56.504-56.503-89.464-132.888Q60.782-392.478 60.782-480t32.96-163.906q32.96-76.385 89.464-132.888 56.503-56.504 132.888-89.464 76.384-32.96 163.906-32.96t163.906 32.96q76.385 32.96 132.888 89.464 56.504 56.503 89.464 132.888 32.96 76.384 32.96 163.906t-32.96 163.906q-32.96 76.385-89.464 132.888-56.503 56.504-132.888 89.464Q567.522-60.782 480-60.782Z"
        fill={color}
      />
    </svg>
  );
}

export function IconAddFilled({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M11.883 3.007 12 3a1 1 0 0 1 .993.883L13 4v7h7a1 1 0 0 1 .993.883L21 12a1 1 0 0 1-.883.993L20 13h-7v7a1 1 0 0 1-.883.993L12 21a1 1 0 0 1-.993-.883L11 20v-7H4a1 1 0 0 1-.993-.883L3 12a1 1 0 0 1 .883-.993L4 11h7V4a1 1 0 0 1 .883-.993L12 3l-.117.007Z"
        fill={color}
      />
    </svg>
  );
}

export const CloudUploadIcon: React.FC<IFluentProps> = ({
  size = 24,
  color = "black",
  ...props
}) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 28 26"
      fill="none"
      {...props}
    >
      <path
        d="M6.11602 6.33323C6.43161 4.56014 7.36112 2.95466 8.74166 1.79813C10.1222 0.641607 11.8657 0.0078125 13.6667 0.0078125C15.4676 0.0078125 17.2112 0.641607 18.5917 1.79813C19.9723 2.95466 20.9018 4.56014 21.2174 6.33323H21.3334C22.0959 6.33318 22.8497 6.49667 23.5437 6.81267C24.2378 7.12867 24.856 7.58984 25.3566 8.16506C25.8573 8.74029 26.2288 9.41619 26.446 10.1472C26.6633 10.8782 26.7213 11.6473 26.616 12.4026C26.009 11.6855 25.2899 11.0713 24.4867 10.5839C24.2609 9.92708 23.8357 9.35716 23.2704 8.95367C22.7051 8.55019 22.0279 8.33328 21.3334 8.33323H20.3254C20.0685 8.33354 19.8213 8.23499 19.6351 8.05799C19.449 7.881 19.338 7.63914 19.3254 7.38256C19.2515 5.93144 18.623 4.56415 17.5697 3.56319C16.5165 2.56223 15.119 2.00409 13.666 2.00409C12.213 2.00409 10.8155 2.56223 9.76231 3.56319C8.70908 4.56415 8.08058 5.93144 8.00669 7.38256C7.99403 7.63891 7.88329 7.88057 7.69739 8.05753C7.5115 8.23449 7.26468 8.3332 7.00802 8.33323H6.00002C5.11597 8.33323 4.26812 8.68442 3.643 9.30954C3.01788 9.93466 2.66669 10.7825 2.66669 11.6666C2.66669 12.5506 3.01788 13.3985 3.643 14.0236C4.26812 14.6487 5.11597 14.9999 6.00002 14.9999H11.8667C11.6287 15.6452 11.4689 16.3166 11.3907 16.9999H6.00002C4.58553 16.9999 3.22898 16.438 2.22878 15.4378C1.22859 14.4376 0.666687 13.0811 0.666687 11.6666C0.666687 10.2521 1.22859 8.89552 2.22878 7.89533C3.22898 6.89513 4.58553 6.33323 6.00002 6.33323H6.11602ZM27.3334 17.9999C27.3334 19.9448 26.5607 21.8101 25.1855 23.1853C23.8102 24.5606 21.9449 25.3332 20 25.3332C18.0551 25.3332 16.1898 24.5606 14.8146 23.1853C13.4393 21.8101 12.6667 19.9448 12.6667 17.9999C12.6667 16.055 13.4393 14.1897 14.8146 12.8144C16.1898 11.4392 18.0551 10.6666 20 10.6666C21.9449 10.6666 23.8102 11.4392 25.1855 12.8144C26.5607 14.1897 27.3334 16.055 27.3334 17.9999ZM19.3334 15.6092V21.9999C19.3334 22.1767 19.4036 22.3463 19.5286 22.4713C19.6536 22.5963 19.8232 22.6666 20 22.6666C20.1768 22.6666 20.3464 22.5963 20.4714 22.4713C20.5965 22.3463 20.6667 22.1767 20.6667 21.9999V15.6092L22.8614 17.8052C22.9865 17.9304 23.1563 18.0007 23.3334 18.0007C23.5104 18.0007 23.6802 17.9304 23.8054 17.8052C23.9305 17.68 24.0009 17.5103 24.0009 17.3332C24.0009 17.1562 23.9305 16.9864 23.8054 16.8612L20.472 13.5279C20.4101 13.4658 20.3365 13.4166 20.2555 13.3829C20.1745 13.3493 20.0877 13.332 20 13.332C19.9123 13.332 19.8255 13.3493 19.7445 13.3829C19.6635 13.4166 19.5899 13.4658 19.528 13.5279L16.1947 16.8612C16.0695 16.9864 15.9992 17.1562 15.9992 17.3332C15.9992 17.5103 16.0695 17.68 16.1947 17.8052C16.3199 17.9304 16.4897 18.0007 16.6667 18.0007C16.8437 18.0007 17.0135 17.9304 17.1387 17.8052L19.3334 15.6092Z"
        fill={color || "#94A3B8"}
      />
    </svg>
  );
};

export function DeleteOutline({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M12 1.75a3.25 3.25 0 0 1 3.245 3.066L15.25 5h5.25a.75.75 0 0 1 .102 1.493L20.5 6.5h-.796l-1.28 13.02a2.75 2.75 0 0 1-2.561 2.474l-.176.006H8.313a2.75 2.75 0 0 1-2.714-2.307l-.023-.174L4.295 6.5H3.5a.75.75 0 0 1-.743-.648L2.75 5.75a.75.75 0 0 1 .648-.743L3.5 5h5.25A3.25 3.25 0 0 1 12 1.75Zm6.197 4.75H5.802l1.267 12.872a1.25 1.25 0 0 0 1.117 1.122l.127.006h7.374c.6 0 1.109-.425 1.225-1.002l.02-.126L18.196 6.5ZM13.75 9.25a.75.75 0 0 1 .743.648L14.5 10v7a.75.75 0 0 1-1.493.102L13 17v-7a.75.75 0 0 1 .75-.75Zm-3.5 0a.75.75 0 0 1 .743.648L11 10v7a.75.75 0 0 1-1.493.102L9.5 17v-7a.75.75 0 0 1 .75-.75Zm1.75-6a1.75 1.75 0 0 0-1.744 1.606L10.25 5h3.5A1.75 1.75 0 0 0 12 3.25Z"
        fill={color}
      />
    </svg>
  );
}

export const PreviewIcon: React.FC<IFluentProps> = ({
  size = 24,
  color = "black",
  ...props
}) => {
  return (
    <svg
      width={size + "px"}
      height={size + "px"}
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <path
        d="M8.272 4.25C8.272 4.05109 8.35102 3.86032 8.49167 3.71967C8.63232 3.57902 8.82309 3.5 9.022 3.5H13.75C13.9489 3.5 14.1397 3.57902 14.2803 3.71967C14.421 3.86032 14.5 4.05109 14.5 4.25V8.979C14.5 9.17791 14.421 9.36868 14.2803 9.50933C14.1397 9.64998 13.9489 9.729 13.75 9.729C13.5511 9.729 13.3603 9.64998 13.2197 9.50933C13.079 9.36868 13 9.17791 13 8.979V6.06L7.78 11.28C7.71078 11.3516 7.628 11.4087 7.53647 11.448C7.44495 11.4872 7.34653 11.5079 7.24694 11.5087C7.14736 11.5095 7.04861 11.4905 6.95646 11.4527C6.8643 11.415 6.78059 11.3592 6.7102 11.2888C6.63982 11.2183 6.58417 11.1346 6.5465 11.0424C6.50883 10.9502 6.4899 10.8514 6.49081 10.7518C6.49173 10.6523 6.51246 10.5539 6.55181 10.4624C6.59116 10.3709 6.64834 10.2882 6.72 10.219L11.94 5H9.022C8.82309 5 8.63232 4.92098 8.49167 4.78033C8.35102 4.63968 8.272 4.44891 8.272 4.25V4.25ZM3.157 2.25C3.36859 1.5962 3.7819 1.02627 4.33761 0.62202C4.89331 0.217774 5.56282 1.19936e-05 6.25 0H14.75C15.612 0 16.4386 0.34241 17.0481 0.951903C17.6576 1.5614 18 2.38805 18 3.25V11.838C18.0001 12.4798 17.8102 13.1072 17.4543 13.6412C17.0984 14.1753 16.5924 14.592 16 14.839V14.975C16 16.025 15.47 16.82 14.691 17.319C13.941 17.799 12.974 18.005 11.998 17.999H11.996L7.919 17.995H4C2.843 17.995 1.836 17.633 1.11 16.95C0.383 16.264 0 15.31 0 14.25V5.5C0 4.635 0.216 3.817 0.734 3.204C1.268 2.571 2.044 2.25 2.956 2.25H3.156H3.157ZM3 3.75H2.956C2.412 3.75 2.085 3.929 1.88 4.171C1.66 4.433 1.5 4.865 1.5 5.5V14.25C1.5 14.94 1.742 15.484 2.14 15.858C2.54 16.235 3.157 16.495 4 16.495H7.92L12 16.5H12.004C12.792 16.504 13.449 16.334 13.882 16.056C14.254 15.818 14.464 15.506 14.496 15.088H6.25C5.38805 15.088 4.5614 14.7456 3.9519 14.1361C3.34241 13.5266 3 12.7 3 11.838V3.75ZM6.25 1.5C5.78587 1.5 5.34075 1.68437 5.01256 2.01256C4.68437 2.34075 4.5 2.78587 4.5 3.25V11.838C4.5 12.805 5.284 13.588 6.25 13.588H14.75C15.2141 13.588 15.6592 13.4036 15.9874 13.0754C16.3156 12.7472 16.5 12.3021 16.5 11.838V3.25C16.5 2.78587 16.3156 2.34075 15.9874 2.01256C15.6592 1.68437 15.2141 1.5 14.75 1.5H6.25Z"
        fill={color}
      />
    </svg>
  );
};


export function IconSearchOutlined({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 -960 960 960`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M783.522-110.913 529.848-364.587q-29.761 23.044-68.642 36.565-38.88 13.522-83.119 13.522-111.152 0-188.326-77.174Q112.587-468.848 112.587-580q0-111.152 77.174-188.326Q266.935-845.5 378.087-845.5q111.152 0 188.326 77.174Q643.587-691.152 643.587-580q0 44.478-13.522 83.12-13.521 38.641-36.565 68.163l253.913 254.152-63.891 63.652ZM378.087-405.5q72.848 0 123.674-50.826Q552.587-507.152 552.587-580q0-72.848-50.826-123.674Q450.935-754.5 378.087-754.5q-72.848 0-123.674 50.826Q203.587-652.848 203.587-580q0 72.848 50.826 123.674Q305.239-405.5 378.087-405.5Z"
        fill={color}
      />
    </svg>
  );
}


export function IconCalendarEmptyOutline({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V8.5Zm-1.75-4H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75Z"
        fill={color}
      />
    </svg>
  );
}


export function IconCalendarLtrOutline({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M17.75 3A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75V6.25A3.25 3.25 0 0 1 6.25 3h11.5Zm1.75 5.5h-15v9.25c0 .966.784 1.75 1.75 1.75h11.5a1.75 1.75 0 0 0 1.75-1.75V8.5Zm-11.75 6a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm-4.25-4a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm4.25 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Zm1.5-6H6.25A1.75 1.75 0 0 0 4.5 6.25V7h15v-.75a1.75 1.75 0 0 0-1.75-1.75Z"
        fill={color}
      />
    </svg>
  );
}

export function IconSendOutline({
  size = 24,
  color = 'black',
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size+`px`}
      height={size+`px`}
      viewBox={`0 -960 960 960`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className={className}
    >
      <path
      d='M112.59-152.35v-655.3L889.57-480 112.59-152.35ZM200-283.59 665.15-480 200-676.41v132.82L443.59-480 200-416.41v132.82Zm0 0v-392.82 392.82Z'
      fill={color}
      />
    </svg>
  );
}

export function IconReplyOutline({
  size = 24,
  color = 'black',
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size+`px`}
      height={size+`px`}
      viewBox={`0 -960 960 960`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className={className}
    >
      <path
      d='M757.13-191.87V-360q0-47.85-33.33-81.17-33.32-33.33-81.17-33.33H285.44L423.93-336l-64.41 63.65L111.87-520l247.65-247.65L423.93-704 285.44-565.5h357.19q85.15 0 145.33 60.17 60.17 60.18 60.17 145.33v168.13h-91Z'
      fill={color}
      />
    </svg>
  );
}

export function IconShareWindowsOutline({
  size = 24,
  color = 'black',
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size+`px`}
      height={size+`px`}
      viewBox={`0 -960 960 960`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className={className}
    >
      <path
      d='M280-360v-240q0-33 23.5-56.5T360-680h326L583-783l57-57 200 200-200 200-57-56 103-104H360v240h-80Zm-80 240q-33 0-56.5-23.5T120-200v-600h80v600h480v-160h80v160q0 33-23.5 56.5T680-120H200Z'
      fill={color}
      />
    </svg>
  );
}

export function IconLoginOutline({
  size = 24,
  color = 'black',
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size+`px`}
      height={size+`px`}
      viewBox={`0 -960 960 960`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className={className}
    >
      <path
      d='M475.48-100.78v-106h277.74v-546.44H475.48v-106h277.74q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v546.44q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H475.48Zm-97.52-152.09-73.66-75.52L402.91-427H100.78v-106h302.13l-98.61-98.61 73.66-75.52L604.52-480 377.96-252.87Z'
      fill={color}
      />
    </svg>
  );
}

export function IconInfoOutline({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M12 1.999c5.524 0 10.002 4.478 10.002 10.002 0 5.523-4.478 10.001-10.002 10.001-5.524 0-10.002-4.478-10.002-10.001C1.998 6.477 6.476 1.999 12 1.999Zm0 1.5a8.502 8.502 0 1 0 0 17.003A8.502 8.502 0 0 0 12 3.5Zm-.004 7a.75.75 0 0 1 .744.648l.007.102.003 5.502a.75.75 0 0 1-1.493.102l-.007-.101-.003-5.502a.75.75 0 0 1 .75-.75ZM12 7.003a.999.999 0 1 1 0 1.997.999.999 0 0 1 0-1.997Z"
        fill={color}
      />
    </svg>
  );
}

export function IconCloseOutline({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 12 13`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M0.396975 1.054L0.469975 0.970004C0.596963 0.842986 0.765317 0.765758 0.944426 0.752362C1.12353 0.738965 1.3015 0.79029 1.44597 0.897004L1.52997 0.970004L5.99997 5.439L10.47 0.969004C10.5392 0.897405 10.622 0.840308 10.7135 0.801045C10.805 0.761782 10.9034 0.741139 11.003 0.740321C11.1026 0.739503 11.2014 0.758526 11.2935 0.79628C11.3857 0.834034 11.4694 0.889763 11.5398 0.960215C11.6102 1.03067 11.6658 1.11443 11.7035 1.20662C11.7411 1.29881 11.7601 1.39758 11.7592 1.49716C11.7582 1.59675 11.7375 1.69515 11.6982 1.78664C11.6588 1.87812 11.6016 1.96085 11.53 2.03L7.06097 6.5L11.531 10.97C11.6578 11.0971 11.7349 11.2655 11.7481 11.4446C11.7613 11.6237 11.7098 11.8016 11.603 11.946L11.53 12.03C11.403 12.157 11.2346 12.2343 11.0555 12.2476C10.8764 12.261 10.6984 12.2097 10.554 12.103L10.47 12.03L5.99997 7.561L1.52997 12.031C1.38846 12.1676 1.19897 12.2431 1.00232 12.2413C0.805676 12.2395 0.617603 12.1605 0.478611 12.0214C0.33962 11.8823 0.260832 11.6941 0.259217 11.4975C0.257601 11.3008 0.333288 11.1114 0.469975 10.97L4.93897 6.5L0.468975 2.03C0.342107 1.90289 0.265063 1.73447 0.25185 1.55537C0.238638 1.37626 0.290133 1.19836 0.396975 1.054L0.469975 0.970004L0.396975 1.054Z"
        fill={color}
      />
    </svg>
  );
}

export function IconHeartFilled({
  size = 24,
  color = 'black',
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size+`px`}
      height={size+`px`}
      viewBox={`0 -960 960 960`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className={className}
    >
      <path
      d='m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z'
      fill={color}
      />
    </svg>
  );
}

export function IconHeartOutlined({
  size = 24,
  color = 'black',
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size+`px`}
      height={size+`px`}
      viewBox={`0 -960 960 960`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className={className}
    >
      <path
      d='m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z'
      fill={color}
      />
    </svg>
  );
}

export function IconExplosion({
  size = 24,
  color = 'black',
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size+`px`}
      height={size+`px`}
      viewBox={`0 -960 960 960`}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={onClick}
      className={className}
    >
      <path
      d='m480-294.08 55.12-55.12h75.68v-75.68L665.92-480l-55.12-55.12v-75.68h-75.68L480-665.92l-55.12 55.12H349.2v75.68L294.08-480l55.12 55.12v75.68h75.68L480-294.08Zm0 210.7L362.75-200H200v-162.75L83.38-480 200-597.25V-760h162.75L480-876.62 597.25-760H760v162.75L876.62-480 760-362.75V-200H597.25L480-83.38Zm0-56.62 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z'
      fill={color}
      />
    </svg>
  );
}


export function UpArrowNoTailOutlineBold({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 48 48`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="m14.15 31.9-3.35-3.35L24 15.35 37.2 28.5l-3.35 3.35L24 22Z"
        fill={color}
      />
    </svg>
  );
}

export function DownArrowNoTailOutlineBold({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 48 48`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M24 31.9 10.8 18.7l3.35-3.35 9.85 9.9 9.85-9.85 3.35 3.35Z"
        fill={color}
      />
    </svg>
  );
}


export function BackIconBold({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 48 48`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M24 40.55 7.45 24 24 7.45l3.35 3.3-10.85 10.9h24.05v4.7H16.5L27.35 37.2Z"
        fill={color}
      />
    </svg>
  );
}


export function ForwardIconBold({
  size = 24,
  color = "black",
  onClick,
  className
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 48 48`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="m24 40.55-3.35-3.4 10.85-10.8H7.45v-4.7H31.5L20.65 10.8 24 7.45 40.55 24Z"
        fill={color}
      />
    </svg>
  );
}