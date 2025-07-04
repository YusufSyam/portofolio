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
  divider = "#b5c2d1",
  cream = "#F7E987",
}
export function IconLogoutOutline({
  size = 24,
  color = "black",
  onClick,
  className,
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

export function StickerInventory({ size = 24 }: IFluentProps) {
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
  className,
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
  className,
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
  className,
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
  className,
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
  className,
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
  className,
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
  className,
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
  className,
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
  className,
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
  className,
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
  className,
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
  className,
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
  className,
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
  className,
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
  color = "black",
  onClick,
  className,
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
        d="M112.59-152.35v-655.3L889.57-480 112.59-152.35ZM200-283.59 665.15-480 200-676.41v132.82L443.59-480 200-416.41v132.82Zm0 0v-392.82 392.82Z"
        fill={color}
      />
    </svg>
  );
}

export function IconReplyOutline({
  size = 24,
  color = "black",
  onClick,
  className,
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
        d="M757.13-191.87V-360q0-47.85-33.33-81.17-33.32-33.33-81.17-33.33H285.44L423.93-336l-64.41 63.65L111.87-520l247.65-247.65L423.93-704 285.44-565.5h357.19q85.15 0 145.33 60.17 60.17 60.18 60.17 145.33v168.13h-91Z"
        fill={color}
      />
    </svg>
  );
}

export function IconShareWindowsOutline({
  size = 24,
  color = "black",
  onClick,
  className,
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
        d="M280-360v-240q0-33 23.5-56.5T360-680h326L583-783l57-57 200 200-200 200-57-56 103-104H360v240h-80Zm-80 240q-33 0-56.5-23.5T120-200v-600h80v600h480v-160h80v160q0 33-23.5 56.5T680-120H200Z"
        fill={color}
      />
    </svg>
  );
}

export function IconLoginOutline({
  size = 24,
  color = "black",
  onClick,
  className,
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
        d="M475.48-100.78v-106h277.74v-546.44H475.48v-106h277.74q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v546.44q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H475.48Zm-97.52-152.09-73.66-75.52L402.91-427H100.78v-106h302.13l-98.61-98.61 73.66-75.52L604.52-480 377.96-252.87Z"
        fill={color}
      />
    </svg>
  );
}

export function IconInfoOutline({
  size = 24,
  color = "black",
  onClick,
  className,
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
  className,
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
  color = "black",
  onClick,
  className,
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
        d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Z"
        fill={color}
      />
    </svg>
  );
}

export function IconHeartOutlined({
  size = 24,
  color = "black",
  onClick,
  className,
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
        d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"
        fill={color}
      />
    </svg>
  );
}

export function IconExplosion({
  size = 24,
  color = "black",
  onClick,
  className,
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
        d="m480-294.08 55.12-55.12h75.68v-75.68L665.92-480l-55.12-55.12v-75.68h-75.68L480-665.92l-55.12 55.12H349.2v75.68L294.08-480l55.12 55.12v75.68h75.68L480-294.08Zm0 210.7L362.75-200H200v-162.75L83.38-480 200-597.25V-760h162.75L480-876.62 597.25-760H760v162.75L876.62-480 760-362.75V-200H597.25L480-83.38Zm0-56.62 100-100h140v-140l100-100-100-100v-140H580L480-820 380-720H240v140L140-480l100 100v140h140l100 100Zm0-340Z"
        fill={color}
      />
    </svg>
  );
}

export function UpArrowNoTailOutlineBold({
  size = 24,
  color = "black",
  onClick,
  className,
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
  className,
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
  className,
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

export function IconWorkFilled({
  size = 24,
  color = "black",
  onClick,
  className,
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
        d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Z"
        fill={color}
      />
    </svg>
  );
}

export function IconDownload({
  size = 24,
  color = "black",
  onClick,
  className,
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
        d="M479-336q-10.57 0-19.82-3.41T442-351L276-517q-16-16.09-15.5-37.55Q261-576 277-592q16-16 37.5-16t37.5 16l74 75v-262q0-22 15.5-37.5T479-832q22 0 37.5 15.5T532-779v262l75-75q15.73-16 37.37-15.5Q666-607 682-591q16 16 16 37.5T682-516L516-351q-7.93 8.18-17.18 11.59T479-336ZM234-128q-43.73 0-74.86-31.14Q128-190.27 128-234v-67q0-22 15.5-37.5T181-354q22 0 37.5 15.5T234-301v67h492v-67q0-22 15.5-37.5T779-354q22 0 37.5 15.5T832-301v67q0 43.73-31.14 74.86Q769.72-128 726-128H234Z"
        fill={color}
      />
    </svg>
  );
}

export function IconSearchFilledRounded({
  size = 24,
  color = "black",
  onClick,
  className,
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
        d="M377-298q-119 0-201.5-82.5T93-582q0-119 82.5-201.5T377-866q119 0 201.5 82.5T661-582q0 45-12.5 86T612-423l218 218q15 15 15 37t-15 37q-15 15-37 15t-37-15L539-348q-30 23-73.5 36.5T377-298Zm0-106q75 0 126.5-51.5T555-582q0-75-51.5-126.5T377-760q-75 0-126.5 51.5T199-582q0 75 51.5 126.5T377-404Z"
        fill={color}
      />
    </svg>
  );
}

export function ForwardIconBold({
  size = 24,
  color = "black",
  onClick,
  className,
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

export function IconGmailColored({
  size = 24,
  onClick,
  className,
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
        fill="#e0e0e0"
        d="M5.5,40.5h37c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11v26C2,38.933,3.567,40.5,5.5,40.5z"
      />
      <path
        fill="#d9d9d9"
        d="M26,40.5h16.5c1.933,0,3.5-1.567,3.5-3.5V11c0-1.933-1.567-3.5-3.5-3.5h-37C3.567,7.5,2,9.067,2,11L26,40.5z"
      />
      <path
        fill="#eee"
        d="M6.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L6.745,40.5z"
      />
      <path
        fill="#e0e0e0"
        d="M25.745,40.5H42.5c1.933,0,3.5-1.567,3.5-3.5V11.5L18.771,31.616L25.745,40.5z"
      />
      <path
        fill="#ca3737"
        d="M42.5,9.5h-37C3.567,9.5,2,9.067,2,11v26c0,1.933,1.567,3.5,3.5,3.5H7V12h34v28.5h1.5c1.933,0,3.5-1.567,3.5-3.5V11C46,9.067,44.433,9.5,42.5,9.5z"
      />
      <path
        fill="#f5f5f5"
        d="M42.5,7.5H24H5.5C3.567,7.5,2,9.036,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.036,44.433,7.5,42.5,7.5z"
      />
      <path
        fill="#e84f4b"
        d="M43.246,7.582L24,21L4.754,7.582C3.18,7.919,2,9.297,2,11c0,1.206,1.518,2.258,1.518,2.258L24,27.756l20.482-14.497c0,0,1.518-1.053,1.518-2.258C46,9.297,44.82,7.919,43.246,7.582z"
      />
    </svg>
  );
}

export function IconGmailColored2({
  size = 24,
  onClick,
  className,
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
        fill="#4caf50"
        d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
      />
      <path
        fill="#1e88e5"
        d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
      />
      <polygon
        fill="#e53935"
        points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
      />
      <path
        fill="#c62828"
        d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
      />
      <path
        fill="#fbc02d"
        d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
      />
    </svg>
  );
}

export function IconSOFColoured({
  size = 24,
  onClick,
  className,
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
      <path fill="#607D8B" d="M9 28H12V42H9z" />
      <path fill="#607D8B" d="M9 39H35V42H9z" />
      <path fill="#607D8B" d="M32 28H35V42H32zM15 34H29V37H15z" />
      <path
        fill="#A68A6E"
        d="M14.88 29H28.880000000000003V32H14.88z"
        transform="rotate(6.142 21.88 30.5)"
      />
      <path
        fill="#EF6C00"
        d="M29.452 11.646H43.451V14.647H29.452z"
        transform="rotate(81.234 36.453 13.148)"
      />
      <path
        fill="#FF9800"
        d="M23.576 13.578H37.574V16.579H23.576z"
        transform="rotate(60.79 30.576 15.079)"
      />
      <path
        fill="#D38B28"
        d="M18.395 18.275H32.393V21.276H18.395z"
        transform="rotate(34.765 25.396 19.777)"
      />
      <path
        fill="#C09553"
        d="M15.977 23.499H29.976V26.5H15.977z"
        transform="rotate(19.785 22.978 25.003)"
      />
    </svg>
  );
}

export function IconInstagramColoured({
  size = 24,
  onClick,
  className,
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
        fill="#304ffe"
        d="M41.67,13.48c-0.4,0.26-0.97,0.5-1.21,0.77c-0.09,0.09-0.14,0.19-0.12,0.29v1.03l-0.3,1.01l-0.3,1l-0.33,1.1 l-0.68,2.25l-0.66,2.22l-0.5,1.67c0,0.26-0.01,0.52-0.03,0.77c-0.07,0.96-0.27,1.88-0.59,2.74c-0.19,0.53-0.42,1.04-0.7,1.52 c-0.1,0.19-0.22,0.38-0.34,0.56c-0.4,0.63-0.88,1.21-1.41,1.72c-0.41,0.41-0.86,0.79-1.35,1.11c0,0,0,0-0.01,0 c-0.08,0.07-0.17,0.13-0.27,0.18c-0.31,0.21-0.64,0.39-0.98,0.55c-0.23,0.12-0.46,0.22-0.7,0.31c-0.05,0.03-0.11,0.05-0.16,0.07 c-0.57,0.27-1.23,0.45-1.89,0.54c-0.04,0.01-0.07,0.01-0.11,0.02c-0.4,0.07-0.79,0.13-1.19,0.16c-0.18,0.02-0.37,0.03-0.55,0.03 l-0.71-0.04l-3.42-0.18c0-0.01-0.01,0-0.01,0l-1.72-0.09c-0.13,0-0.27,0-0.4-0.01c-0.54-0.02-1.06-0.08-1.58-0.19 c-0.01,0-0.01,0-0.01,0c-0.95-0.18-1.86-0.5-2.71-0.93c-0.47-0.24-0.93-0.51-1.36-0.82c-0.18-0.13-0.35-0.27-0.52-0.42 c-0.48-0.4-0.91-0.83-1.31-1.27c-0.06-0.06-0.11-0.12-0.16-0.18c-0.06-0.06-0.12-0.13-0.17-0.19c-0.38-0.48-0.7-0.97-0.96-1.49 c-0.24-0.46-0.43-0.95-0.58-1.49c-0.06-0.19-0.11-0.37-0.15-0.57c-0.01-0.01-0.02-0.03-0.02-0.05c-0.1-0.41-0.19-0.84-0.24-1.27 c-0.06-0.33-0.09-0.66-0.09-1c-0.02-0.13-0.02-0.27-0.02-0.4l1.91-2.95l1.87-2.88l0.85-1.31l0.77-1.18l0.26-0.41v-1.03 c0.02-0.23,0.03-0.47,0.02-0.69c-0.01-0.7-0.15-1.38-0.38-2.03c-0.22-0.69-0.53-1.34-0.85-1.94c-0.38-0.69-0.78-1.31-1.11-1.87 C14,7.4,13.66,6.73,13.75,6.26C14.47,6.09,15.23,6,16,6h16c4.18,0,7.78,2.6,9.27,6.26C41.43,12.65,41.57,13.06,41.67,13.48z"
      />
      <path
        fill="#4928f4"
        d="M42,16v0.27l-1.38,0.8l-0.88,0.51l-0.97,0.56l-1.94,1.13l-1.9,1.1l-1.94,1.12l-0.77,0.45 c0,0.48-0.12,0.92-0.34,1.32c-0.31,0.58-0.83,1.06-1.49,1.47c-0.67,0.41-1.49,0.74-2.41,0.98c0,0,0-0.01-0.01,0 c-3.56,0.92-8.42,0.5-10.78-1.26c-0.66-0.49-1.12-1.09-1.32-1.78c-0.06-0.23-0.09-0.48-0.09-0.73v-7.19 c0.01-0.15-0.09-0.3-0.27-0.45c-0.54-0.43-1.81-0.84-3.23-1.25c-1.11-0.31-2.3-0.62-3.3-0.92c-0.79-0.24-1.46-0.48-1.86-0.71 c0.18-0.35,0.39-0.7,0.61-1.03c1.4-2.05,3.54-3.56,6.02-4.13C14.47,6.09,15.23,6,16,6h10.8c5.37,0.94,10.32,3.13,14.47,6.26 c0.16,0.39,0.3,0.8,0.4,1.22c0.18,0.66,0.29,1.34,0.32,2.05C42,15.68,42,15.84,42,16z"
      />
      <path
        fill="#6200ea"
        d="M42,16v4.41l-0.22,0.68l-0.75,2.33l-0.78,2.4l-0.41,1.28l-0.38,1.19l-0.37,1.13l-0.36,1.12l-0.19,0.59 l-0.25,0.78c0,0.76-0.02,1.43-0.07,2c-0.01,0.06-0.02,0.12-0.02,0.18c-0.06,0.53-0.14,0.98-0.27,1.36 c-0.01,0.06-0.03,0.12-0.05,0.17c-0.26,0.72-0.65,1.18-1.23,1.48c-0.14,0.08-0.3,0.14-0.47,0.2c-0.53,0.18-1.2,0.27-2.02,0.32 c-0.6,0.04-1.29,0.05-2.07,0.05H31.4l-1.19-0.05L30,37.61l-2.17-0.09l-2.2-0.09l-7.25-0.3l-1.88-0.08h-0.26 c-0.78-0.01-1.45-0.06-2.03-0.14c-0.84-0.13-1.49-0.35-1.98-0.68c-0.7-0.45-1.11-1.11-1.35-2.03c-0.06-0.22-0.11-0.45-0.14-0.7 c-0.1-0.58-0.15-1.25-0.18-2c0-0.15,0-0.3-0.01-0.46c-0.01-0.01,0-0.01,0-0.01v-0.58c-0.01-0.29-0.01-0.59-0.01-0.9l0.05-1.61 l0.03-1.15l0.04-1.34v-0.19l0.07-2.46l0.07-2.46l0.07-2.31l0.06-2.27l0.02-0.6c0-0.31-1.05-0.49-2.22-0.64 c-0.93-0.12-1.95-0.23-2.56-0.37c0.05-0.23,0.1-0.46,0.16-0.68c0.18-0.72,0.45-1.4,0.79-2.05c0.18-0.35,0.39-0.7,0.61-1.03 c2.16-0.95,4.41-1.69,6.76-2.17c2.06-0.43,4.21-0.66,6.43-0.66c7.36,0,14.16,2.49,19.54,6.69c0.52,0.4,1.03,0.83,1.53,1.28 C42,15.68,42,15.84,42,16z"
      />
      <path
        fill="#673ab7"
        d="M42,18.37v4.54l-0.55,1.06l-1.05,2.05l-0.56,1.08l-0.51,0.99l-0.22,0.43c0,0.31,0,0.61-0.02,0.9 c0,0.43-0.02,0.84-0.05,1.22c-0.04,0.45-0.1,0.86-0.16,1.24c-0.15,0.79-0.36,1.47-0.66,2.03c-0.04,0.07-0.08,0.14-0.12,0.2 c-0.11,0.18-0.24,0.35-0.38,0.51c-0.18,0.22-0.38,0.41-0.61,0.57c-0.34,0.26-0.74,0.47-1.2,0.63c-0.57,0.21-1.23,0.35-2.01,0.43 c-0.51,0.05-1.07,0.08-1.68,0.08l-0.42,0.02l-2.08,0.12h-0.01L27.5,36.6l-2.25,0.13l-3.1,0.18l-3.77,0.22l-0.55,0.03 c-0.51,0-0.99-0.03-1.45-0.09c-0.05-0.01-0.09-0.02-0.14-0.02c-0.68-0.11-1.3-0.29-1.86-0.54c-0.68-0.3-1.27-0.7-1.77-1.18 c-0.44-0.43-0.82-0.92-1.13-1.47c-0.07-0.13-0.14-0.25-0.2-0.39c-0.3-0.59-0.54-1.25-0.72-1.97c-0.03-0.12-0.06-0.25-0.08-0.38 c-0.06-0.23-0.11-0.47-0.14-0.72c-0.11-0.64-0.17-1.32-0.2-2.03v-0.01c-0.01-0.29-0.02-0.57-0.02-0.87l-0.49-1.17l-0.07-0.18 L9.5,25.99L8.75,24.2l-0.12-0.29l-0.72-1.73l-0.8-1.93c0,0,0,0-0.01,0L6.29,18.3L6,17.59V16c0-0.63,0.06-1.25,0.17-1.85 c0.05-0.23,0.1-0.46,0.16-0.68c0.85-0.49,1.74-0.94,2.65-1.34c2.08-0.93,4.31-1.62,6.62-2.04c1.72-0.31,3.51-0.48,5.32-0.48 c7.31,0,13.94,2.65,19.12,6.97c0.2,0.16,0.39,0.32,0.58,0.49C41.09,17.48,41.55,17.91,42,18.37z"
      />
      <path
        fill="#8e24aa"
        d="M42,21.35v5.14l-0.57,1.19l-1.08,2.25l-0.01,0.03c0,0.43-0.02,0.82-0.05,1.17c-0.1,1.15-0.38,1.88-0.84,2.33 c-0.33,0.34-0.74,0.53-1.25,0.63c-0.03,0.01-0.07,0.01-0.1,0.02c-0.16,0.03-0.33,0.05-0.51,0.05c-0.62,0.06-1.35,0.02-2.19-0.04 c-0.09,0-0.19-0.01-0.29-0.02c-0.61-0.04-1.26-0.08-1.98-0.11c-0.39-0.01-0.8-0.02-1.22-0.02h-0.02l-1.01,0.08h-0.01l-2.27,0.16 l-2.59,0.2l-0.38,0.03l-3.03,0.22l-1.57,0.12l-1.55,0.11c-0.27,0-0.53,0-0.79-0.01c0,0-0.01-0.01-0.01,0 c-1.13-0.02-2.14-0.09-3.04-0.26c-0.83-0.14-1.56-0.36-2.18-0.69c-0.64-0.31-1.17-0.75-1.6-1.31c-0.41-0.55-0.71-1.24-0.9-2.07 c0-0.01,0-0.01,0-0.01c-0.14-0.67-0.22-1.45-0.22-2.33l-0.15-0.27L9.7,26.35l-0.13-0.22L9.5,25.99l-0.93-1.65l-0.46-0.83 l-0.58-1.03l-1-1.79L6,19.75v-3.68c0.88-0.58,1.79-1.09,2.73-1.55c1.14-0.58,2.32-1.07,3.55-1.47c1.34-0.44,2.74-0.79,4.17-1.02 c1.45-0.24,2.94-0.36,4.47-0.36c6.8,0,13.04,2.43,17.85,6.47c0.22,0.17,0.43,0.36,0.64,0.54c0.84,0.75,1.64,1.56,2.37,2.41 C41.86,21.18,41.94,21.26,42,21.35z"
      />
      <path
        fill="#c2185b"
        d="M42,24.71v7.23c-0.24-0.14-0.57-0.31-0.98-0.49c-0.22-0.11-0.47-0.22-0.73-0.32 c-0.38-0.17-0.79-0.33-1.25-0.49c-0.1-0.04-0.2-0.07-0.31-0.1c-0.18-0.07-0.37-0.13-0.56-0.19c-0.59-0.18-1.24-0.35-1.92-0.5 c-0.26-0.05-0.53-0.1-0.8-0.14c-0.87-0.15-1.8-0.24-2.77-0.25c-0.08-0.01-0.17-0.01-0.25-0.01l-2.57,0.02l-3.5,0.02h-0.01 l-7.49,0.06c-2.38,0-3.84,0.57-4.72,0.8c0,0-0.01,0-0.01,0.01c-0.93,0.24-1.22,0.09-1.3-1.54c-0.02-0.45-0.03-1.03-0.03-1.74 l-0.56-0.43l-0.98-0.74l-0.6-0.46l-0.12-0.09L8.88,24.1l-0.25-0.19l-0.52-0.4l-0.96-0.72L6,21.91v-3.4 c0.1-0.08,0.19-0.15,0.29-0.21c1.45-1,3-1.85,4.64-2.54c1.46-0.62,3-1.11,4.58-1.46c0.43-0.09,0.87-0.18,1.32-0.24 c1.33-0.23,2.7-0.34,4.09-0.34c6.01,0,11.53,2.09,15.91,5.55c0.66,0.52,1.3,1.07,1.9,1.66c0.82,0.78,1.59,1.61,2.3,2.49 c0.14,0.18,0.28,0.36,0.42,0.55C41.64,24.21,41.82,24.46,42,24.71z"
      />
      <path
        fill="#d81b60"
        d="M42,28.72V32c0,0.65-0.06,1.29-0.18,1.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.22,0.05-0.47,0.05-0.75,0.01 c-0.63-0.11-1.37-0.44-2.17-0.87c-0.04-0.01-0.08-0.03-0.11-0.05c-0.25-0.13-0.51-0.27-0.77-0.43c-0.53-0.29-1.09-0.61-1.65-0.91 c-0.12-0.06-0.24-0.12-0.35-0.18c-0.64-0.33-1.3-0.63-1.96-0.86c0,0,0,0-0.01,0c-0.14-0.05-0.29-0.1-0.44-0.14 c-0.57-0.16-1.15-0.26-1.71-0.26l-1.1-0.32l-4.87-1.41c0,0,0,0-0.01,0l-2.99-0.87h-0.01l-1.3-0.38c-3.76,0-6.07,1.6-7.19,0.99 c-0.44-0.23-0.7-0.81-0.79-1.95c-0.03-0.32-0.04-0.68-0.04-1.1l-1.17-0.57l-0.05-0.02h-0.01l-0.84-0.42L9.7,26.35l-0.07-0.03 l-0.17-0.09L7.5,25.28L6,24.55v-3.43c0.17-0.15,0.35-0.29,0.53-0.43c0.19-0.15,0.38-0.29,0.57-0.44c0.01,0,0.01,0,0.01,0 c1.18-0.85,2.43-1.6,3.76-2.22c1.55-0.74,3.2-1.31,4.91-1.68c0.25-0.06,0.51-0.12,0.77-0.16c1.42-0.27,2.88-0.41,4.37-0.41 c5.27,0,10.11,1.71,14.01,4.59c1.13,0.84,2.18,1.77,3.14,2.78c0.79,0.83,1.52,1.73,2.18,2.67c0.05,0.07,0.1,0.14,0.15,0.2 c0.37,0.54,0.71,1.09,1.03,1.66C41.64,28.02,41.82,28.37,42,28.72z"
      />
      <path
        fill="#f50057"
        d="M41.82,33.91c-0.18,0.92-0.49,1.8-0.91,2.62c-0.19,0.37-0.4,0.72-0.63,1.06c-0.14,0.21-0.29,0.41-0.44,0.6 c-0.36-0.14-0.89-0.34-1.54-0.56c0,0,0,0,0-0.01c-0.49-0.17-1.05-0.35-1.65-0.52c-0.17-0.05-0.34-0.1-0.52-0.15 c-0.71-0.19-1.45-0.36-2.17-0.46c-0.6-0.1-1.19-0.16-1.74-0.16l-0.46-0.13h-0.01l-2.42-0.7l-1.49-0.43l-1.66-0.48h-0.01l-0.54-0.15 l-6.53-1.88l-1.88-0.54l-1.4-0.33l-2.28-0.54l-0.28-0.07c0,0,0,0-0.01,0l-2.29-0.53c0-0.01,0-0.01,0-0.01l-0.41-0.09l-0.21-0.05 l-1.67-0.39l-0.19-0.05l-1.42-1.17L6,27.9v-4.08c0.37-0.36,0.75-0.7,1.15-1.03c0.12-0.11,0.25-0.21,0.38-0.31 c0.12-0.1,0.25-0.2,0.38-0.3c0.91-0.69,1.87-1.31,2.89-1.84c1.3-0.7,2.68-1.26,4.13-1.66c0.28-0.09,0.56-0.17,0.85-0.23 c1.64-0.41,3.36-0.62,5.14-0.62c4.47,0,8.63,1.35,12.07,3.66c1.71,1.15,3.25,2.53,4.55,4.1c0.66,0.79,1.26,1.62,1.79,2.5 c0.05,0.07,0.09,0.13,0.13,0.2c0.32,0.53,0.62,1.08,0.89,1.64c0.25,0.5,0.47,1,0.67,1.52C41.34,32.25,41.6,33.07,41.82,33.91z"
      />
      <path
        fill="#ff1744"
        d="M40.28,37.59c-0.14,0.21-0.29,0.41-0.44,0.6c-0.44,0.55-0.92,1.05-1.46,1.49c-0.47,0.39-0.97,0.74-1.5,1.04 c-0.2-0.05-0.4-0.11-0.61-0.19c-0.66-0.23-1.35-0.61-1.99-1.01c-0.96-0.61-1.79-1.27-2.16-1.57c-0.14-0.12-0.21-0.18-0.21-0.18 l-1.7-0.15L30,37.6l-2.2-0.19l-2.28-0.2l-3.37-0.3l-5.34-0.47l-0.02-0.01l-1.88-0.91l-1.9-0.92l-1.53-0.74l-0.33-0.16l-0.41-0.2 l-1.42-0.69L7.43,31.9l-0.59-0.29L6,31.35v-4.47c0.47-0.56,0.97-1.09,1.5-1.6c0.34-0.32,0.7-0.64,1.07-0.94 c0.06-0.05,0.12-0.1,0.18-0.14c0.04-0.05,0.09-0.08,0.13-0.1c0.59-0.48,1.21-0.91,1.85-1.3c0.74-0.47,1.52-0.89,2.33-1.24 c0.87-0.39,1.78-0.72,2.72-0.97c1.63-0.46,3.36-0.7,5.14-0.7c4.08,0,7.85,1.24,10.96,3.37c1.99,1.36,3.71,3.08,5.07,5.07 c0.45,0.64,0.85,1.32,1.22,2.02c0.13,0.26,0.26,0.52,0.37,0.78c0.12,0.25,0.23,0.5,0.34,0.75c0.21,0.52,0.4,1.04,0.57,1.58 c0.32,1,0.56,2.02,0.71,3.08C40.21,36.89,40.25,37.24,40.28,37.59z"
      />
      <path
        fill="#ff5722"
        d="M38.39,39.42c0,0.08,0,0.17-0.01,0.26c-0.47,0.39-0.97,0.74-1.5,1.04c-0.22,0.12-0.44,0.24-0.67,0.34 c-0.23,0.11-0.46,0.21-0.7,0.3c-0.34-0.18-0.8-0.4-1.29-0.61c-0.69-0.31-1.44-0.59-2.02-0.68c-0.14-0.03-0.27-0.04-0.39-0.04 l-1.64-0.21h-0.02l-2.04-0.27l-2.06-0.27l-0.96-0.12l-7.56-0.98c-0.49,0-1.01-0.03-1.55-0.1c-0.66-0.06-1.35-0.16-2.04-0.3 c-0.68-0.12-1.37-0.28-2.03-0.45c-0.69-0.16-1.37-0.35-2-0.53c-0.73-0.22-1.41-0.43-1.98-0.62c-0.47-0.15-0.87-0.29-1.18-0.4 c-0.18-0.43-0.33-0.88-0.44-1.34C6.1,33.66,6,32.84,6,32v-1.67c0.32-0.53,0.67-1.05,1.06-1.54c0.71-0.94,1.52-1.8,2.4-2.56 c0.03-0.04,0.07-0.07,0.1-0.09l0.01-0.01c0.31-0.28,0.63-0.53,0.97-0.77c0.04-0.04,0.08-0.07,0.12-0.1 c0.16-0.12,0.33-0.24,0.51-0.35c1.43-0.97,3.01-1.73,4.7-2.24c1.6-0.48,3.29-0.73,5.05-0.73c3.49,0,6.75,1.03,9.47,2.79 c2.01,1.29,3.74,2.99,5.06,4.98c0.16,0.23,0.31,0.46,0.46,0.7c0.69,1.17,1.26,2.43,1.68,3.75c0.05,0.15,0.09,0.3,0.13,0.46 c0.08,0.27,0.15,0.55,0.21,0.83c0.02,0.07,0.04,0.14,0.06,0.22c0.14,0.63,0.24,1.29,0.31,1.95c0,0.01,0,0.01,0,0.01 C38.36,38.22,38.39,38.82,38.39,39.42z"
      />
      <path
        fill="#ff6f00"
        d="M36.33,39.42c0,0.35-0.02,0.73-0.06,1.11c-0.02,0.18-0.04,0.36-0.06,0.53c-0.23,0.11-0.46,0.21-0.7,0.3 c-0.45,0.17-0.91,0.31-1.38,0.41c-0.32,0.07-0.65,0.13-0.98,0.16h-0.01c-0.31-0.19-0.67-0.42-1.04-0.68 c-0.67-0.47-1.37-1-1.93-1.43c-0.01-0.01-0.01-0.01-0.02-0.02c-0.59-0.45-1.01-0.79-1.01-0.79l-1.06,0.04l-2.04,0.07l-0.95,0.04 l-3.82,0.14l-3.23,0.12c-0.21,0.01-0.46,0.01-0.77,0h-0.01c-0.42-0.01-0.92-0.04-1.47-0.09c-0.64-0.05-1.34-0.11-2.05-0.18 c-0.69-0.08-1.39-0.16-2.06-0.24c-0.74-0.08-1.44-0.17-2.04-0.25c-0.47-0.06-0.88-0.11-1.21-0.15c-0.28-0.32-0.53-0.65-0.77-1.01 c-0.36-0.54-0.67-1.11-0.91-1.72c-0.18-0.43-0.33-0.88-0.44-1.34c0.29-0.89,0.67-1.73,1.12-2.54c0.36-0.66,0.78-1.29,1.24-1.89 c0.45-0.59,0.94-1.14,1.47-1.64v-0.01c0.15-0.15,0.3-0.29,0.45-0.42c0.28-0.26,0.57-0.5,0.87-0.73h0.01 c0.01-0.02,0.02-0.02,0.03-0.03c0.24-0.19,0.49-0.36,0.74-0.53c1.48-1.01,3.15-1.76,4.95-2.2c1.19-0.29,2.44-0.45,3.73-0.45 c2.54,0,4.94,0.61,7.05,1.71h0.01c1.81,0.93,3.41,2.21,4.7,3.75c0.71,0.82,1.32,1.72,1.82,2.67c0.35,0.64,0.65,1.31,0.9,1.99 c0.02,0.06,0.04,0.11,0.06,0.16c0.17,0.5,0.32,1.02,0.45,1.54c0.09,0.37,0.16,0.75,0.22,1.13c0.02,0.12,0.04,0.23,0.05,0.35 C36.28,37.99,36.33,38.7,36.33,39.42z"
      />
      <path
        fill="#ff9800"
        d="M34.28,39.42v0.1c0,0.34-0.03,0.77-0.06,1.23c-0.03,0.34-0.06,0.69-0.09,1.02c-0.32,0.07-0.65,0.13-0.98,0.16 h-0.01C32.76,41.98,32.39,42,32,42h-1.75l-0.38-0.11l-1.97-0.6l-2-0.6l-4.63-1.39l-2-0.6c0,0-0.83,0.33-2,0.72h-0.01 c-0.45,0.15-0.94,0.31-1.46,0.47c-0.65,0.19-1.34,0.38-2.02,0.53c-0.7,0.16-1.39,0.28-2.01,0.33c-0.19,0.02-0.38,0.03-0.55,0.03 c-0.56-0.31-1.1-0.68-1.59-1.09c-0.43-0.36-0.83-0.75-1.2-1.18c-0.28-0.32-0.53-0.65-0.77-1.01c0.07-0.45,0.15-0.89,0.27-1.32 c0.3-1.19,0.77-2.33,1.39-3.37c0.34-0.59,0.72-1.16,1.16-1.69c0.01-0.03,0.04-0.06,0.07-0.08c-0.01-0.01,0-0.01,0-0.01 c0.13-0.17,0.27-0.33,0.41-0.48c0-0.01,0-0.01,0-0.01c0.41-0.44,0.83-0.86,1.29-1.25c0.16-0.13,0.31-0.26,0.48-0.39 c0.03-0.03,0.06-0.05,0.1-0.08c2.25-1.72,5.06-2.76,8.09-2.76c3.44,0,6.57,1.29,8.94,3.41c1.14,1.03,2.11,2.26,2.84,3.63 c0.06,0.1,0.12,0.21,0.17,0.32c0.09,0.18,0.18,0.37,0.26,0.57c0.33,0.72,0.59,1.48,0.77,2.26c0.02,0.08,0.04,0.16,0.06,0.24 c0.08,0.37,0.15,0.75,0.2,1.13C34.24,38.21,34.28,38.81,34.28,39.42z"
      />
      <path
        fill="#ffc107"
        d="M32.22,39.42c0,0.2-0.01,0.42-0.02,0.65c-0.02,0.37-0.05,0.77-0.1,1.18c-0.02,0.25-0.06,0.5-0.1,0.75h-5.48 l-1.06-0.17l-4.14-0.66l-0.59-0.09l-1.35-0.22c-0.59,0-1.87,0.26-3.22,0.51c-0.71,0.13-1.43,0.27-2.08,0.36 c-0.08,0.01-0.16,0.02-0.23,0.03h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.2-0.09-0.4-0.19-0.6-0.3c-0.56-0.31-1.1-0.68-1.59-1.09 c-0.01-0.12-0.02-0.22-0.02-0.27c0-0.26,0.01-0.51,0.03-0.76c0.04-0.64,0.13-1.26,0.27-1.86c0.22-0.91,0.54-1.79,0.97-2.6 c0.08-0.17,0.17-0.34,0.27-0.5c0.04-0.08,0.09-0.15,0.13-0.23c0.18-0.29,0.38-0.57,0.58-0.85c0.42-0.55,0.89-1.07,1.39-1.54 c0.01,0,0.01,0,0.01,0c0.04-0.04,0.08-0.08,0.12-0.11c0.05-0.04,0.09-0.09,0.14-0.12c0.2-0.18,0.4-0.34,0.61-0.49 c0-0.01,0.01-0.01,0.01-0.01c1.89-1.41,4.23-2.24,6.78-2.24c1.98,0,3.82,0.5,5.43,1.38h0.01c1.38,0.76,2.58,1.79,3.53,3.03 c0.37,0.48,0.7,0.99,0.98,1.53h0.01c0.05,0.1,0.1,0.2,0.15,0.3c0.3,0.59,0.54,1.21,0.72,1.85h0.01c0.01,0.05,0.03,0.1,0.04,0.15 c0.12,0.43,0.22,0.87,0.29,1.32c0.01,0.09,0.02,0.19,0.03,0.28C32.19,38.43,32.22,38.92,32.22,39.42z"
      />
      <path
        fill="#ffd54f"
        d="M30.17,39.31c0,0.16,0,0.33-0.02,0.49v0.01c0,0.01,0,0.01,0,0.01c-0.02,0.72-0.12,1.43-0.28,2.07 c0,0.04-0.01,0.07-0.03,0.11h-4.67l-3.85-0.83l-0.51-0.11l-0.08,0.02l-4.27,0.88L16.27,42H16c-0.64,0-1.27-0.06-1.88-0.18 c-0.09-0.02-0.18-0.04-0.27-0.06h-0.01c-0.7-0.15-1.38-0.38-2.02-0.68c-0.02-0.11-0.04-0.22-0.05-0.33 c-0.07-0.43-0.1-0.88-0.1-1.33c0-0.17,0-0.34,0.01-0.51c0.03-0.54,0.11-1.07,0.23-1.58c0.08-0.38,0.19-0.75,0.32-1.1 c0.11-0.31,0.24-0.61,0.38-0.9c0.12-0.25,0.26-0.49,0.4-0.73c0.14-0.23,0.29-0.45,0.45-0.67c0.4-0.55,0.87-1.06,1.39-1.51 c0.3-0.26,0.63-0.51,0.97-0.73c1.46-0.96,3.21-1.52,5.1-1.52c0.37,0,0.73,0.02,1.08,0.07h0.02c1.07,0.12,2.07,0.42,2.99,0.87 c0.01,0,0.01,0,0.01,0c1.45,0.71,2.68,1.78,3.58,3.1c0.15,0.22,0.3,0.46,0.43,0.7c0.11,0.19,0.21,0.39,0.3,0.59 c0.14,0.31,0.27,0.64,0.38,0.97h0.01c0.11,0.37,0.21,0.74,0.28,1.13v0.01C30.11,38.16,30.17,38.73,30.17,39.31z"
      />
      <path
        fill="#ffe082"
        d="M28.11,39.52v0.03c0,0.59-0.07,1.17-0.21,1.74c-0.05,0.24-0.12,0.48-0.21,0.71h-4.48l-2.29-0.63L18.63,42H16 c-0.64,0-1.27-0.06-1.88-0.18c-0.02-0.03-0.03-0.06-0.04-0.09c-0.14-0.43-0.25-0.86-0.3-1.31c-0.04-0.29-0.06-0.59-0.06-0.9 c0-0.12,0-0.25,0.02-0.37c0.01-0.47,0.08-0.93,0.2-1.37c0.06-0.3,0.15-0.59,0.27-0.87c0.04-0.14,0.1-0.27,0.17-0.4 c0.15-0.34,0.33-0.67,0.53-0.99c0.22-0.32,0.46-0.62,0.73-0.9c0.32-0.36,0.68-0.69,1.09-0.96c0.7-0.51,1.5-0.89,2.37-1.1 c0.58-0.16,1.19-0.24,1.82-0.24c2,0,3.79,0.8,5.09,2.09c0.05,0.05,0.11,0.11,0.16,0.18h0.01c0.14,0.15,0.27,0.3,0.4,0.47 c0.37,0.47,0.68,0.98,0.92,1.54c0.12,0.26,0.22,0.53,0.3,0.81c0.01,0.04,0.02,0.07,0.03,0.11c0.14,0.49,0.23,1,0.25,1.53 C28.1,39.2,28.11,39.36,28.11,39.52z"
      />
      <path
        fill="#ffecb3"
        d="M26.06,39.52c0,0.41-0.05,0.8-0.16,1.17c-0.1,0.4-0.25,0.78-0.44,1.14c-0.03,0.06-0.1,0.17-0.1,0.17h-8.88 c-0.01-0.01-0.02-0.03-0.02-0.04c-0.12-0.19-0.22-0.38-0.3-0.59c-0.2-0.46-0.32-0.96-0.36-1.48c-0.02-0.12-0.02-0.25-0.02-0.37 c0-0.06,0-0.13,0.01-0.19c0.01-0.44,0.07-0.86,0.19-1.25c0.1-0.36,0.23-0.69,0.4-1.01c0,0,0.01-0.01,0.01-0.02 c0.12-0.21,0.25-0.42,0.4-0.62c0.49-0.66,1.14-1.2,1.89-1.55c0.01,0,0.01,0,0.01,0c0.24-0.12,0.49-0.22,0.75-0.29c0,0,0,0,0.01,0 c0.46-0.14,0.96-0.21,1.47-0.21c0.59,0,1.16,0.09,1.68,0.28c0.19,0.05,0.37,0.13,0.55,0.22c0,0,0,0,0.01,0 c0.86,0.41,1.59,1.05,2.09,1.85c0.1,0.15,0.19,0.31,0.27,0.48c0.04,0.07,0.08,0.15,0.11,0.22c0.23,0.52,0.37,1.09,0.41,1.69 c0.01,0.05,0.01,0.1,0.01,0.16C26.06,39.36,26.06,39.44,26.06,39.52z"
      />
      <g>
        <path
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M30,11H18c-3.9,0-7,3.1-7,7v12c0,3.9,3.1,7,7,7h12c3.9,0,7-3.1,7-7V18C37,14.1,33.9,11,30,11z"
        />
        <circle cx="31" cy="16" r="1" fill="#fff" />
      </g>
      <g>
        <circle
          cx="24"
          cy="24"
          r="6"
          fill="none"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
      </g>
    </svg>
  );
}

export function IconLinkedinColoured({
  size = 24,
  onClick,
  className,
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
        fill="#0288D1"
        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
      />
      <path
        fill="#FFF"
        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
      />
    </svg>
  );
}

export function IconTiktokColoured({
  size = 24,
  onClick,
  className,
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
      fillRule="evenodd"
      clipRule={"evenodd"}
    >
      <path
        fill="#212121"
        fillRule="evenodd"
        d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z"
        clip-rule="evenodd"
      />
      <path
        fill="#ec407a"
        fillRule="evenodd"
        d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z"
        clip-rule="evenodd"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z"
        clip-rule="evenodd"
      />
      <path
        fill="#81d4fa"
        fillRule="evenodd"
        d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z"
        clip-rule="evenodd"
      />
    </svg>
  );
}

export function IconKaggleFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 32 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        fill={color}
        d="M 10.351562 4 C 10.117563 4 10 4.1165625 10 4.3515625 L 10 27.644531 C 10 27.878531 10.116563 27.996094 10.351562 27.996094 L 12.648438 27.996094 C 12.882437 27.996094 13.001953 27.879531 13.001953 27.644531 L 13.001953 22.808594 L 14.810547 21.085938 L 20.048828 27.75 C 20.190828 27.915 20.354922 28 20.544922 28 L 23.716797 28 C 23.882797 28 23.977 27.952422 24 27.857422 L 23.933594 27.498047 L 17.023438 18.910156 L 23.650391 12.498047 C 23.773391 12.370047 23.730438 12 23.398438 12 L 20.117188 12 C 19.951187 12 19.785141 12.085953 19.619141 12.251953 L 13 18.974609 L 13 4.3515625 C 13 4.1165625 12.883437 4 12.648438 4 L 10.351562 4 z"
      />
    </svg>
  );
}

export function IconGmailFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 50 50`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        fill={color}
        d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"
      />
    </svg>
  );
}

export function IconLinkedinFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 50 50`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        fill={color}
        d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"
      />
    </svg>
  );
}

export function IconGithubFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 32 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
      fillRule="evenodd"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M 16 4 C 9.371094 4 4 9.371094 4 16 C 4 21.300781 7.4375 25.800781 12.207031 27.386719 C 12.808594 27.496094 13.027344 27.128906 13.027344 26.808594 C 13.027344 26.523438 13.015625 25.769531 13.011719 24.769531 C 9.671875 25.492188 8.96875 23.160156 8.96875 23.160156 C 8.421875 21.773438 7.636719 21.402344 7.636719 21.402344 C 6.546875 20.660156 7.71875 20.675781 7.71875 20.675781 C 8.921875 20.761719 9.554688 21.910156 9.554688 21.910156 C 10.625 23.746094 12.363281 23.214844 13.046875 22.910156 C 13.15625 22.132813 13.46875 21.605469 13.808594 21.304688 C 11.144531 21.003906 8.34375 19.972656 8.34375 15.375 C 8.34375 14.0625 8.8125 12.992188 9.578125 12.152344 C 9.457031 11.851563 9.042969 10.628906 9.695313 8.976563 C 9.695313 8.976563 10.703125 8.65625 12.996094 10.207031 C 13.953125 9.941406 14.980469 9.808594 16 9.804688 C 17.019531 9.808594 18.046875 9.941406 19.003906 10.207031 C 21.296875 8.65625 22.300781 8.976563 22.300781 8.976563 C 22.957031 10.628906 22.546875 11.851563 22.421875 12.152344 C 23.191406 12.992188 23.652344 14.0625 23.652344 15.375 C 23.652344 19.984375 20.847656 20.996094 18.175781 21.296875 C 18.605469 21.664063 18.988281 22.398438 18.988281 23.515625 C 18.988281 25.121094 18.976563 26.414063 18.976563 26.808594 C 18.976563 27.128906 19.191406 27.503906 19.800781 27.386719 C 24.566406 25.796875 28 21.300781 28 16 C 28 9.371094 22.628906 4 16 4 Z"
      />
    </svg>
  );
}

export function IconSOFFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 50 50`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
      fillRule="evenodd"
    >
      <path
        fill={color}
        fillRule="evenodd"
        d="M 40.925781 1.890625 L 37.859375 2.417969 L 41.1875 20.625 L 44.03125 20.253906 Z M 29.96875 6.351563 L 27.101563 8.078125 L 37.300781 23.035156 L 39.820313 21.480469 Z M 20.796875 15.03125 L 19.113281 17.703125 L 34.5 27 L 35.902344 24.578125 Z M 16.375 24.402344 L 15.628906 27.402344 L 33.359375 31.894531 L 33.640625 29.203125 Z M 9 29 L 9 47.984375 L 38.902344 48 L 38.902344 47.984375 C 38.933594 47.984375 39 29 39 29 L 36 29 L 36 45 L 12 45 L 12 29 Z M 15.152344 32.355469 L 14.902344 35.339844 L 33 37 L 33.203125 34.5 Z M 14.902344 39 L 15 42 L 33 41.929688 L 33 39 Z"
      />
    </svg>
  );
}

export function IconInstagramFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 64 64`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
      fillRule="evenodd"
    >
      <path
        fill={color}
        d="M 21.580078 7 C 13.541078 7 7 13.544938 7 21.585938 L 7 42.417969 C 7 50.457969 13.544938 57 21.585938 57 L 42.417969 57 C 50.457969 57 57 50.455062 57 42.414062 L 57 21.580078 C 57 13.541078 50.455062 7 42.414062 7 L 21.580078 7 z M 47 15 C 48.104 15 49 15.896 49 17 C 49 18.104 48.104 19 47 19 C 45.896 19 45 18.104 45 17 C 45 15.896 45.896 15 47 15 z M 32 19 C 39.17 19 45 24.83 45 32 C 45 39.17 39.169 45 32 45 C 24.83 45 19 39.169 19 32 C 19 24.831 24.83 19 32 19 z M 32 23 C 27.029 23 23 27.029 23 32 C 23 36.971 27.029 41 32 41 C 36.971 41 41 36.971 41 32 C 41 27.029 36.971 23 32 23 z"
      />
    </svg>
  );
}

export function IconGithubColoured({
  size = 24,
  onClick,
  className,
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
        fill="#455a64"
        d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"
      />
      <path
        fill="#455a64"
        d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"
      />
      <path
        fill="#455a64"
        d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"
      />
      <path
        fill="#00bcd4"
        d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"
      />
    </svg>
  );
}

export function IconPythonFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 50 50`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M 24.5 2 C 15.800781 2 14 6.492188 14 9.09375 L 14 14 L 24 14 L 24 15 L 9.09375 15 C 5.792969 15 2 17.601563 2 25 C 2 32.398438 5.792969 35 9.09375 35 L 15 35 L 15 29 C 15 26.800781 16.800781 25 19 25 L 31 25 C 32.699219 25 34 23.699219 34 22 L 34 9.09375 C 34 5.59375 30.699219 2 24.5 2 Z M 20 7 C 21.101563 7 22 7.898438 22 9 C 22 10.101563 21.101563 11 20 11 C 18.898438 11 18 10.101563 18 9 C 18 7.898438 18.898438 7 20 7 Z M 35 15 L 35 22 C 35 24.199219 33.199219 26 31 26 L 19 26 C 17.300781 26 16 27.300781 16 29 L 16 40.90625 C 16 44.40625 19.300781 48 25.5 48 C 34.199219 48 36 43.507813 36 40.90625 L 36 36 L 26 36 L 26 35 L 40.90625 35 C 44.207031 35 48 32.398438 48 25 C 48 17.601563 44.207031 15 40.90625 15 Z M 30 39 C 31.101563 39 32 39.898438 32 41 C 32 42.101563 31.101563 43 30 43 C 28.898438 43 28 42.101563 28 41 C 28 39.898438 28.898438 39 30 39 Z"
        fill={color}
      />
    </svg>
  );
}

export function IconRStudioFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 32 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M 16 5 C 8.268 5 2 9.253 2 14.5 C 2 19.285043 7.2177912 23.232664 14 23.892578 L 14 26 L 18 26 L 18 23.892578 C 19.32391 23.763761 20.586459 23.512193 21.763672 23.150391 L 23.330078 26 L 28 26 L 25.300781 21.585938 C 28.178143 19.846052 30 17.321182 30 14.5 C 30 9.253 23.732 5 16 5 z M 17.5 8 C 23.299 8 28 11.134 28 15 C 28 17.130126 26.568065 19.034482 24.316406 20.318359 C 24.089282 20.130562 23.839097 19.975923 23.566406 19.859375 C 25.534017 19.378452 27 17.615626 27 15.5 C 27 13.015 24.985 11 22.5 11 L 14 11 L 14 21.59375 C 9.9241171 20.631974 7 18.046756 7 15 C 7 11.134 11.701 8 17.5 8 z M 18 14 L 21.5 14 C 22.328 14 23 14.672 23 15.5 C 23 16.328 22.328 17 21.5 17 L 18 17 L 18 14 z M 18 20 L 19.128906 20 C 19.686906 20 20.198797 20.303969 20.466797 20.792969 L 20.917969 21.613281 C 19.996409 21.82496 19.017517 21.950414 18 21.982422 L 18 20 z"
        fill={color}
      />
    </svg>
  );
}

export function IconJavaFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 50 50`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M 28.1875 0 C 30.9375 6.363281 18.328125 10.292969 17.15625 15.59375 C 16.082031 20.464844 24.648438 26.125 24.65625 26.125 C 23.355469 24.109375 22.398438 22.449219 21.09375 19.3125 C 18.886719 14.007813 34.535156 9.207031 28.1875 0 Z M 36.5625 8.8125 C 36.5625 8.8125 25.5 9.523438 24.9375 16.59375 C 24.6875 19.742188 27.847656 21.398438 27.9375 23.6875 C 28.011719 25.558594 26.0625 27.125 26.0625 27.125 C 26.0625 27.125 29.609375 26.449219 30.71875 23.59375 C 31.949219 20.425781 28.320313 18.285156 28.6875 15.75 C 29.039063 13.324219 36.5625 8.8125 36.5625 8.8125 Z M 19.1875 25.15625 C 19.1875 25.15625 9.0625 25.011719 9.0625 27.875 C 9.0625 30.867188 22.316406 31.089844 31.78125 29.25 C 31.78125 29.25 34.296875 27.519531 34.96875 26.875 C 28.765625 28.140625 14.625 28.28125 14.625 27.1875 C 14.625 26.179688 19.1875 25.15625 19.1875 25.15625 Z M 38.65625 25.15625 C 37.664063 25.234375 36.59375 25.617188 35.625 26.3125 C 37.90625 25.820313 39.84375 27.234375 39.84375 28.84375 C 39.84375 32.46875 34.59375 35.875 34.59375 35.875 C 34.59375 35.875 42.71875 34.953125 42.71875 29 C 42.71875 26.296875 40.839844 24.984375 38.65625 25.15625 Z M 16.75 30.71875 C 15.195313 30.71875 12.875 31.9375 12.875 33.09375 C 12.875 35.417969 24.5625 37.207031 33.21875 33.8125 L 30.21875 31.96875 C 24.351563 33.847656 13.546875 33.234375 16.75 30.71875 Z M 18.1875 35.9375 C 16.058594 35.9375 14.65625 37.222656 14.65625 38.1875 C 14.65625 41.171875 27.371094 41.472656 32.40625 38.4375 L 29.21875 36.40625 C 25.457031 37.996094 16.015625 38.238281 18.1875 35.9375 Z M 11.09375 38.625 C 7.625 38.554688 5.375 40.113281 5.375 41.40625 C 5.375 48.28125 40.875 47.964844 40.875 40.9375 C 40.875 39.769531 39.527344 39.203125 39.03125 38.9375 C 41.933594 45.65625 9.96875 45.121094 9.96875 41.15625 C 9.96875 40.253906 12.320313 39.390625 14.5 39.8125 L 12.65625 38.75 C 12.113281 38.667969 11.589844 38.636719 11.09375 38.625 Z M 44.625 43.25 C 39.226563 48.367188 25.546875 50.222656 11.78125 47.0625 C 25.542969 52.695313 44.558594 49.535156 44.625 43.25 Z"
        fill={color}
      />
    </svg>
  );
}

export function IconTypescriptFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 50 50`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"
        fill={color}
      />
    </svg>
  );
}

export function IconJavascriptFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 50 50`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"
        fill={color}
      />
    </svg>
  );
}

export function IconCPPFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 50 50`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M 43.910156 12.003906 L 27.070313 2.539063 C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.929688 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.070313 47.460938 L 43.910156 37.996094 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 Z M 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 C 28.78125 13 32.273438 14.753906 34.542969 17.742188 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.257813 C 32.273438 35.246094 28.78125 37 25 37 Z M 37 26 L 35 26 L 35 28 L 33 28 L 33 26 L 31 26 L 31 24 L 33 24 L 33 22 L 35 22 L 35 24 L 37 24 Z M 44 26 L 42 26 L 42 28 L 40 28 L 40 26 L 38 26 L 38 24 L 40 24 L 40 22 L 42 22 L 42 24 L 44 24 Z"
        fill={color}
      />
    </svg>
  );
}

export function IconGitFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 32 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M30.428 14.663l-13.095-13.094c-0.35-0.349-0.833-0.565-1.367-0.565s-1.017 0.216-1.367 0.565l0-0-2.713 2.718 3.449 3.449c0.22-0.077 0.473-0.121 0.737-0.121 1.269 0 2.297 1.028 2.297 2.297 0 0.269-0.046 0.526-0.131 0.766l0.005-0.016 3.322 3.324c0.222-0.079 0.479-0.125 0.746-0.125 1.268 0 2.296 1.028 2.296 2.296s-1.028 2.296-2.296 2.296c-1.268 0-2.296-1.028-2.296-2.296 0-0.313 0.063-0.611 0.176-0.883l-0.006 0.015-3.11-3.094v8.154c0.764 0.385 1.279 1.163 1.279 2.061 0 1.27-1.030 2.3-2.3 2.3s-2.3-1.030-2.3-2.3c0-0.634 0.256-1.207 0.671-1.623l-0 0c0.211-0.211 0.462-0.382 0.741-0.502l0.015-0.006v-8.234c-0.842-0.354-1.422-1.173-1.422-2.126 0-0.32 0.065-0.624 0.183-0.901l-0.006 0.015-3.389-3.405-8.98 8.974c-0.348 0.351-0.562 0.834-0.562 1.368s0.215 1.017 0.563 1.368l13.096 13.092c0.349 0.35 0.832 0.566 1.366 0.566s1.016-0.216 1.366-0.566l13.034-13.034c0.35-0.349 0.567-0.833 0.567-1.366s-0.217-1.017-0.567-1.366l-0-0z"
        fill={color}
      />
    </svg>
  );
}

export function IconTailwindOutline({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 15 15`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M7.50006 2.5C6.47409 2.5 5.59203 2.77691 4.89966 3.37037C4.21227 3.95956 3.76259 4.81729 3.51314 5.88638C3.45869 6.1197 3.57742 6.35885 3.79619 6.45654C4.01496 6.55423 4.27228 6.483 4.40967 6.28672C4.7263 5.8344 5.04244 5.56261 5.3462 5.42313C5.64038 5.28805 5.95748 5.26068 6.32069 5.35797C6.68723 5.45615 6.97097 5.74369 7.41643 6.22816L7.43082 6.24382C7.76661 6.60905 8.17623 7.0546 8.73649 7.40028C9.31785 7.75898 10.0413 7.99999 11.0001 7.99999C12.026 7.99999 12.9081 7.72307 13.6005 7.12962C14.2878 6.54043 14.7375 5.6827 14.987 4.61361C15.0414 4.38029 14.9227 4.14114 14.7039 4.04345C14.4852 3.94576 14.2278 4.01698 14.0904 4.21326C13.7738 4.66559 13.4577 4.93737 13.1539 5.07686C12.8597 5.21194 12.5426 5.23931 12.1794 5.14202C11.8129 5.04384 11.5291 4.7563 11.0837 4.27182L11.0693 4.25616C10.7335 3.89093 10.3239 3.44538 9.76362 3.09971C9.18227 2.74101 8.45883 2.5 7.50006 2.5Z"
        fill={color}
      />
      <path
        d="M4.00006 6.99999C2.97409 6.99999 2.09203 7.2769 1.39966 7.87036C0.712271 8.45955 0.262592 9.31727 0.0131365 10.3864C-0.0413057 10.6197 0.0774162 10.8588 0.296186 10.9565C0.514956 11.0542 0.772276 10.983 0.909673 10.7867C1.2263 10.3344 1.54244 10.0626 1.8462 9.92312C2.14038 9.78804 2.45747 9.76067 2.82069 9.85796C3.18723 9.95614 3.47097 10.2437 3.91643 10.7282L3.93082 10.7438C4.2666 11.109 4.67624 11.5546 5.23649 11.9003C5.81785 12.259 6.54128 12.5 7.50006 12.5C8.52602 12.5 9.40808 12.2231 10.1005 11.6296C10.7878 11.0404 11.2375 10.1827 11.487 9.1136C11.5414 8.88027 11.4227 8.64113 11.2039 8.54343C10.9852 8.44574 10.7278 8.51697 10.5904 8.71325C10.2738 9.16558 9.95768 9.43736 9.65391 9.57684C9.35974 9.71192 9.04264 9.7393 8.67942 9.64201C8.31289 9.54383 8.02915 9.25628 7.58369 8.77181L7.56929 8.75615C7.23351 8.39092 6.82388 7.94537 6.26362 7.59969C5.68227 7.241 4.95883 6.99999 4.00006 6.99999Z"
        fill={color}
      />
    </svg>
  );
}

export function IconNextJSFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 15 15`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule={"evenodd"}
        d="M0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 10.087 13.6902 12.3681 11.6975 13.7163L4.90687 4.20942C4.78053 4.03255 4.5544 3.95756 4.34741 4.02389C4.14042 4.09022 4 4.28268 4 4.50004V12H5V6.06027L10.8299 14.2221C9.82661 14.7201 8.696 15 7.5 15C3.35786 15 0 11.6421 0 7.5ZM10 10V4H11V10H10Z"
        fill={color}
      />
    </svg>
  );
}

export function IconReactOutline({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <rect width="24" height="24" fill="none" />
      <path
        d="M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z"
        fill={color}
      />
    </svg>
  );
}

export function IconTableauOutline({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 24 24`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
      role="img"
    >
      <path
        d="M11.654.174V2.377H9.682v.58h1.972V5.16h.696V2.957h1.97v-.58h-1.97V.174h-.348zm6.03 2.262l-.002 1.623v1.623h-2.957v.927h2.957v3.188H18.725l.011-1.582.02-1.576 1.465-.02 1.46-.01v-.927H18.728V2.436h-.522zm-12.407.06V5.686H2.291v.925H5.277V9.801h.985V6.61h3.013v-.925H6.262V2.496H5.77zm6.086 5.27v3.593H8.06v1.188h3.304v3.596h1.28v-3.596H15.953v-1.188H12.643V7.766h-.637zm9.721 1.55v2.221h-2.012v.811h2.012v2.261h.887v-2.261H24v-.811h-2.029V9.317h-.422zm-19.111.131V11.621H0v.621H1.973v2.194H2.64v-2.194h2v-.62H2.609V9.446h-.318zm15.709 4.516v3.254h-3.016v.927h3.016v3.217h1.072v-3.216H21.74v-.928H18.754v-3.254h-.533zm-12.463.008v3.246H2.262v.928h2.957v3.189H6.32v-3.189h2.955v-.928H6.32V13.97h-.55zm6.316 4.578l.002 1.103v1.1H9.566v.812h1.971v2.262h.928l.012-1.119.017-1.143H14.463v-.812h-2V18.549h-.465z"
        fill={color}
      />
    </svg>
  );
}

export function IconPandasOutline({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 32 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M11.849 2.813h3.269v6.787h-3.268zM11.849 16.755h3.269v6.789h-3.268zM11.849 11.582h3.269v3.203h-3.268zM6.598 8.393h3.268v22.563h-3.269zM16.992 22.356h3.269v6.787h-3.269zM16.992 8.401h3.269v6.787h-3.269zM16.992 17.171h3.269v3.203h-3.269zM22.134 1.045h3.269v22.563h-3.269z"
        fill={color}
      />
    </svg>
  );
}

export function IconKerasFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 32 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M32 0h-32v32h32zM11.266 6.88l0.266 0.224v8.323l8.615-8.599h2.615l0.266 0.531-6.854 6.802 7.297 10.583-0.271 0.401h-2.583l-6.203-9.172-2.88 2.771v6.135l-0.25 0.266h-1.948l-0.266-0.266v-17.776l0.224-0.224z"
        fill={color}
      />
    </svg>
  );
}

export function IconPytorchOutline({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 32 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M20.465 5.877c0-0.379 0.308-0.686 0.687-0.686s0.687 0.307 0.687 0.687-0.307 0.687-0.687 0.687c-0.379 0-0.686-0.307-0.687-0.686v-0zM16.006 1.004l-8.814 8.814c-2.257 2.245-3.654 5.352-3.654 8.786 0 6.843 5.547 12.39 12.39 12.39 3.434 0 6.541-1.397 8.785-3.653l0.001-0.001c2.312-2.229 3.748-5.354 3.748-8.814 0-3.408-1.393-6.49-3.641-8.709l-0.001-0.001-2.179 2.178c1.685 1.685 2.727 4.013 2.727 6.584 0 5.143-4.169 9.312-9.312 9.312s-9.312-4.169-9.312-9.312c0-2.571 1.042-4.899 2.727-6.584l5.807-5.806 0.727-0.831z"
        fill={color}
      />
    </svg>
  );
}

export function IconTensorflowFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 32 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M26.135 16l0.13 6.266-4.13-2.401v8.938l-5.469 3.198v-32l13.599 7.865v7.068l-8.13-4.797v3.599zM1.734 7.865l13.599-7.865v32l-5.469-3.198v-18.667l-8.13 4.797z"
        fill={color}
      />
    </svg>
  );
}

export function IconMachineLearningFilled({
  size = 24,
  color = "black",
  onClick,
  className,
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
        d="M18,18V30H30V18Zm9,9H21V21h6Zm-9-9V30H30V18Zm9,9H21V21h6Zm-9-9V30H30V18Zm9,9H21V21h6Zm-9-9V30H30V18Zm9,9H21V21h6Zm18.6-8.3L41,14.9V7.5a1,1,0,0,0-.6-.9L30.5,2.1h-.4l-.6.2L24,5.9,18.5,2.2,17.9,2h-.4L7.6,6.6a1,1,0,0,0-.6.9v7.4L2.4,18.7a.8.8,0,0,0-.4.8v9a.9.9,0,0,0,.4.8L7,33.1v7.4a1,1,0,0,0,.6.9l9.9,4.5h.4l.6-.2L24,42.1l5.5,3.7.6.2h.4l9.9-4.5a1,1,0,0,0,.6-.9V33.1l4.6-3.8a.9.9,0,0,0,.4-.8v-9A.8.8,0,0,0,45.6,18.7ZM30.5,7A1.5,1.5,0,1,1,29,8.5,1.5,1.5,0,0,1,30.5,7Zm-13,0A1.5,1.5,0,1,1,16,8.5,1.5,1.5,0,0,1,17.5,7Zm0,34A1.5,1.5,0,1,1,19,39.5,1.5,1.5,0,0,1,17.5,41Zm13,0A1.5,1.5,0,1,1,32,39.5,1.5,1.5,0,0,1,30.5,41Zm4-16a1.5,1.5,0,0,1,0,3H33v3a2,2,0,0,1-2,2H28v1.5a1.5,1.5,0,0,1-3,0V33H23v1.5a1.5,1.5,0,0,1-3,0V33H17a2,2,0,0,1-2-2V28H13.5a1.5,1.5,0,0,1,0-3H15V23H13.5a1.5,1.5,0,0,1,0-3H15V17a2,2,0,0,1,2-2h3V13.5a1.5,1.5,0,0,1,3,0V15h2V13.5a1.5,1.5,0,0,1,3,0V15h3a2,2,0,0,1,2,2v3h1.5a1.5,1.5,0,0,1,0,3H33v2ZM18,30H30V18H18Zm3-9h6v6H21Zm-3-3V30H30V18Zm9,9H21V21h6Zm-9-9V30H30V18Zm9,9H21V21h6Z"
        fill={color}
      />
    </svg>
  );
}

export function IconWebsiteFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 32 32`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M27,4H5C3.3,4,2,5.3,2,7v18c0,1.7,1.3,3,3,3h2.9c-0.5,0-0.9-0.3-1-0.8c-0.2-0.7-0.3-1.5-0.3-2.2c0-0.7,0.1-1.4,0.3-2.2
	C7,22.3,7.5,22,8,22.1c0.6,0.1,1.2-0.2,1.6-0.8c0.3-0.5,0.3-1.2-0.1-1.7c-0.3-0.4-0.3-1,0.1-1.3c1.1-1,2.4-1.8,3.8-2.2
	c0.5-0.1,1,0.1,1.2,0.6c0.2,0.6,0.8,1,1.4,1s1.2-0.4,1.4-1c0.2-0.5,0.7-0.7,1.2-0.6c1.4,0.4,2.7,1.2,3.8,2.2
	c0.4,0.4,0.4,0.9,0.1,1.3c-0.4,0.5-0.4,1.2-0.1,1.7c0.3,0.5,0.9,0.9,1.6,0.8c0.5-0.1,1,0.3,1.1,0.8c0.2,0.7,0.3,1.5,0.3,2.2
	c0,0.7-0.1,1.5-0.3,2.2c-0.1,0.4-0.5,0.8-1,0.8H27c1.7,0,3-1.3,3-3V7C30,5.3,28.7,4,27,4z M7.9,8.4C7.9,8.5,7.8,8.6,7.7,8.7
	C7.5,8.9,7.3,9,7,9S6.5,8.9,6.3,8.7C6.1,8.5,6,8.3,6,8c0-0.3,0.1-0.5,0.3-0.7c0,0,0.1-0.1,0.1-0.1c0.1,0,0.1-0.1,0.2-0.1
	C6.7,7,6.7,7,6.8,7c0.1,0,0.3,0,0.4,0c0.1,0,0.1,0,0.2,0.1c0.1,0,0.1,0.1,0.2,0.1c0,0,0.1,0.1,0.1,0.1c0.1,0.1,0.2,0.2,0.2,0.3
	C8,7.7,8,7.9,8,8C8,8.1,8,8.3,7.9,8.4z M10.7,8.7C10.5,8.9,10.3,9,10,9C9.7,9,9.5,8.9,9.3,8.7C9.1,8.5,9,8.3,9,8
	c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.2-0.2,0.3-0.2C10,6.9,10.4,7,10.7,7.3c0.1,0.1,0.2,0.2,0.2,0.3
	C11,7.7,11,7.9,11,8C11,8.3,10.9,8.5,10.7,8.7z M13.9,8.4c-0.1,0.1-0.1,0.2-0.2,0.3C13.5,8.9,13.3,9,13,9c-0.1,0-0.3,0-0.4-0.1
	c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.3C12,8.3,12,8.1,12,8c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.3
	c0.4-0.4,1-0.4,1.4,0c0.1,0.1,0.2,0.2,0.2,0.3C14,7.7,14,7.9,14,8C14,8.1,14,8.3,13.9,8.4z"
        fill={color}
      />
    </svg>
  );
}

export function IconWordpressFilled({
  size = 24,
  color = "black",
  onClick,
  className,
}: IFluentProps) {
  return (
    <svg
      width={size + `px`}
      height={size + `px`}
      viewBox={`0 0 20 20`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
      strokeWidth={"1"}
      fillRule="evenodd"
    >
      <g
        id="Dribbble-Light-Preview"
        transform="translate(-260.000000, -7559.000000)"
        fill="#000000"
      >
        <g id="icons" transform="translate(56.000000, 160.000000)">
          <path
            d="M222.775,7404.202 C222.818,7404.521 222.842,7404.862 222.842,7405.23 C222.842,7406.988 222.679,7407.087 219.027,7417.644 C222,7415.91 224,7412.689 224,7409 C224,7407.261 223.556,7405.626 222.775,7404.202 L222.775,7404.202 Z M214.176,7409.875 L211.175,7418.593 C213.2,7419.189 215.346,7419.128 217.321,7418.434 C217.294,7418.391 217.27,7418.345 217.25,7418.296 L214.176,7409.875 Z M220.751,7408.495 C220.751,7407.259 220.307,7406.403 219.926,7405.737 C219.42,7404.913 218.944,7404.216 218.944,7403.392 C218.944,7402.473 219.642,7401.617 220.624,7401.617 C220.668,7401.617 220.71,7401.623 220.753,7401.625 C218.974,7399.995 216.604,7399 214,7399 C210.507,7399 207.433,7400.792 205.645,7403.507 C206.282,7403.527 207.137,7403.535 208.954,7403.393 C209.493,7403.361 209.556,7404.153 209.018,7404.216 C209.018,7404.216 208.476,7404.28 207.873,7404.312 L211.515,7415.144 L213.703,7408.58 L212.145,7404.311 C211.607,7404.28 211.097,7404.216 211.097,7404.216 C210.558,7404.184 210.621,7403.36 211.16,7403.392 C213.227,7403.551 214.285,7403.563 216.459,7403.392 C216.998,7403.36 217.062,7404.152 216.523,7404.216 C216.523,7404.216 215.98,7404.28 215.378,7404.311 L218.992,7415.061 C220.419,7410.293 220.751,7409.495 220.751,7408.495 L220.751,7408.495 Z M204,7409 C204,7412.958 206.3,7416.379 209.636,7418 L204.866,7404.93 C204.311,7406.174 204,7407.55 204,7409 L204,7409 Z"
            id="wordpress-[#139]"
            fill={color}
          />
        </g>
      </g>
    </svg>
  );
}

export function IconLibraryBookFilled({
  size = 24,
  color = "black",
  onClick,
  className,
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
        d="M442.87-401.2h81.2q17.47 0 29.45-11.97 11.98-11.98 11.98-29.46t-11.98-29.46q-11.98-11.98-29.45-11.98h-81.2q-17.48 0-29.46 11.98t-11.98 29.46q0 17.48 11.98 29.46 11.98 11.97 29.46 11.97Zm0-122.87h245.26q17.48 0 29.46-11.97 11.98-11.98 11.98-29.46t-11.98-29.46q-11.98-11.97-29.46-11.97H442.87q-17.48 0-29.46 11.97-11.98 11.98-11.98 29.46t11.98 29.46q11.98 11.97 29.46 11.97Zm0-122.86h245.26q17.48 0 29.46-11.98t11.98-29.46q0-17.48-11.98-29.46-11.98-11.97-29.46-11.97H442.87q-17.48 0-29.46 11.97-11.98 11.98-11.98 29.46t11.98 29.46q11.98 11.98 29.46 11.98Zm-114.5 409.56q-37.78 0-64.39-26.61t-26.61-64.39v-474.26q0-37.78 26.61-64.39t64.39-26.61h474.26q37.78 0 64.39 26.61t26.61 64.39v474.26q0 37.78-26.61 64.39t-64.39 26.61H328.37Zm-171 171q-37.78 0-64.39-26.61t-26.61-64.39v-519.76q0-19.15 13.17-32.33 13.18-13.17 32.33-13.17t32.33 13.17q13.17 13.18 13.17 32.33v519.76h519.76q19.15 0 32.33 13.17 13.17 13.18 13.17 32.33t-13.17 32.33q-13.18 13.17-32.33 13.17H157.37Z"
        fill={color}
      />
    </svg>
  );
}

export function IconBackArrowOutlineRounded({
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
      d='m343.28-422.65 176.35 176.58q16.96 16.96 17.08 40.52.12 23.55-17.08 40.51-16.96 16.95-40.51 16.95-23.55 0-40.51-17.19L164.28-439.37q-8.24-8.48-12.21-18.31-3.98-9.84-3.98-21.56 0-11.48 3.98-21.31 3.97-9.84 12.21-18.32l276.33-276.09q16.96-17.19 40.39-17.19t40.39 17.19q17.2 16.96 17.2 40.51 0 23.56-17.2 40.52l-178.11 178.1h435.48q23.67 0 40.13 16.58t16.46 40.01q0 23.67-16.46 40.13t-40.13 16.46H343.28Z'
      fill={color}
      />
    </svg>
  );
}

export function IconRightArrowTailedOutlinedRounded({
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
      d='M602.69-418.09H181.57q-25.96 0-43.72-17.76-17.76-17.76-17.76-43.72 0-25.39 17.76-43.43t43.72-18.04h421.12L435.35-708.39q-18.26-18.26-18.55-43.94-.28-25.67 18.55-43.93 18.26-18.26 43.93-18.26 25.68 0 43.94 18.82L796.7-522.78q8.56 9.13 13.19 20.11 4.63 10.97 4.63 23.1 0 12.7-4.63 23.68t-13.19 20.11L524.09-163.74q-18.26 18.83-43.66 18.83-25.39 0-43.65-18.83-18.82-18.26-18.82-43.93 0-25.68 18.82-43.94l165.91-166.48Z'
      fill={color}
      />
    </svg>
  );
}

export function IconCodeOutlinedRounded({
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
      d='M311.49-219.71 49.54-481.77l264.29-264.29 68.85 68.96L188.14-482l193.11 192.54-69.76 69.75Zm335.68 1.9-68.71-69.29 195.21-195.2-193.1-193.11 67.94-67.75 262.62 261.39-263.96 263.96Z'
      fill={color}
      />
    </svg>
  );
}

export function IconListViewFilledRounded({
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
      d='M897.83-486.61ZM117.22-658.43q-24.06 0-39.55-16.06-15.5-16.05-15.5-38.99v-49.17q0-22.94 15.5-38.71 15.49-15.77 39.55-15.77h75.61q22.94 0 38.71 15.77 15.76 15.77 15.76 38.71v49.17q0 22.94-15.76 38.99-15.77 16.06-38.71 16.06h-75.61Zm315.91 0q-22.52 0-38-16.06-15.48-16.05-15.48-38.99v-49.17q0-22.94 15.48-38.71t38-15.77h409.65q23.51 0 39.28 15.77t15.77 38.71v49.17q0 22.94-15.77 38.99-15.77 16.06-39.28 16.06H433.13Zm0 251.39q-22.52 0-38-15.77t-15.48-39.28v-49.04q0-22.94 15.48-38.99t38-16.05h409.65q23.51 0 39.28 16.05t15.77 38.99v49.04q0 23.51-15.77 39.28t-39.28 15.77H433.13Zm0 251.52q-22.52 0-38-15.77t-15.48-39.28v-49.17q0-22.94 15.48-38.71t38-15.77h409.65q23.51 0 39.28 15.77t15.77 38.71v49.17q0 23.51-15.77 39.28t-39.28 15.77H433.13Zm-315.91 0q-24.06 0-39.55-15.77-15.5-15.77-15.5-39.28v-49.17q0-22.94 15.5-38.71 15.49-15.77 39.55-15.77h75.61q22.94 0 38.71 15.77 15.76 15.77 15.76 38.71v49.17q0 23.51-15.76 39.28-15.77 15.77-38.71 15.77h-75.61Zm0-251.52q-24.06 0-39.55-15.77-15.5-15.77-15.5-39.28v-49.04q0-22.94 15.5-38.99 15.49-16.05 39.55-16.05h75.61q22.94 0 38.71 16.05 15.76 16.05 15.76 38.99v49.04q0 23.51-15.76 39.28-15.77 15.77-38.71 15.77h-75.61Z'
      fill={color}
      />
    </svg>
  );
}